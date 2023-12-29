import "./index.scss";

const resultEl = document.querySelector("#result");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const numEl = document.querySelector("#num");
const symbolEl = document.querySelector("#symbol");
const pwLengthEl = document.querySelector("#pwLength");
const messageEl = document.querySelector("#message");
const btnGenerate = document.querySelector("#btnGenerate");
const btnCopy = document.getElementById("btnCopy");

let pwValue = 4;

const uppercaseAlphabet = [];
for (let i = 65; i <= 90; i++) {
	uppercaseAlphabet.push(String.fromCharCode(i));
}
const lowercaseAlphabet = [];
for (let i = 97; i <= 122; i++) {
	lowercaseAlphabet.push(String.fromCharCode(i));
}
const numbers = [];
for (let i = 0; i < 10; i++) {
	numbers.push(i);
}
const symbols = [];
for (let i = 33; i <= 47; i++) {
	symbols.push(String.fromCharCode(i));
}

const randomChar = (arr) => arr[Math.floor(Math.random() * arr.length)];

//main function
const generatePsw = () => {
	console.log(pwValue);
	if (pwValue > 30 || pwValue < 4) {
		console.log("hey");
		messageEl.innerText = "Please enter a number between 4-30";
		messageEl.style.visibility = "visible";
		return;
	}
	messageEl.innerText = "";
	let psw = "";
	const pwLength = pwLengthEl.value;

	//adding characters to psw with while loop
	let i = 0;
	while (i < pwLength) {
		let pswArr = [];
		if (upperEl.checked) {
			pswArr.push(randomChar(uppercaseAlphabet));
		}
		if (lowerEl.checked) {
			pswArr.push(randomChar(lowercaseAlphabet));
		}
		if (numEl.checked) {
			pswArr.push(randomChar(numbers));
		}
		if (symbolEl.checked) {
			pswArr.push(randomChar(symbols));
		}
		if (pswArr.length === 0) {
			messageEl.innerText = "Please select at least one option";
			messageEl.style.visibility = "visible";
			return;
		}
		psw += pswArr[Math.floor(Math.random() * pswArr.length)];
		i++;
	}
	resultEl.innerText = psw;
};

//copy to clipboard function
const copyContent = async () => {
	const text = resultEl.innerText;
	try {
		await navigator.clipboard.writeText(text);
		console.log("Content copied to clipboard");
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
};

// EVENTS
btnGenerate.addEventListener("click", generatePsw);

btnCopy.addEventListener("click", async () => {
	await copyContent();
	console.log("asdfasfas");
	btnCopy.innerText = "Copied";
	setTimeout(() => {
		btnCopy.innerText = "Copy";
	}, 500);
});

pwLengthEl.addEventListener("change", () => {
	pwValue = pwLengthEl.value;
	console.log(pwValue);
});
