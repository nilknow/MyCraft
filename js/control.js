// Movement variables
import {camera} from "./camera.js";
import {playerBody} from './cannon.js'
import * as THREE from 'three'
import {player} from "./player.js";

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let vector = new THREE.Vector3();
// Movement speed
const speed = 2;

// Event listeners for WASD keys
document.addEventListener('keydown', (event) => {
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

function setVelocity(direction) {
    const velocity = new CANNON.Vec3(...direction);
    playerBody.velocity.set(velocity.x, velocity.y, velocity.z);
}

export function updateMovement() {
    vector.set(0, 0, 0);

    if (moveForward) vector.copy(camera.getWorldDirection(vector)).multiplyScalar(speed);
    if (moveBackward) vector.copy(camera.getWorldDirection(vector)).multiplyScalar(-speed);
    if (moveLeft) vector.copy(camera.getWorldDirection(vector)).cross(camera.up).multiplyScalar(-speed);
    if (moveRight) vector.copy(camera.getWorldDirection(vector)).cross(camera.up).multiplyScalar(speed);

    setVelocity(vector)
}