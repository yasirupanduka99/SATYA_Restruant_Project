// ---------Checking HTML Elements are Loaded Or Not To The Page
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    // ---------Remove Cart Item Button Function
    var removeCartItemButtons = document.getElementsByClassName('btnRemove')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    //Add to Cart Button Function
    var addToCartButtons = document.getElementsByClassName('toCartBtn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    //Purchase Button Function Implementing
    document.getElementsByClassName('purchaseBtn')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase!')
    var cartItems = document.getElementsByClassName('cartItems')[0]
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
        updateCartTotal()
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('itemTitle')[0].innerText
    var price = shopItem.getElementsByClassName('itemPrice')[0].innerText
    console.log(title, price)
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('tr')
    cartRow.classList.add('cartTr')
    var cartItems = document.getElementsByClassName('cartItems')[0]
    var cartItemNames = cartItems.getElementsByClassName('cartItemTitle')
    for(var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart!')
            return
        }
    }
    var cartRowContents = `
            <tr class="cartTr">
                <td>
                    <h4 class="cartItemTitle">${title}</h4>
                </td>
                <td class="itemPriceContainer">
                    <h4 class="cartprice">${price}</h4>
                </td>
                <td>
                    <button class="btnRemove" type="button">Remove</button>
                </td>
            </tr>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btnRemove')[0].addEventListener('click', removeCartItem)
}


// ---------Update Cart Total Function
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cartItems')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cartTr')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cartprice')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total = total + price
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('classTotalPrice')[0].innerText = '$' + total
}