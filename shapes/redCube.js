import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';
import { scene } from '../sceneSetup.js';

// Создание геометрии для красного куба
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Создание материала для красного куба
const material = new THREE.MeshLambertMaterial({
    color: 0xff0000, // Красный цвет
});

// Создание красного куба
export const redCube = new THREE.Mesh(geometry, material);
scene.add(redCube);