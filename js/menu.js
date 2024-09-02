import {
    currentCamera,
    firstPersonCamera,
    topDownCamera,
    topCamera,
    replaceCamera,
    leftCamera,
    rightCamera
} from "./camera.js";

document.getElementById('top-down-camera').onclick = () => {
    replaceCamera(topDownCamera)
    console.log("top down camera")
}
document.getElementById('first-person-camera').onclick = () => {
    replaceCamera(firstPersonCamera)
    console.log("first person camera")
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