// Navigation burger:
const navigation = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksLi = document.querySelectorAll(".nav-links li");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  let sticky = nav.offsetTop;

  burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    navLinks.classList.toggle("nav-active");

    navLinksLi.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
          0.3}s`;
      }
    });
  });

  window.addEventListener("scroll", () => {
    burger.classList.remove("active");
    navLinks.classList.remove("nav-active");
    navLinksLi.forEach(link => {
      link.style.animation = "";
    });

    if (window.pageYOffset > sticky) {
      header.style.paddingTop = "100px";
      nav.classList.add("sticky");
    } else {
      header.style.paddingTop = "0";
      nav.classList.remove("sticky");
    }
  });
};

// Date:
const currentDate = () => {
  const currentYear = new Date();
  const span = document.querySelector(".date");
  span.innerText = currentYear.getFullYear();
};

const app = () => {
  navigation();
  currentDate();
};

app();
