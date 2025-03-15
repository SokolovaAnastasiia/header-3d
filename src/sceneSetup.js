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
        vec2 uv = gl_FragCoord.xy / vec2(1920.0, 1080.0); // Normalize coordinates
        vec3 color1 = vec3(0.753, 0.886, 1.0); // #C0E2FF (soft pastel blue)
        vec3 color2 = vec3(0.933, 0.933, 0.933); // #EEEEEE (soft light gray)

        // Add some randomness to smooth out banding (dithering effect)
        float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
        noise = (noise - 0.5) * 0.06; // Small noise for better blending

        // Adjust the smoothness and animation of the gradient
        float mixFactor = smoothstep(0.0, 1.0, uv.y - uv.x + sin(uTime * 0.5) * 1.2 + noise);
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
const directionalLight = new THREE.DirectionalLight(0xEEEEEE, 2.5);
directionalLight.position.set(3, 3, 3);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xEEEEEE, 1.0);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xEEEEEE, 0xEEEEEE, 2.0);
scene.add(hemiLight);