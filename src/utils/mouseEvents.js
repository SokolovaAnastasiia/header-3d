export let mouseX = 0;
export let mouseY = 0;

export const movementFactor = 0.1; // Масштаб движения мыши для эффекта

export function initMouseEvents(renderer) {
    document.addEventListener('mousemove', (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
        mouseY = -(event.clientY - rect.top) / rect.height * 2 + 1;
    });
}