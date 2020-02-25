// Certyficate:

const showCertificates = () => {
  const allImg = [...document.querySelectorAll(".certificates img")];
  const show = document.querySelector(".show");
  const showImg = document.createElement("img");
  show.appendChild(showImg);

  allImg.forEach(img => {
    img.addEventListener("click", () => {
      show.classList.add("active");
      const imgSrc = img.getAttribute("src");
      const imgAlt = img.getAttribute("alt");
      showImg.setAttribute("src", imgSrc);
      showImg.setAttribute("alt", imgAlt);
    });
  });

  show.addEventListener("click", () => {
    show.classList.remove("active");
  });
};

showCertificates();
