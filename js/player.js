const playerGeometry = new THREE.BoxGeometry(1, 2, 1);
const playerMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
export const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.set(1, 1, 1); // 设置初始位置
