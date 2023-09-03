// tab change functionality
function showTab(tabNumber) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(`tab${tabNumber}-content`).classList.add('active');
    document.querySelector(`.tab:nth-child(${tabNumber})`).classList.add('active');
}


// card scroll horizontally
const container = document.querySelector('.pref-card-container');
const cardSection = document.querySelector('.pref-card-section');

container.addEventListener('wheel', (e) => {
    const scrollSpeed = .1;
    e.preventDefault();
    cardSection.scrollLeft += e.deltaY / scrollSpeed;
});




// question answer section
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});