const ankitChallenge = {};

ankitChallenge.init = () => {
    // call functions in here
    ankitChallenge.faqAccordion();
}

const faqs = document.querySelectorAll(".questionsDiv");
const answer = document.querySelectorAll(".answer");
const hamburgerMenu = document.querySelectorAll(".hamburgerMenu");


ankitChallenge.faqAccordion = () => {
    faqs.forEach( (faq) => {
            // adding event listener to each faq div
            faq.addEventListener("click", (e) => {
            // when its clicked on toggle the class active on the div
            faq.classList.toggle("active");
        });
    });
}


ankitChallenge.init();