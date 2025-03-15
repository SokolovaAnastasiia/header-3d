export function updateShapePositions(camera) {
    const header = document.getElementById('header');
    
    if (!header) {
        console.error('Элемент #header не найден');
        return;
    }

    const headerHeight = header.clientHeight; // Получаем высоту хэдера
    const aspect = header.clientWidth / headerHeight;
    const cameraHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const cameraWidth = cameraHeight * aspect;

    console.log(`Header height: ${headerHeight}, Camera height: ${cameraHeight}`);
}