const toggleMenu = () => {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
    });    
}
const openCart = () => {
    const btnCart = document.getElementById('cart');
    const cart = document.querySelector('.cart');

    btnCart.addEventListener('click', (e) => {
        cart.classList.toggle('openCart');
        cart.classList.toggle('closeCart');
    });
}
const quantity = () => {
    const btnPlus = document.getElementById('btnPlus');
    const btnMinus = document.getElementById('btnMinus');
    const inQuantity = document.getElementById('inQuantity');
    

    btnMinus.addEventListener('click', (e) => {
        let quantity = parseInt(inQuantity.value);
        if (quantity != 0) {
            quantity--;
            inQuantity.value = quantity.toString();
        }
    });
    btnPlus.addEventListener('click', (e) => {
        let quantity = parseInt(inQuantity.value);
        quantity++;
        inQuantity.value = quantity.toString();
    });
}
const addToCart = () => {
    const btnAddCart = document.getElementById('btnAdd');
    const inQuantity = document.getElementById('inQuantity');
    const content = document.querySelector('.content');
    const textPrice = parseInt(document.getElementById('price').innerText);

    
    let cart = 0;
    btnAddCart.addEventListener('click', (e) => {
        let quantity = parseInt(inQuantity.value);
        if (quantity != 0) {
            if (cart == 0) {
                content.innerHTML = "";
                //create object
                let object = document.createElement('div');

                content.appendChild(object);
                let button = document.createElement('button');
                button.innerText = 'Checkout';
                content.appendChild(button);
            }
            

            //create image of product in cart
            let img = document.createElement('img');
            img.src = './assets/img/image-product-1-thumbnail.jpg';
            img.classList.add('imgCart');
            object.appendChild(img);

            //create title and price
            let titleAndPrice = document.createElement('div');
            let title = document.createElement('p');
            title.innerText = document.getElementById('productTitle').innerText;
            titleAndPrice.appendChild(title);
            let price = document.createElement('p');
            let sum = textPrice * quantity;
            price.innerHTML = '$' + textPrice + ' x ' + quantity + ' <span class="bold">$' + sum + '</span>';
            titleAndPrice.appendChild(price);
            object.appendChild(titleAndPrice)

            //create trash icon
            let trash = document.createElement('img');
            trash.src = './assets/img/icon-delete.svg';
            trash.classList.add('trash');
            object.appendChild(trash);
            content.appendChild(object);

            cart++;
        } else {
            alert('You cannot add a product without putting a quantity !');
        }
    });
}
const changeImage = () => {
    const thumbnail1 = document.getElementById('thumbnail1');
    const thumbnail2 = document.getElementById('thumbnail2');
    const thumbnail3 = document.getElementById('thumbnail3');
    const thumbnail4 = document.getElementById('thumbnail4');
    const preview = document.getElementById('display');

    thumbnail1.addEventListener('click', (e) => {
        preview.src = './assets/img/image-product-1.jpg';
        
        thumbnail1.classList.add('active');
        thumbnail2.classList.remove('active');
        thumbnail3.classList.remove('active');
        thumbnail4.classList.remove('active');

        console.log('image change in 1');
    });
    thumbnail2.addEventListener('click', (e) => {
        preview.src = './assets/img/image-product-2.jpg';
        
        thumbnail1.classList.remove('active');
        thumbnail2.classList.add('active');
        thumbnail3.classList.remove('active');
        thumbnail4.classList.remove('active');

        console.log('image change in 2');
    });
    thumbnail3.addEventListener('click', (e) => {
        preview.src = './assets/img/image-product-3.jpg';

        thumbnail1.classList.remove('active');
        thumbnail2.classList.remove('active');
        thumbnail3.classList.add('active');
        thumbnail4.classList.remove('active');

        console.log('image change in 3');
    });
    thumbnail4.addEventListener('click', (e) => {
        preview.src = './assets/img/image-product-4.jpg';

        thumbnail1.classList.remove('active');
        thumbnail2.classList.remove('active');
        thumbnail3.classList.remove('active');
        thumbnail4.classList.add('active');
        
        console.log('image change in 4');
    });
}
const CarouselMobile = () => {
    const img = document.getElementById('carousel');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    const pictures = [
        './assets/img/image-product-1.jpg', 
        './assets/img/image-product-2.jpg', 
        './assets/img/image-product-3.jpg', 
        './assets/img/image-product-4.jpg'
    ]

    img.src = pictures[0];
    let position = 0;

    btnLeft.addEventListener('click', (e) => {
        position++;
        if (position == 4) {
            position = 0;
        }
        img.src = pictures[position];
    });
    btnRight.addEventListener('click', (e) => {
        position--;
        if (position == -1) {
            position = 3;
        }
        img.src = pictures[position];
    });
}

CarouselMobile();
changeImage();
addToCart();
quantity();
openCart();
toggleMenu();