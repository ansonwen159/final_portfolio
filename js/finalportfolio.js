var rating;

function dogtext() {
  alert("Hi guys welcome to my portfolio *woof*!");
}

function rate() {
  let text;
  rating = prompt("how would you rate your experience from 1 to 10?");
  if (rating =>7){
      alert("thank you for the rating, hope you enjoyed :)");
  } 
  if (rating <7) {
      prompt("thank you for the rating, how can we improve?");
  }
}
