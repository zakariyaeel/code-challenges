function convertHTML(str) {
  return str.replace(/(&)|(<)|(>)|(")|(')/g,(x)=>{
    switch(x){
      case '&':
        x = '&amp;';
        break;
      case '<':
        x = '&lt;';
        break;
      case '>':
        x = '&gt;';
        break;
      case '"':
        x = '&quot;';
        break;
      case '\'':
        x = '&apos;';
        break;
      default:
        x= "";
        break;
    }
    return x;
  });
}

console.log(convertHTML("Dolce & Gabbana"));
