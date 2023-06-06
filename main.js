function genRandColor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function changeColColor (){
  $("#row_container").children().each(function(){
    var color = genRandColor();
    this.style.backgroundColor = color;  
    this.innerText = color;
  });
}

$(window).keypress(function (e) {
  if (e.key === ' ' || e.key === 'Spacebar') {
    changeColColor();
  }
})

$(window).on('load', function(){
  changeColColor();
});

$(window).on('load', function(e) {
  $("div").on("click", function(e){
    e.stopImmediatePropagation();
    var color = this.innerText
    console.log(color) 
    navigator.clipboard.writeText(color);
    alert("Color hex copied");
  });
})