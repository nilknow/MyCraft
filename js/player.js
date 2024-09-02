const playerGeometry = new THREE.BoxGeometry(5,1,5);
const playerMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
export const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.set(2, 2, 2); // 设置初始位置
