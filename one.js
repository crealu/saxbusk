const canvas = document.getElementById('gafu');
const btn = document.getElementById('iku');
const termination = 12;
let time = 0.0;
let moon = 1.0;
let id;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// this needs to go before canvas.width and canvas.height 
// to ensure proportionality
let gl = canvas.getContext('webgl');
let windmillColors = [
  [163, 211, 240],
  [75, 159, 130],
  [235, 187, 97],
  [148, 47, 89],
  [253, 221, 52],
  [239, 134, 52],
  [233, 73, 135],
  [233, 62, 50]
]

windmillColors.forEach(c => {
  let r = Math.round((c[0] / 255) * 100);
  let g = Math.round((c[1] / 255) * 100);
  let b = Math.round((c[2] / 255) * 100);
  let str = `vec3(0.${r}, 0.${g}, 0.${b});`
  console.log(str);
});

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vs);
const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fs);

const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 3, 3, -1]), gl.STATIC_DRAW);

const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

const uResolution = gl.getUniformLocation(shaderProgram, 'u_resolution');
gl.uniform3f(uResolution, canvas.width, canvas.height, 1.0);

const uTime = gl.getUniformLocation(shaderProgram, 'u_time');
gl.uniform1f(uTime, time);

const uMoon = gl.getUniformLocation(shaderProgram, 'u_moon');
gl.uniform1f(uMoon, moon);

// const uKnob = gl.getUniformLocation(shaderProgram, 'u_knob');
// gl.uniform1f(uKnob, knobVal);

function render() {
  time += 0.01;
  gl.uniform1f(uTime, time);
  gl.uniform1f(uMoon, moon);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  if (time < termination) {
      requestAnimationFrame(render);
  } else {
      window.cancelAnimationFrame(id);
  }
}

console.log(
  'vec3(0.' + Math.round(220/255 * 100) + ', ' 
     + '0.' + Math.round(161/255 * 100) + ', '
     + '0.' + Math.round(208/255 * 100) + ');'
);

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clearDepth(1.0);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

btn.addEventListener('click', () => {
  console.log('clicked');
  btn.classList.add('hide');
  canvas.classList.add('reveal');
  id = render();
});

window.addEventListener('keypress', (event) => {
  if (event.key == 'j') {    
    btn.classList.add('hide');
    canvas.classList.add('reveal');
    id = render();
  }
  if (event.key == 'm') {
    moon = moon == 1.0 ? 0.0 : 1.0;
  }
})
