// user instances
const jason = {
  name: 'peter',
  age: 36,
  career: 'engineer',
};

const zach = {
  name: 'zach',
  age: 42,
  career: 'recruiter',
};

// abstract user instances with ES5 function constructor
// what stays the same for each object instance, and what doesn't?
function User(name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career;
}

const Mark = new User('Mark', 45, 'landload');
