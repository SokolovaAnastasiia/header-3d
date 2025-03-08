import * as THREE from 'three';


// Создаем сцену
export const scene = new THREE.Scene();

// Настройка камеры
export const camera = new THREE.PerspectiveCamera(
  45, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 12;

// Создаем WebGLRenderer
export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('header-background').appendChild(renderer.domElement);

// === Создаем анимированный градиентный фон ===

// Шейдерный материал для градиента
const gradientMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 }
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;
    uniform float uTime;

    void main() {
        vec2 uv = gl_FragCoord.xy / vec2(1920.0, 1080.0); // Нормализуем координаты
        vec3 color1 = vec3(0.9137, 0.7569, 0.9412); // #FCE8FF (розовый)
        vec3 color2 = vec3(0.89, 0.91, 0.94); // #E4E9F0 (фиолетовый)

        float mixFactor = smoothstep(0.0, 1.0, uv.y - uv.x + sin(uTime * 2.0) * 0.9);
        vec3 gradient = mix(color1, color2, mixFactor);

        gl_FragColor = vec4(gradient, 1.0);
    }
  `,
  transparent: true
});

// Создаем плоскость во весь экран
const bgGeometry = new THREE.PlaneGeometry(50, 50); // Увеличим плоскость
const bgMesh = new THREE.Mesh(bgGeometry, gradientMaterial);
bgMesh.position.z = -5; // Отодвигаем фон назад
scene.add(bgMesh);

// === Двигаем анимацию градиента ===
function animate() {
  requestAnimationFrame(animate);
  
  gradientMaterial.uniforms.uTime.value += 0.003; // Замедляем анимацию в 2 раза
  renderer.render(scene, camera);
}

animate();

// Добавляем освещение
const directionalLight = new THREE.DirectionalLight(0xFCE8FF, 1.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xFCE8FF, 2.0);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xFCE8FF, 0xFCE8FF, 0.5);
scene.add(hemiLight);