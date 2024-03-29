class Vehicle {
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }
  constructor(public color: string) {}
  protected honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// vehicle.honk();

const car = new Car(4, "red");
car.startDrivingProcess();
