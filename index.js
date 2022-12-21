/* Search input */

function search() {
    let input = document.getElementById('search-font');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('fonts');
    let li = ul.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
      let font = li[i].getElementsByClassName('font')[0];
      let author = li[i].getElementsByClassName('author')[0];
      let fontText = font.textContent || font.innerText;
      let authorName = author.textContent || author.innerText;
      if (fontText.toUpperCase().indexOf(filter) > -1 || authorName.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  };

/* Type input */
const defaultText = document.getElementById('text').innerHTML;

function typeSomething() {
    let value = document.querySelector('input[type="text"]').value;
    console.log(value);
    
    let inputs = document.getElementsByClassName('text-i');
    Array.from(inputs).forEach(function(i){
        i.innerHTML = value;   
      
        if (value == '') {
          i.innerHTML = defaultText;
        }
    }) 
};
  

/*Change font size*/

function changeSize (){
  let selectedSize = document.getElementById('font-s').value
  let texts = document.getElementsByClassName('text-i');
  Array.from(texts).forEach(function(i) {
    i.style.fontSize = selectedSize;
  })
};

/*Change color-theme light/dark mode*/


function darkTheme() {
    document.documentElement.setAttribute('data-theme', 'dark')   
};

function lightTheme() {
  document.documentElement.setAttribute('data-theme', 'light')
};

/*Refresh page button*/

const defaultPage = document.body.innerHTML;

function refreshPage(){
    document.body.innerHTML = defaultPage;
    document.documentElement.setAttribute('data-theme', 'light')   
};

/*Scroll back to top button*/

let arrowButton = document.getElementById('arrow-button');
window.onscroll = function() {scrolling()};

function scrolling() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    arrowButton.style.display = 'block';
  } 
  else {
    arrowButton.style.display = 'none';
  }
};

function goUp() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

/*Change to list*/
const fontList = document.getElementById('fonts')
const switcher = document.querySelector('.grid-change');
    switcher.addEventListener('click', () => {
       fontList.classList.toggle('grid');
       fontList.classList.toggle('list');})    