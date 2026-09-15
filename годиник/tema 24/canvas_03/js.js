
  function clock() {
    
    var now = new Date();
    var ctx = document.getElementById('canvas').getContext('2d');


    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.save();

    // ctx.strokeStyle = "black";
    for (var i = 0; i < 12; i++) {
      
      ctx.strokeStyle = "rgb("+i*15+","+20*i+","+5*i+")";
      ctx.beginPath();
      
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
      if (i % 5!= 0) {
        // ctx.strokeStyle = "#ff0f00";
        ctx.strokeStyle = "rgb("+i*10+","+2*i+","+15*i+")";

        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    if(hr >= 12){
      hr = hr - 12;
    }
    else{
      hr = hr;
    }

    ctx.strokeStyle = '#000e52';
  
    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    /**продовження коду буде тут */
    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.restore();
    //секундна стрілка 
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();



    ctx.beginPath();
    ctx.fillStyle = '#D40000';
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(80, 0, 5, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = 'rgb('+hr*sec+','+hr*min+','+ hr*sec*min+')';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
  
    ctx.restore();
  window.requestAnimationFrame(clock);

  
  }
  window.requestAnimationFrame(clock);

