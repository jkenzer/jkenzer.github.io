let numCircles = 17;
let radius = 50;

function setup() {
  createCanvas(8.5 * 96, 5.5 * 96, SVG);
  strokeWeight(1);
  stroke("silver");
  noFill();
  ellipseMode(CENTER);

  for (let i = 1; i <= numCircles; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(random(0, TWO_PI));

    for (let lineThick = 0; lineThick < i; lineThick++) {
      line(
        lineThick,
        i * (radius / 2),
        lineThick,
        i * (radius / 2) + radius / 2
      );
    }

    for (let x = 0; x < 10; x++) {
      // line(x, i * (radius/2), x, i * (radius/2) + (radius/2));
      arc(0, 0, i * radius + x, i * radius + x, 0, TWO_PI - 0.25);
    }

    pop();
  }

  noLoop();
}

function mousePressed() {
  save("circles.svg");
}
