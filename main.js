import { scene, camera, renderer } from './sceneSetup.js';
import { shape } from './shapes/shape.js';
import { redCube } from './shapes/redCube.js';

// Переменные для мыши
let mouseX = 0;
let mouseY = 0;
const movementFactor = 0.1; // Масштаб движения мыши для эффекта

// Функция для установки начальных позиций форм по углам
function updateShapePositions() {
    const aspect = window.innerWidth / window.innerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z; // Высота видимой области
    const cameraWidth = cameraHeight * aspect; // Ширина видимой области

    // Установка позиций
    shape.position.set(-cameraWidth / 2 + 1, cameraHeight / 2 - 1, 0); // Синий куб — левый верхний угол
    redCube.position.set(cameraWidth / 2 - 1, -cameraHeight / 2 + 1, 0); // Красный куб — правый нижний угол
}

// Обработчик движения мыши
document.addEventListener('mousemove', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouseX = (event.clientX - rect.left) / rect.width * 2 - 1; // Нормализация [-1, 1]
    mouseY = -(event.clientY - rect.top) / rect.height * 2 + 1; // Нормализация [-1, 1]
});

// Анимация
function animate() {
    requestAnimationFrame(animate);

    const aspect = window.innerWidth / window.innerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    // Рассчитываем смещение для синей формы
    const shapeOffsetX = mouseX * movementFactor;
    const shapeOffsetY = mouseY * movementFactor;
    shape.position.x = -cameraWidth / 2 + 1 + shapeOffsetX;
    shape.position.y = cameraHeight / 2 - 1 + shapeOffsetY;

    // Рассчитываем смещение для красной формы
    const redCubeOffsetX = mouseX * movementFactor;
    const redCubeOffsetY = mouseY * movementFactor;
    redCube.position.x = cameraWidth / 2 - 1 + redCubeOffsetX;
    redCube.position.y = -cameraHeight / 2 + 1 + redCubeOffsetY;

    // Вращение форм
    shape.rotation.x += 0.002;
    shape.rotation.y += 0.002;

    redCube.rotation.x += 0.002;
    redCube.rotation.y += 0.002;

    renderer.render(scene, camera);
}

// Обновление при изменении размера окна
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // Обновляем матрицу проекции для камеры
    updateShapePositions(); // Обновляем позиции форм при изменении размера окна
});

// Инициализация
updateShapePositions();
animate();