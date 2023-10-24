function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw the edge circle with gradient
  // TODO: (Optional) add a gradient circle
  var grad = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(1, 'white');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  // Center circle
  // TODO: make the central black circle
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  //TODO: Make sure you show all the numbers
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";

  for (num=1; num <= 12; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
  }
      
}

function drawTime(ctx, radius) {
  // TODO: Calculate the angles of every hand depending on the time
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  angleh = ((hour%12)*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
  drawHand(ctx, angleh, radius * 0.5, radius * 0.07);
  //minute
  anglem = (minute*Math.PI/30) + (second*Math.PI/(30*60));
  drawHand(ctx, anglem, radius * 0.8, radius * 0.07);
  // second
  angles = (second*Math.PI/(30));
  drawHand(ctx, angles, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}