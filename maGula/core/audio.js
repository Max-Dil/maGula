const audioContext = new (window.AudioContext || window.webkitAudioContext)();

async function loadAudio(url) {
    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(buffer);
        return audioBuffer;
    } catch (error) {
        console.error("Ошибка загрузки аудио:", error);
        throw error;
    }
}

export default [loadAudio, audioContext];