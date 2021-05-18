
var numimg = 1;

function imageSlideR()
{
    numimg++;
    if (numimg==6)
    {
        numimg=1;
    }
    var image=document.getElementById("slidingImage");
    image.src="images/moreImages/"+numimg+".jpg";
    //setTimeout( imageSlideR, 3000);
    var captionss = document.getElementById('captions');
    switch(numimg) {
         case 1:
         captionss.innerHTML="this is the anticipated Call Of Duty Cold War";
         console.log("working 1");

         break;
         case 2:
         captionss.innerHTML="This is the new Cyberpunk 2077 Game that has been anticipated since its first teaser trailer in 2013";
         console.log("working 1");
         break;
         case 3:
         captionss.innerHTML="The new FIFA game brings excitement as always tp its millions of fans around the world";
         console.log("working 1");
         break;
         case 4:
         captionss.innerHTML="This is the new PS5 that is much anticipated as people want to see if it wins the new gen Console wars";
         console.log("working 1");
         break;
         case 5:
         captionss.innerHTML="This is the XBOX Series X that is competing with PS5 for the title of best console";
         console.log("working 1");
         break;
         default:
         captionss.innerHTML="These are the latest releases!";
         }

    }


function imageSlideL()
{
    numimg--;
    if (numimg==0)
    {
        numimg=5;
    }
    var image=document.getElementById("slidingImage");
    image.src="images/moreImages/"+numimg+".jpg";

    var captionss = document.getElementById('captions');
    switch(numimg) {
        case 1:
            captionss.innerHTML="this is the anticipated Call Of Duty Cold War";
            console.log("working 1");

            break;
        case 2:
            captionss.innerHTML="This is the new Cyberpunk 2077 Game that has been anticipated since its first teaser trailer in 2013";
            console.log("working 1");
            break;
        case 3:
            captionss.innerHTML="The new FIFA game brings excitement as always tp its millions of fans around the world";
            console.log("working 1");
            break;
        case 4:
            captionss.innerHTML="This is the new PS5 that is much anticipated as people want to see if it wins the new gen Console wars";
            console.log("working 1");
            break;
        case 5:
            captionss.innerHTML="This is the XBOX Series X that is competing with PS5 for the title of best console";
            console.log("working 1");
            break;
        default:
            captionss.innerHTML="These are the latest releases!";
    }
}

function display_registration(){
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function hide_registration(){
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}