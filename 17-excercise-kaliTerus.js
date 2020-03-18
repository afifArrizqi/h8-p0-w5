function kaliTerusRekursif(angka) {
  // you can only write your code here!
  const rem = angka % 10;
  const div = Math.floor(angka/10);
  if(angka < 10) return angka;
  else if(rem * div > 9) return kaliTerusRekursif(rem * div);
  else return rem * div;
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6