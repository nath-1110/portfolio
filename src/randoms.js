// Array of related text pairs
const textPairs = [
    ["front-end spider! 🕷️", "I'm here to fix your bugs."],
    ["front-end painter! 🎨", "Let me put some color in your life."],
    ["front-end snowman! ☃️", "My code will give you chills."],
    ["front-end physiotherapist! 👨‍⚕️", "I can help with your flex issues."],
   
];

// Function to display random text pairs
function displayRandomTextPairs() {
    const randomIndex = Math.floor(Math.random() * textPairs.length);
    const [text1, text2] = textPairs[randomIndex];
    
    document.getElementById('text1').innerText = text1;
    document.getElementById('text2').innerText = text2;
}


// 



// Array of image file paths
const imagePaths = [
    'assets/randomspics/pexels-abhay-maurya-96283344-11418829.jpg',
    'assets/randomspics/pexels-brettjordan-5125160.jpg',
    'assets/randomspics/pexels-didsss-3844788.jpg',
    'assets/randomspics/pexels-introspectivedsgn-6654177.jpg',
    'assets/randomspics/pexels-karolina-grabowska-4386402.jpg',
    'assets/randomspics/pexels-kim-maiblue-3861940-6844385.jpg',
    'assets/randomspics/europeana-T97FK9qRC-c-unsplash.jpg',
    'assets/randomspics/michael-sala-husQ4tkR8Z8-unsplash.jpg',
    'assets/randomspics/mylene-tremoyet-Da0pdCekeUs-unsplash.jpg'
];

// Function to display a random image
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    document.getElementById('randomImage').src = randomImagePath;
}

// Call the function on page load
// Combine both functions
function initialize() {
    displayRandomImage();
    displayRandomTextPairs();
}

// Assign the combined function to window.onload
window.onload = initialize;