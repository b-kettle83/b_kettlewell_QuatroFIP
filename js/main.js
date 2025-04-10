const headerBurger = document.querySelector('#header-burger'),
    headerLogo = document.querySelector('#header-logo'),
    headerNav = document.querySelector('#header-nav'),

    prodInfoText = document.querySelector('#prod-punch-info'), 
    prodInfoButtons = document.querySelectorAll('.prod-info-button'),

    prodFlavButtons = document.querySelectorAll('.prod-flav-button'),
    prodFlavBox = document.querySelector('#prod-flav-box'),
    prodFlavImg = document.querySelector('#prod-flav-image'),
    prodSecondIng = document.querySelector('#prod-second-ingredients'),

    prodMerchBox = document.querySelector('#merch-lightbox'),
    prodMerchItems = document.querySelectorAll('.prod-merch-item'),
    prodMerchContent = document.querySelector('#merch-lightbox article');

let prodLightboxCloser = document.querySelector('.lightbox-closer');

let prodInfo = [
    "Enjoy a stronger, sweeter, and better tasting Quatro than ever before as we've revamped out recpies to bring in more flavour, less junk, and more customization than ever before",
    "Every Quatro drink is made with carbonated water, high fructose corn syrup, citric acid, cane surgar, and a combination of fruits and vegeatables alongside other natural flavours",
    "Quarto in all its forms is available in almost every international, national, or local grocery store",
];

let prodFlavours = [
    {
        "flavour": "GRAPEFRUIT",
        "colour": "#E9168A",
        "name": "grapefruit",
        "bio": "Enjoy Quatro’s original base flavour with Quatro Grapefruit. A sweet, tart, and bubbly experience, this citrusy drink is sure to brighten up your day and give you the satisfaction you need!",
        "mainIng": "Made with real strawberries, grapefruit, and fruit juice",
        "ingredients": "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, PASSIONFRUIT, STRAWBERRIES, CANE SUGAR, NATURAL FLAVOURS",
    },

    {
        "flavour": "PASSIONFRUIT",
        "colour": "#ED1C27",
        "name": "passionfruit",
        "bio": "A perfect mix of sweet and tart, Quatro Passionfruit is an experience of citrus and melon, with a nice hint of intensity to add some excitement to your day!",
        "mainIng": "Made with real strawberries, passionfruit, and fruit juice",
        "ingredients": "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, GRAPEFRUIT, STRAWBERRIES, CANE SUGAR, NATURAL FLAVOURS",
    },

    {
        "flavour": "ORANGE",
        "colour": "#F7A51E",
        "name": "orange",
        "bio": "Make things sweeter with Quatro Orange, a perfect blend of sweet and citrus with a hint of tartness that will leave you feeling refreshed and wanting more!",
        "mainIng": "Made with real carrots, orange, and fruit juice",
        "ingredients": "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, ORANGE, CARROT, CANE SUGAR, NATURAL FLAVOURS",
    },

    {
        "flavour": "PINEAPPLE",
        "colour": "#7DA23F",
        "name": "pineapple",
        "bio": "Add some brightness to your day with Quatro Pineapple, a mix of sour, sweet, and tang that's sure to leave your tastebuds tingling and your body with the boost it needs!",
        "mainIng": "Made with real tumeric, pineapple, and fruit juice",
        "ingredients": "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, PINEAPPLE, TUMERIC, CANE SUGAR, NATURAL FLAVOURS",
    },
];

let merchItems = [
    {
        "image": "phonecase",
        "name": "Phone Case: $44.99",
        "info": "Brighten up your phone with a quality and well protected phone case with a strong grip and modern design feature Quatro’s vibrant colours"
    },

    {
        "image": "bag",
        "name": "Shopping Bag: $7.99",
        "info": "Find Quatro's designs on a strong and durable tote bag perfect for shopping and carrying whatever you find yourself needing"
    },

    {
        "image": "tshirt",
        "name": "T-shirts: $9.99",
        "info": "Bring some colour into your wardrobe with Quatro's high quality t-shirts"
    },
];

function openCloseMenu () {
    headerNav.classList.toggle('hidden');
    headerBurger.classList.toggle('burger-rotated');
    headerLogo.classList.toggle('hidden');
}

function changePunchInfo () {
    prodInfoText.innerText = prodInfo[this.dataset.infoIndex];
}

