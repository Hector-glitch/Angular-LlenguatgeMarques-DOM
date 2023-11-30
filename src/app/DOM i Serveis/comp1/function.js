export function yellowSubmarine(){
  document.getElementById('titol').style.backgroundColor = "yellow";
}

export function changeSize() {
  document.getElementById('taula').style.width = "20%";
  document.getElementById('taula').style.height = "150px";
}

export function countWords() {
  let paragraph = document.getElementById('Ipsum');
  let resultElement = document.getElementById('infoIpsum');

  if (paragraph && resultElement) {
    let text = paragraph.textContent || paragraph.innerText;
    let words = text.match(/\b\w+\b/g);

    let wordCount = words ? words.length : 0;
    resultElement.textContent = 'Número de paraules: ' + wordCount;
  }
}
export function valorsDiv() {
  let selectElement = document.getElementById("select");
  let divValors = document.getElementById("divValors");

  let valors = [];
  for (let option of selectElement.options) {
    valors.push(option.value);
  }
  divValors.textContent = valors.join(', ');
}

