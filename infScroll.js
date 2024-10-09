const products = document.querySelector('.products')

let isLoading = false

window.addEventListener('scroll', () => {

    const { scrollHeight, clientHeight, scrollTop } = document.documentElement

    if (scrollTop + clientHeight > scrollHeight - 3 && !isLoading) {
        isLoading = true;
        setTimeout(() => {
            nuevocontenedor();
            isLoading = false;
        }, 500);
    }
})

const nuevocontenedor = () => {
    const fila = document.createElement('div')
    fila.className = 'fila d'
    products.appendChild(fila)

    // Item A
    const itemA = document.createElement('div')
    itemA.className = 'item'
    fila.appendChild(itemA)

    const linkA = document.createElement('a')
    itemA.appendChild(linkA)
    linkA.href = '#'

    const imgA = document.createElement('img')
    imgA.src = 'img/productos/vince.jpg'
    linkA.appendChild(imgA)

    const textA = document.createElement('h1')
    textA.innerHTML = 'Language Practice for Advanced'
    itemA.appendChild(textA)

    const priceA = document.createElement('h2')
    priceA.innerHTML = '$40.000'
    itemA.appendChild(priceA)

    // Item B
    const itemB = document.createElement('div')
    itemB.className = 'item'
    fila.appendChild(itemB)

    const linkB = document.createElement('a')
    itemB.appendChild(linkB)
    linkB.href = '#'

    const imgB = document.createElement('img')
    imgB.src = 'img/productos/insight.webp'
    linkB.appendChild(imgB)

    const textB = document.createElement('h1')
    textB.innerHTML = 'Insight Intermediate'
    itemB.appendChild(textB)

    const priceB = document.createElement('h2')
    priceB.innerHTML = '$30.000'
    itemB.appendChild(priceB)

    // Item C
    const itemC = document.createElement('div')
    itemC.className = 'item'
    fila.appendChild(itemC)

    const linkC = document.createElement('a')
    itemC.appendChild(linkC)
    linkC.href = '#'

    const imgC = document.createElement('img')
    imgC.src = 'img/productos/portugues-na-escola.webp'
    linkC.appendChild(imgC)

    const textC = document.createElement('h1')
    textC.innerHTML = 'Portugues Na Escola 2'
    itemC.appendChild(textC)

    const priceC = document.createElement('h2')
    priceC.innerHTML = '$10.000'
    itemC.appendChild(priceC)

    // Item D
    const itemD = document.createElement('div')
    itemD.className = 'item'
    fila.appendChild(itemD)

    const linkD = document.createElement('a')
    itemD.appendChild(linkD)
    linkD.href = '#'

    const imgD = document.createElement('img')
    imgD.src = 'img/productos/the-catcher-in-the-rye.webp'
    linkD.appendChild(imgD)

    const textD = document.createElement('h1')
    textD.innerHTML = 'The Catcher In The Rye'
    itemD.appendChild(textD)

    const priceD = document.createElement('h2')
    priceD.innerHTML = '$10.000'
    itemD.appendChild(priceD)
}