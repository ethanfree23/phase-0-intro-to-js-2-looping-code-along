


function writeCards(name, event){
    let newArray = [];// so we needed to make a newArray
    for(let i=0;i<name.length;i++) //this part was easy
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`) //since the newArray is empty, we need to push something to it: this sentence, with the references to name and event. We do name[i] because that is how we tell the engine to parse for each name.
    return newArray
}


function countDown(num){
    let loop = num+1 //expect 10 to log 11 times, so num+1
    while (loop>0){
    console.log(--loop);
    }
}






















// function writeCards(name, event){
//     let newArray = [];
//     for (let i=0; i<name.length;i++){
//         newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//     };
//     return newArray;
// };
  
// function countDown(num) {
//     let loop = num+1;
//     while (loop > 0) {
//         console.log(--loop);
        
//     } 
// };







/*
LOOPING NOTES:

for...loop:

for ([initialization]; [condition]; [iteration]) {
  [loop body]
}
AKA
for (i=0;i<#;i++)

i=0: this is the initailization
i<#: this is how many times we want to loop (condition); evaluated before each loop
i++: iteration; will involve either incrementing or decrementing
loop body: the code that is being passed through the loop




for...of
for(let book of books)
**does what for...loop does, just more consice


for...in

for (const property in properties)

*/