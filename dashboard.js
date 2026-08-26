(function () {
  "use strict";

  var storageKey = "xi-ftag-gauntlet-visual-vote-v1";
  var form = document.getElementById("visual-vote-form");
  var output = document.getElementById("vote-output");
  var resetButton = document.querySelector("[data-reset-vote]");
  var clock = document.querySelector("[data-local-clock]");
  var scrollStorageKey = "xi-ftag-gauntlet-scroll-v1";
  var initialLastModified = new Date(document.lastModified).getTime();

  function restoreScrollPosition() {
    try {
      var saved = window.sessionStorage.getItem(scrollStorageKey);
      if (saved !== null) {
        window.sessionStorage.removeItem(scrollStorageKey);
        window.scrollTo(0, Number(saved) || 0);
      }
    } catch (error) {
      // Session storage may be unavailable for a direct file view.
    }
  }

  function checkForDashboardUpdate() {
    if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
      return;
    }

    window.fetch(window.location.pathname + "?status-check=" + Date.now(), {
      method: "HEAD",
      cache: "no-store"
    }).then(function (response) {
      var currentLastModified = Date.parse(response.headers.get("last-modified") || "");
      if (!Number.isFinite(currentLastModified) || currentLastModified <= initialLastModified) {
        return;
      }
      try {
        window.sessionStorage.setItem(scrollStorageKey, String(window.scrollY));
      } catch (error) {
        // Reload still works when session storage is unavailable.
      }
      window.location.reload();
    }).catch(function () {
      // Keep the visible dashboard usable if its local server is paused.
    });
  }

  function updateClock() {
    if (!clock) {
      return;
    }

    clock.textContent = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    }).format(new Date());
  }

  function readVote() {
    try {
      var saved = window.localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      return null;
    }
  }

  function writeVote(vote) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(vote));
      return true;
    } catch (error) {
      return false;
    }
  }

  function clearVote() {
    try {
      window.localStorage.removeItem(storageKey);
    } catch (error) {
      // The visible reset still works when file-origin storage is unavailable.
    }
  }

  function renderVote(vote, stored) {
    if (!output) {
      return;
    }

    if (!vote) {
      output.textContent = "No local vote recorded.";
      output.removeAttribute("data-state");
      return;
    }

    var note = vote.note ? " / " + vote.note : "";
    var storageNote = stored === false ? " / storage unavailable for this file origin" : "";
    output.textContent = vote.pair + " / " + vote.choice + " / confidence " + vote.confidence + "/5" + note + storageNote;
    output.dataset.state = stored === false ? "error" : "saved";
  }

  function hydrateForm(vote) {
    if (!form || !vote) {
      return;
    }

    form.elements.pair.value = vote.pair;
    form.elements.confidence.value = vote.confidence;
    form.elements.note.value = vote.note || "";

    var choice = form.querySelector('input[name="choice"][value="' + vote.choice + '"]');
    if (choice) {
      choice.checked = true;
    }
  }

  updateClock();
  restoreScrollPosition();
  window.setInterval(updateClock, 60000);
  window.setInterval(checkForDashboardUpdate, 15000);

  if (!form || !output || !resetButton) {
    return;
  }

  var savedVote = readVote();
  hydrateForm(savedVote);
  renderVote(savedVote, true);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    var data = new FormData(form);
    var vote = {
      pair: String(data.get("pair") || "").trim(),
      choice: String(data.get("choice") || ""),
      confidence: String(data.get("confidence") || "3"),
      note: String(data.get("note") || "").trim(),
      recordedAt: new Date().toISOString()
    };

    renderVote(vote, writeVote(vote));
  });

  resetButton.addEventListener("click", function () {
    clearVote();
    form.reset();
    renderVote(null);
  });
})();
