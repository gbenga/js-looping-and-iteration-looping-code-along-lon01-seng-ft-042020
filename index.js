// Code your solutions in this file
// const names1 = ["Ada", "Brendan", "Ali"]

function writeCards(names,day) {
    let messages = []
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${day} gift!`);

    }
    return messages
}

function countDown(num){
    let i = num;
    while (i > -1) {
        console.log(i);
        i--;
    }
}