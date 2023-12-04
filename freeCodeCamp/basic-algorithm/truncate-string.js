function truncateString(str, num) {
  if(str.length <= num){
    return str;
  }else if(str.length > num){
    let res = str.slice(0,num);
    return res + '...';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
