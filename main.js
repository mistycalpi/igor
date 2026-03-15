
document
    .querySelectorAll(".social-card, .project-card")
    .forEach((card) => {
        card.addEventListener("click", () => {
            window.open(card.dataset.url, "_blank");
        });
    });

const projectCards = document.querySelectorAll(".project-card");
if (projectCards.length > 0) {
    const lastCard = projectCards[projectCards.length - 1];
    const numberElement = lastCard.querySelector(".project-number");
    if (numberElement) {
        const cardNumber = parseInt(
            numberElement.textContent.trim(),
        );
        if (cardNumber % 2 === 1) {
            lastCard.classList.add("wide-last-card");
        }
    }
}
