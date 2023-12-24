const Person = function(first, last) {
  let fname = first;
  let lname = last;
  this.getFullName = function() {
    return fname + ' '+ lname;
  };
  this.getFirstName = function() {
    return fname;
  };
  this.getLastName = function() {
    return lname;
  };
  this.setFirstName = function(first) {
    return fname = first;
  };
  this.setLastName = function(name) {
    return lname = name;
  };
  this.setFullName = function(first,last) {
    this.setFirstName(first)
    this.setLastName(last)
    
    return this.getFullName();
  };
  return "";
};
