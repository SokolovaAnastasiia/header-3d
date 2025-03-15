import { renderer, camera, scene } from '../sceneSetup.js';
import { mediaShape } from '../shapes/shape.js';
import { summitShape } from '../shapes/SummitShape.js';
import { mouseX, mouseY, movementFactor } from './mouseEvents.js';

export function animate() {
    requestAnimationFrame(animate);

    const aspect = header.clientWidth / header.clientHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    // Смещение для новой загруженной модели
    if (mediaShape) {
        mediaShape.position.x = -cameraWidth / 2 + 2 + mouseX * movementFactor;
        mediaShape.position.y = cameraHeight / 2 - 2 + mouseY * movementFactor;

        // Вращение модели
        mediaShape.rotation.x += 0.0005;
        mediaShape.rotation.y += 0.0005;
    }

    // Смещение для загруженной модели SummitShape
    if (summitShape) {
        summitShape.position.x = cameraWidth / 2 - 2 + mouseX * movementFactor;
        summitShape.position.y = -cameraHeight / 2 + 2 + mouseY * movementFactor;

        // Вращение модели
        summitShape.rotation.x += 0.0005;
        summitShape.rotation.y += 0.0005;
    }

    renderer.render(scene, camera);
}