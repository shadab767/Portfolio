window.addEventListener("scroll", function(event){
    let scroll = this.scrollY;
    let navbar = this.document.getElementById("navbar");
    var closeIcon = document.getElementById("close");

    
    if ((closeIcon.classList.contains("d-none")) && scroll > 5)
    {
        console.log(scroll, navbar)
        navbar.style.backgroundColor = "black"
        navbar.style.borderBottom = "white 2px solid"
    }
    else
    {
        navbar.style.backgroundColor = "transparent"
        navbar.style.borderBottom = "none"
    }
})

window.onload = function (){
    
    var menuIcon = document.getElementById('menu');
    var closeIcon = document.getElementById("close");
    var menuLinks = document.getElementById("menu-links")
    let navbar = this.document.getElementById("navbar");


    menuIcon.addEventListener("click", function(event) {

        
        if(!menuIcon.classList.contains("d-none"))
        {
            menuIcon.classList.add("d-none");
            closeIcon.classList.remove("d-none");
            menuLinks.classList.add("active")
            navbar.classList.add("navBar-Black")
        }
    })

    closeIcon.addEventListener("click", function(event) {

        
        if(!closeIcon.classList.contains("d-none"))
        {
            closeIcon.classList.add("d-none");
            menuIcon.classList.remove("d-none");
            menuLinks.classList.remove("active");
            navbar.classList.remove("navBar-Black")
        }
    })

}
