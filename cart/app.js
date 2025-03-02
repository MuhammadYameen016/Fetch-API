let storedProduct = localStorage.getItem('valueStore')
let getMainDiv = document.getElementById('main')
let managedProducts = storedProduct.split(",")

fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(data => {
        data.map((value, index) => {
            for (let i = 0; i < managedProducts.length; i++) {
                if (managedProducts[i] == value.id) {  
                    getMainDiv.innerHTML += `<div class="card m-3 p-3 h-25" style="width: 18rem;">
                        <img class="card-img-top" src="${value.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${value.title}</h5>
                            <p class="card-text">${value.description}</p>
                            <p> ${value.price} </p>
                        </div>
                    </div>`;
                    break;
                }
            }
            }
    )}
        )