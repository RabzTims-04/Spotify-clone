function heart(){
    const heartIcon = document.querySelectorAll('.heart-icon')
    for(let i=0; i<heartIcon.length; i++){
        heartIcon[i].addEventListener('click',function(e){
        e.currentTarget.classList.toggle('fa-heart-o')
          }) 
    }
           
  }

  function cardPlay(){
      const cardPlayButton = document.querySelectorAll('.card-play')
      for(let i=0; i<cardPlayButton.length; i++){
          cardPlayButton[i].addEventListener('click', (e)=>{
              location.href ="album.html"
          })
      }
  }

  function queenSong(){
      const queenPlayButton = document.querySelectorAll('.queen-play')
      const queenAudio = document.getElementById('queen-audio')
      for(let i=0; i<queenPlayButton.length; i++){
        queenPlayButton[i].addEventListener('click',(e)=>{
        if(queenPlayButton[i].innerText == "PLAY"){
            queenAudio.play()
            queenPlayButton[i].innerText = `PAUSE`;
        }
        else{
            queenAudio.pause()
            queenPlayButton[i].innerText = 'PLAY'
        }
        
        })

      }
      
  }

  const audio = document.getElementById("myAudio");
  const playButton = document.querySelectorAll(".play");
 /*  const smallPlayButton = document.querySelector("#smallFooter .play"); */
  const pauseButton = document.querySelectorAll(".pause");
 /*  const smallPauseButton = document.querySelector("#smallFooter .pause"); */
  function play() {
    for(let i=0; i<playButton.length; i++){
      playButton[i].addEventListener("click", function (e) {
      audio.play();
      playButton[i].style.visibility = "hidden";
      pauseButton[i].style.visibility = "visible";
    });
    pauseButton[i].addEventListener("click", function (e) {
      audio.pause();
      pauseButton[i].style.visibility = "hidden";
      playButton[i].style.visibility = "visible";
    });
    }  
  }

  function backward() {
    const previousButton = document.querySelectorAll(".fa-step-backward");
    for(let i=0; i<previousButton.length; i++){
        previousButton[i].addEventListener("click", function (e) {
        audio.currentTime -= 30.0;
        });
    }
  }

  function forward() {
    const nextButton = document.querySelectorAll(".fa-step-forward");
    for(let i=0; i<nextButton.length; i++){
        nextButton[i].addEventListener("click", function (e) {
        audio.currentTime += 30.0;
          });
    }
  }

  function restart() {
    const repeatButton = document.querySelector(".repeat");
    repeatButton.addEventListener("click", function () {
      audio.currentTime = 0.0;
    });
  }
  window.onload = function () {
    play();
    backward();
    forward();
    restart();
    heart();
    cardPlay();
    queenSong();
  };