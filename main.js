function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (7 - 1)) + 1;
  }

  document.getElementById("con2").addEventListener("click", function() {
    document.getElementById("con1").innerHTML = getRandomInt();
  });
  
  // console.log(getRandomInt());