import * as THREE from 'three';

const canvas = document.getElementById( 'canvas');

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( '#F0F0F0' );

//Camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Mesh

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585'});
const Dodacahedron = new THREE.Mesh(geometry,material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxMaterial = new THREE.MeshLambertMaterial({color: '#B4B4B3', emissive:'#B4B4B3',});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
box.position.y = -1.5;

scene.add(Dodacahedron);
scene.add(box);

//lights

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//renderer

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

//animate
renderer.render(scene, camera);

