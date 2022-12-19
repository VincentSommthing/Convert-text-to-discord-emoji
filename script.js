let inputEl = document.getElementById("input");
let resultEl = document.getElementById("result");
let copyButtonEl = document.getElementById("copyButton");
let letters = "abcdefghijklmnopqrstuvwxyz".split("");
let others = {
    "1":"one",
    "2":"two",
    "3":"three",
    "4":"four",
    "5":"five",
    "6":"six",
    "7":"seven",
    "8":"eight",
    "9":"nine",
    "0":"zero",
    " ":"black_small_square",
    "!":"exclamation",
    "?":"question"
};
inputEl.oninput = function() {
    resultEl.innerText =
        inputEl.value.split("")
        .map(char => {
            lowerChar = char.toLowerCase();
            if(others[char]) {
                return ` :${others[char]}:`;
            } else if (letters.includes(lowerChar)) {
                return ` :regional_indicator_${lowerChar}:`;
            } else {
                return char;
            };
        })
        .join("");
};
copyButtonEl.onclick = function() {
    navigator.clipboard.writeText(resultEl.innerText);
};