var link = document.createElement("link")
link.setAttribute("rel", "stylesheet")
link.setAttribute("type", "text/css")
link.setAttribute(
  "href",
  // "https://fonts.googleapis.com/css?family=Roboto+Mono",
  "https://fonts.googleapis.com/earlyaccess/jejugothic.css",
)
document.head.appendChild(link)

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var min,
  sec,
  hr,
  ms,
  amOrPm = "AM"
var radH, radM, radS
const threePIByTwo = (3 * Math.PI) / 2
function init() {
  canvas.width = document.documentElement.clientWidth - 35
  canvas.height = document.documentElement.clientHeight - 45
  window.requestAnimationFrame(draw)

  // ctx.strokeStyle = "red"
  // ctx.moveTo(canvas.width/2, 50)
  // ctx.lineTo(canvas.width/2, 170)
  // ctx.stroke()
}

function draw(now) {
  var centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    date = new Date()

  hr = date.getHours()
  min = date.getMinutes()
  sec = date.getSeconds()
  ms = date.getMilliseconds()
  if (hr > 12) {
    amOrPm = "PM"
    hr -= 12
  }

  if (min == 50 && sec <= 2) {
    document.getElementById("breakTimeAudio").play()
  }

  if (min == 0 && sec <= 2) {
    document.getElementById("studyTimeAudio").play()
  }

  radH = 0.000008333 * (hr * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000 + ms)
  radM = 0.0001 * (min * 60 * 1000 + sec * 1000 + ms)
  radS = 0.006 * (sec * 1000 + ms)

  drawCircle(
    centerX,
    centerY,
    180,
    0,
    Math.PI * 2,
    false,
    "rgb(84, 110, 122, 1.0)",
    "stroke",
    20,
  ) //secondgrey
  drawCircle(
    centerX,
    centerY,
    180,
    threePIByTwo,
    rad(radS) + threePIByTwo,
    false,
    "rgb(220, 84, 62, 1.0)",
    "stroke",
    20,
  ) //second
  drawCircle(
    centerX,
    centerY,
    135,
    0,
    Math.PI * 2,
    false,
    "rgb(69, 90, 100, 1.0)",
    "stroke",
    80,
  ) //minutegrey
  drawCircle(
    centerX,
    centerY,
    135,
    threePIByTwo,
    rad(radM) + threePIByTwo,
    false,
    "rgba(254, 183, 55, 1.0",
    "stroke",
    80,
  ) //minute
  // drawCircle(
  //   centerX,
  //   centerY,
  //   135,
  //   threePIByTwo,
  //   threePIByTwo + Math.PI / 3,
  //   false,
  //   "rgba(254, 183, 55, 1.0)",
  //   "stroke",
  //   80,
  // ) //minuteRest
  // drawCircle(
  //   centerX,
  //   centerY,
  //   110,
  //   0,
  //   Math.PI * 2,
  //   false,
  //   "rgb(55, 71, 79, 1.0)",
  //   "stroke",
  //   90,
  // ) //hourgrey
  // drawCircle(
  //   centerX,
  //   centerY,
  //   110,
  //   threePIByTwo,
  //   rad(radH) + threePIByTwo,
  //   false,
  //   "rgb(39, 174, 97, 1.0)",
  //   "stroke",
  //   90,
  // ) //hour
  drawCircle(
    centerX,
    centerY,
    95,
    0,
    Math.PI * 2,
    false,
    "rgba(38, 50, 56, 1.0)",
    "fill",
    "50",
  ) //inner
  drawText(
    `${hr.toString().length == 1 ? "0" + hr : hr}:${
      min.toString().length == 1 ? "0" + min : min
    }:${sec.toString().length == 1 ? "0" + sec : sec}`,
    canvas.width / 2,
    canvas.height / 2 + 20,
    "rgba(255, 255, 255, 1.0)",
    "38px",
  )
  drawText(
    amOrPm,
    canvas.width / 2,
    canvas.height / 2 + 60,
    "rgba(255, 255, 255, 1.0)",
    "25px",
  )
  if (min < 50) {
    drawText(
      "✍🔥👨‍💻",
      canvas.width / 2,
      canvas.height / 2 - 30,
      "rgba(255, 255, 255, 1.0)",
      "40px",
    )
    // drawText(
    //   "Let's Run!",
    //   canvas.width / 2,
    //   canvas.height / 2 - 25,
    //   "rgba(255, 255, 255, 1.0)",
    //   "25px",
    // )
  } else {
    drawText(
      "😙~",
      canvas.width / 2,
      canvas.height / 2 - 30,
      "rgba(255, 255, 255, 1.0)",
      "40px",
    )
    // drawText(
    //   "Break Time!",
    //   canvas.width / 2,
    //   canvas.height / 2 - 25,
    //   "rgba(255, 255, 255, 1.0)",
    //   "25px",
    // )
  }

  //////////////////////////////
  // PLEASE DO NOT DELETE BELOW!
  // IF YOU WANT TO THANK ME 😊
  drawText(
    "Made by 잉혁킹",
    canvas.width / 2,
    canvas.height / 2 + 140,
    "rgba(255, 255, 255, 0.7)",
    "25px",
  )
  //////////////////////////////

  window.requestAnimationFrame(draw)
}

init()

function rad(deg) {
  return (Math.PI / 180) * deg
}

function drawText(text, x, y, color, size) {
  // ctx.font = `${size} "Roboto Mono"`
  ctx.font = `${size} "Jeju Gothic"`
  ctx.fillStyle = color
  ctx.textAlign = "center"
  ctx.fillText(text, x, y)
}

function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}

function drawArc(x, y, radius, start, end, clockwise) {
  ctx.beginPath()
  ctx.arc(x, y, radius, start, end, clockwise)
}

function drawCircle(
  x,
  y,
  radius,
  start,
  end,
  clockwise,
  color,
  type,
  thickness,
) {
  if (type == "fill") {
    ctx.fillStyle = color
    drawArc(x, y, radius, start, end, clockwise)
    ctx.fill()
  } else if (type == "stroke") {
    ctx.strokeStyle = color
    ctx.lineWidth = thickness
    drawArc(x, y, radius, start, end, clockwise)
    ctx.stroke()
  }
}
