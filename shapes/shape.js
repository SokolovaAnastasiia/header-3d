import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';
import { scene } from '../sceneSetup.js';

// Создание геометрии и сглаживание нормалей
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Создание материала
const material = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
});

// Создание формы
export const shape = new THREE.Mesh(geometry, material);
scene.add(shape);