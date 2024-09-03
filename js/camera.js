import * as THREE from "three";

export const defaultCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
defaultCamera.position.set(0, 0, 5);
export const topCamera = new THREE.OrthographicCamera(-window.innerWidth / 20, window.innerWidth / 20,
    window.innerHeight / 20, -window.innerHeight / 20)
topCamera.position.set(0, 100, 0);
topCamera.lookAt(0, 0, 0);
export const leftCamera = new THREE.OrthographicCamera(-window.innerWidth / 20, window.innerWidth / 20,
    window.innerHeight / 20, -window.innerHeight / 20)
leftCamera.position.set(0, 0, -100)
leftCamera.lookAt(0, 0, 0)
export const rightCamera = new THREE.OrthographicCamera(-window.innerWidth / 20, window.innerWidth / 20,
    window.innerHeight / 20, -window.innerHeight / 20)
rightCamera.position.set(0, 0, 100)
rightCamera.lookAt(0, 0, 0)

export let camera = defaultCamera

export function replaceCamera(newCamera) {
    camera = newCamera
    if (camera === topCamera) {
        let value = document.getElementById("top-camera-input").value;
        if (value) {
            topCamera.far = value
        }
    }
}
