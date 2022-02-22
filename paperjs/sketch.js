var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.strokeColor = "black";
myCircle.visible = false;

var myPath = new Path.Line(new Point(0, 0), new Point(100, 50));
myPath.strokeColor = "black";

var newCircle = myPath.subtract(myCircle);
newCircle.position = view.center;
newCircle.strokeColor = "red";
// // Make a ring using subtraction of two circles:
var inner = new Path.Circle({
  radius: 50,
  fillColor: "black",
});

var outer = new Path.Circle({
  radius: 60,
  fillColor: "blue",
  visible: false,
});

var ring = outer.subtract(inner);
ring.position = view.center;
ring.fillColor = "red";

var testRing = ring.subtract(myCircle);
testRing.position = view.center;
testRing.visible = true;
