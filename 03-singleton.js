class SingleDog {
  show() {
    console.log('This is a single instance object');
  }
  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

console.log(s1 === s2); // true

// let's implement a localStorage based single instance Storage
class Storage {
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }

  static getInstance() {
    if (!Storage.instance) Storage.instance = new Storage();
    return Storage.instance;
  }
}

// implement with closure
function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value);
};
const Storage2 = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new StorageBase();
    }
    return instance;
  };
})();

const storage1 = new Storage2();
const storage2 = new Storage2();

console.log(storage1 === storage2); // true
