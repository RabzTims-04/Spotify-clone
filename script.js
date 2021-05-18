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
  const playButton = document.querySelectorAll(".play-pause");
 /*  const smallPlayButton = document.querySelector("#smallFooter .play"); */
  /* const pauseButton = document.querySelectorAll(".pause"); */
 /*  const smallPauseButton = document.querySelector("#smallFooter .pause"); */
/*   function play() {
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
  } */

  function play(){
      for(let i=0; i<playButton.length; i++){
        playButton[i].addEventListener('click', (e)=>{
            if(audio.paused){
              audio.play()
              playButton[i].classList.remove('fa-play-circle')
              playButton[i].classList.add('fa-pause-circle')  
            }
            else{
              audio.pause()
              playButton[i].classList.remove('fa-pause-circle')
              playButton[i].classList.add('fa-play-circle')
            }
        })
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

  const followButton = function(){

   
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9711bd8aa6msh6284e18a8f73758p17b3bfjsndd4d8e4e8ff4",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    
    .then((eminem) =>{ 
    console.log(eminem);
    let followButton = document.querySelector('.artist-follow')
    let eminemPage = document.querySelector('a[href="eminem.html"] img')
    let eminemCard = document.querySelectorAll('.eminemCards img')
     console.log(followButton);
    console.log(eminemCard);
    console.log(eminemPage);
    
      console.log('click');

      
        for(let i=0; i<eminem.data.length; i++){

          eminemCard[i].classList.add('img-fluid')
          eminemCard[i].src = eminem.data[i].album.cover
        }
      

      
   
  })
     
    .catch(err => { console.error(err);
    });

  }

  const BehemothButton = function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth", {
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "9711bd8aa6msh6284e18a8f73758p17b3bfjsndd4d8e4e8ff4",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
  })
  .then((response) => response.json())
  
  .then((behom) =>{ console.log(behom);

    let followButton = document.querySelector('.artist-follow')
    let eminemPage = document.querySelector('a[href="eminem.html"] img')
    let eminemCard = document.querySelectorAll('.eminemCards img')
     console.log(followButton);
    console.log(eminemCard);
    console.log(eminemPage);
    
      console.log('click');

      
        for(let i=0; i<eminem.data.length; i++){

          eminemCard[i].classList.add('img-fluid')
          eminemCard[i].src = eminem.data[i].album.cover
        }

  
  })
   
  .catch(err => { console.error(err);
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
   

   

    
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9711bd8aa6msh6284e18a8f73758p17b3bfjsndd4d8e4e8ff4",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    
    .then((data) =>{ console.log(data);})
     
    .catch(err => { console.error(err);
    });
    
  


  };