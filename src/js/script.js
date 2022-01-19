// ELEMENTS

const input = document.querySelector('#textInput');
const countCharacter = document.querySelector('#countCharacter');
const countWord = document.querySelector('#countWord');
const countLine = document.querySelector('#countLine');

// EVENTS
document.querySelector('.capitalInitialText').addEventListener('click', handleCapitalInitial);
document.querySelector('.lowercaseText').addEventListener('click', handleLowercase);
document.querySelector('.capitalText').addEventListener('click', handleUppercase);
document.querySelector('.capitalizedText').addEventListener('click', handleCapitalized);
document.querySelector('.copyText').addEventListener('click', handleCopy);
document.querySelector('.clearText').addEventListener('click', handleClear);

// document.querySelector('#buttonAlternating').addEventListener('click', alternatingCase);
// document.querySelector('#buttonTitle').addEventListener('click', titleCase);
// document.querySelector('#buttonInverse').addEventListener('click', inverseCase);
// document.querySelector('#buttonDownload').addEventListener('click', download);

// FUNCTIONS
// Como devolver pro input?

function handleCapitalInitial() { // OK...
    let currentValue = input.value;
    let newValue = currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase();

    console.log(`Primeira letra maiúscula => ${newValue}`);
}

function handleLowercase() { // OK...
    let currentValue = input.value;
    let newValue = currentValue.toLowerCase();

    console.log(`Texto todo minúsculo => ${newValue}`);
}

function handleUppercase() { // OK...
    let currentValue = input.value;
    let newValue = currentValue.toUpperCase();

    console.log(`Texto todo em maiúsculo => ${newValue}`);
}

function handleCapitalized() { // fazer com javaScript
    let capitalized = input.value;
    capitalized.style.textTransform = 'capitalize';
}

function handleCopy() { // OK...
    document.querySelector("#textInput").select();
    document.execCommand("copy");
}

function handleClear() {
    let clear = input.value;
    clear.innerHTML = '';
}
// function alternatingCase() { }
// function titleCase() { }
// function inverseCase() { }
// function download() { }
// function countCharacter() { }
// function countWord() { }
// function countLine() { }



