var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var vigenereTable = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A"], ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B"], ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C"], ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D"], ["F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E"], ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F"], ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G"], ["I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H"], ["J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I"], ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"], ["M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"], ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"], ["O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"], ["P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"], ["Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"], ["R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"], ["S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"], ["T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"], ["U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"], ["V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"], ["W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"], ["X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"], ["Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"], ["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]];

function vigenere(){
  console.log("H");
    if(document.getElementById('inputArea').value == ""){
        window.alert("Please Insert Text Into The Input Box.");
    }else if(document.getElementById('inputArea').value != ""){
      if(direction == 'encode'){
        encode();
      }else if(direction == 'decode'){
        decode();
      }else{
          window.alert("Please select a direction!");
      }
    }
  console.log(direction);
}

function encode(){
  console.log("he encodes");
    var plainText = document.getElementById('inputArea').value;
    var plainText= plainText.toLowerCase();
    var plainText = plainText.split('');
    for(var x = 0; x < plainText.length; x++){
        if (plainText[x] == ' '){
            plainText.splice(x, 1);
        }
    }
    var plainText = plainText.join('');
    var codeWord = prompt("Please enter the codeword");
    
    if(codeWord == null){
        document.getElementById('inputArea').value = "";
        document.getElementById('runButton').innerHTML = "Select Options";
        document.getElementById('runButton').disabled = true;
        return;
    }
    
    var repeatCount = Math.ceil(plainText.length/codeWord.length);
    var codePhrase = '';
    for(var g = 0; g < repeatCount; g++){
        var temp = codeWord;
        codePhrase += temp;
    }
    var count = 0;
    var encodedT = [];
    var encodedPhrase = [];
    var codeNumber = [];
    for(var i = 0; i < plainText.length; i++){
        for(var j = 0; j < 26; j++){
            if (plainText.charAt(i) == alphabet[j]){

                encodedT[i] = j;

            }
        }
        for(var z = 0; z < 26; z++){

            if(codePhrase.charAt(i) == alphabet[z]){

                codeNumber[i] = z;

            }
        }
        var letterArray = encodedT[i];
        var codeArray = codeNumber[i];
        encodedPhrase[i] = vigenereTable[letterArray][codeArray];
        }
    var encodedPhrase = encodedPhrase.join("");
    var encodedPhrase = encodedPhrase.toLowerCase();
    document.getElementById('outputArea').value = encodedPhrase;
}

function decode(){
  console.log("he decodes");
    var encodedText = document.getElementById("inputArea").value;
    if(encodedText !== encodedText.toUpperCase()){
        encodedText = encodedText.toUpperCase();
    }
    var encodedText = encodedText.split('');
    for(var x = 0; x < encodedText.length; x++){
        if (encodedText[x] == ' '){
            encodedText.splice(x, 1);
        }
    }

    var codeWord = prompt("Please enter the codeword");
    
    if(codeWord == null){
        document.getElementById('inputArea').value = "";
        document.getElementById('runButton').innerHTML = "Select Options";
        document.getElementById('runButton').disabled = true;
        return;
    }else if(codeWord.length == 0){
        document.getElementById('inputArea').value = "";
        document.getElementById('runButton').innerHTML = "Select Options";
        document.getElementById('runButton').disabled = true;
        return;
    }
    
    var repeatCount = Math.ceil(encodedText.length/codeWord.length);
    var codePhrase = '';
    for(var g = 0; g < repeatCount; g++){
        var temp = codeWord;
        codePhrase += temp;
    }
    var codePhrase = codePhrase.toLowerCase();
    var codePhrase = codePhrase.split("");

    var encodedNumbers = [];
    var codeArray = [];
    var decodedPhrase = [];
    
    /*End Init*/
    for(var l = 0; l < encodedText.length; l++){
        for(var p = 0; p < 26; p++){
            if(codePhrase[l] == alphabet[p]){

                codeArray[l] = p;

            }
        }
        var codeArrayNumber = codeArray[l];
        var currentArray = vigenereTable[codeArrayNumber];
        for(var y = 0; y < 26; y++){
            if(encodedText[l] == currentArray[y]){

                encodedNumbers[l] = y;

            }
        }
        var codeArrayNumber = codeArray[l];
        var encodedNumbersIndex = encodedNumbers[l];
        decodedPhrase[l] = alphabet[encodedNumbersIndex];
    }

    document.getElementById('outputArea').value = decodedPhrase.join("");
}
