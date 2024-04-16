#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 50000;
let myPin: number = 9999;


let pinAns = await inquirer.prompt([
  { name: "pin", message: "Enter Your Pin:", type: "number" },
]);


if (pinAns.pin === myPin) {
  console.log("The Entered Pin Code Is Correct!");

  let fastCash = await inquirer.prompt([
    {
      name: "operations",
      message: "Please Select The Options Below:",
      type: "list",
      choices: [
        "500 Rs",
        "1000 Rs",
        "5000 Rs",
        "10,000 Rs",
        "Other Amount",
        "Check Balance",
      ],
    },
  ]);



  if (fastCash.operations === "500 Rs") {
    myBalance -= 500;
    let receipt = await inquirer.prompt([
      {
        name: "rec",
        message: "Do You Want To Take Out Receipt?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ]);



    if (receipt.rec === "Yes") {
      console.log("-------------------------------------------");
      console.log("\t Deposit Receipt");
      console.log("-------------------------------------------");
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
      console.log("-------------------------------------------");
    } 
    
    else {
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
    }


  } 
  
  else if (fastCash.operations === "1000 Rs") {
    myBalance -= 1000;
    let receipt = await inquirer.prompt([
      {
        name: "rec",
        message: "Do You Want To Take Out Receipt?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ]);



    if (receipt.rec === "Yes") {
      console.log("-------------------------------------------");
      console.log("\t Deposit Receipt");
      console.log("-------------------------------------------");
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
      console.log("-------------------------------------------");
    } 
    
    else {
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
    }

  } 
  
  else if (fastCash.operations === "5000 Rs") {
    myBalance -= 5000;
    let receipt = await inquirer.prompt([
      {
        name: "rec",
        message: "Do You Want To Take Out Receipt?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ]);



    if (receipt.rec === "Yes") {
      console.log("-------------------------------------------");
      console.log("\t Deposit Receipt");
      console.log("-------------------------------------------");
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
      console.log("-------------------------------------------");
    } 
    
    else {
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
    }

  } 
  
  else if (fastCash.operations === "10,000 Rs") {
    myBalance -= 10000;
    let receipt = await inquirer.prompt([
      {
        name: "rec",
        message: "Do You Want To Take Out Receipt?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ]);



    if (receipt.rec === "Yes") {
      console.log("-------------------------------------------");
      console.log("\t Deposit Receipt");
      console.log("-------------------------------------------");
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
      console.log("-------------------------------------------");
    } 
    
    else {
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
    }
  } 
  
  else if (fastCash.operations === "Other Amount") {
    let otherAmount = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Amount:",
        type: "number",
      },
    ]);



    if (otherAmount.amount > myBalance) {
      console.log(
        `You Don't Have Sufficient Balance To Withdraw.\nCurrent Balance is ${myBalance} Rs.\n\t "Thank You!"`
      );
    } 
    
    
    else {
      myBalance -= otherAmount.amount;
      let receipt = await inquirer.prompt([
        {
          name: "rec",
          message: "Do You Want To Take Out Receipt?",
          type: "list",
          choices: ["Yes", "No"],
        },
      ]);
  
  
  
      if (receipt.rec === "Yes") {
        console.log("-------------------------------------------");
        console.log("\t Deposit Receipt");
        console.log("-------------------------------------------");
        console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
        console.log("Thank You!");
        console.log("-------------------------------------------");
      } 
      
      else {
        console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
        console.log("Thank You!");
      }
    }


  } 
  
  else if (fastCash.operations === "Check Balance") {
    let receipt = await inquirer.prompt([
      {
        name: "rec",
        message: "Do You Want To Take Out Receipt?",
        type: "list",
        choices: ["Yes", "No"],
      },
    ]);



    if (receipt.rec === "Yes") {
      console.log("-------------------------------------------");
      console.log("\t Deposit Receipt");
      console.log("-------------------------------------------");
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
      console.log("-------------------------------------------");
    } 
    
    else {
      console.log(`Your Remaining Balance Is: ${myBalance} Rs.`);
      console.log("Thank You!");
    }
    
  }

} 

else {
  console.log("\tINVALID PIN ERROR\n\tPlease Enter A Valid Pin!");
}