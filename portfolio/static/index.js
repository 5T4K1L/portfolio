document.addEventListener("DOMContentLoaded", () => {
  let homeanimation = document.getElementById("homeanimation");
  let body = document.querySelector("body");
  let boximage1 = document.getElementById("boximage1");
  let boximage2 = document.getElementById("boximage2");
  let boximage3 = document.getElementById("boximage3");
  let boximage4 = document.getElementById("boximage4");
  let boximage5 = document.getElementById("boximage5");
  let boximage6 = document.getElementById("boximage6");
  let boximage7 = document.getElementById("boximage7");
  let boximage8 = document.getElementById("boximage8");
  let boximage9 = document.getElementById("boximage9");

  homeanimation.addEventListener("animationend", () => {
    body.style.overflow = "scroll";

    for (i = 1; i != 9; i++) {
      boximage1.style.animation = `boxanimate${i} 4s ease-in-out forwards`;
      boximage2.style.animation = `boxanimate${i} 3.5s ease-in-out forwards`;
      boximage3.style.animation = `boxanimate${i} 4.8s ease-in-out forwards`;
      boximage4.style.animation = `boxanimate${i} 2.5s ease-in-out forwards`;
      boximage5.style.animation = `boxanimate${i} 3s ease-in-out forwards`;
      boximage6.style.animation = `boxanimate${i} 1.5s ease-in-out forwards`;
      boximage7.style.animation = `boxanimate${i} 1s ease-in-out forwards`;
      boximage8.style.animation = `boxanimate${i} 4.5s ease-in-out forwards`;
      boximage9.style.animation = `boxanimate${i} 2s ease-in-out forwards`;
    }
  });
});
