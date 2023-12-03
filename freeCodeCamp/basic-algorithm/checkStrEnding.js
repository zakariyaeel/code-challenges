function confirmEnding(str, target) {
    if(target === str.slice(str.length - target.length)){
       return true
    }
    return false;
  }
  
  confirmEnding("congratulation", "on");