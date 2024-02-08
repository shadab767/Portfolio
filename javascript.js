window.addEventListener("scroll", function(event){
    let scroll = this.scrollY;
    let navbar = this.document.getElementById("navbar");
    
    if (scroll > 5)
    {
        // console.log(scroll, navbar)
        navbar.style.backgroundColor = "black"
        navbar.style.borderBottom = "white 2px solid"
    }
    else
    {
        navbar.style.backgroundColor = "transparent"
        navbar.style.borderBottom = "none"
    }
})