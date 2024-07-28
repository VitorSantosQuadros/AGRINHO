document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    function reveal() {
        let windowHeight = window.innerHeight;
        let revealPoint = 150;

        sections.forEach(function (section) {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Chamada inicial para revelar seções já visíveis
});
