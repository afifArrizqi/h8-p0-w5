function makanTerusRekursif(waktu) {
  // you can only write your code here!]
  let counter = 0
  if (waktu > 0) {
    counter++;
    return counter + makanTerusRekursif(waktu-15);
  }
  else return counter;
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0