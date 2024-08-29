import {currentCamera, firstPersonCamera, topDownCamera} from "./camera.js";
import {player} from "./player.js";
export function mouseControl(){
    // 鼠标交互
    let isDragging = false;
    let previousMousePosition = {
        x: 0,
        y: 0
    };

    window.addEventListener('mousedown', (event) => {
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    window.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const deltaX = event.clientX - previousMousePosition.x;
            const deltaY = event.clientY - previousMousePosition.y;

            // 旋转相机
            currentCamera.rotation.y += deltaX * 0.001;
            currentCamera.rotation.x += deltaY * 0.001;

            // 更新鼠标位置
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }
    });
}
export function topDownCameraListener(){
    window.addEventListener('keypress', (event) => {
        if (currentCamera === firstPersonCamera) {
            return
        }

        const cameraSpeed = 0.1;

        const directionVector = new THREE.Vector3(); // 创建一个方向向量
        switch (event.key) {
            case 'w':
                directionVector.copy(topDownCamera.getWorldDirection(directionVector)).multiplyScalar(cameraSpeed);
                break;
            case 's':
                directionVector.copy(topDownCamera.getWorldDirection(directionVector)).multiplyScalar(-cameraSpeed);
                break;
            case 'a':
                directionVector.copy(topDownCamera.getWorldDirection(directionVector)).cross(topDownCamera.up).multiplyScalar(-cameraSpeed);
                break;
            case 'd':
                directionVector.copy(topDownCamera.getWorldDirection(directionVector)).cross(topDownCamera.up).multiplyScalar(cameraSpeed);
                break;
            default:
                return;
        }
        currentCamera.position.add(directionVector);
    });
}

export function firstPersonCameraListener(){
    if (currentCamera === topDownCamera) {
        return
    }

    const playerSpeed = 0.1;

    const directionVector = new THREE.Vector3(); // 创建一个方向向量
    window.addEventListener('keypress', (event) => {
        if (currentCamera === topDownCamera) {
            return
        }
        switch (event.key) {
            case 'w':
                directionVector.copy(currentCamera.getWorldDirection(directionVector)).multiplyScalar(playerSpeed);
                break;
            case 's': {
                directionVector.copy(currentCamera.getWorldDirection(directionVector)).multiplyScalar(-playerSpeed);
                break
            }
            case 'a': {
                directionVector.copy(currentCamera.getWorldDirection(directionVector)).cross(currentCamera.up).multiplyScalar(-playerSpeed);
                break
            }
            case 'd': {
                directionVector.copy(currentCamera.getWorldDirection(directionVector)).cross(currentCamera.up).multiplyScalar(playerSpeed);
                break
            }
            default:
                return;
        }
        player.position.add(directionVector);
    });
}

