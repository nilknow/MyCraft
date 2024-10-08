export function updatePhysics(world, player, playerBody) {
    world.step(1 / 30); // 更新物理世界

    // 更新玩家模型位置
    player.position.copy(playerBody.position);
    player.quaternion.copy(playerBody.quaternion);
}

export function initWorld() {
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);
    return world
}

export function initGround() {
    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({mass: 0}); // 设置地面质量为 0，使其静止
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2); // 旋转地面
    return groundBody
}

export let playerBody;

export function initPlayerBody() {
    const playerShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1));
    playerBody = new CANNON.Body({mass: 1, shape: playerShape})
}