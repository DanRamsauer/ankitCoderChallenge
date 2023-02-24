const ankitChallenge = {};

ankitChallenge.init = () => {
    // call functions in here
    ankitChallenge.faqAccordion();
    ankitChallenge.closeSlideOutNav();
    ankitChallenge.openSlideOutNav();
    ankitChallenge.sidebarAnchor();
}

const faqs = document.querySelectorAll(".questionsDiv");
const answer = document.querySelectorAll(".answer");
const sidebarAnchor = document.querySelectorAll(".sidebarA");
const X = document.querySelector("#closeSlide");
const slideNav = document.querySelector("#slidebar");
const hamburgerMenu = document.querySelector("#hamburgerMenu");


ankitChallenge.faqAccordion = () => {
    faqs.forEach( (faq) => {
            // adding event listener to each faq div
            faq.addEventListener("click", () => {
            // when its clicked on toggle the class active on the div
            faq.classList.toggle("active");
        });
    });
};

ankitChallenge.sidebarAnchor = () => {
    sidebarAnchor.forEach( (anchor) => {
            // adding event listener to each faq div
            anchor.addEventListener("click", () => {
            // when its clicked on remove the class to get rid of the sidebarnav
            slideNav.classList.remove("open");
        });
    });
};

ankitChallenge.closeSlideOutNav = () => {
    X.addEventListener("click", () => {
        slideNav.classList.remove("open");
    });
};

ankitChallenge.openSlideOutNav = () => {
    hamburgerMenu.addEventListener("click", () => {
        slideNav.classList.toggle("open");
        setTimeout()
    });
};


ankitChallenge.init();