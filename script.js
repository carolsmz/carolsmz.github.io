function toggleMenu(){
    const menu= document.querySelector(".menu-links")  //shift+alt+setapbaixo
    const icon= document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}