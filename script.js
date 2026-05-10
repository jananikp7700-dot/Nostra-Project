// OFFER BAR

var offerBar = document.querySelector(".offer-bar")

var offerClose = document.getElementById("offer-close")

if (offerClose) {
    offerClose.addEventListener("click", function () {

        offerBar.style.display = "none"

    })
}


// SIDE NAVBAR

var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-60%"
}


// COLLECTION SEARCH FUNCTIONALITY
var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }

})
