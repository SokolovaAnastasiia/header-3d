import { renderer, camera, scene } from '../sceneSetup.js';
import { shape } from '../shapes/Shape.js';
import { summitShape } from '../shapes/SummitShape.js';
import { mouseX, mouseY, movementFactor } from './mouseEvents.js';
import { updateShapePositions } from './updatePositions.js';

export function animate() {
    requestAnimationFrame(animate);

    const aspect = window.innerWidth / window.innerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    // Смещение для синего куба
    shape.position.x = -cameraWidth / 2 + 1 + mouseX * movementFactor;
    shape.position.y = cameraHeight / 2 - 1 + mouseY * movementFactor;

    // Смещение для загруженной модели
    if (summitShape) {
        summitShape.position.x = cameraWidth / 2 - 1 + mouseX * movementFactor;
        summitShape.position.y = -cameraHeight / 2 + 1 + mouseY * movementFactor;

        // Вращение модели
        summitShape.rotation.x += 0.002;
        summitShape.rotation.y += 0.002;
    }

    // Вращение синего куба
    shape.rotation.x += 0.002;
    shape.rotation.y += 0.002;

    renderer.render(scene, camera);
}