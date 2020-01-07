// Certyficate:

const showCertificates = () => {
    const allImg = [...document.querySelectorAll('.certificates img')];
    const show = document.querySelector('.show');
    const showImg = document.querySelector('.show img');
    // const close = document.querySelector('.close');
    allImg.forEach(img => {
        img.addEventListener('click', () => {
            show.classList.add('active');
            const imgSrc = img.getAttribute('src');
            showImg.setAttribute('src', imgSrc);
        });
    });

    // close.addEventListener('click', () => {
    //   show.classList.remove('active');
    // });
    show.addEventListener('click', () => {
        show.classList.remove('active');
    });
};


showCertificates();