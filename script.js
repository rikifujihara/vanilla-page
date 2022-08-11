// selecting the button through the DOM and storing it in 'button'
let button = document.getElementById("btn-color")

// adding a 'click' event listener on `button`
button.addEventListener("click", () => {
    // toggling the 'btn-warning' class on the button on each click. This effectively toggles the colour of the button
    button.classList.toggle("btn-warning")
})

// retrieving plus span from document
let plus = document.getElementById("plus")

// retrieving minus span from document
let minus = document.getElementById("minus")

// selecting the header by ID from DOM
let header = document.getElementById("header")

// function to get the current size of header
const getHeaderSize = () => {
    let currentSize = window.getComputedStyle(header).getPropertyValue("font-size")
    return (parseFloat(currentSize.slice(0,currentSize.indexOf("p"))))
}

//increase font size of header on click
plus.addEventListener("click", () => {
    // retrieving current fontsize
    headerSize = getHeaderSize()
    sizeStr = `${headerSize * 1.1}px`
    //increase fontsize
    header.style.fontSize = sizeStr
})

minus.addEventListener("click", () => {
    // retrieving current fontsize
    headerSize = getHeaderSize()
    sizeStr = `${headerSize * 0.9}px`
    //decrease fontsize
    header.style.fontSize = sizeStr
})
