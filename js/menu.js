import {
    currentCamera,
    defaultCamera,
    topCamera,
    leftCamera,
    rightCamera,
    replaceCamera
} from "./camera.js";
import {renderer} from "./render.js";
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {
    PointerLockControls
} from "https://cdn.jsdelivr.net/npm/three@0.153.0/examples/jsm/controls/PointerLockControls.js";

document.getElementById('default-camera').onclick = () => {
    replaceCamera(defaultCamera)
    console.log("top down camera")
}

document.getElementById('top-camera').onclick = () => {
    replaceCamera(topCamera)
    console.log("top camera")
}
document.getElementById('left-camera').onclick = () => {
    replaceCamera(leftCamera)
    console.log("left camera")
}
document.getElementById('right-camera').onclick = () => {
    replaceCamera(rightCamera)
    console.log("right camera")
}

const orbitControls=new OrbitControls(currentCamera, renderer.domElement);
const pointerLockControls=new PointerLockControls(currentCamera, document.body);
document.getElementById('orbit-controls').onclick=()=>{
    orbitControls.enabled = true;
    pointerLockControls.enabled=false
    pointerLockControls.unlock()
    console.log("orbit")
}
document.getElementById('pointer-lock-controls').onclick=()=>{
    pointerLockControls.enabled = true;
    orbitControls.enabled=false
    pointerLockControls.lock();
    console.log("pointer lock")
}
