// Get all HTML ID
const fileInput = document.getElementById("file-input");
const numOfFile = document.getElementById("num-file");
const images = document.getElementById("images");

function preview() {
  images.innerHTML = "";
  numOfFile.textContent = `${fileInput.files.length} files Selected!`;
  for (let i of fileInput.files) {
    let rander = new FileReader();
    let figure = document.createElement("figure");
    let figureCap = document.createElement("figcaption");
    figureCap.innerText = i.name;
    figure.appendChild(figureCap);
    rander.onload = () => {
      let img = document.createElement("img");
      img.setAttribute("src", rander.result);
      figure.insertBefore(img, figureCap);
    };
    images.appendChild(figure);
    rander.readAsDataURL(i);
  }
}
