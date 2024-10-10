const dropdownBTN = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown-content');

const post = document.querySelector('.vender-post-btn')

dropdownBTN.addEventListener('click', () => {
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block'
    } else {
        dropdown.style.display = 'none'
    }

});

dropdownBTN.addEventListener('click', (event) => {
    event.preventDefault();
})

post.addEventListener('click', (event) => {
    event.preventDefault();

    const success = document.querySelector('.success')

    success.style.display = 'flex'

    setTimeout(() => {
        success.style.display = 'none'
    }, 4001);

    setTimeout(() => {
        location.href = './index.html'
    }, 4001);
})
