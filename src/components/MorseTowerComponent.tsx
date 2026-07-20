import React, { useState } from 'react';
import { playMorseSound, playClickSound } from '../utils/audio';

interface Node {
  char: string;
  code: string;
  left?: string;  // Character when going Left (dot)
  right?: string; // Character when going Right (dash)
}

export default function MorseTowerComponent() {
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Simple Morse tree map
  const morseTree: Record<string, Node> = {
    "START": { char: "BẮT ĐẦU", code: "", left: "E", right: "T" },
    "E": { char: "E", code: ".", left: "I", right: "A" },
    "T": { char: "T", code: "-", left: "N", right: "M" },
    "I": { char: "I", code: "..", left: "S", right: "U" },
    "A": { char: "A", code: ".-", left: "R", right: "W" },
    "N": { char: "N", code: "-.", left: "D", right: "K" },
    "M": { char: "M", code: "--", left: "G", right: "O" },
    "S": { char: "S", code: "...", left: "H", right: "V" },
    "U": { char: "U", code: "..-", left: "F" },
    "R": { char: "R", code: ".-.", left: "L" },
    "W": { char: "W", code: ".--", left: "P", right: "J" },
    "D": { char: "D", code: "-..", left: "B", right: "X" },
    "K": { char: "K", code: "-.-", left: "C", right: "Y" },
    "G": { char: "G", code: "--.", left: "Z", right: "Q" },
    "O": { char: "O", code: "---", left: "CH" },
    // Leaf nodes (Tầng 4)
    "H": { char: "H", code: "...." },
    "V": { char: "V", code: "...-" },
    "F": { char: "F", code: "..-." },
    "L": { char: "L", code: ".-.." },
    "P": { char: "P", code: ".--." },
    "J": { char: "J", code: ".---" },
    "B": { char: "B", code: "-..." },
    "X": { char: "X", code: "-..-" },
    "C": { char: "C", code: "-.-." },
    "Y": { char: "Y", code: "-.--" },
    "Z": { char: "Z", code: "--.." },
    "Q": { char: "Q", code: "--.-" },
    "CH": { char: "CH", code: "----" }
  };

  const handlePressSymbol = (sym: '.' | '-') => {
    playClickSound();
    let newPath = currentPath + sym;
    // Limit path to 4 characters
    if (newPath.length <= 4) {
      setCurrentPath(newPath);
      // Find matching char
      const matchedNode = Object.values(morseTree).find(node => node.code === newPath);
      if (matchedNode) {
        setIsPlaying(true);
        playMorseSound(newPath, () => setIsPlaying(false));
      }
    }
  };

  const handleClear = () => {
    playClickSound();
    setCurrentPath("");
  };

  const getCurrentChar = () => {
    if (!currentPath) return "BẮT ĐẦU";
    const matched = Object.values(morseTree).find(node => node.code === currentPath);
    return matched ? matched.char : "CHƯA CÓ CHỮ";
  };

  const handlePlayCharSound = (code: string) => {
    if (!isPlaying) {
      setIsPlaying(true);
      playMorseSound(code, () => setIsPlaying(false));
    }
  };

  // Structured static layers to display Tháp Morse
  const layers = [
    { level: 1, name: "TẦNG 1 (1 ký tự)", items: ["E", "T"] },
    { level: 2, name: "TẦNG 2 (2 ký tự)", items: ["I", "A", "N", "M"] },
    { level: 3, name: "TẦNG 3 (3 ký tự)", items: ["S", "U", "R", "W", "D", "K", "G", "O"] },
    { level: 4, name: "TẦNG 4 (4 ký tự)", items: ["H", "V", "F", "L", "P", "J", "B", "X", "C", "Y", "Z", "Q", "CH"] }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Visual Morse Tree Representation */}
      <div className="lg:col-span-7 bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white shadow-xl">
        <h3 className="font-title text-2xl text-[#2c3e50] mb-4 text-center">🌳 THÁP PHÂN NHÁNH MORSE</h3>
        <p className="text-sm text-[#57606f] mb-6 text-center">
          Nhìn tháp này để nhẩm: rẽ <strong className="text-blue-600">TRÁI khi gặp Tích (•)</strong> và rẽ <strong className="text-red-600">PHẢI khi gặp Tè (—)</strong>. Nhấn vào chữ để nghe còi!
        </p>

        {/* Tree layers visual container */}
        <div className="space-y-6">
          {/* Root node */}
          <div className="flex justify-center">
            <div className="bg-emerald-500 text-white font-bold w-20 py-2 rounded-2xl text-center shadow-lg border-2 border-emerald-400">
              GỐC
            </div>
          </div>

          {layers.map((layer) => (
            <div key={layer.level} className="space-y-2">
              <div className="text-xs font-bold text-gray-400 text-center uppercase tracking-wider">{layer.name}</div>
              <div className="flex flex-wrap justify-center gap-2">
                {layer.items.map((nodeKey) => {
                  const node = morseTree[nodeKey];
                  if (!node) return null;
                  return (
                    <button
                      key={nodeKey}
                      id={`node-${nodeKey}`}
                      onClick={() => handlePlayCharSound(node.code)}
                      className="bg-white hover:bg-emerald-50 active:scale-95 border-2 border-[#a3cb73] rounded-xl px-3 py-2 flex flex-col items-center shadow-sm hover:shadow-md transition-all w-14"
                    >
                      <span className="font-title text-lg text-[#2c3e50] font-bold">{node.char}</span>
                      <span className="text-[9px] font-mono text-[#7ca446]">{node.code}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Morse Playground Decoder */}
      <div className="lg:col-span-5 bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white shadow-xl flex flex-col h-full justify-between">
        <div>
          <h3 className="font-title text-2xl text-[#2c3e50] mb-3 text-center">📡 BỘ DÒ MÃ MORSE</h3>
          <p className="text-xs text-[#57606f] mb-6 text-center">
            Tự đánh Tích (•) và Tè (—) để tìm xem đó là chữ cái gì nào!
          </p>

          {/* Screen Output display */}
          <div className="bg-[#1e272e] rounded-2xl p-6 mb-6 text-center relative overflow-hidden shadow-inner border border-black/30">
            <div className="absolute top-2 left-3 text-[10px] font-mono text-gray-500">MÃ ĐANG NHẬP:</div>
            
            {/* Morse Symbols display */}
            <div className="h-10 flex items-center justify-center font-mono text-3xl text-[#00d2d3] tracking-widest font-bold">
              {currentPath || <span className="text-gray-600 text-lg">Chờ nhập...</span>}
            </div>
            
            {/* Found Letter */}
            <div className="mt-4 border-t border-gray-700 pt-4">
              <span className="text-[10px] text-gray-400 block mb-1">CHỮ CÁI GIẢI MÃ:</span>
              <span className="font-title text-4xl text-[#ff9f43] font-black">{getCurrentChar()}</span>
            </div>
          </div>
        </div>

        {/* Input Buttons */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Dot (•) button */}
            <button
              id="playground-dot-btn"
              onClick={() => handlePressSymbol('.')}
              disabled={currentPath.length >= 4}
              className="bg-blue-500 hover:bg-blue-600 active:translate-y-1 disabled:opacity-50 text-white font-bold py-6 rounded-2xl shadow-lg border-b-4 border-blue-700 text-3xl transition-all"
            >
              •
              <span className="block text-xs font-normal mt-1">TÍCH (Ngắn)</span>
            </button>

            {/* Dash (—) button */}
            <button
              id="playground-dash-btn"
              onClick={() => handlePressSymbol('-')}
              disabled={currentPath.length >= 4}
              className="bg-red-500 hover:bg-red-600 active:translate-y-1 disabled:opacity-50 text-white font-bold py-6 rounded-2xl shadow-lg border-b-4 border-red-700 text-3xl transition-all"
            >
              —
              <span className="block text-xs font-normal mt-1">TÈ (Dài)</span>
            </button>
          </div>

          {/* Control Buttons */}
          <button
            id="playground-clear-btn"
            onClick={handleClear}
            className="w-full bg-gray-200 hover:bg-gray-300 active:scale-95 text-gray-700 font-bold py-3 rounded-xl transition-all shadow-sm"
          >
            ❌ XÓA ĐỂ LÀM LẠI
          </button>
        </div>
      </div>
    </div>
  );
}
