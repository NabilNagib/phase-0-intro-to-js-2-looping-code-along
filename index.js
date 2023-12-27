// Code your solutions in this file
//Write Card 
function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }
  const messages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  console.log(messages);
  

//Count Down
function countDown(number) {
    let i = number;
    while (i >= 0) {
       console.log(i);
       i--;
    }
   }
   countDown(10);