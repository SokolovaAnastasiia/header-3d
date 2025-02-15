import { summitShape } from '../shapes/SummitShape.js';
import { mediaShape } from '../shapes/Shape.js';

export function updateShapePositions(camera) {
    const aspect = window.innerWidth / window.innerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    // Позиционируем mediaShape — левый верхний угол
    if (mediaShape) {
        mediaShape.position.set(-cameraWidth / 2 + 1, cameraHeight / 2 - 1, 0);
    }

    // Позиционируем summitShape — правый нижний угол
    if (summitShape) {
        summitShape.position.set(cameraWidth / 2 - 1, -cameraHeight / 2 + 1, 0);
    }
}