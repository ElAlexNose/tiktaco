let currentVideoIndex = 0; // Índice del video actual
const videos = [
    "sources/mp4/vd1.mp4",
    "sources/mp4/vd2.mp4",
    "sources/mp4/vd3.mp4",
    "sources/mp4/vd4.mp4",
    "sources/mp4/vd5.mp4",
    "sources/mp4/vd6.mp4",
    "sources/mp4/vd7.mp4",
    "sources/mp4/vd8.mp4",
    "sources/mp4/vd9.mp4",
    "sources/mp4/vd10.mp4",
    "sources/mp4/vd11.mp4",
    "sources/mp4/vd12.mp4",
    "sources/mp4/vd13.mp4",
    "sources/mp4/vd14.mp4",
    "sources/mp4/vd15.mp4",
    "sources/mp4/vd16.mp4",
    "sources/mp4/vd17.mp4"
];

function changeVideo(direction) {
    const videoElement = document.getElementById('video');

    // Desplazar el video actual fuera de la vista
    videoElement.style.transform = direction === 1 ? 'translateX(-100%)' : 'translateX(100%)';

    // Esperar a que la animación termine
    setTimeout(() => {
        // Detener el video actual
        videoElement.pause();

        // Actualizar el índice del video
        currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
        videoElement.src = videos[currentVideoIndex];
        videoElement.load(); // Cargar el nuevo video
        videoElement.play(); // Reproducir el nuevo video

        // Revertir el desplazamiento
        videoElement.style.transform = 'translateX(0)';
    }, 500); // 500ms coincide con la duración de la transición
}
