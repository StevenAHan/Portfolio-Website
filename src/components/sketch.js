let squares = [];

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('myCanvas');
    // cnv.parent('#OpenerContainer');
    cnv.style('width', '100%');
    cnv.style('height', '100%');
    cnv.style("margin", '0');
    cnv.style("padding", '0');
    cnv.style("overflow", 'hidden');
    
    for(let i = 0; i < 40; i++) {
        let temp = new Square(random(-1 * width), random(height));
        squares.push(temp);
    }

}

function draw() {
    background(255);
    squares.forEach(square => square.displayAndMove());
}

class Square {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speed = random(1,2);
        this.rotation = 0;
        this.rotationSpeed = random(-0.01, 0.01);
        this.color = color(random(255), random(255), random(255), 50);
        this.size = random(50, 100);
    }

    displayAndMove() {
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        this.rotation += this.rotationSpeed;
        rect(0, 0, this.size, this.size);
        pop();
        this.x += this.speed;
        if(this.x > width) {
            this.x = -50;
            this.y = random(height);
        }
    }
}