/* Search input*/

function search() {
    let input = document.getElementById('search-font');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("fonts");
    li = ul.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
      let font = li[i].getElementsByClassName("font")[0];
      let author = li[i].getElementsByClassName("author")[0];
      let fontText = font.textContent || font.innerText;
      let authorName = author.textContent || author.innerText;
      if (fontText.toUpperCase().indexOf(filter) > -1 || authorName.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


/* Type input */
const defaultText = document.getElementById('text').innerHTML;

function typeSomething(e) {
const typeSomething = document.forms['text-input'];
    e.preventDefault();
    let value = typeSomething.querySelector('input[type="text"]').value;
    console.log(value);
    
    let inputs = document.getElementsByClassName('text-i');
    Array.from(inputs).forEach(function(i){
        i.innerHTML = value;   
      
        if (value == "") {
          i.innerHTML = defaultText;
        }
    }) 
};
  

/*Change font size*/

function changeSize (){
  let selectedSize = document.getElementById("font-s").value
  let texts = document.getElementsByClassName('text-i');
  Array.from(texts).forEach(function(i) {
    i.style.fontSize = selectedSize;
  })
}

/*Change color-theme light/dark mode*/

/*Grid-list button*/


/*Refresh page button*/

const defaultPage = document.body.innerHTML;

function refreshPage(){
    document.body.innerHTML = defaultPage;
};
