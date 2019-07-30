const collapse = () => {
    const question = document.getElementsByClassName('question');

    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener("click", function () {
            this.classList.toggle("answerActive");
            let answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    }
}

collapse();