class Eat {
	constructor( myImage )
	
	 this.x = 0;
	 this.y = 0;
	 this.image = new image();
	 this.image.src = myImage;
    }

      rand(min, max) {
	  k = Math.floor(Math.random() * (max - min) + min);
	  return (Math.round(k / s) * s);
    }

     newA(width, height) {
	
	  this.x = rand(0, width);
	  this.y = rand(0, height);
	  if (this.x + s >= width || this.y + s >= height) {
	  newA(width, height);
	   }
    }

      draw(ctx, s) {
	     ctx.drawImage(
	    this.image,
	    0,
	    0,
	    this.image.width,
	    this.image.height,
	    this.x,
	    this.x,
	    s,
	    s
	   );
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}
