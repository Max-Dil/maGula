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

function playSound(buffer) {
    let source = audioContext.createBufferSource()
    source.buffer = buffer
    source.connect(audioContext.destination)
    source.start(0)
}

exports.loadAudio = loadAudio;
exports.audioContext = audioContext;
exports.playSound = playSound;