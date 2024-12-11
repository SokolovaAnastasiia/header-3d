import { scene, camera, renderer } from './sceneSetup.js';
import { initMouseEvents } from './utils/mouseEvents.js';
import { updateShapePositions } from './utils/updatePositions.js';
import { animate } from './utils/animation.js';

// Инициализация обработчиков и функций
initMouseEvents(renderer);

// Обновление при изменении размера окна
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    updateShapePositions(camera);
});

// Инициализация
updateShapePositions(camera);
animate();