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
    constructor(height, width, radius, sideLength) {
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.sideLength = sideLength;
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
        this.height = height;
        this.width = width;
        this.recDiv = document.createElement('div');
        this.recDiv.className = 'rectangle';
        this.recDiv.style.height = `${this.height}px`;
        this.recDiv.style.width = `${this.width}px`;
        this.randomAxis();
        this.recDiv.style.top = `${this.yAxis}px`;
        this.recDiv.style.left = `${this.xAxis}px`;
        this.recDiv.style.position = 'absolute';
        canvas.appendChild(this.recDiv);
        this.recDiv.addEventListener("click", () => this.describe());
        this.recDiv.addEventListener("dblclick", () => {
            this.recDiv.remove();
            this.clearInfo();
        })

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
        super(sideLength)
        this.sideLength = sideLength;
        this.squDiv = document.createElement('div');
        this.squDiv.className = 'square';
        this.squDiv.style.height = `${this.sideLength}px`;
        this.squDiv.style.width = `${this.sideLength}px`;
        this.randomAxis();
        this.squDiv.style.top = `${this.yAxis}px`;
        this.squDiv.style.left = `${this.xAxis}px`;
        this.squDiv.style.position = 'absolute';
        canvas.appendChild(this.squDiv);
        this.squDiv.addEventListener("click", () => this.describe());
        this.squDiv.addEventListener("dblclick", () => {
            this.squDiv.remove();
            this.clearInfo();
        })
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
        super(radius);
        this.radius = radius;
        this.diameter = this.radius * 2;
        this.cirDiv = document.createElement('div');
        this.cirDiv.className = 'circle';
        this.cirDiv.style.height = `${this.diameter}px`;
        this.cirDiv.style.width = `${this.diameter}px`;
        this.randomAxis();
        this.cirDiv.style.top = `${this.yAxis}px`;
        this.cirDiv.style.left = `${this.xAxis}px`;
        this.cirDiv.style.position = 'absolute';
        canvas.appendChild(this.cirDiv);
        this.cirDiv.addEventListener("click", () => this.describe());
        this.cirDiv.addEventListener("dblclick", () => {
            this.cirDiv.remove();
            this.clearInfo();
        })

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
        this.height = height;
        this.width = height;
        this.triDiv = document.createElement('div');
        this.triDiv.className = 'triangle';
        this.triDiv.style.borderBottomWidth = `${this.height}px`;
        this.triDiv.style.borderRightWidth = `${this.height}px`
        this.randomAxis();
        this.triDiv.style.top = `${this.yAxis}px`;
        this.triDiv.style.left = `${this.xAxis}px`;
        this.triDiv.style.position = 'absolute';
        canvas.appendChild(this.triDiv);
        this.triDiv.addEventListener("click", () => this.describe());
        this.triDiv.addEventListener("dblclick", () => {
            this.triDiv.remove();
            this.clearInfo();
        })
    }

    describe() {
        nameOfShape.innerHTML = "Triangle";
        heightOfShape.innerHTML = `${this.height} Pixels`;
        widthOfShape.innerHTML = `${this.width} Pixels`;
        areaOfShape.innerHTML = `${(this.height ** 2) / 2} Pixels`;
        perimeterOfShape.innerHTML = `${Math.floor(Math.sqrt((this.height ** 2) + (this.height ** 2)) + (this.height * 2))}`;
        radiusOfShape.innerHTML = `Radii are for Circles`;
        heightLabel.innerHTML = `Height: `;
        perimeterLabel.innerHTML = `Perimeter: `;
    }
}



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

btnReset.addEventListener("click", () => location.reload());



randomVal = (min, max) => Math.floor(Math.random() * (max - min)) + min;