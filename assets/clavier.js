

//  the background music  //
/*window.addEventListener("click",()=>{
    document.getElementById("song").play();
})*/

let buttons = document.querySelectorAll('.letter-btn');
let textbox = document.getElementById('textbox');
buttons.forEach(button => {
  button.addEventListener("click", () => {
    textbox.value += button.innerText;

  })
})
document.addEventListener("keydown",(event)=>{
  if(event.shiftKey){
    myshift()
  }
})
/* play song function  
buttons.forEach(button=>{
button.addEventListener("click",()=>{
    document.getElementById("song").play()
})
})*/

//  Delete function  //
function mydelete() {
  let currenttext = textbox.value;
  if (currenttext.length > 0) {
    textbox.value = currenttext.slice(0, -1)
  }
}
//  shift function  //
function myshift() {
  let letters = document.querySelectorAll('.letter-btn');
  letters.forEach(letter => {
      switch (letter.innerText) {
        case '1':
          letter.innerText = '&';
          break;
        case '2':
          letter.innerText = '@';
          break;
        case '3':
          letter.innerText = '#';
          break;
        case '4':
          letter.innerText = "'";
          break;
        case '5':
          letter.innerText = '(';
          break;
        case '6':
          letter.innerText = ')';
          break;
        case '7':
          letter.innerText = '-';
          break;
        case '8':
          letter.innerText = '_';
          break;
        case '9':
          letter.innerText = '*';
          break;
        case '0':
          letter.innerText = '!';
          break;
        case '&':
          letter.innerText = '1';
          break;
        case '@':
          letter.innerText = '2';
          break;
        case '#':
          letter.innerText = '3';
          break;
        case "'":
          letter.innerText = "4";
          break;
        case '(':
          letter.innerText = '5';
          break;
        case ')':
          letter.innerText = '6';
          break;
        case '-':
          letter.innerText = '7';
          break;
        case '_':
          letter.innerText = '8';
          break;
        case '*':
          letter.innerText = '9';
          break;
        case '!':
          letter.innerText = '0';
          break;

        default:
        // Do nothing
      }
   
      // Toggle between upper and lower case for letters
      if (letter.innerText === letter.innerText.toUpperCase()) {
        letter.innerText = letter.innerText.toLowerCase();
      } else {
        letter.innerText = letter.innerText.toUpperCase();
      }
    
  });

}
//  space function  //
function myspace() {
  let textbox = document.getElementById("textbox");
  if (textbox) {
    let currenttext = textbox.value;
    currenttext = currenttext + " ";
    textbox.value = currenttext;
  }
}
const container = document.querySelector('.container');
container.addEventListener("click", () => {
  textbox.focus()
});
//  Copy text function  //
function textcopy() {
  var textarea = document.getElementById('textbox');
  textarea.select();
  try {
    document.execCommand('copy');

  } catch (err) {
    console.error('Unable to copy text to clipboard', err);
  }
}
//  Search in Google function  //
function searchGoogle() {
  var textbox = document.getElementById("textbox").value;
  var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(textbox);
  window.open(searchUrl, "_blank");
}

//  Search In Youtube function  //
function searchYoutube() {
  let textbox = document.getElementById("textbox").value;
  let searchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(textbox);
  window.open(searchUrl, "_blank");
}


