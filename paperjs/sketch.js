var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.strokeColor = "black";

var myPath = new Path();
myPath.strokeColor = "black";
myPath.add(new Point(0, 0));
myPath.add(new Point(100, 50));

var newCircle = myCircle.subtract(myPath);
newCircle.position = view.center;
newCircle.strokeColor = "red";
