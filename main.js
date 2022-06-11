export function playMedia() {
  const ctx = new AudioContext();
  let audio; // an mp3

  fetch("./sounds/hard_shit.mp3")
    .then((data) => data.arrayBuffer())
    .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
    .then((decodedAudio) => {
      audio = decodedAudio;
    });

  function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
  }

  window.addEventListener("mouseDown", playback);
}
