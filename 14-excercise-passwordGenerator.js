function changeVocals (str) {
  //code di sini
  let hasil = '';
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    switch(char){
      case "A": hasil += "B"; break;
      case "E": hasil += "F"; break;
      case "I": hasil += "J"; break;
      case "O": hasil += "P"; break;
      case "U": hasil += "V"; break;
      case "a": hasil += "b"; break;
      case "e": hasil += "f"; break;
      case "i": hasil += "j"; break;
      case "o": hasil += "p"; break;
      case "u": hasil += "v"; break;
      default: hasil += char; break;
    }
  }
  return hasil;
}
// console.log(changeVocals("abc"));
function reverseWord (str) {
  //code di sini
  let hasil = '';
  for(let i = str.length-1; i >= 0; i--){
    hasil += str[i];
  }
  return hasil;
}
// console.log(reverseWord("abc"));
function setLowerUpperCase (str) {
  //code di sini
  const dictUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictLower = "abcdefghijklmnopqrstuvwxyz";
  let hasil = '';
  for(let i = 0; i < str.length; i++){
    let flag = true;
    for(let j = 0; j < dictUpper.length; j++){
      if(str[i] === dictUpper[j]){
        hasil += dictLower[j];
        flag = false;
      }else if(str[i] === dictLower[j]){
        hasil += dictUpper[j];
        flag = false;
      }
    }
    if(flag) hasil += str[i];
  }
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  let hasil = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] !== " ") hasil += str[i];
  }
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  const change = changeVocals(name);
  const reverse = reverseWord(change);
  const setLowUp = setLowerUpperCase(reverse);
  const remove = removeSpaces(setLowUp);
  if(name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter";
  return remove;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'