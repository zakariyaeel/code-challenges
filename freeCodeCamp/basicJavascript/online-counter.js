const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let online = 0;
for(const user in allUsers){
if(allUsers[user].online === true){
  online+= 1;
}
}
return online;
  // Only change code above this line
}

console.log(countOnline(users));
