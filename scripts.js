const faqs = document.querySelectorAll(".questionsDiv");
const answer = document.querySelectorAll(".answer");

// answer.hidden = true;

faqs.forEach( (faq) => {
        // adding event listener to each faq div
        faq.addEventListener("click", (e) => {
        // when its clicked on toggle the class active on the div
        faq.classList.toggle("active");
    });
});