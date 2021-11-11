
function writeCards(name, event){
    let newArray = [];
    for (let i=0; i<name.length;i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    };
    return newArray;
};
  
function countDown(num) {
    let loop = num+1;
    while (loop > 0) {
        console.log(--loop);
        
    } 
};
