enum Car {
	HONDA,
	AUDI
}

abstract class CarPart {
	abstract getLeftDoor();
	abstract getRightDoor();

	static getFactory(key:Car){
		const hondaFactory = new HondaFactory();
		const audiFactory  = new AudiFactory();

		switch(key) {
			case Car.HONDA: {
				return hondaFactory;
				break;
			}
			case Car.AUDI: {
				return audiFactory;
				break;
			}
		}
	}
}

class HondaFactory extends CarPart {
	getLeftDoor() {
	  return new HondaLeftDoor();
	}
	getRightDoor() {
	  return new HondaRightDoor();
	}
}

class HondaLeftDoor {
	makePart(){
		return "Im honda left door"
	}
}

class HondaRightDoor {
	makePart(){
		return "Im honda right door"
	}
}

class AudiFactory extends CarPart {
	getLeftDoor() {
	  return new AudiLeftDoor();
	}
	getRightDoor() {
	  return new AudiRightDoor();
	}
}

class AudiLeftDoor {
	makePart(){
		return "Im Audi left door"
	}
}

class AudiRightDoor {
	makePart(){
		return "Im Audi right door"
	}
}

// Factory Honda & Get Products
let factory   = CarPart.getFactory(Car.HONDA);
let rightdoor = factory.getRightDoor();
let leftdoor  = factory.getLeftDoor();
console.log(rightdoor.makePart(), "\n", leftdoor.makePart());

// Change for Factory Audi & Get Products
factory   = CarPart.getFactory(Car.AUDI);
rightdoor = factory.getRightDoor();
leftdoor  = factory.getLeftDoor();
console.log(rightdoor.makePart(), "\n", leftdoor.makePart());

