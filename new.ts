import inquirer from "inquirer"
const currency :any ={
    USD: 1,//base currence
    EUR : 0.91,
    IND : 74.57,
    PKR :280

}
 let answer  = await inquirer.prompt([{
    name:"form",
    message:"Enter your currency",
    type:"list",
    choices:["USD","EUR","INR","PKR"],
 },
 {
    name:"for",
    message:"Enter to currency",
    type:"list",
    choices:["USD","EUR","INR","PKR"]
 },
 {
    name:"amount",
    type:"number",
    message:"Enter your amount"
 }


 ]);

 let fromamount = currency[answer.form]
 let toamount = currency[answer.for]
 let amount = answer.amount
 let baseamount = amount/fromamount
 let convertamount = baseamount*toamount
 console.log(convertamount)
