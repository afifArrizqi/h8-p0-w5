function totalDigitRekursif(angka) {
  // you can only write your code here!
  let remainder  = 0;
  if(angka > 0){
    remainder = angka % 10;
    return remainder + totalDigitRekursif(Math.floor(angka/10));
  }else return 0;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5