let postReviewBTN = document.querySelector('#postReviewBTN')
let wrapper = document.querySelector('.reviewPost')

let x = document.querySelector('.close')

let form = document.querySelector('.postReviewForm')
let btn = document.querySelector('.postButton')
let post = document.querySelector('.post')
let contenedor = document.querySelector('.contenedorEstrellas')

postReviewBTN.addEventListener('click', () => {
    wrapper.style.display = 'block'
})

x.addEventListener('click', () => {
    wrapper.style.display = 'none'
})

btn.addEventListener('click', () => {
    contenedor.style.display = 'none'
    form.style.display = 'none'
    post.style.display = 'block'
        setTimeout(() => {
        wrapper.style.display = 'none'
    }, 4000);
})
