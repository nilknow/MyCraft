import {currentCamera, firstPersonCamera, topDownCamera} from "./camera.js";

document.getElementById('top-down-camera').onclick = () => {
    currentCamera = topDownCamera
    console.log("top down camera")
}
document.getElementById('first-person-camera').onclick = () => {
    currentCamera = firstPersonCamera
    console.log("first person camera")
}