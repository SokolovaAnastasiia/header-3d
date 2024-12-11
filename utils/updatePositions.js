import { shape } from '../shapes/Shape.js';
import { summitShape } from '../shapes/SummitShape.js';

export function updateShapePositions(camera) {
    const aspect = window.innerWidth / window.innerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    // Синий куб — левый верхний угол
    shape.position.set(-cameraWidth / 2 + 1, cameraHeight / 2 - 1, 0);

    // Загруженная модель — правый нижний угол
    if (summitShape) {
        summitShape.position.set(cameraWidth / 2 - 1, -cameraHeight / 2 + 1, 0);
    }
}