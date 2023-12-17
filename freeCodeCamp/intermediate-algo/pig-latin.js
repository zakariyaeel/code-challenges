function translatePigLatin(str) {
  let regx = /^[^auieo]+/;
  let match = str.match(regx);
  return match !== null?
  str.replace(regx,'').concat(match,'ay'):
  str.concat('way');
}

console.log(translatePigLatin("california"));
