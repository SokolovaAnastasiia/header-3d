import { scene, camera, renderer } from './sceneSetup.js';
import { initMouseEvents } from './utils/mouseEvents.js';
import { updateShapePositions } from './utils/updatePositions.js';
import { animate } from './utils/animation.js';

// Инициализация обработчиков и функций
initMouseEvents(renderer);
updateShapePositions(camera);

renderer.setSize(header.clientWidth, header.clientHeight);

    // Update camera aspect ratio
camera.aspect = header.clientWidth / header.clientHeight;
camera.updateProjectionMatrix();

window.addEventListener('resize', () => {
    const header = document.getElementById('header');
    if (!header) return;

    // Update renderer to match header size
    renderer.setSize(header.clientWidth, header.clientHeight);

    // Update camera aspect ratio
    camera.aspect = header.clientWidth / header.clientHeight;
    camera.updateProjectionMatrix();
});


// Инициализация
updateShapePositions(camera);
animate();

