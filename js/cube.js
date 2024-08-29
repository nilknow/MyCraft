export function createCube(texture, positionX, positionY, positionZ) {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({map: texture});
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(positionX, positionY, positionZ)
    return cube;
}