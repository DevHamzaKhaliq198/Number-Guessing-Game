import inquirer from "inquirer";
const random=Math.floor(Math.random()*10);
const result:{
    userNumber:number
} = await inquirer.prompt([
    {
        name:"userNumber",
        type:"number",
        message:"Guess a Number from 1 to 10"
    }
])
const {userNumber}=result;
if(userNumber===random){
    console.log("Hurrah! You won the game");
    
}else{
    console.log("Guess again");
    
}
console.log("system generated number is:",random);
