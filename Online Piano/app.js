keys = document.addEventListener("keydown",  function (event){
    if (event.code === "KeyA"){
        let sound_A = new Audio("music/A.mp3")
        sound_A.play()
        sound_A.volume = 0.1;
        console.log("The 'A' key is pressed.");
        if (event.repeat){
            sound_A.muted = true;
        }
        let key_S = document.getElementById("key_A")
        key_S.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyA"){
                key_S.style.background = "white";
            }
        });
    }
    else if(event.code === "KeyS"){
        let sound_S = new Audio("music/S.mp3")
        sound_S.volume = 0.1;
        sound_S.play();
        console.log("The 'S' key is pressed.")
        if (event.repeat){
            sound_S.muted = true;
        }
        let key_S = document.getElementById("key_S")
        key_S.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyS"){
                key_S.style.background = "white";
            }
        });
    }
    else if(event.code === "KeyD"){
        let sound_D = new Audio("music/D.mp3")
        sound_D.volume = 0.1;
        sound_D.play();
        console.log("The 'D' key is pressed.")
        if (event.repeat){
            sound_D.muted = true;
        }
        let key_D = document.getElementById("key_D")
        key_D.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyD"){
                key_D.style.background = "white";
            }
        });
    }
    else if(event.code === "KeyF"){
        let sound_F = new Audio("music/F.mp3")
        sound_F.volume = 0.1;
        sound_F.play();
        console.log("The 'F' key is pressed.")

        if (event.repeat){
            sound_F.muted = true; // ОТКЛЮЧЕНИЕ ЗВУКА ПРИ ЗАЖАТОЙ КЛАВИШЕ
        }

        let key_F = document.getElementById("key_F")
        key_F.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyF"){
                key_F.style.background = "white";
            }
        });
    }
    else if(event.code === "KeyG"){
        let sound_G = new Audio("music/G.mp3")
        sound_G.volume = 0.1;
        sound_G.play();
        console.log("The 'G' key is pressed.")
        if (event.repeat){
            sound_G.muted = true;
        }
        let key_G = document.getElementById("key_G")
        key_G.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyG"){
                key_G.style.background = "white";
            }
        });
    }
    else if(event.code === "KeyH"){
        let sound_H = new Audio("music/H.mp3")
        sound_H.volume = 0.1;
        sound_H.play();
        console.log("The 'H' key is pressed.")
        let key_H = document.getElementById("key_H")
        if (event.repeat){
            sound_H.muted = true;
        }
        key_H.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyH"){
                key_H.style.background = "white";
            }
        });
    }
    else if(event.code === "KeyJ"){
        let sound_J = new Audio("music/J.mp3")
        sound_J.volume = 0.1;
        sound_J.play();
        console.log("The 'J' key is pressed.")
        if (event.repeat){
            sound_J.muted = true;
        }
        let key_J = document.getElementById("key_J")
        key_J.style.background = "gray";
        let key_up = document.addEventListener("keyup", function (event){
            if(event.code === "KeyJ"){
                key_J.style.background = "white";
            }
        });
    }
    else{
        console.log("Warning you pressed" + event.code)
    }


});

black_keys = document.addEventListener("keydown",function (event){
   if (event.code === "KeyW"){
       let sound_W = new Audio("music/W.mp3")
       sound_W.volume = 0.2;
       sound_W.play();
       if (event.repeat){
           sound_W.muted = true;
       }
       let key_pressed = document.getElementById("W")
       key_pressed.style.background = "#8A2BE2";

       document.addEventListener("keyup",function (e){
           key_pressed.style.background = "black";
       })
   }
   else if (event.code === "KeyE"){
       let sound_E = new Audio("music/E.mp3")
       sound_E.volume = 0.2;
       sound_E.play();
       if (event.repeat){
           sound_E.muted = true;
       }
       let key_pressed = document.getElementById("E")
       key_pressed.style.background = "#8A2BE2";

       document.addEventListener("keyup",function (e){
           key_pressed.style.background = "black";
       })
   }
   else if (event.code === "KeyT"){
       let sound_T = new Audio("music/T.mp3")
       sound_T.volume = 0.2;
       sound_T.play()

       if (event.repeat){
           sound_T.muted = true;
       }
       let key_pressed = document.getElementById("T")
       key_pressed.style.background = "#8A2BE2";

       document.addEventListener("keyup",function (e){
           key_pressed.style.background = "black";
       })
   }
   else if(event.code === "KeyY"){

       let sound_Y = new Audio("music/Y.mp3")
       sound_Y.volume = 0.2;
       sound_Y.play();

       if (event.repeat){
           sound_Y.muted = true;
       }

       let key_pressed = document.getElementById("Y")
       key_pressed.style.background = "#8A2BE2";

       document.addEventListener("keyup",function (e){
           key_pressed.style.background = "black";
       })
   }
   else if(event.code === "KeyU"){
       let sound_U = new Audio("music/U.mp3")
       sound_U.volume = 0.2;
       sound_U.play();
       if (event.repeat){
           sound_U.muted = true;
       }
       let key_pressed = document.getElementById("U")
       key_pressed.style.background = "#8A2BE2";

       document.addEventListener("keyup",function (e){
           key_pressed.style.background = "black";
       })
   }
});


let a = 4;

console.log(a + 4)