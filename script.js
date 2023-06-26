const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function Message() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(() =>{
	  resolve()
  }, delayVal));
  output.innerText = message;
}

btn.addEventListener("click", Message);
