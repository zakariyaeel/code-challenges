function rot13(str) {
  return str.replace(/[a-zA-Z]/g,(char)=>{
    let charCode = char.charCodeAt(0);
    let codeA;
    if(char>="A" && char <= "Z"){
      codeA = "A".charCodeAt(0);
    }else{
      codeA = "a".charCodeAt(0);
    }
    return String.fromCharCode((charCode - codeA + 13) % 26 + codeA);
  });
}

console.log(rot13("SERR PBQR PNZC"));
