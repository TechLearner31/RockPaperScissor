let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const userscore1=document.querySelector("#userscore");
const compscore1=document.querySelector("#compscore");
//for userchoice
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        game(userchoice);
    });
});
//for computerchoice
const compchoice=()=>{
    const options=["rock","paper","scissor"];
    const randind=Math.floor(Math.random()*3);
    return options[randind];

};
const game=(userchoice)=>{
    console.log("You have clicked your choice as",userchoice);
    const compchoice1=compchoice();
    console.log("Computer choice is:",compchoice1);
    if(userchoice===compchoice1){
        draw();

    }
    else{
        let userwin=true;
        if(userchoice==="rock")
            {
                userwin=compchoice1==="paper"? false: true;
            }
            else if(userchoice==="paper")
                {
                    userwin=compchoice1==="scissor"? false: true;
                }
            else{
                userwin=compchoice1==="rock"? false: true;
            }
            showwin(userwin,userchoice,compchoice1);
    }
};
const draw=()=>{
    console.log("Game is draw");
    msg.innerText="There is a draw..Comp choice is also same";
    msg.style.backgroundColor="brown";
};

const showwin=(userwin,userchoice,compchoice1)=>{
    if(userwin)
        {
            userscore++;
            userscore1.innerText=userscore;
            console.log("You win");
            msg.innerText=`You have won! Your choice ${userchoice} beats ${compchoice1}`;
            msg.style.backgroundColor="green";

        }
    else
    {
        compscore++;
        compscore1.innerText=compscore;
        console.log("You lose");
        msg.innerText=`You lose.Try Again.Comp choice ${compchoice1} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};    


