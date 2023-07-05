// the body of Factory can become big and messy when there are many many roles
// it will need to be constantly modified

// Opened Closed Principle:
// software entities should be extensible instead of modifiable

// the only purpose of the abstract class is to set rules or make contrasts
class MobilePhoneFactory {
  createOS() {
    throw new Error(
      "Abstract factory methods can't be directly called and should be overwritten"
    );
  }
  createHardWare() {
    throw new Error(
      "Abstract factory methods can't be directly called and should be overwritten"
    );
  }
}

// specif MobilePhone products
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    return new AndroidOS();
  }
  createHardWare() {
    return new QualcommHardWare();
  }
}

// the following classes will make it a lot easier for creating new phone products
class OS {
  controlHardWare() {
    throw new Error(
      "Abstract product methods can't be directly called and should be overwritten"
    );
  }
}

class AndroidOS extends OS {
  controlHardWare() {
    console.log('I will control the hardware in the Andriod way');
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log('I will control the hardware in the Apple way');
  }
}

class HardWare {
  operateByOrder() {
    throw new Error(
      "Abstract product methods can't be directly called and should be overwritten"
    );
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('I will operate in the Qualcomm way');
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log('I will operate in the Mi way');
  }
}

const myPhone = new FakeStarFactory();
const myOS = myPhone.createOS();
const myHardWare = myPhone.createHardWare();
myOS.controlHardWare(); // I will control the hardware in the Andriod way
myHardWare.operateByOrder(); // I will operate in the Qualcomm way

class newStarFactory extends MobilePhoneFactory {
  createOS() {
    // use an OS
  }
  createHardWare() {
    // use a hardware
  }
}
