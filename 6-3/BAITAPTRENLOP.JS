// Định nghĩa lớp Pet
class Pet {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Tôi tên là ${this.name}.`);
    }

    talk(sound) {
        console.log(sound);
    }
}

// Định nghĩa lớp Dog kế thừa từ lớp Pet
class Dog extends Pet {
    constructor(name, animalType) {
        super(name);
        this.animalType = animalType;
    }

    animalTypeMessage() {
        console.log(`Tôi là động vật ${this.animalType}.`);
    }

    introduce() {
        super.introduce();
        this.animalTypeMessage();
        this.talk("Gâu gâu!"); // Gọi lại hàm talk từ lớp Pet với tiếng kêu của chó
    }
}

// Sử dụng các lớp đã định nghĩa
const myPet = new Pet("Coco");
myPet.introduce();
myPet.talk("Meow");

const myDog = new Dog("Buddy", "có lông");
myDog.introduce();
