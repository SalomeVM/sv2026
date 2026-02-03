// List of texts for the "No" button (you can add more later)
const noButtonTexts = [
    "No",
    "Por favor",
    "Andale si?",
    "Porfaa",
    "No me hagas esto D:",
    "Te dare regalos lo juro 🙏🏻",
    "Es porque soy feo? :(",
    "Dale que si no te hagas",
    "Anane",
    "No me voy a rendir",
    "😭😭",
];

let noClickCount = 0;
let yesButtonScale = 1;
let noButtonMargin = 0;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Handle "No" button click
noBtn.addEventListener('click', function() {
    // Increase the "Yes" button size by 10%
    yesButtonScale += 0.1;
    yesBtn.style.transform = `scale(${yesButtonScale})`;

    // Move the "No" button to the right to prevent overlap
    // Calculate the additional space needed based on the button's growth
    noButtonMargin += 20; // Adjust this value as needed
    noBtn.style.marginLeft = `${noButtonMargin}px`;

    // Change the "No" button text and loop through the list
    noClickCount++;
    // Use modulo to loop back to the beginning when reaching the end
    const textIndex = noClickCount % noButtonTexts.length;
    noBtn.textContent = noButtonTexts[textIndex];
});

// Handle "Yes" button click
yesBtn.addEventListener('click', function() {
    // Redirect to the success page
    window.location.href = 'yes.html';
});

