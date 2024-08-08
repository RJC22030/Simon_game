//colorArr
var colorArr=["red","green","yellow","blue"];

var pos=0;
var start=false;
//randomNumber generator function
function randomNumber()
{
    var randNum=Math.random()*3;
    randNum=Math.round(randNum);
    randNum=randNum+1;
    return randNum;
}

//gameSequence Array and playerSequence
var gameSequence=[];
var playerSequence=[];
//randomSequence generator which creates a gameSequence array
function randSequenceGenerator(){
    for(var i=0;i<15;i++)
    {
        gameSequence[i]=randomNumber();
        switch(gameSequence[i])
        {
            case 1:
                gameSequence[i]=colorArr[0];
                break;
            
            case 2:
                gameSequence[i]=colorArr[1];
                break;
            
            case 3:
                gameSequence[i]=colorArr[2];
                break;
            
            case 4:
                gameSequence[i]=colorArr[3];
                break;
        }
    }
    console.log(gameSequence);
    }

function wrongAlert()
{
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
}
function checkSequence(iterator)
{
    if(gameSequence.length)
    {
    for(var i=0;i<iterator;i++)
    {
        console.log(pos);
        console.log(gameSequence);
        console.log(playerSequence);
        if(gameSequence[i]==playerSequence[i]&&i==pos)
        {
            return true;
        }    
        else if(gameSequence[i]==playerSequence[i]) continue;
        else{
            $("p").text("Press any Key to ReStart 👻").css("margin-left","10%");
            wrongAlert();
            $("p").removeClass("level");
            $("body").addClass("red");
           setTimeout(()=>{
            $("body").removeClass("red");
           },500)
            return false;
        }
    }
       
}}
    

//Event listener click added to the buttons adds the ids of the buttons to the playerSequence array
for(var i=0;i<colorArr.length;i++)
{
    $("."+colorArr[i]).on("click",(
/*This is a IIFE (Immediately Invoked function Expression) that creates a closure and 
makes sure when the button is clicked the return function is executed and 
correct color is added to the playerSequence Array */
    function(color){
       
        return function(){
          
            if(start);
                {
        
            playerSequence.push(color);
            

            if(checkSequence(playerSequence.length))
            {
            if(playerSequence.length==(pos+1))
            {
                playSound(++pos);
            }
        
    }
        }
    }
    }(colorArr[i])))
}

//This function plays sound and fadesIn and fadesOut buttons.
function playSound(input)
{
    var input=gameSequence[input];
    var audio=new Audio;
    audio.src="sounds/"+input+".mp3";
    audio.load();
    console.log("sounds/"+input+".mp3")
    $("."+input).fadeOut().fadeIn();
    audio.play();
    $("p").text("Level "+(pos+1)).css("text-align", "center");
    $("p").addClass("level");
    playerSequence=[];
    //button animations
}


//0 is passed as an argument to playsound;
function showFirst()
{
    playSound(pos);
    start=true;

}
//When the user presses any key, the first sequence is shown.
$(document).keydown(function(){
    pos=0;
    randSequenceGenerator();
    showFirst();
    
})
