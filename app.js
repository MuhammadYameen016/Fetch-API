let getDiv = document.getElementById('main')
let callSpan = document.getElementById('span')
let cart = []

fetch('https://fakestoreapi.com/products')
.then(data => data.json())
.then(data => {
    data.map((value, index) => {
        getDiv.innerHTML += `<div class="card all-container h-25 m-3 p-3" style="width: 18rem;">
  <img src="${value.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <p class="card-text">${value.description}</p>
    <p class="card-text"><b>${value.price}$</b></p>
    <a href="#" class="btn btn-primary" onclick='buy(${value.id})'>Buy Now</a>
  </div>
</div>`
    })
})

buy = (x) => {
  cart.push(x)
  JSON.stringify(localStorage.setItem('valueStore', cart)) 
  callSpan.innerText++  
}