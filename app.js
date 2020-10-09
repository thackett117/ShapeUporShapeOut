//buttons
const btnRec = document.getElementById('btnRectangle'),
    btnSqu = document.getElementById('btnSquare'),
    btnCir = document.getElementById('btnCircle'),
    btnTri = document.getElementById('btnTriangle'),
    btnReset = document.getElementById('resetBtn'),
    canvas = document.getElementById('shapeCanvas'),
    widthRec = document.getElementById('widthRec'),
    heightRec = document.getElementById('heightRec'),
    lengthSq = document.getElementById('lengthSq'),
    radiusCir = document.getElementById('radiusCir'),
    heightTri = document.getElementById('heightTri'),
    nameOfShape = document.getElementById('shapeValue'),
    heightOfShape = document.getElementById('heightValue'),
    widthOfShape = document.getElementById('widthValue'),
    areaOfShape = document.getElementById('areaValue'),
    perimeterOfShape = document.getElementById('perimeterValue'),
    radiusOfShape = document.getElementById('radiusValue'),
    radiusLabel = document.getElementById('radiusLabel'),
    perimeterLabel = document.getElementById('perimeterLabel'),
    heightLabel = document.getElementById('heightLabel'),
    widthLabel = document.getElementById('widthLabel'),
    maxPixel = 500;




//classes of shapes
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.randomAxis();
        this.div.style.top = `${this.yAxis}px`;
        this.div.style.left = `${this.xAxis}px`;
        this.div.style.position = 'absolute';
        canvas.appendChild(this.div);
        this.div.addEventListener("click", () => this.describe());
        this.div.addEventListener("dblclick", () => {
            this.div.remove();
            this.clearInfo();
        })
    }

    describe() {
        nameOfShape.innerHTML = `Shape`;
        heightOfShape.innerHTML = `${this.height} Pixels`;
        widthOfShape.innerHTML = `${this.width} Pixels`;
        areaOfShape.innerHTML = `${this.height * this.width} Pixels`;
        perimeterOfShape.innerHTML = `${(parseInt(this.height) + parseInt(this.width)) * 2} Pixels`;
        radiusOfShape.innerHTML = `Radii are for Circles`;
        heightLabel.innerHTML = `Height: `;
        perimeterLabel.innerHTML = `Perimeter: `;
    }

    clearInfo() {
        nameOfShape.innerHTML = "";
        heightOfShape.innerHTML = "";
        widthOfShape.innerHTML = "";
        areaOfShape.innerHTML = "";
        perimeterOfShape.innerHTML = "";
        radiusOfShape.innerHTML = "";
        heightLabel.innerHTML = "Height: ";
        perimeterLabel.innerHTML = "Perimeter: ";
    }

    randomAxis() {
        this.yAxis = randomVal(0, maxPixel);
        this.xAxis = randomVal(0, maxPixel);
    }
}


class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.className = 'rectangle';
    }

    describe() {
        nameOfShape.innerHTML = `Rectangle`;
        heightOfShape.innerHTML = `${this.height} Pixels`;
        widthOfShape.innerHTML = `${this.width} Pixels`;
        areaOfShape.innerHTML = `${this.height * this.width} Pixels`;
        perimeterOfShape.innerHTML = `${(parseInt(this.height) + parseInt(this.width)) * 2} Pixels`;
        radiusOfShape.innerHTML = `Radii are for Circles`;
        heightLabel.innerHTML = `Height: `;
        perimeterLabel.innerHTML = `Perimeter: `;
    }
}


class Square extends Shape {
    constructor(sideLength) {
        super()
        this.sideLength = sideLength;
        this.div.className = 'square';
        this.div.style.height = `${this.sideLength}px`;
        this.div.style.width = `${this.sideLength}px`;
    }

    describe() {
        nameOfShape.innerHTML = `Square`;
        heightOfShape.innerHTML = `${this.sideLength} Pixels`;
        widthOfShape.innerHTML = `${this.sideLength} Pixels`;
        areaOfShape.innerHTML = `${this.sideLength ** 2} Pixels`;
        perimeterOfShape.innerHTML = `${parseInt(this.sideLength) * 4} Pixels`;
        radiusOfShape.innerHTML = `Radii are for Circles`;
        heightLabel.innerHTML = `Height: `;
        perimeterLabel.innerHTML = `Perimeter: `;
    }
}


class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.diameter = this.radius * 2;
        this.div.className = 'circle';
        this.div.style.height = `${this.diameter}px`;
        this.div.style.width = `${this.diameter}px`;
    }

    describe() {
        nameOfShape.innerHTML = `Circle`;
        heightLabel.innerHTML = `Diameter: `
        heightOfShape.innerHTML = `${this.diameter} Pixels`;
        widthOfShape.innerHTML = `${this.diameter} Pixels`;
        areaOfShape.innerHTML = `${Math.floor((parseInt(this.radius) ** 2) * Math.PI)} Pixels`;
        perimeterLabel.innerHTML = `Circumference: `;
        perimeterOfShape.innerHTML = `${Math.floor((parseInt(this.radius) * 2) * Math.PI)} Pixels`;
        radiusOfShape.innerHTML = `${this.radius} Pixels`;
    }
}


class Triangle extends Shape {
    constructor(height) {
        super(height);
        this.div.className = 'triangle';
        this.div.style.borderBottomWidth = `${this.height}px`;
        this.div.style.borderRightWidth = `${this.height}px`
    }

    describe() {
        nameOfShape.innerHTML = "Triangle";
        heightOfShape.innerHTML = `${this.height} Pixels`;
        widthOfShape.innerHTML = `${this.height} Pixels`;
        areaOfShape.innerHTML = `${(this.height ** 2) / 2} Pixels`;
        perimeterOfShape.innerHTML = `${Math.floor(Math.sqrt((this.height ** 2) + (this.height ** 2)) + (this.height * 2))}`;
        radiusOfShape.innerHTML = `Radii are for Circles`;
        heightLabel.innerHTML = `Height: `;
        perimeterLabel.innerHTML = `Perimeter: `;
    }
}


//buttons creating the objects and clearing the input fields
btnRec.addEventListener("click", () => {
    new Rectangle(heightRec.value, widthRec.value);
    heightRec.value = "";
    widthRec.value = "";
});

btnSqu.addEventListener("click", () => {
    new Square(lengthSq.value);
    lengthSq.value = "";
});

btnCir.addEventListener("click", () => {
    new Circle(radiusCir.value);
    radiusCir.value = "";
});

btnTri.addEventListener("click", () => {
    new Triangle(heightTri.value)
    heightTri.value = "";
});

//reset button
btnReset.addEventListener("click", () => location.reload());

//function for a random value between a min and max
randomVal = (min, max) => Math.floor(Math.random() * (max - min)) + min;