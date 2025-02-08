// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { scene } from '../sceneSetup.js';

// Загружаем модель
const loader = new OBJLoader();
const summitShapePath = './models/SummitShape.obj';

export let summitShape = null;

loader.load(
    summitShapePath,
    (obj) => {
        summitShape = obj;
        summitShape.scale.set(0.6, 0.6, 0.6); // При необходимости масштабируем модель
        scene.add(summitShape);
    },
    undefined,
    (error) => {
        console.error('Ошибка загрузки модели:', error);
    }
);