const index = {};
index.menu = document.getElementById("sideMenu");
index.navItems = document.querySelectorAll(".navItem");
index.navItemNames = document.querySelectorAll(".navItemName");
index.home = document.getElementById("home");
index.about = document.getElementById("about");
index.skills = document.getElementById("skills");
index.works = document.getElementById("works");
index.contact = document.getElementById("contact");
index.menuButton = document.getElementById("menuButton");
index.scrollDown = document.getElementById("scrollDown");
index.isOpen = false;

// Scroll function
index.scroll = function (target) {
  window.scrollTo({
    top: document.querySelector(target).offsetTop,
    behavior: "smooth",
  });
};

// Menu button function
index.showHideMenu = function () {
  index.menu.classList.toggle("sideMenuHide");
  index.menu.classList.toggle("sideMenuShow");
  index.isOpen = !index.isOpen;
};

// Mobile class changes on initial load
if (window.innerWidth <= 990) {
  index.menu.classList.add("sideMenuHide");
  index.menu.classList.remove("sideMenuShow");
  index.scrollDown.style.display = "none";
}

index.eventListeners = function () {
  // when window resizes between large and small displays
  window.addEventListener("resize", function () {
    if (window.innerWidth > 990) {
      index.menu.classList.remove("sideMenuHide");
      index.menu.classList.add("sideMenuShow");
      index.scrollDown.style.display = "block";
      index.isOpen = false;
    } else {
      index.menu.classList.remove("sideMenuShow");
      index.menu.classList.add("sideMenuHide");
      index.isOpen = false;
      index.scrollDown.style.display = "none";
    }
  });

  // Nav menu click events for scroll function
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      index.scroll(this.getAttribute("href"));
    });
  });

  // Menu button click event
  index.menuButton.addEventListener("click", index.showHideMenu);

  // Hide menu when clicking a link
  index.navItems.forEach((navItem) => {
    navItem.addEventListener("click", function () {
      if (index.isOpen) {
        index.showHideMenu();
      }
    });
  });

  // Menu button ENTER key event
  index.menuButton.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      index.menuButton.click();
    }
  });
};

// init method
index.init = function () {
  index.eventListeners();
};

// Document Ready
document.addEventListener("DOMContentLoaded", function () {
  index.init();
});
