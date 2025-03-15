// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';
// import { scene } from '../sceneSetup.js';

// // Создание геометрии и сглаживание нормалей
// const geometry = new THREE.BoxGeometry(2, 2, 2);

// // Создание материала
// const material = new THREE.MeshPhongMaterial({
//     color: 0xFFFFFF,
// });

// // Создание формы
// export const shape = new THREE.Mesh(geometry, material);
// scene.add(shape);

import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { scene } from '../sceneSetup.js';

const loader = new OBJLoader();
const mediaShapePath = './models/MediaShape.obj'; // Проверь путь



export let mediaShape = null;



loader.load(
    mediaShapePath,
    (obj) => {
        mediaShape = obj;
        mediaShape.scale.set(1, 1, 1); // Настроим размер
        scene.add(mediaShape);
        mediaShape.rotation.x = Math.PI / 6;  // 30 degrees on X-axis
        mediaShape.rotation.y = Math.PI / -2;  // 45 degrees on Y-axis

        // Change the color of all meshes in the model
        mediaShape.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshPhongMaterial({ color: 0xA194F2 }); // Soft pastel purple
            }
        });

    },
    undefined,
    (error) => {
        console.error('Ошибка загрузки MediaShape:', error);
    }
);

