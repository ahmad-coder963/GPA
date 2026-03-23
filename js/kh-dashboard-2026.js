/* =============================================
   KH Dashboard 2026 - Interactions
   File: js/kh-dashboard-2026.js
   ============================================= */

(function () {
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");
  const collapseBtn = document.getElementById("collapseSidebar");
  const mobileBtn = document.getElementById("mobileSidebar");

  function isMobile() {
    return window.matchMedia("(max-width: 1024px)").matches;
  }

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("is-open");
    if (scrim) scrim.classList.add("is-visible");
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("is-open");
    if (scrim) scrim.classList.remove("is-visible");
  }

  function toggleSidebar() {
    if (isMobile()) {
      sidebar.classList.contains("is-open") ? closeSidebar() : openSidebar();
      return;
    }

    body.classList.toggle("is-collapsed");
    localStorage.setItem("kh-sidebar-collapsed", body.classList.contains("is-collapsed"));
  }

  if (collapseBtn) collapseBtn.addEventListener("click", toggleSidebar);
  if (mobileBtn) mobileBtn.addEventListener("click", toggleSidebar);
  if (scrim) scrim.addEventListener("click", closeSidebar);

  const savedState = localStorage.getItem("kh-sidebar-collapsed");
  if (savedState === "true" && !isMobile()) {
    body.classList.add("is-collapsed");
  }

  // Dropdowns
  const dropdowns = document.querySelectorAll("[data-dropdown]");

  function closeDropdowns(except = null) {
    dropdowns.forEach((drop) => {
      if (drop !== except) {
        drop.classList.remove("open");
        const btn = drop.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  dropdowns.forEach((drop) => {
    const btn = drop.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = drop.classList.contains("open");
      closeDropdowns();
      drop.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", () => closeDropdowns());

  // Ripple effect
  const rippleTargets = document.querySelectorAll(".btn, .icon-btn, .chip");
  rippleTargets.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);

      ripple.classList.add("ripple");
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      const existingRipple = btn.querySelector(".ripple");
      if (existingRipple) existingRipple.remove();
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  // Scroll reveal
  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  // Chart bars
  document.querySelectorAll(".bar").forEach((bar) => {
    const value = bar.getAttribute("data-value") || "0";
    bar.style.setProperty("--value", value);
  });

  // Skeleton to real content
  const skeletonList = document.querySelector("[data-skeleton]");
  if (skeletonList) {
    setTimeout(() => {
      skeletonList.innerHTML = `
        <li class="task-item">
          <div class="task-meta">
            <span class="task-title">مراجعة الطلبات الجديدة</span>
            <span class="task-time">قبل 20 دقيقة</span>
          </div>
          <span class="tag">أولوية عالية</span>
        </li>
        <li class="task-item">
          <div class="task-meta">
            <span class="task-title">اعتماد تقرير المبيعات</span>
            <span class="task-time">اليوم 2:30م</span>
          </div>
          <span class="tag is-warning">متوسط</span>
        </li>
        <li class="task-item">
          <div class="task-meta">
            <span class="task-title">تحديث صلاحيات الفريق</span>
            <span class="task-time">غدًا</span>
          </div>
          <span class="tag is-danger">مهم</span>
        </li>
      `;
    }, 1200);
  }

  // Command bridge (optional integration)
  window.SendACommand = window.SendACommand || function (command) {
    if (!command) return;
    window.status = `;;KHCMD:${command}`;
    window.status = ";;KHEND;;";
  };

  document.querySelectorAll("[data-command]").forEach((el) => {
    el.addEventListener("click", () => {
      const command = el.getAttribute("data-command");
      if (command) window.SendACommand(command);
    });
  });

  // Page ready
  window.addEventListener("load", () => {
    body.classList.remove("is-loading");
    body.classList.add("is-ready");
  });
})();
