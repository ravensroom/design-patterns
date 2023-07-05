// more requirements come, create more constructors
// but there are a lot of different personels
function Coder(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'coder';
  this.work = ['Write code', 'Fix bugs'];
}

function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'product manager';
  this.work = [
    'Book meeting rooms',
    'Analyze functionalities',
    'Encourage coders',
  ];
}

// abstract commonalities
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

// simple factory: encapsulate the process of creating objects
function Factory(name, age, career) {
  // this is what varies
  const workMap = {
    coder: ['Write code', 'Fix bugs'],
    'product manager': [
      'Book meeting rooms',
      'Analyze functionalities',
      'Encourage coders',
    ],
    boss: ['Meet clients', 'Read newspapers'],
    // ...
  };
  const work = workMap[career];
  return new User(name, age, career, work);
}
