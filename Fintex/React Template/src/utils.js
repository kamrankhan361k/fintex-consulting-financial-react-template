export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header-navigation");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("sticky");
        } else {
          stick.classList.remove("sticky");
        }
      }
    }
  });
};
