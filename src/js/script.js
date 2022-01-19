// ELEMENTS

let textCase = document.querySelector('#textInput');
let character = document.querySelector('.count__item.character');
let word = document.querySelector('.count__item.word');
let line = document.querySelector('.count__item.line');

// EVENTS
document.querySelector('#buttonInicial').addEventListener('click', sentenceCase);
document.querySelector('#buttonLower').addEventListener('click', lowercase);
document.querySelector('#buttonUpper').addEventListener('click', upperCase);
document.querySelector('#buttonCapitalized').addEventListener('click', capitalizedCase);
document.querySelector('#buttonAlternating').addEventListener('click', alternatingCase);
document.querySelector('#buttonTitle').addEventListener('click', titleCase);
document.querySelector('#buttonInverse').addEventListener('click', inverseCase);
document.querySelector('#buttonDownload').addEventListener('click', download);
document.querySelector('#buttonCopy').addEventListener('click', copyClipboard);
document.querySelector('#buttonClear').addEventListener('click', clear);

// FUNCTIONS
// Como devolver pro input?

function sentenceCase() {
    let currentValue = document.querySelector('#textInput').value;
    let newValue = currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase();

    console.log(`SentenceCase => ${newValue}`);
}

function lowercase() {
    let currentValue = document.querySelector('#textInput').value;
    let newValue = currentValue.toLowerCase();

    console.log(`LowerCase => ${newValue}`);
}

function upperCase() {
    let currentValue = document.querySelector('#textInput').value;
    let newValue = currentValue.toUpperCase();

    console.log(`UpperCase => ${newValue}`);
}

function capitalizedCase() { // Mudar para JS
    let capitalized = document.querySelector('#textInput');
    capitalized.style.textTransform = 'capitalize';
}

function alternatingCase() { }
function titleCase() { }
function inverseCase() { }
function download() { }

function copyClipboard() {
    document.querySelector("#textInput").select();
    document.execCommand("copy");
}

function clear() {
    let clear = document.querySelector('#textInput');
    clear.innerHTML = '';
}

function countCharacter() { }
function countWord() { }
function countLine() { }