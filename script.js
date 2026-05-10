// OFFER BAR

var offerBar = document.querySelector(".offer-bar")

var offerClose = document.getElementById("offer-close")

if(offerClose)
{
    offerClose.addEventListener("click", function(){

        offerBar.style.display = "none"

    })
}


// SIDE NAVBAR

var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left = "0"
}

function closeNavbar()
{
    sidenav.style.left = "-60%"
}


// COLLECTION SEARCH FUNCTIONALITY

var search = document.getElementById("search")

if(search)
{
    var productContainer = document.getElementById("product-container")

    var productList =
    productContainer.querySelectorAll(".collection-product")

    search.addEventListener("keyup", function(event){

        var enteredValue =
        event.target.value.toUpperCase()

        for(var count = 0; count < productList.length; count++)
        {
            var productName =
            productList[count].querySelector("h3").textContent

            if(productName.toUpperCase().indexOf(enteredValue) < 0)
            {
                productList[count].style.display = "none"
            }
            else
            {
                productList[count].style.display = "block"
            }
        }

    })
}