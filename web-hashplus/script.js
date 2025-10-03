document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const links = document.querySelectorAll(".nav-menu .nav-link");
  const header = document.querySelector(".site-header");

  // --- Menu ---
  if (hamburger && navMenu) {
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
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
      }
    });

    // Close if resizing to desktop
    const mq = window.matchMedia("(min-width: 769px)");
    const handleResize = () => {
      if (mq.matches) {
        closeMenu();
      }
    };
    mq.addEventListener ? mq.addEventListener("change", handleResize) : window.addEventListener("resize", handleResize);
  }

  // --- Active Nav Link ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  const activateLink = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 75) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  // --- Scroll to Top Button ---
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  if (scrollToTopBtn) {
    const handleScrollToTopButton = () => {
      if (window.scrollY > 400) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTopBtn.addEventListener("click", scrollToTop);
  }

  // --- Header Shadow on Scroll ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    if (sections.length > 0) {
      activateLink();
    }
    if (scrollToTopBtn) {
      if (window.scrollY > 400) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Set initial active link
  if (sections.length > 0) {
    activateLink();
  } else if (navLinks.length > 0) {
    const firstLink = navLinks[0];
    if (firstLink.getAttribute('href') === '#' || firstLink.getAttribute('href') === window.location.pathname) {
      firstLink.classList.add('active');
    }
  }
});
