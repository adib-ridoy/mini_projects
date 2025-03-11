const fortunes = [
    "You will have a great day!",
    "Success is in your future.",
    "Happiness is coming your way.",
    "You will find what you seek.",
    "A pleasant surprise is waiting for you.",
    "You will achieve your goals.",
    "Good fortune will come to you.",
    "You will make a new friend.",
    "Expect good news soon.",
    "Your hard work will pay off."
];


function displayFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById('fortune-message').innerText = fortunes[randomIndex];
}

// Change font color
function changeFontColor() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-message').style.color = randomColor;
}

// Change background color
function changeBackgroundColor() {
    const colors = ['lightyellow', 'lightblue', 'lightgreen', 'lightpink', 'lightgray'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-box').style.backgroundColor = randomColor;
}

// Change border color
function changeBorderColor() {
    const colors = ['black', 'gray', 'brown', 'navy', 'darkgreen'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-box').style.borderColor = randomColor;
}

// Change font 
function changeFont() {
    
    const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
    
    
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    
    
    document.getElementById('fortune-message').style.fontFamily = randomFont;
}


window.onload = displayFortune;

// Stopwatch
let timerInterval;
let time = 0;
// TIme start button
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (time < 30) {
                time += 3;
                document.getElementById('timer').innerText = time;
            } else {
                clearInterval(timerInterval);
            }
        }, 3000);
    }
}
// Time stop button
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}
// Time reset button
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 0;
    document.getElementById('timer').innerText = time;
}

