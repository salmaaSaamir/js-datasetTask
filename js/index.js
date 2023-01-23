
const products = document.querySelectorAll(".prod")
const productInformation = document.querySelector(".prod-inf") 
const templateDetailes = document.querySelector("template")

products.forEach(product => {
    product.addEventListener('click',showProductDetailes.bind(null,product.dataset))
});

function showProductDetailes(detailes) {

    productInformation.textContent = ""

    let detailesTemp = templateDetailes.content.cloneNode(true)

    let productName = detailesTemp.querySelector('.product-name')
    let productPrice = detailesTemp.querySelector('.product-price')
    let productImg = detailesTemp.querySelector('.product-img')

    productName.textContent = detailes.productName
    productPrice.textContent = detailes.productPrice
    productImg.src = detailes.productImg
    
    productInformation.append(productImg , productName , productPrice )
}