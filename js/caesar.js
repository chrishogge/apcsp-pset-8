var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function caesar(direction){
    console.log("H");
    if(document.getElementById('inputArea').value == ""){
        window.alert("Please Insert Text Into The Input Box.");
    }else if(document.getElementById('inputArea').value != ""){
        if(direction == 'encode'){
        cEncode();
      }else if(direction == 'decode'){
        cDecode();
      }else{
          window.alert("Please select a direction!");
      }
    }
  console.log(direction);
}

function cEncode() {
    var plainText = document.getElementById('inputArea').value;
    var shift = prompt("Please enter the shift of the cipher");
    
    if(shift == null){
        document.getElementById('inputArea').value = "";
        document.getElementById('runButton').innerHTML = "Select Options";
        document.getElementById('runButton').disabled = true;
        return;
    }
    
    var shift = shift % 26;
    var plainText = plainText.toLowerCase();
    var plainText = plainText.split("");
    var encodedText = [];
    for(var i = 0; i < plainText.length; i++){
        for(var j =0; j < 26; j++){
            if(plainText[i] == alphabet[j]){
                encodedTextNumber = j;
                encodedText[i] = alphabet[encodedTextNumber+shift];
            }
        }
    }
    console.log(encodedText.join(""));
    document.getElementById('outputArea').value = encodedText.join("");
}

function cDecode() {
    var plainText = document.getElementById('inputArea').value;
    var shift = prompt("Please enter the shift of the cipher");
    
    if(shift == null){
        document.getElementById('inputArea').value = "";
        document.getElementById('runButton').innerHTML = "Select Options";
        document.getElementById('runButton').disabled = true;
        return;
    }
    
    var shift = shift % 26;
    var plainText = plainText.toLowerCase();
    var plainText = plainText.split("");
    var decodedText = [];
    for(var i = 0; i < plainText.length; i++){
        for(var j =0; j < 26; j++){
            if(plainText[i] == alphabet[j]){
                decodedTextNumber = j;
                decodedText[i] = alphabet[decodedTextNumber-shift];
            }
        }
    }
    console.log(decodedText.join(""));
    document.getElementById('outputArea').value = decodedText.join("");
}