const container = document.querySelector(".container");
const btn = document.querySelector("#boxes");

for(let j = 0; j < 1; j++){
  generateButtons(4);
}

btn.addEventListener("click", () => {
  let response = prompt("Enter the size of grid (max 100)");
  const numResponse = parseInt(response);
  if(numResponse <= 100){
    count = numResponse;
  }
  container.replaceChildren();
  generateButtons(count);
});

function generateButtons(count){
  for (let i = 0; i < (count*count); i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("child-div");
    childDiv.style.width = `${100 / count}%`;
    container.appendChild(childDiv);
    
    childDiv.addEventListener("mouseover", () => {
      childDiv.style.backgroundColor = "dodgerblue";
    });
  }
}
