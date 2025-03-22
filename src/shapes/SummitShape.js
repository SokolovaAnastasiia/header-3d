// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import { scene } from '../sceneSetup.js';

// // Загружаем модель
// const loader = new OBJLoader();
// const summitShapePath = './models/SummitShape.obj';

// export let summitShape = null;

// loader.load(
//     summitShapePath,
//     (obj) => {
//         summitShape = obj;
//         summitShape.scale.set(0.8, 0.8, 0.8); // При необходимости масштабируем модель
//         scene.add(summitShape);
//     },
//     undefined,
//     (error) => {
//         console.error('Ошибка загрузки модели:', error);
//     }
// );

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from '../sceneSetup.js';

const loader = new GLTFLoader();
const summitShapePath = './models/SummitShape.glb';

export let summitShape = null;

loader.load(
    summitShapePath,
    (gltf) => {
        summitShape = gltf.scene;
        summitShape.scale.set(0.8, 0.8, 0.8); // Scale if needed
        scene.add(summitShape);
    },
    undefined,
    (error) => {
        console.error('Error loading SummitShape:', error);
    }
);