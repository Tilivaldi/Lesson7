class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = new Circle(11);
console.log('\n\n');
console.log('-----------------------------Площадь и периметр-----------------------------');
console.log(circle1.getArea());       /// 380.132711084365
console.log(circle1.getPerimeter());  // 69.115038378975451