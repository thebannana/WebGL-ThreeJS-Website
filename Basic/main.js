import * as THREE from 'three'

// const canvas = document.createElement('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// const context = canvas.getContext('2d');
//
// const gradient = context.createLinearGradient(200, 200, 200, canvas.height);
// gradient.addColorStop(0, '#246161');
// gradient.addColorStop(1, '#35d8c0');
//
// context.fillStyle = gradient;
// context.fillRect(0, 0, canvas.width, canvas.height);
//
// const texture = new THREE.CanvasTexture(canvas);

//Add scene and color of the scene
const scene = new THREE.Scene();
// scene.background = texture;
scene.background = new THREE.Color('F0F0F0')
//Add camera and position of the camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z=5;

//Add geometry, material and a mesh that uses geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive:'#468585',});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Add the light and type of light to the scene and set position of the light
const light = new THREE.SpotLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

//Add the renderer and define the dimensions of the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Animate the scene
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();