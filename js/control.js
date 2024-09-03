// Movement variables
import {camera} from "./camera.js";
import * as THREE from 'three'

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let vector = new THREE.Vector3();
// Movement speed
const speed = 0.2;

// Event listeners for WASD keys
document.addEventListener('keydown', (event) => {
    console.log(event.code)
    switch (event.code) {
        case 'KeyW':
            moveForward = true;
            break;
        case 'KeyS':
            moveBackward = true;
            break;
        case 'KeyA':
            moveLeft = true;
            break;
        case 'KeyD':
            moveRight = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyW':
            moveForward = false;
            break;
        case 'KeyS':
            moveBackward = false;
            break;
        case 'KeyA':
            moveLeft = false;
            break;
        case 'KeyD':
            moveRight = false;
            break;
    }
});

export function updateMovement() {
    vector.set(0, 0, 0);

    if (moveForward) vector.copy(camera.getWorldDirection(vector)).multiplyScalar(speed);
    if (moveBackward) vector.copy(camera.getWorldDirection(vector)).multiplyScalar(-speed);
    if (moveLeft) vector.copy(camera.getWorldDirection(vector)).cross(camera.up).multiplyScalar(-speed);
    if (moveRight) vector.copy(camera.getWorldDirection(vector)).cross(camera.up).multiplyScalar(speed);

    // Apply movement to camera position
    camera.position.add(vector);
}