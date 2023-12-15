// Only change code below this line
function urlSlug(title) {
  let arr = title.split(' ');
  let filtred = arr.filter(item => item !== "");
  return filtred.join('-').toLowerCase();

}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
