(function () {
  "use strict";
  var d = document, root = d.documentElement;
  root.classList.add("js");

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  d.addEventListener("click", function (e) {
    var a = e.target.closest("[data-set-lang]");
    if (a) store("hm-lang", a.getAttribute("data-set-lang"));
    var c = e.target.closest("[data-copy]");
    if (c) copyBib(c);
  });

  function copyBib(btn) {
    var pre = btn.parentNode.querySelector("pre"), label = btn.querySelector("span"), orig = label.textContent;
    function done() { label.textContent = btn.getAttribute("data-done"); setTimeout(function () { label.textContent = orig; }, 1800); }
    function fallback() {
      var r = d.createRange(); r.selectNodeContents(pre);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      try { if (d.execCommand("copy")) done(); } catch (e) {}
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(pre.textContent).then(done, fallback);
    else fallback();
  }

  /* Publications: filters, search, research map */
  function norm(s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[\u2010-\u2015-]/g, " "); }
  function initPubs(box) {
    var st = { q: "", kind: "all", topic: null };
    var pubs = [].slice.call(box.querySelectorAll(".pub")), groups = [].slice.call(box.querySelectorAll(".year-group"));
    var status = box.querySelector("[data-status]"), clear = box.querySelector("[data-clear]"), empty = box.querySelector("[data-empty]"), q = box.querySelector("[data-q]");
    var names = {};
    [].forEach.call(box.querySelectorAll(".chip-btn"), function (b) { names[b.getAttribute("data-topic")] = b.firstChild.textContent.trim(); });
    function apply() {
      var terms = norm(st.q).split(/\s+/).filter(Boolean), n = 0;
      pubs.forEach(function (p) {
        var ok = (st.kind === "all" || p.getAttribute("data-kind") === st.kind) &&
          (!st.topic || (" " + p.getAttribute("data-topics") + " ").indexOf(" " + st.topic + " ") >= 0) &&
          terms.every(function (t) { return p.getAttribute("data-search").indexOf(t) >= 0; });
        p.hidden = !ok; if (ok) n++;
      });
      groups.forEach(function (g) { g.hidden = !g.querySelector(".pub:not([hidden])"); });
      status.textContent = box.getAttribute("data-tpl-showing").replace("{n}", n).replace("{t}", box.getAttribute("data-total")) +
        (st.topic ? box.getAttribute("data-tpl-topic").replace("{x}", names[st.topic]) : "") + ".";
      clear.hidden = !(st.q || st.kind !== "all" || st.topic);
      empty.hidden = n > 0;
      [].forEach.call(box.querySelectorAll(".seg-btn"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-kind") === st.kind)); });
      [].forEach.call(box.querySelectorAll(".chip-btn, .node"), function (b) {
        var on = b.getAttribute("data-topic") === st.topic;
        b.setAttribute("aria-pressed", String(on));
        if (b.classList) b.classList.toggle("sel", on);
      });
    }
    box.addEventListener("click", function (e) {
      var s = e.target.closest(".seg-btn");
      if (s) { st.kind = s.getAttribute("data-kind"); apply(); return; }
      var t = e.target.closest(".chip-btn, .node");
      if (t) { var id = t.getAttribute("data-topic"); st.topic = st.topic === id ? null : id; apply(); return; }
      if (e.target.closest("[data-clear]")) { st = { q: "", kind: "all", topic: null }; q.value = ""; apply(); }
    });
    box.addEventListener("keydown", function (e) {
      var t = e.target.closest && e.target.closest(".node");
      if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); var id = t.getAttribute("data-topic"); st.topic = st.topic === id ? null : id; apply(); }
    });
    q.addEventListener("input", function () { st.q = q.value; apply(); });
    [].forEach.call(box.querySelectorAll(".node"), function (n) {
      var id = n.getAttribute("data-topic");
      function on(v) { [].forEach.call(box.querySelectorAll(".edge"), function (l) { l.classList.toggle("on", v && (l.getAttribute("data-a") === id || l.getAttribute("data-b") === id)); }); }
      n.addEventListener("mouseenter", function () { on(true); }); n.addEventListener("mouseleave", function () { on(false); });
      n.addEventListener("focus", function () { on(true); }); n.addEventListener("blur", function () { on(false); });
    });
    apply();
  }

  /* Contact form: validation before the normal POST to FormSubmit */
  function initForm(f) {
    var el = f.elements, result = f.querySelector("[data-result]");
    f.addEventListener("submit", function (e) {
      var bad = null;
      [].forEach.call(f.querySelectorAll("[data-err]"), function (x) {
        var v = x.type === "checkbox" ? "" : x.value.trim();
        var ok = x.type === "checkbox" ? x.checked
          : x.type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
          : x.name === "message" ? v.length >= 10 : v.length > 0;
        x.parentNode.querySelector(".err").textContent = ok ? "" : x.getAttribute("data-err");
        x.setAttribute("aria-invalid", ok ? "false" : "true");
        if (!ok && !bad) bad = x;
      });
      if (bad) { e.preventDefault(); bad.focus(); return; }
      if (el._honey.value) { e.preventDefault(); return; }
      var subject = f.getAttribute("data-prefix") + " " + el.topic.value + " – " + el.name.value.trim();
      el._subject.value = subject;
      // After sending, FormSubmit brings the visitor back to this page, which then confirms the sending.
      if (/^https?:$/.test(location.protocol)) el._next.value = location.href.split("#")[0] + "#sent";
      if (f.hasAttribute("data-preview")) {
        e.preventDefault();
        var body = el.message.value.trim() + "\n\n" + el.name.value.trim() + " <" + el.email.value.trim() + ">";
        var box = d.createElement("div"); box.className = "alert";
        var p = d.createElement("p"); p.textContent = result.getAttribute("data-msg");
        var acts = d.createElement("div"); acts.className = "acts";
        var m = d.createElement("a"); m.href = "mailto:" + f.getAttribute("data-to") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body); m.textContent = result.getAttribute("data-mail");
        var w = d.createElement("a"); w.href = "https://wa.me/" + f.getAttribute("data-wa") + "?text=" + encodeURIComponent(subject + "\n\n" + body); w.target = "_blank"; w.rel = "noopener"; w.textContent = result.getAttribute("data-walabel");
        acts.appendChild(m); acts.appendChild(w);
        var wrap = d.createElement("div"); wrap.appendChild(p); wrap.appendChild(acts);
        box.appendChild(d.createElement("span")); box.appendChild(wrap);
        result.innerHTML = ""; result.appendChild(box);
      }
    });
  }

  function centerNav(scope) {
    [].forEach.call((scope || d).querySelectorAll(".nav"), function (nav) {
      var a = nav.querySelector('[aria-current="page"]');
      if (a && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2;
    });
  }
  centerNav();
  [].forEach.call(d.querySelectorAll("[data-pubs]"), initPubs);
  [].forEach.call(d.querySelectorAll("[data-contact]"), initForm);
  if (location.hash === "#sent") {
    [].forEach.call(d.querySelectorAll("[data-contact] [data-result]"), function (r) {
      var box = d.createElement("div"); box.className = "alert ok"; box.setAttribute("role", "status");
      var p = d.createElement("p"); p.textContent = r.getAttribute("data-sent");
      box.appendChild(d.createElement("span")); box.appendChild(p);
      r.innerHTML = ""; r.appendChild(box);
      r.closest("form").scrollIntoView({ block: "center" });
    });
  }

  /* Single-file preview only: show one page at a time */
  if (d.body.hasAttribute("data-preview")) {
    var pages = [].slice.call(d.querySelectorAll(".page"));
    var show = function () {
      var parts = decodeURIComponent(location.hash.slice(1)).split("--"), key = parts[0];
      var pg = d.querySelector('.page[data-page="' + key + '"]');
      if (!pg) {
        var l = null; try { l = localStorage.getItem("hm-lang"); } catch (e) {}
        if (!l) l = (navigator.language || "").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
        key = (l === "fr" ? "fr" : "en") + "-home"; pg = d.querySelector('.page[data-page="' + key + '"]');
      }
      pages.forEach(function (p) { p.hidden = p !== pg; });
      centerNav(pg);
      root.lang = pg.getAttribute("data-lang"); d.title = pg.getAttribute("data-title");
      var target = parts[1] && d.getElementById(key + "-" + parts[1]);
      if (target) { target.scrollIntoView(); if (parts[1] === "main") target.focus(); } else window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", show);
    show();
  }
})();
