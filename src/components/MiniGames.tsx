import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, Trophy, Award, Play } from 'lucide-react';
import { UserProfile } from '../types';
import { playClickSound, playCorrectSound, playIncorrectSound } from '../utils/audio';

interface MiniGamesProps {
  user: UserProfile;
  saveUserProfile: (updated: UserProfile) => void;
  addReward: (points: number, exp: number, activity: string) => void;
}

export default function MiniGames({ user, saveUserProfile, addReward }: MiniGamesProps) {
  const [activeGame, setActiveGame] = useState<'menu' | 'memory' | 'puzzle' | 'wheel'>('menu');

  // --- GAME 1: MEMORY MATCH STATE ---
  const [cards, setCards] = useState<{ id: number; val: string; flipped: boolean; matched: boolean }[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [memoryFinished, setMemoryFinished] = useState<boolean>(false);

  // --- GAME 2: PUZZLE STATE ---
  // A 3x3 grid puzzle (0 to 8, with 8 as the empty cell)
  const [puzzleGrid, setPuzzleGrid] = useState<number[]>([]);
  const [puzzleMoves, setPuzzleMoves] = useState<number>(0);
  const [puzzleFinished, setPuzzleFinished] = useState<boolean>(false);

  // --- GAME 3: SPINNING WHEEL STATE ---
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [spinAngle, setSpinAngle] = useState<number>(0);
  const [wheelReward, setWheelReward] = useState<string>("");

  // Initialize Memory Match
  const initMemoryGame = () => {
    playClickSound();
    const symbols = ["📡 Morse", "🚩 Sema", "🪧 Trại", "⛺️ Đội", "🥉 Huy hiệu", "🧣 Khăn đỏ"];
    const doubled = [...symbols, ...symbols]
      .map((val, idx) => ({ id: idx, val, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(doubled);
    setSelectedCards([]);
    setMoves(0);
    setMemoryFinished(false);
  };

  const handleCardClick = (idx: number) => {
    if (cards[idx].flipped || cards[idx].matched || selectedCards.length >= 2) return;
    playClickSound();

    const newCards = [...cards];
    newCards[idx].flipped = true;
    setCards(newCards);

    const newSelected = [...selectedCards, idx];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newSelected;
      if (cards[first].val === cards[second].val) {
        // Matched
        setTimeout(() => {
          playCorrectSound();
          newCards[first].matched = true;
          newCards[second].matched = true;
          setCards([...newCards]);
          setSelectedCards([]);
          // Check if all matched
          if (newCards.every(c => c.matched)) {
            setMemoryFinished(true);
            addReward(15, 25, "Hoàn thành trò chơi Lật thẻ ghi nhớ 🧠");
          }
        }, 600);
      } else {
        // Not matched
        setTimeout(() => {
          playIncorrectSound();
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards([...newCards]);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  // Initialize Puzzle
  const initPuzzleGame = () => {
    playClickSound();
    // Shuffled 3x3 tiles
    let tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // Shuffle ensuring solvability
    do {
      tiles = tiles.sort(() => Math.random() - 0.5);
    } while (!isSolvable(tiles));

    setPuzzleGrid(tiles);
    setPuzzleMoves(0);
    setPuzzleFinished(false);
  };

  const isSolvable = (grid: number[]) => {
    let inversions = 0;
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = i + 1; j < grid.length; j++) {
        if (grid[i] !== 8 && grid[j] !== 8 && grid[i] > grid[j]) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  };

  const handleTileClick = (idx: number) => {
    if (puzzleFinished) return;
    const emptyIdx = puzzleGrid.indexOf(8);
    // Grid coords coords
    const r1 = Math.floor(idx / 3);
    const c1 = idx % 3;
    const r2 = Math.floor(emptyIdx / 3);
    const c2 = emptyIdx % 3;

    // Check if adjacent
    const isAdjacent = (Math.abs(r1 - r2) + Math.abs(c1 - c2)) === 1;
    if (isAdjacent) {
      playClickSound();
      const newGrid = [...puzzleGrid];
      newGrid[emptyIdx] = newGrid[idx];
      newGrid[idx] = 8;
      setPuzzleGrid(newGrid);
      setPuzzleMoves(prev => prev + 1);

      // Verify win
      if (newGrid.every((val, i) => val === i)) {
        playCorrectSound();
        setPuzzleFinished(true);
        addReward(25, 40, "Hoàn thành trò chơi Ghép hình Huy hiệu 🧩");
      }
    }
  };

  // Lucky Wheel spin
  const handleSpinWheel = () => {
    if (isSpinning) return;
    playClickSound();
    setIsSpinning(true);
    setWheelReward("");

    // Generate random angle
    const extraRotations = 5 + Math.floor(Math.random() * 5); // 5 to 9 spins
    const targetDeg = extraRotations * 360 + Math.floor(Math.random() * 360);
    setSpinAngle(targetDeg);

    setTimeout(() => {
      setIsSpinning(false);
      // Determine reward based on angle angle
      const finalDeg = targetDeg % 360;
      const rewardsList = [
        "+10 Xu",
        "+30 EXP",
        "Thử Thách Thưởng",
        "+20 Xu",
        "+50 EXP",
        "Chúc may mắn lần sau"
      ];
      const sector = Math.floor((360 - finalDeg) / 60) % 6;
      const reward = rewardsList[sector];
      setWheelReward(reward);

      playCorrectSound();

      if (reward.includes("Xu")) {
        const value = parseInt(reward);
        // Custom coin rewards could update UserProfile coins if tracked, otherwise rewards EXP/points
        addReward(value, 10, `Quay trúng ${reward} trên Vòng quay may mắn 🎲`);
      } else if (reward.includes("EXP")) {
        const value = parseInt(reward);
        addReward(10, value, `Quay trúng ${reward} trên Vòng quay may mắn 🎲`);
      } else {
        addReward(5, 5, `Quay trúng ${reward} trên Vòng quay may mắn 🎲`);
      }
    }, 4000);
  };

  return (
    <div className="space-y-6">
      
      {activeGame === 'menu' && (
        /* GAMES MENU SELECTOR */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto py-6">
          
          {/* Game Card 1: Memory match */}
          <button
            id="menu-game-memory"
            onClick={() => {
              setActiveGame('memory');
              initMemoryGame();
            }}
            className="bg-white hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-center shadow-xl transition-all relative overflow-hidden group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner mb-4 group-hover:scale-115 transition-transform">
              🧠
            </div>
            <h3 className="font-title text-2xl font-black text-gray-800 tracking-tight">LẬT THẺ GHI NHỚ</h3>
            <p className="text-xs text-gray-400 mt-2 font-semibold">Tìm cặp đôi Morse, Semaphore giống nhau.</p>
            <span className="inline-block mt-4 text-[10px] bg-emerald-500 text-white px-3 py-1 rounded-full font-black">
              Chơi ngay ➔
            </span>
          </button>

          {/* Game Card 2: Jigsaw */}
          <button
            id="menu-game-puzzle"
            onClick={() => {
              setActiveGame('puzzle');
              initPuzzleGame();
            }}
            className="bg-white hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-center shadow-xl transition-all relative overflow-hidden group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mx-auto shadow-inner mb-4 group-hover:scale-115 transition-transform">
              🧩
            </div>
            <h3 className="font-title text-2xl font-black text-gray-800 tracking-tight">GHÉP HÌNH HUY HIỆU</h3>
            <p className="text-xs text-gray-400 mt-2 font-semibold">Xếp các ô ghép 3x3 hoàn thành Huy hiệu Đội.</p>
            <span className="inline-block mt-4 text-[10px] bg-blue-500 text-white px-3 py-1 rounded-full font-black">
              Chơi ngay ➔
            </span>
          </button>

          {/* Game Card 3: Wheel */}
          <button
            id="menu-game-wheel"
            onClick={() => {
              setActiveGame('wheel');
              setSpinAngle(0);
              setWheelReward("");
            }}
            className="bg-white hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-center shadow-xl transition-all relative overflow-hidden group group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center text-3xl mx-auto shadow-inner mb-4 group-hover:scale-115 transition-transform">
              🎲
            </div>
            <h3 className="font-title text-2xl font-black text-gray-800 tracking-tight">VÒNG QUAY MAY MẮN</h3>
            <p className="text-xs text-gray-400 mt-2 font-semibold">Quay bánh xe nhận vàng và EXP bổ sung.</p>
            <span className="inline-block mt-4 text-[10px] bg-yellow-500 text-white px-3 py-1 rounded-full font-black">
              Chơi ngay ➔
            </span>
          </button>

        </div>
      )}

      {/* GAME 1: MEMORY MATCH */}
      {activeGame === 'memory' && (
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-[40px] border-4 border-white p-6 md:p-8 shadow-2xl space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <div>
              <h3 className="font-title text-2xl text-emerald-950 font-black">🧠 LẬT THẺ GHI NHỚ</h3>
              <p className="text-[10px] text-gray-400 font-medium">Lượt di chuyển: {moves} lượt.</p>
            </div>
            <button
              id="back-to-menu-btn"
              onClick={() => setActiveGame('menu')}
              className="text-xs text-gray-400 hover:text-gray-700 font-bold border border-gray-200 px-3 py-1.5 rounded-xl"
            >
              Thoát game
            </button>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {cards.map((c, idx) => (
              <button
                key={c.id}
                id={`mem-card-${idx}`}
                onClick={() => handleCardClick(idx)}
                className={`h-24 rounded-2xl font-title text-sm font-black transition-all flex items-center justify-center border-2 border-b-4 cursor-pointer relative ${
                  c.flipped || c.matched
                    ? 'bg-emerald-500 border-emerald-700 text-white scale-100'
                    : 'bg-slate-100 border-gray-300 hover:bg-slate-200 active:translate-y-0.5'
                }`}
              >
                {c.flipped || c.matched ? (
                  <span>{c.val}</span>
                ) : (
                  <span className="text-3xl text-gray-400">❓</span>
                )}
              </button>
            ))}
          </div>

          {memoryFinished && (
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-3xl text-xs font-black text-center shadow-sm">
              🎉 Chúc mừng em đã hoàn thành trò chơi lật thẻ trong {moves} lượt! Nhận thêm +15 điểm và +25 EXP.
            </div>
          )}

          <button
            id="play-again-memory-btn"
            onClick={initMemoryGame}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-title text-base py-3.5 rounded-2xl shadow-md border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 cursor-pointer"
          >
            🔄 LÀM MỚI GAME LẠI
          </button>
        </div>
      )}

      {/* GAME 2: PUZZLE ASSEMBLY */}
      {activeGame === 'puzzle' && (
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-[40px] border-4 border-white p-6 md:p-8 shadow-2xl space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <div>
              <h3 className="font-title text-2xl text-blue-950 font-black">🧩 GHÉP HÌNH HUY HIỆU</h3>
              <p className="text-[10px] text-gray-400 font-medium">Lượt di chuyển: {puzzleMoves} lượt.</p>
            </div>
            <button
              id="back-to-menu-from-puzzle-btn"
              onClick={() => setActiveGame('menu')}
              className="text-xs text-gray-400 hover:text-gray-700 font-bold border border-gray-200 px-3 py-1.5 rounded-xl"
            >
              Thoát game
            </button>
          </div>

          {/* Grid layout of 3x3 sliding blocks */}
          <div className="grid grid-cols-3 gap-2 bg-slate-100 p-2.5 rounded-3xl max-w-sm mx-auto shadow-inner border border-slate-200">
            {puzzleGrid.map((val, idx) => (
              <button
                key={idx}
                id={`puzzle-tile-${idx}`}
                onClick={() => handleTileClick(idx)}
                className={`h-24 rounded-2xl font-title text-3xl font-black transition-all flex items-center justify-center border-2 border-b-4 cursor-pointer ${
                  val === 8
                    ? 'bg-transparent border-transparent cursor-default border-b-0'
                    : 'bg-white border-blue-200 text-blue-600 shadow-sm hover:border-blue-400'
                }`}
              >
                {val !== 8 && (
                  <div className="flex flex-col items-center">
                    <span className="text-xl">
                      {val === 0 && '🌱'}
                      {val === 1 && '★'}
                      {val === 2 && '🧣'}
                      {val === 3 && '⛺️'}
                      {val === 4 && '🎖'}
                      {val === 5 && 'Sẵn'}
                      {val === 6 && 'Sàng'}
                      {val === 7 && '🏆'}
                    </span>
                    <span className="text-[8px] text-gray-400 font-mono mt-0.5">Mảnh {val + 1}</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {puzzleFinished && (
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-3xl text-xs font-black text-center shadow-sm">
              🎉 Tuyệt vời! Em đã lắp ráp Huy hiệu Đội thành công sau {puzzleMoves} lượt! Nhận thêm +25 điểm và +40 EXP.
            </div>
          )}

          <button
            id="play-again-puzzle-btn"
            onClick={initPuzzleGame}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-title text-base py-3.5 rounded-2xl shadow-md border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 cursor-pointer"
          >
            🔄 TRỘN LẠI MẢNH GHÉP
          </button>
        </div>
      )}

      {/* GAME 3: LUCKY SPINNING WHEEL */}
      {activeGame === 'wheel' && (
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md rounded-[40px] border-4 border-white p-6 md:p-8 shadow-2xl space-y-6 text-center">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3 text-left">
            <div>
              <h3 className="font-title text-2xl text-yellow-950 font-black">🎲 VÒNG QUAY MAY MẮN</h3>
              <p className="text-[10px] text-gray-400 font-medium">Thử vận may của em mỗi ngày để nhận quà.</p>
            </div>
            <button
              id="back-to-menu-from-wheel-btn"
              onClick={() => setActiveGame('menu')}
              className="text-xs text-gray-400 hover:text-gray-700 font-bold border border-gray-200 px-3 py-1.5 rounded-xl cursor-pointer"
            >
              Thoát game
            </button>
          </div>

          {/* Graphical circular wheel wheel */}
          <div className="relative w-64 h-64 mx-auto flex items-center justify-center overflow-hidden">
            {/* Pointer pointer arrow */}
            <div className="absolute -top-1 w-6 h-6 bg-red-650 rotate-45 border-2 border-white shadow-md z-20" />
            {/* Spinning disk */}
            <div
              className="w-56 h-56 rounded-full border-8 border-yellow-400 bg-gradient-to-tr from-orange-400 via-yellow-300 to-amber-500 shadow-xl transition-all duration-4000 ease-out relative z-10 flex items-center justify-center font-title text-3xl font-black text-[#5c3f21]"
              style={{
                transform: `rotate(${spinAngle}deg)`,
                backgroundImage: 'conic-gradient(#ff7675 0 60deg, #ffeaa7 60deg 120deg, #74b9ff 120deg 180deg, #55efc4 180deg 240deg, #a29bfe 240deg 300deg, #fd79a8 300deg 360deg)'
              }}
            >
              {/* Overlay graphics decoration lines */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.05)_40%)]" />
              🎡
            </div>
          </div>

          {wheelReward && (
            <div className="bg-yellow-50 border border-yellow-100 text-yellow-800 p-4.5 rounded-3xl text-sm font-black text-center shadow-sm animate-bounce">
              🎁 QUÀ CỦA EM: {wheelReward}
            </div>
          )}

          <button
            id="spin-wheel-btn"
            onClick={handleSpinWheel}
            disabled={isSpinning}
            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 text-white font-title text-base py-3.5 rounded-2xl shadow-lg border-b-4 border-yellow-600 transition-all cursor-pointer"
          >
            {isSpinning ? "🌀 BÁNH XE ĐANG QUAY..." : "🚀 QUAY VÒNG QUAY MAY MẮN"}
          </button>
        </div>
      )}

    </div>
  );
}
