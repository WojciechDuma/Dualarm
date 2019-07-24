// Navigation burger:

const navigation = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksLi = document.querySelectorAll(".nav-links li");
  const nav = document.querySelector("nav");
  const taglineH1 = document.querySelector(".tagline h1");
  const taglineH2 = document.querySelector(".tagline h2");
  let sticky = nav.offsetTop;

  burger.addEventListener("click", function () {
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
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      taglineH1.style.animationPlayState = "paused";
      taglineH1.style.transform = "translateX(calc(-250px - 50vw))";
      taglineH2.style.animationPlayState = "paused";
      taglineH2.style.transform = "translateX(calc(350px + 50vw))";
    } else {
      taglineH1.style.transform = "";
      taglineH2.style.transform = "";
    }
  });
};

// Gallery:

const gallery = () => {
  const sliderGallery = [...document.querySelectorAll('.sliderGallery img')];
  const next = document.querySelector('.nextBtn');
  const prev = document.querySelector('.prevBtn');
  let counter = 1;

  const opacity = () => {
    sliderGallery.forEach(img => {
      img.style.opacity = 0;
      img.style.transition = `opacity 0.7s ease-in-out`;
    });
    sliderGallery[0].style.opacity = 1;
  }

  next.addEventListener('click', () => {
    if (counter < sliderGallery.length) {
      sliderGallery[counter].style.opacity = 1;
      counter++;
    } else {
      opacity();
      counter = 1;
    }
  });

  prev.addEventListener('click', () => {
    if (counter == 1) {
      sliderGallery.forEach(img => {
        img.style.opacity = 1;
      });
      counter = sliderGallery.length;
    } else {
      counter--;
      sliderGallery[counter].style.opacity = 0;
    }
  });

  opacity();
};

// Date:

const currentDate = () => {
  const currentYear = new Date();
  const span = document.querySelector('.date');
  span.innerText = currentYear.getFullYear();
}

const app = () => {
  navigation();
  gallery();
  currentDate();
};

app();