import {currentCamera} from "./camera.js";

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    currentCamera.aspect = width / height;
    currentCamera.updateProjectionMatrix();
});