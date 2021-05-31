function primeNumberCruncher(input){
  let arr = []
  let letter 
  for(i=1;i<input;i++){
    for(j=i;j<input;j++){
      if(i % 1 === 0 && i % j === 0) {
        letter = i
      }
    }
    arr.push(letter)
  }
  return arr
}

console.log(primeNumberCruncher(10))