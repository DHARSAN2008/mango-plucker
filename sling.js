class Slingshot{
	constructor(body,point)
	{
		
		var options={
		    bodyA:body,			 
			pointB:point, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.sling=Constraint.create(options)
		World.add(world,this.sling)
	}

	attach(body){
		this.sling.bodyA=body;
	}

	fly()
	{
		this.sling.body=null;
	}

	display()
	{
		if(this.sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}