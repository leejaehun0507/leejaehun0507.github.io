// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;


// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);


// Start rendering
render();

// Render loop
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);    
    // Draw something here
    drawQuad(-1, 0,  0, 1, 1, 0, 0, 1); // Red
    drawQuad(0,  0,  1, 1, 0, 1, 0, 1); // Green
    drawQuad(-1, -1, 0, 0, 0, 0, 1, 1); // Blue
    drawQuad(0, -1,  1, 0, 1, 1, 0, 1); // Yellow
}

// 사각형을 그리는 함수
function drawQuad(x1, y1, x2, y2, r, g, b, a) {
    gl.scissor((x1 + 1) / 2 * canvas.width, (y1 + 1) / 2 * canvas.height, 
               (x2 - x1) / 2 * canvas.width, (y2 - y1) / 2 * canvas.height);
    gl.enable(gl.SCISSOR_TEST);
    gl.clearColor(r, g, b, a);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.SCISSOR_TEST);
}

// Resize viewport when window size changes
window.addEventListener('resize', () => {
    let size = Math.min(window.innerWidth, window.innerHeight)
    canvas.width = size;
    canvas.height = size;
    gl.viewport(0, 0, size, size);
    render();
});

