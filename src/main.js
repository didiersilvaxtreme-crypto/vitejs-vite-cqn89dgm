import "./style.css";


const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");

const typingText = document.getElementById("typingText");

const giftBtn = document.getElementById("giftBtn");

const finalMusic = document.getElementById("finalMusic");


const startBtn = document.getElementById("startBtn");


const score = document.getElementById("score");
const gameArea = document.getElementById("gameArea");


const response = document.getElementById("response");
const response2 = document.getElementById("response2");


let flowers = 0;



/* START */

startBtn.addEventListener("click", () => {

  scene1.classList.remove("active");
  scene2.classList.add("active");

  createFlower();

});



/* FLOWERS */

function createFlower(){

  const flower = document.createElement("div");

  flower.classList.add("flower");
  flower.innerHTML = "🌸";

  const x = Math.random() * 650;
  const y = Math.random() * 330;

  flower.style.left = x + "px";
  flower.style.top = y + "px";


  flower.addEventListener("click", () => {

    flowers++;

    score.textContent = `${flowers} / 18 🌸`;

    flower.remove();

    if(flowers >= 18){

      scene2.classList.remove("active");
      scene3.classList.add("active");

    }else{

      createFlower();

    }

  });

  gameArea.appendChild(flower);

}



/* QUESTION 1 */

document.querySelector(".correct").addEventListener("click", () => {

  response.textContent = "Correcto ❤️";

  setTimeout(() => {

    scene3.classList.remove("active");
    scene4.classList.add("active");

  },1500);

});

document.querySelectorAll(".wrong").forEach(button => {

  button.addEventListener("click", () => {

    response.textContent = "No 😌 intenta otra vez";

  });

});



/* QUESTION 2 */

document.querySelector(".correct2").addEventListener("click", () => {

  response2.textContent = "Exactamente ❤️";

  setTimeout(() => {

    scene4.classList.remove("active");
    scene5.classList.add("active");

    setTimeout(() => {

      startTyping();

    }, 2000);

  }, 1500);

});   // ← ESTE FALTABA

document.querySelectorAll(".wrong2").forEach(button => {

  button.addEventListener("click", () => {

    response2.textContent = "Nope 😆";

  });

});

document.querySelectorAll(".wrong2").forEach(button => {

  button.addEventListener("click", () => {

    response2.textContent = "Nope 😆";

  });

});
const message = `

Hola corazoncito ✨

No suelo medir la importancia de las personas por el tiempo.

Y aunque apenas son 13 días…

me alegra muchísimo haber coincidido contigo.

Me gustan las horas hablando contigo por Discord.

Las películas.

Los juegos.

Y sobre todo…

que incluso en poco tiempo lograste hacer
que quisiera dedicar tiempo creando esto.

Porque no quería regalarte algo cualquiera.

Quería regalarte algo hecho por mi.

Así que…

felices 18 ❤️

`;

let index = 0;



function startTyping(){

  function write(){

    if(index < message.length){

      typingText.textContent += message.charAt(index);

      index++;

      setTimeout(write,40);

    }else{

      giftBtn.style.display = "block";

    }

  }

  write();

}



giftBtn.addEventListener("click",()=>{

  scene5.classList.remove("active");
  scene6.classList.add("active");

  finalMusic.volume = 0.5;

  finalMusic.play();

  createHeart();

  setInterval(createHeart,500);

});



function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  const size = Math.random() * 25 + 20;
  const duration = Math.random() * 3 + 3;

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = size + "px";

  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, duration * 1000);

}