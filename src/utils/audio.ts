// Web Audio API Sound Generator for "Kỹ năng Đội HHTer"
// No external assets required, perfectly reliable and customizable!

let isMuted = false;

export const setMuted = (muted: boolean) => {
  isMuted = muted;
};

export const getMuted = () => isMuted;

// General beep/oscillator helper
const playTone = (frequency: number, type: OscillatorType, duration: number, volume: number = 0.1) => {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Smooth envelope
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.02);
    gainNode.gain.setValueAtTime(volume, ctx.currentTime + duration - 0.05);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn("Audio Context error:", e);
  }
};

// 1. Sound for UI interaction (Click)
export const playClickSound = () => {
  playTone(600, 'sine', 0.08, 0.15);
};

// 2. Sound for Correct Answers (Upward major chord arpeggio)
export const playCorrectSound = () => {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const playNote = (freq: number, start: number, dur: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, start);
      osc.type = 'triangle';
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + dur);
    };
    playNote(523.25, now, 0.15); // C5
    playNote(659.25, now + 0.10, 0.15); // E5
    playNote(783.99, now + 0.20, 0.15); // G5
    playNote(1046.50, now + 0.30, 0.30); // C6
  } catch (e) {
    playTone(800, 'sine', 0.3);
  }
};

// 3. Sound for Incorrect Answers (Downward buzz)
export const playIncorrectSound = () => {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {
    playTone(150, 'sawtooth', 0.3);
  }
};

// 4. Sound for Level Up (Triumphant trumpet effect)
export const playLevelUpSound = () => {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.12, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  } catch (e) {
    playTone(1000, 'sine', 0.5);
  }
};

// 5. Sound of Semaphore flag wave (Short whoosh)
export const playFlagWhoosh = () => {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.15; // 0.15 seconds
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1; // White noise
    }
    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;

    const filterNode = ctx.createBiquadFilter();
    filterNode.type = 'bandpass';
    filterNode.frequency.setValueAtTime(800, now);
    filterNode.frequency.exponentialRampToValueAtTime(200, now + 0.15);
    filterNode.Q.setValueAtTime(10, now);

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.15, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    noiseNode.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseNode.start();
    noiseNode.stop(now + 0.15);
  } catch (e) {
    playTone(300, 'triangle', 0.1, 0.05);
  }
};

// 6. Whistle (Còi Đội) & Morse sound player
// Morse has standard timing: dot = 1 unit, dash = 3 units, intra-character space = 1 unit
const UNIT_TIME = 100; // ms

export const playMorseSound = (morseCode: string, onEnded?: () => void) => {
  if (isMuted) {
    if (onEnded) onEnded();
    return;
  }

  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) {
      if (onEnded) onEnded();
      return;
    }
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    let accumulatedTime = 0.05; // initial offset

    for (let i = 0; i < morseCode.length; i++) {
      const symbol = morseCode[i];
      if (symbol === '.' || symbol === '•') {
        // Dot
        const start = now + accumulatedTime;
        const dur = (UNIT_TIME / 1000);
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(800, start); // Whistle pitch (800Hz)
        osc.type = 'sine';
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.2, start + 0.01);
        gain.gain.setValueAtTime(0.2, start + dur - 0.01);
        gain.gain.linearRampToValueAtTime(0, start + dur);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + dur);
        
        accumulatedTime += dur + (UNIT_TIME / 1000); // 1 unit space after dot
      } else if (symbol === '-' || symbol === '—') {
        // Dash
        const start = now + accumulatedTime;
        const dur = ((UNIT_TIME * 3) / 1000);
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(800, start);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.2, start + 0.01);
        gain.gain.setValueAtTime(0.2, start + dur - 0.01);
        gain.gain.linearRampToValueAtTime(0, start + dur);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + dur);
        
        accumulatedTime += dur + (UNIT_TIME / 1000); // 1 unit space after dash
      } else if (symbol === ' ') {
        accumulatedTime += ((UNIT_TIME * 3) / 1000); // 3 units space between letters
      } else if (symbol === '/') {
        accumulatedTime += ((UNIT_TIME * 7) / 1000); // 7 units space between words
      }
    }

    if (onEnded) {
      setTimeout(onEnded, accumulatedTime * 1000 + 100);
    }
  } catch (e) {
    console.warn("Morse Sound play failed:", e);
    if (onEnded) onEnded();
  }
};