function changeFlavourInfo () {
    prodFlavBox.innerHTML = '';
    prodSecondIng.innerHTML = '';
    prodFlavImg.innerHTML = '';

    let flavourName = document.createElement('h3');
    flavourName.innerText = prodFlavours[this.dataset.fruitIndex].flavour;
    flavourName.classList.add('text-2xl', 'mb-4', `text-[${prodFlavours[this.dataset.fruitIndex].colour}]`);
    prodFlavBox.appendChild(flavourName);

    let flavourBio = document.createElement('p');
    flavourBio.innerText = prodFlavours[this.dataset.fruitIndex].bio;
    flavourBio.classList.add('mb-4');
    prodFlavBox.appendChild(flavourBio);

    let flavourMainIngredients = document.createElement('p');
    flavourMainIngredients.innerText = prodFlavours[this.dataset.fruitIndex].mainIng;
    flavourMainIngredients.classList.add('mb-8');
    prodFlavBox.appendChild(flavourMainIngredients);

    let flavourIngredients = document.createElement('p');
    flavourIngredients.innerText = prodFlavours[this.dataset.fruitIndex].ingredients;
    flavourIngredients.classList.add('hidden', 'md:block', 'lg:block', 'text-[0.5rem]');
    prodFlavBox.appendChild(flavourIngredients);

    prodFlavImg.src = `images/prod_${prodFlavours[this.dataset.fruitIndex].name}.jpeg`;
    
    let secondFlavourIngredients = document.createElement('p');
    secondFlavourIngredients.innerText = prodFlavours[this.dataset.fruitIndex].ingredients;
    secondFlavourIngredients.classList.add('text-[0.5rem]', 'col-span-full', 'md:hidden', 'lg:hidden');
    prodSecondIng.appendChild(secondFlavourIngredients);

    prodFlavButtons.forEach (button => {
        if(button.classList.contains('prod-flav-button-selected')) {
            button.classList.remove('prod-flav-button-selected', `prod-flav-button-${prodFlavours[button.dataset.fruitIndex].name}`);
            button.classList.add('prod-flav-button-deselected');
        }
    });

    this.classList.remove('prod-flav-button-deselected');
    this.classList.add('prod-flav-button-selected', `prod-flav-button-${prodFlavours[this.dataset.fruitIndex].name}`);

}

function changeLightboxContent () {
    prodMerchContent.innerHTML = '';

    prodMerchBox.classList.remove('hidden');

    let merchImage = document.createElement('img');
    merchImage.src = `images/prod_${merchItems[this.dataset.merchIndex].image}_690.jpeg`;
    merchImage.classList.add('rounded-[25px]', 'col-start-1', 'col-span-2', 'md:col-start-1', 'md:col-span-4', 'lg:col-start-1', 'lg:col-span-4');
    prodMerchContent.appendChild(merchImage);

    let merchInfo = document.createElement('div');
    merchInfo.classList.add('p-4', 'col-span-full', 'md:col-start-5', 'md:col-span-8', 'lg:col-start-5', 'lg:col-span-8')
    prodMerchContent.appendChild(merchInfo);

    let merchTitle = document.createElement('div');
    merchTitle.classList.add('flex', 'justify-between', 'align-items');
    merchInfo.appendChild(merchTitle);

    let merchName = document.createElement('h2');
    merchName.innerText = merchItems[this.dataset.merchIndex].name;
    merchName.classList.add('text-2xl', 'mb-8');
    merchTitle.appendChild(merchName);

    let lightboxClose = document.createElement('p');
    lightboxClose.innerText = 'X';
    lightboxClose.classList.add('text-4xl', 'lightbox-closer');
    merchTitle.appendChild(lightboxClose);

    prodLightboxCloser = document.querySelector('.lightbox-closer');

    let merchDescription = document.createElement('p');
    merchDescription.innerText = merchItems[this.dataset.merchIndex].info;
    merchDescription.classList.add('mb-4');
    merchInfo.appendChild(merchDescription);

    let cartMessage = document.createElement('p');
    cartMessage.innerText = '(Size specification in cart)';
    cartMessage.classList.add('text-[0.5rem]', 'mb-8');
    merchInfo.appendChild(cartMessage);

    let merchCart = document.createElement('img');
    merchCart.src = 'images/cart.svg';
    merchCart.classList.add('h-16', 'button-scale');
    merchInfo.appendChild(merchCart);

    prodLightboxCloser.addEventListener('click', closeLightbox);
}

function closeLightbox () {
    prodMerchBox.classList.add('hidden');
    console.log('Close clicked');
} 


headerBurger.addEventListener('click', openCloseMenu);

prodInfoButtons.forEach (button => button.addEventListener('click', changePunchInfo));

prodFlavButtons.forEach (button => button.addEventListener('click', changeFlavourInfo));

prodMerchItems.forEach (item => item.addEventListener('click', changeLightboxContent));

