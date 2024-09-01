import {player} from "./player.js";

export const topDownCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
topDownCamera.position.set(0, 0, 5);
export const firstPersonCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
firstPersonCamera.position.set(0, 2, 0);
export const topCamera=new THREE.OrthographicCamera(-window.innerWidth / 20, window.innerWidth / 20, window.innerHeight / 20, -window.innerHeight / 20)
topCamera.position.set(0, 100, 0);
topCamera.lookAt(0, 0, 0);
export let currentCamera = firstPersonCamera

export function updateCamera() {
 if (currentCamera === firstPersonCamera) {
  currentCamera.position.copy(player.position);
  currentCamera.position.y += 1.6;
 }
}

export function replaceCamera(camera){
 currentCamera=camera
 if (camera === topCamera) {
  let value = document.getElementById("top-camera-input").value;
  if (value) {
   topCamera.far=value
  }
 }
}
