const toggleMenu = () => {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
    });    
}
toggleMenu();
const openCart = () => {
    const btnCart = document.getElementById('cart');
    const cart = document.querySelector('.cart');

    btnCart.addEventListener('click', () => {
        cart.classList.toggle('openCart');
    });
}