class Line
{
  constructor(body1,body2,offsetX,offsetY)
  {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options =
      {
        bodyA : body1,
        bodyB : body2,
        pointB : {x : this.offsetX, y : this.offsetY}
      }
      this.line = Constraint.create(options);
      World.add(world,this.line);
  }
  display()
  {
  var A = this.line.body1.position;
  var B = this.line.body2.position;
  strokeWeight(4);
  fill("black")
  line(A.x, A.y, B.x, B.y);
  }
};