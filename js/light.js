export function ambientLight() {
    return new THREE.AmbientLight(0xffffff, 0.5);
}
export function directionalLight(){
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    return directionalLight;
}