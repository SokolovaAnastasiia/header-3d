import { summitShape } from '../shapes/SummitShape.js';
import { mediaShape } from '../shapes/shape.js';

export function updateShapePositions(camera) {
    const header = document.getElementById('header');
    
    if (!header) {
        console.error('Элемент #header не найден');
        return;
    }

    const headerHeight = header.clientHeight; // Получаем высоту хэдера
    const aspect = window.innerWidth / headerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    console.log(`Header height: ${headerHeight}, Camera height: ${cameraHeight}`);

    // Позиционируем mediaShape (новая форма)
    if (mediaShape) {
        mediaShape.position.set(-cameraWidth / 2 + 1, cameraHeight / 2 - 1, 0);
    }

    // Загруженная модель — правый нижний угол
    if (summitShape) {
        summitShape.position.set(cameraWidth / 2 - 1, -cameraHeight / 2 + 1, 0);
    }
}