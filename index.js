/*links disabled*/

let links = document.getElementsByClassName("links");
window.onload = function(){
    Array.from(links).forEach(function(link){
        link.addEventListener("click", event => {
            console.info("link disabled")
            event.preventDefault()})
        })
    };

  

/* Search input*/

function search() {
    let input = document.getElementById('search-font');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("fonts");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
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

const typeSomething = document.forms['text-input']
typeSomething.addEventListener('keyup', e => {
    e.preventDefault();
    const value = typeSomething.querySelector('input[type="text"]').value;
    console.log(value);
    let inputs = document.getElementsByClassName('text-i');
    Array.from(inputs).forEach(function(i){
        i.innerHTML = value;
    })

})

/*Font size*/



/*Disable grid-button*/

/* let button = document.getElementById("grid");
window.onload = function(){
    button.addEventListener("click", event => {
        console.warn("Button disabled")
        event.preventDefault();
})}; */


/*Refresh page button*/

function refreshPage(){
    console.info("Reload")
    window.location.reload(false);
};
