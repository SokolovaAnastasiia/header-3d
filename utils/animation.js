import { renderer, camera, scene } from '../sceneSetup.js';
import { mediaShape } from '../shapes/Shape.js';
import { summitShape } from '../shapes/SummitShape.js';
import { mouseX, mouseY, movementFactor } from './mouseEvents.js';
import { updateShapePositions } from './updatePositions.js';

export function animate() {
    requestAnimationFrame(animate);

    const aspect = window.innerWidth / window.innerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    // Смещение для новой загруженной модели
    if (mediaShape) {
        mediaShape.position.x = -cameraWidth / 2 + 1 + mouseX * movementFactor;
        mediaShape.position.y = cameraHeight / 2 - 1 + mouseY * movementFactor;

        // Вращение модели
        mediaShape.rotation.x -= 0.001;
        mediaShape.rotation.y -= 0.001;
    }

    // Смещение для загруженной модели SummitShape
    if (summitShape) {
        summitShape.position.x = cameraWidth / 2 - 1 + mouseX * movementFactor;
        summitShape.position.y = -cameraHeight / 2 + 1 + mouseY * movementFactor;

        // Вращение модели
        summitShape.rotation.x += 0.001;
        summitShape.rotation.y += 0.00;
    }

    renderer.render(scene, camera);
}