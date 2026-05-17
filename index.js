const container = document.querySelector(".container");
const btn = document.querySelector("#boxes");

for(let j = 0; j < 1; j++){
  generateButtons(16);
}

btn.addEventListener("click", () => {
  let response = prompt("Enter the number of boxes you want (max 100)");
  const numResponse = parseInt(response);
  if(numResponse <= 100){
    count = numResponse;
  }
  generateButtons(count);
});

function generateButtons(count){
  for (let i = 0; i < count; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("child-div");
    container.appendChild(childDiv);
    
    childDiv.addEventListener("mouseover", () => {
      childDiv.style.backgroundColor = "skyblue";
    });
  }
}
