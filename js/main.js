!function () {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  let ticking = false;
  function onScroll() {
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
    ticking = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();
}();

!function () {
  const btn = document.getElementById("copyBtn");
  const val = document.getElementById("codeValue");
  if (!btn || !val) return;
  btn.addEventListener("click", () => {
    const code = val.textContent?.trim() ?? "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = "Copied ✓";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "Copy code";
          btn.classList.remove("copied");
        }, 1800);
      });
    }
  });
}();
