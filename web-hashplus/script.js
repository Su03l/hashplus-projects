document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const links = document.querySelectorAll(".nav-menu .nav-link");

  if (!hamburger || !navMenu) return;

  const setExpanded = (expanded) => {
    hamburger.setAttribute("aria-expanded", String(expanded));
  };

  const openMenu = () => {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
    setExpanded(true);
  };

  const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    setExpanded(false);
  };

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("active");
    hamburger.classList.toggle("active", isOpen);
    setExpanded(isOpen);
  };

  hamburger.addEventListener("click", toggleMenu);

  // Close when clicking a link
  links.forEach((a) => a.addEventListener("click", closeMenu));

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close if resizing to desktop
  const mq = window.matchMedia("(min-width: 769px)");
  const handleResize = () => {
    if (mq.matches) closeMenu();
  };
  mq.addEventListener ? mq.addEventListener("change", handleResize) : window.addEventListener("resize", handleResize);
});