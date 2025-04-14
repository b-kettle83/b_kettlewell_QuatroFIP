# Quatro Rebranded
*Ben Kettlewell*

## Project Description
- This is the repositiory for my final project of Interactive Media Designs term 2, a website for my rebrand of the Quatro drink brand
- This website is for learning about and buying from Quatro

## Installation
To run this project locally, clone the respository and open it on your device

## Usage
- Click on buttons to navigate around the pages, change content within sections of pages, or open lightboxes for more information

## Features
- JavaScript arrays and arrays of objects that change page content when buttons are pressed
- Fully responsive page from mobile, to tablet, to desktop

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## History
Created on April 3, 2025

## Credits
- Developer: Ben Kettlewell
- Designer: Ben Kettlewell

## License
MIT Lisence Year 2025

# Javascript Paper Plan

### Header - Mobile dropdown
When dropdown button is clicked, make the menu appear or disappear 
- Use toggling class list

### Products Page - Info Boxes
When button is clicked, change text to the current button’s text
Use dataset and an array of text options

### Products Page - Flavours Box
When button is clicked:
Change box content (Name, bio, main ingredients, ingredients)
- Ingredients will have to be changed in and out of the div, because there is a separate one for mobile vs the tablet and desktop
- Change box image source
- Set the clicked button to an “active” style, and set the rest to be not active
- Check if any buttons are active, and if so, make them deselected/remove their selected style, then make the selected button active/give it its selected style
- Isolate the active class to remove it despite them all having different names
- Give all buttons a selected and deselected class, then if they are selected, add their selected class, and if they are not selected, if the class list contains their selected class, remove it?
- Forget special classes for the buttons, just when they are selected make the text black and the background the button’s object colour, and when they are deselected, change it back?
This won’t remove classes, so they might all stack
- Start each selected class with the same thing, then check if each item’s class list contains a class starting with that beginning, and if it has one, remove it?
    - Check all buttons for a class that signals that it’s active, and if it is active, remove the class using that button’s flavour index and variables
    - Set newly clicked button to selected
    - This one worked

When button is clicked, change box content and image source, check all buttons for being active and deactivate the active one, then activate the selected button
- Research: Submitted ChatGPT conversation (Not sure how to submit this now)

### Products Page - Merch Lightboxes
When a merch item is pressed, open the lightbox and put in that item’s information
- Use array of objects
- Research: In-class marvel build redux, YouTube JavaScript Lightbox tutorial https://www.youtube.com/watch?v=uKVVSwXdLr0

