function palindrome(str) {
  let rev = str.split('').reverse().join('').toLowerCase();
  let clean = rev.split(/\s|[-_.,():/\\]/g).join('');
  let cleanStr = str.split(/\s|[-_.,():/\\]/g).join('').toLowerCase();
  console.log(clean === cleanStr)
 
  return cleanStr === clean;
}

palindrome("0_0 (: /-\ :) 0-0");
