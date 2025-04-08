const prodFlavButtons = document.querySelectorAll('.prod-flav-button'),
    prodFlavBox = document.querySelector('#prod-flav-box'),
    prodFlavImg = document.querySelector('#prod-flav-image'),
    prodSecondIng = document.querySelector('#prod-second-ingredients');

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
    }
]

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

prodFlavButtons.forEach (button => button.addEventListener('click', changeFlavourInfo))