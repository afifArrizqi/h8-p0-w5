function sorting(arrNumber) {
  // code di sini
  if(!arrNumber.length) return [];
  for(let i = 0; i < arrNumber.length; i++){
    for(let j = 0; j < arrNumber.length; j++){
      if(arrNumber[j] < arrNumber[j+1]){
        [arrNumber[j], arrNumber[j+1]] = [arrNumber[j+1], arrNumber[j]];
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  let counter = 0;
  let i = 0;
  if(!arrNumber.length) return "''";
  while(arrNumber[i] === arrNumber[0]) {
    counter++;
    i++;
  }
  return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${counter} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''