function encrypt(input) {
  const inputArr = input.split('')

  let encryptInputArr = []
  
  for (i = 0; i < inputArr.length; i++) {
    let letter;
    switch (inputArr[i]) {
      case 'a':
        letter = '1'
        break;
      case 'b':
        letter = '2'
        break;
      case 'c':
        letter = '3'
        break;
      case 'd':
        letter = '4'
        break;
      case 'e':
        letter = '5'
        break;
      case 'f':
        letter = '6'
        break;
      case 'g':
        letter = '7'
        break;
      case 'h':
        letter = '8'
        break;
      case 'i':
        letter = '9'
        break;
      case 'j':
        letter = '10'
        break;
      case 'k':
        letter = '11'
        break;
      case 'l':
        letter = '12'
        break;
      case 'm':
        letter = '13'
        break;
      case 'n':
        letter = '14'
        break;
      case 'o':
        letter = '15'
        break;
      case 'p':
        letter = '16'
        break;
      case 'p':
        letter = '17'
        break;
      case 'p':
        letter = '18'
        break;
      case 'p':
        letter = '19'
        break;
      case 'p':
        letter = '20'
        break;
      case 'p':
        letter = '21'
        break;
      case 'p':
        letter = '22'
        break;
      case 'p':
        letter = '23'
        break;
      case 'p':
        letter = '24'
        break;
      case 'p':
        letter = '25'
        break;
      case 'p':
        letter = '26'
        break;
      default:
        letter = inputArr[i]
        break;
    }
    encryptInputArr.push(letter)
  // console.log('encrypt input', encryptInputArr)
  }
return encryptInputArr.join('')
}
console.log(encrypt('dede'))
