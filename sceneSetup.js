import * as THREE from 'three';

// Настройка сцены
export const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa); // Светло-серый фон

// Настройка камеры
export const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 12;

// Настройка рендера
export const renderer = new THREE.WebGLRenderer({ antialias: true }); // Включаем сглаживание
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Добавляем направленный свет
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Добавляем окружающий свет
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Мягкий окружающий свет
scene.add(ambientLight);