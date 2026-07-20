import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, Rotate3d, Play, Pause, ChevronRight, CheckCircle, Volume2, Info, RefreshCw, Layers } from 'lucide-react';
import { LessonItem, NGHI_THUC_DOI_LESSONS } from '../data/nghiThucDoi';
import { playClickSound, playCorrectSound, playIncorrectSound } from '../utils/audio';

export default function NghiThucDoiTheory() {
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isGlowing, setIsGlowing] = useState<boolean>(true);
  const [selectedPart, setSelectedPart] = useState<string>("ao");
  const [isPlayingText, setIsPlayingText] = useState<boolean>(false);
  const [tieSpeed, setTieSpeed] = useState<'normal' | 'slow'>('normal');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isStepPlaying, setIsStepPlaying] = useState<boolean>(false);

  // Drag-and-drop game state for thắt khăn
  const [orderItems, setOrderItems] = useState<{ id: number; text: string }[]>([]);
  const [gameFeedback, setGameFeedback] = useState<string>("");

  const lesson = NGHI_THUC_DOI_LESSONS.find(l => l.id === selectedLessonId) || NGHI_THUC_DOI_LESSONS[0];

  useEffect(() => {
    // Reset states when lesson changes
    setActiveStep(0);
    setIsRotating(false);
    setSelectedPart("ao");
    setGameFeedback("");
    setIsPlayingText(false);
    window.speechSynthesis?.cancel();

    if (lesson.steps) {
      // Shuffle steps for the ordering game
      const shuffled = lesson.steps
        .map(s => ({ id: s.stepNum, text: s.title }))
        .sort(() => Math.random() - 0.5);
      setOrderItems(shuffled);
    }
  }, [selectedLessonId]);

  // Voice Speech Synthesis
  const handleSpeakText = (text: string) => {
    if (!window.speechSynthesis) {
      alert("Trình duyệt không hỗ trợ phát giọng đọc!");
      return;
    }
    playClickSound();
    if (isPlayingText) {
      window.speechSynthesis.cancel();
      setIsPlayingText(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "vi-VN";
    utterance.rate = 0.9;
    utterance.onend = () => setIsPlayingText(false);
    setIsPlayingText(true);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  // Check order game
  const handleVerifyOrder = () => {
    if (!lesson.steps) return;
    const isCorrect = orderItems.every((item, idx) => item.id === idx + 1);
    if (isCorrect) {
      playCorrectSound();
      setGameFeedback("Chính xác rồi! Em xếp thứ tự các bước rất giỏi! 🎉 +10 điểm.");
    } else {
      playIncorrectSound();
      setGameFeedback("Chưa đúng rồi! Hãy thử sắp xếp lại nhé. Đọc kỹ phần Hướng dẫn để tìm thứ tự đúng.");
    }
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    playClickSound();
    const newItems = [...orderItems];
    if (direction === 'up' && index > 0) {
      const temp = newItems[index];
      newItems[index] = newItems[index - 1];
      newItems[index - 1] = temp;
    } else if (direction === 'down' && index < newItems.length - 1) {
      const temp = newItems[index];
      newItems[index] = newItems[index + 1];
      newItems[index + 1] = temp;
    }
    setOrderItems(newItems);
  };

  // Playback loop for thắt khăn animation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isStepPlaying && lesson.steps) {
      const delay = tieSpeed === 'slow' ? 3000 : 1500;
      timer = setTimeout(() => {
        setCurrentStepIndex(prev => {
          if (prev < lesson.steps!.length - 1) {
            return prev + 1;
          } else {
            setIsStepPlaying(false);
            return 0;
          }
        });
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [isStepPlaying, currentStepIndex, tieSpeed, lesson]);

  // Voice Command synthesis
  const handleSpeakCommand = (voiceText: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(voiceText);
    utterance.lang = "vi-VN";
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: Navigation of 13 lessons */}
        <div className="lg:col-span-4 bg-white/90 backdrop-blur-md rounded-[35px] border-4 border-white p-5 shadow-xl space-y-3">
          <div className="border-b border-gray-150 pb-3">
            <h3 className="font-title text-xl text-emerald-950 font-black flex items-center gap-1.5">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span>DANH SÁCH 13 BÀI HỌC</span>
            </h3>
            <p className="text-[10px] text-gray-500 font-medium">Bấm vào bài học bên dưới để mở giao trình trực quan.</p>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
            {NGHI_THUC_DOI_LESSONS.map((item) => {
              const isSelected = selectedLessonId === item.id;
              return (
                <button
                  key={item.id}
                  id={`lesson-item-${item.id}`}
                  onClick={() => {
                    playClickSound();
                    setSelectedLessonId(item.id);
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 border-white text-white shadow-md'
                      : 'bg-white border-gray-100 hover:border-emerald-200 text-gray-700 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                    isSelected ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`block text-xs font-black truncate ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                      {item.title}
                    </span>
                    <span className={`block text-[9px] truncate ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                      {item.shortDesc}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-gray-300 group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Interactive Detail View */}
        <div className="lg:col-span-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLessonId}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-white/95 backdrop-blur-md rounded-[40px] border-4 border-white p-6 md:p-8 shadow-2xl space-y-6"
            >
              {/* Header Title with Audio read button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-gray-100 pb-4">
                <div>
                  <span className={`text-[10px] text-white px-3 py-1 rounded-full font-black uppercase tracking-wider bg-gradient-to-r ${lesson.bgGradient}`}>
                    🎖 Nghi thức Đội
                  </span>
                  <h2 className="font-title text-2xl md:text-3xl text-gray-900 font-black mt-2 leading-tight">
                    {lesson.title}
                  </h2>
                </div>

                <button
                  id="speak-lesson-btn"
                  onClick={() => handleSpeakText(`${lesson.title}. ${lesson.meaningDetails}`)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm border border-b-4 cursor-pointer ${
                    isPlayingText
                      ? 'bg-red-500 border-red-700 text-white'
                      : 'bg-emerald-500 border-emerald-700 hover:bg-emerald-600 text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isPlayingText ? "DỪNG ĐỌC" : "🔊 NGHE ĐỌC"}</span>
                </button>
              </div>

              {/* Meaning Description Box */}
              <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-3xl text-xs text-[#3d601b] leading-relaxed font-semibold">
                💡 {lesson.meaningDetails}
              </div>

              {/* Lesson Specific Custom Rendering */}
              
              {/* LESSON 1: Timeline & Flag flag */}
              {lesson.id === 1 && lesson.historyTimeline && (
                <div className="space-y-4 bg-slate-50 p-5 rounded-3xl border border-slate-100">
                  <h4 className="font-title text-lg text-emerald-950 font-bold">📜 DÒNG LỊCH SỬ HÌNH THÀNH</h4>
                  <div className="relative border-l-2 border-emerald-200 ml-3.5 pl-5 space-y-6">
                    {lesson.historyTimeline.map((h, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-8.5 top-0.5 bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-black text-[10px] border-4 border-white shadow-md">
                          {i + 1}
                        </div>
                        <div>
                          <span className="font-black text-xs text-emerald-600 block">{h.year}</span>
                          <span className="font-bold text-xs text-gray-800 block mt-0.5">{h.event}</span>
                          <p className="text-[10px] text-gray-500 font-semibold mt-1 leading-relaxed">{h.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LESSON 2: Huy hiệu Đội with 3D rotation & Glow */}
              {lesson.id === 2 && (
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-5">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    {isGlowing && (
                      <div className="absolute inset-0 bg-yellow-400/25 rounded-full blur-2xl animate-pulse" />
                    )}
                    {/* SVG representation of Huy hiệu Đội */}
                    <div
                      className={`w-36 h-36 rounded-full border-4 border-yellow-400 bg-red-650 flex flex-col items-center justify-between p-3.5 relative shadow-lg ${
                        isRotating ? 'animate-spin-slow' : ''
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Flag stars */}
                      <span className="text-yellow-400 text-xl font-bold">★</span>
                      {/* Bamboo Sprout */}
                      <span className="text-5xl my-1 select-none filter drop-shadow-md">🌱</span>
                      {/* Banner */}
                      <div className="bg-yellow-400 text-red-600 font-title text-[9px] font-black px-2 py-0.5 rounded border border-red-600 whitespace-nowrap shadow-sm mb-1.5 uppercase">
                        Sẵn Sàng
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      id="toggle-rotate-btn"
                      onClick={() => {
                        playClickSound();
                        setIsRotating(!isRotating);
                      }}
                      className="px-4 py-2 bg-yellow-400 border-yellow-600 hover:bg-yellow-500 text-[#5c3f21] border border-b-4 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Rotate3d className="w-4 h-4" />
                      <span>{isRotating ? "DỪNG XOAY" : "XOAY 3D"}</span>
                    </button>
                    <button
                      id="toggle-glow-btn"
                      onClick={() => {
                        playClickSound();
                        setIsGlowing(!isGlowing);
                      }}
                      className="px-4 py-2 bg-white border-gray-200 text-gray-700 border border-b-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>HÀO QUANG: {isGlowing ? "BẬT" : "TẮT"}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* LESSON 3: Khăn quàng đỏ animation */}
              {lesson.id === 3 && (
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  {/* Floating scarf illustration */}
                  <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
                    <motion.svg
                      width="200"
                      height="120"
                      viewBox="0 0 200 120"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut"
                      }}
                      className="filter drop-shadow-lg"
                    >
                      {/* Draw simple red triangle scarf */}
                      <path d="M 10 30 L 190 30 L 100 110 Z" fill="#ff4d4d" stroke="#cc0000" strokeWidth="3" strokeLinejoin="round" />
                      {/* Shadow lines */}
                      <path d="M 25 38 L 175 38" stroke="#ff8080" strokeWidth="2" strokeLinecap="round" />
                    </motion.svg>
                  </div>
                  <div className="text-center text-[10px] text-gray-500 font-semibold">
                    Kích thước quy chuẩn: Đáy 1.0m, Đường cao 0.25m.
                  </div>
                </div>
              )}

              {/* LESSON 4: Uniform hotspot map */}
              {lesson.id === 4 && lesson.detailsMap && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 p-5 rounded-3xl border border-slate-100">
                  {/* Visual cadet hotspot selector */}
                  <div className="md:col-span-5 flex justify-center relative bg-white p-4 rounded-2xl border border-slate-200">
                    <div className="relative w-44 h-80 bg-blue-50/50 rounded-2xl flex items-center justify-center text-8xl shadow-inner border border-blue-100 select-none">
                      🧑‍✈️
                      {/* Dots indicators */}
                      {lesson.detailsMap.map((det) => (
                        <button
                          key={det.part}
                          id={`hotspot-${det.part}`}
                          onClick={() => {
                            playClickSound();
                            setSelectedPart(det.part);
                          }}
                          className={`absolute w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[9px] font-black transition-all cursor-pointer ${
                            selectedPart === det.part
                              ? 'bg-red-500 text-white scale-125'
                              : 'bg-[#8eb859] text-white opacity-80 hover:opacity-100'
                          }`}
                          style={{ left: `${det.coords.x}%`, top: `${det.coords.y}%`, transform: 'translate(-50%, -50%)' }}
                        >
                          ●
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Detail Panel description */}
                  <div className="md:col-span-7 space-y-3">
                    <h5 className="text-xs font-black uppercase text-emerald-950 tracking-wider">Bản đồ trang phục tương tác:</h5>
                    {(() => {
                      const matched = lesson.detailsMap.find(d => d.part === selectedPart);
                      if (!matched) return null;
                      return (
                        <motion.div
                          key={selectedPart}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="bg-white border-2 border-[#8eb859] p-4 rounded-2xl shadow-sm space-y-1.5"
                        >
                          <span className="font-title text-base text-gray-800 font-bold block">{matched.title}</span>
                          <p className="text-xs text-gray-500 font-semibold leading-relaxed">{matched.desc}</p>
                        </motion.div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* LESSON 5 & 6: Thắt và tháo khăn quàng step-by-step & Order game */}
              {(lesson.id === 5 || lesson.id === 6) && lesson.steps && (
                <div className="space-y-6">
                  {/* Carousel step display */}
                  <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-title text-lg text-emerald-950 font-bold">
                        BƯỚC {lesson.steps[activeStep].stepNum} / {lesson.steps.length}
                      </h4>
                      <div className="flex gap-2">
                        <button
                          id="play-steps-btn"
                          onClick={() => {
                            playClickSound();
                            setIsStepPlaying(!isStepPlaying);
                          }}
                          className="p-1.5 bg-emerald-500 border border-emerald-600 rounded-lg text-white shadow-sm flex items-center justify-center cursor-pointer"
                        >
                          {isStepPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <select
                          id="select-tie-speed"
                          value={tieSpeed}
                          onChange={(e) => setTieSpeed(e.target.value as any)}
                          className="bg-white border border-gray-250 px-2 py-1 rounded-lg text-[10px] font-bold text-gray-700 cursor-pointer"
                        >
                          <option value="normal">Tốc độ bình thường</option>
                          <option value="slow">Xem chậm (Slow-Mo)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                      {/* Animation indicator area */}
                      <div className="md:col-span-5 h-36 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-4xl shadow-inner relative overflow-hidden">
                        {lesson.steps[activeStep].animType === 'fold' && '🧣📏'}
                        {lesson.steps[activeStep].animType === 'place' && '🧑‍✈️🧣'}
                        {lesson.steps[activeStep].animType === 'overlap' && '❌🧣'}
                        {lesson.steps[activeStep].animType === 'first_knot' && '🪢🧣'}
                        {lesson.steps[activeStep].animType === 'second_knot' && '👔🎉'}
                        {lesson.steps[activeStep].animType === 'hold_knot' && '🪢✊'}
                        {lesson.steps[activeStep].animType === 'pull_loose' && '🔓🔄'}
                        {lesson.steps[activeStep].animType === 'remove_scarf' && '🧑‍✈️✨'}
                        {/* Interactive floating indicator */}
                        <div className="absolute bottom-2 right-2 text-[10px] bg-slate-100 px-2 py-0.5 rounded font-mono text-gray-500 uppercase tracking-widest animate-pulse">
                          {lesson.steps[activeStep].animType}
                        </div>
                      </div>

                      {/* Description step */}
                      <div className="md:col-span-7 space-y-1.5">
                        <span className="font-title text-base font-bold text-gray-800 block">
                          {lesson.steps[activeStep].title}
                        </span>
                        <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                          {lesson.steps[activeStep].desc}
                        </p>
                      </div>
                    </div>

                    {/* Stepper Dots bar */}
                    <div className="flex justify-center gap-1.5 pt-2">
                      {lesson.steps.map((s, idx) => (
                        <button
                          key={s.stepNum}
                          id={`step-dot-${s.stepNum}`}
                          onClick={() => {
                            playClickSound();
                            setActiveStep(idx);
                            setIsStepPlaying(false);
                          }}
                          className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                            activeStep === idx
                              ? 'bg-emerald-500 border-emerald-600 scale-110 shadow-sm'
                              : 'bg-white border-gray-300 hover:bg-gray-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Ordering Game */}
                  <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 space-y-4">
                    <span className="font-title text-lg text-emerald-950 font-bold block">🎮 TRÒ CHƠI SẮP XẾP QUY TRÌNH</span>
                    <p className="text-[10px] text-gray-400 font-medium">Bấm mũi tên Lên/Xuống để sắp xếp thứ tự thắt/tháo khăn từ bước đầu tiên đến bước hoàn thành.</p>
                    
                    <div className="space-y-2">
                      {orderItems.map((item, idx) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-2xl shadow-sm text-xs">
                          <span className="font-black text-emerald-600 mr-2">Bước ?</span>
                          <span className="flex-1 font-bold text-gray-800">{item.text}</span>
                          <div className="flex gap-1.5">
                            <button
                              id={`move-up-${idx}`}
                              onClick={() => moveItem(idx, 'up')}
                              disabled={idx === 0}
                              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded-lg font-bold text-gray-600 cursor-pointer"
                            >
                              ▲
                            </button>
                            <button
                              id={`move-down-${idx}`}
                              onClick={() => moveItem(idx, 'down')}
                              disabled={idx === orderItems.length - 1}
                              className="px-2 py-1 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 rounded-lg font-bold text-gray-600 cursor-pointer"
                            >
                              ▼
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        id="verify-order-btn"
                        onClick={handleVerifyOrder}
                        className="bg-[#8eb859] hover:bg-[#7ca446] text-white font-title text-xs px-5 py-2.5 rounded-xl shadow-md border-b-4 border-[#658735] transition-all cursor-pointer"
                      >
                        🚀 KIỂM TRA ĐÁP ÁN
                      </button>
                      <button
                        id="reset-order-game-btn"
                        onClick={() => {
                          playClickSound();
                          const shuffled = lesson.steps!
                            .map(s => ({ id: s.stepNum, text: s.title }))
                            .sort(() => Math.random() - 0.5);
                          setOrderItems(shuffled);
                          setGameFeedback("");
                        }}
                        className="text-xs text-gray-400 font-bold hover:underline cursor-pointer"
                      >
                        Trộn lại
                      </button>
                    </div>

                    {gameFeedback && (
                      <div className={`p-3.5 rounded-2xl text-xs font-black text-center ${
                        gameFeedback.includes("Chính xác")
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-100 shadow-sm'
                          : 'bg-red-50 text-red-800 border border-red-100 shadow-sm'
                      }`}>
                        {gameFeedback}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* LESSON 7: Formations (Đội hình đội ngũ) with interactive grids */}
              {lesson.id === 7 && lesson.formations && (
                <div className="space-y-6">
                  {lesson.formations.map((f, i) => (
                    <div key={i} className="bg-slate-50 p-5 rounded-3xl border border-slate-100 space-y-4">
                      <div className="border-b border-gray-150 pb-2">
                        <span className="text-[9px] bg-emerald-150 text-emerald-800 px-2.5 py-0.5 rounded-full font-black border border-white shadow-sm uppercase">Đội hình #{i+1}</span>
                        <h4 className="font-title text-lg text-emerald-950 font-black mt-1">{f.name}</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                        {/* Interactive graphical representation */}
                        <div className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-4 flex flex-col items-center justify-center min-h-[160px] shadow-inner relative overflow-hidden">
                          <span className="text-[8px] text-gray-400 uppercase font-black tracking-widest absolute top-2 left-3 select-none">Mô hình 3D sơ đồ</span>
                          {f.layoutData === 'vertical' && (
                            <div className="flex flex-col gap-2.5 items-center">
                              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black border border-white shadow-md">CH</span>
                              <div className="w-0.5 h-6 bg-slate-300 border-dashed border-l" />
                              <div className="flex gap-2">
                                {[1, 2, 3].map(n => (
                                  <div key={n} className="flex flex-col gap-1.5">
                                    {[1, 2, 3, 4].map(k => (
                                      <div key={k} className="w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {f.layoutData === 'horizontal' && (
                            <div className="flex flex-col gap-3.5 items-center">
                              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black border border-white shadow-md">CH</span>
                              <div className="flex flex-col gap-2">
                                {[1, 2].map(n => (
                                  <div key={n} className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5, 6].map(k => (
                                      <div key={k} className="w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {f.layoutData === 'shape_u' && (
                            <div className="flex flex-col gap-3.5 items-center w-full">
                              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black border border-white shadow-md">CH</span>
                              <div className="relative w-28 h-20 border-2 border-dashed border-slate-350 rounded-t-xl">
                                {/* Dots positioned along U */}
                                <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute -top-2 -left-2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute -top-2 left-1/4 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute -top-2 left-3/4 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute -top-2 -right-2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                                <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 rounded-full bg-blue-500 border border-white" />
                              </div>
                            </div>
                          )}

                          {f.layoutData === 'circle' && (
                            <div className="relative w-32 h-32 flex items-center justify-center">
                              <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black border border-white shadow-md z-10">CH</span>
                              <div className="absolute inset-2 border-2 border-dashed border-slate-350 rounded-full flex items-center justify-center">
                                {/* Dots positioned on circle */}
                                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                                  <div
                                    key={deg}
                                    className="absolute w-3.5 h-3.5 rounded-full bg-blue-500 border border-white"
                                    style={{ transform: `rotate(${deg}deg) translate(40px)` }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="md:col-span-7 flex flex-col justify-between text-xs space-y-2">
                          <p className="text-[#3a3f41]"><strong>Quy định:</strong> {f.desc}</p>
                          <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm leading-relaxed space-y-1">
                            <span className="font-bold text-emerald-800 block text-[10px] uppercase">Khi nào sử dụng:</span>
                            <p className="text-gray-500 text-[11px] font-semibold">{f.whenToUse}</p>
                            <span className="font-bold text-blue-800 block text-[10px] uppercase mt-1">Ví dụ thực tế:</span>
                            <p className="text-gray-500 text-[11px] font-semibold">{f.example}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* LESSON 8: Commands (Khẩu lệnh) */}
              {lesson.id === 8 && lesson.commands && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {lesson.commands.map((c) => (
                    <div
                      key={c.cmd}
                      className="bg-white border-2 border-sky-100 rounded-3xl p-4 flex flex-col justify-between items-center text-center shadow-md relative hover:border-sky-400 hover:scale-[1.03] transition-all"
                    >
                      <span className="font-title text-xl font-black text-sky-950">{c.cmd}</span>
                      <span className="text-[10px] text-gray-500 font-semibold mt-1 mb-3 leading-relaxed">
                        {c.description}
                      </span>
                      <button
                        id={`speak-cmd-${c.cmd}`}
                        onClick={() => {
                          playClickSound();
                          handleSpeakCommand(c.voiceLabel);
                        }}
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black text-[10px] py-2 rounded-xl transition-all shadow-md border-b-4 border-sky-700 active:border-b-0 active:translate-y-1 cursor-pointer"
                      >
                        🔊 PHÁT KHẨU LỆNH
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* General list of principles */}
              {lesson.principles && (
                <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 space-y-2">
                  <h4 className="font-title text-lg text-emerald-950 font-bold flex items-center gap-1">
                    <Layers className="w-5 h-5 text-emerald-600" />
                    <span>HƯỚNG DẪN CHI TIẾT & ĐIỀU LỆ</span>
                  </h4>
                  <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1.5 font-semibold">
                    {lesson.principles.map((pr, idx) => (
                      <li key={idx}>{pr}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Memorize Tips & Example */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4.5 bg-amber-50 border border-amber-100 rounded-3xl shadow-sm text-xs text-[#5c3f21] font-semibold">
                  <span className="font-title text-sm font-bold block mb-1">💡 Mẹo Ghi Nhớ Lâu:</span>
                  {lesson.memorizeTips}
                </div>
                <div className="p-4.5 bg-blue-50 border border-blue-100 rounded-3xl shadow-sm text-xs text-[#2c3e50] font-semibold">
                  <span className="font-title text-sm font-bold block mb-1">🏃 Trực quan hành động:</span>
                  {lesson.exampleScenario}
                </div>
              </div>

              {/* Lesson End Quiz */}
              <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 space-y-4">
                <h4 className="font-title text-lg text-emerald-950 font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>CÂU HỎI KIỂM TRA CUỐI BÀI</span>
                </h4>
                <div className="space-y-4">
                  {lesson.quizQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="bg-white p-4.5 rounded-2xl border border-gray-150 shadow-sm space-y-3">
                      <span className="font-black text-xs text-emerald-600 uppercase block tracking-wider">Câu hỏi củng cố:</span>
                      <p className="text-xs text-gray-900 font-bold leading-relaxed">{q.question}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            id={`lesson-opt-btn-${oIdx}`}
                            onClick={() => {
                              playClickSound();
                              if (oIdx === q.correctIdx) {
                                playCorrectSound();
                                alert(`Chính xác rồi! 🌟\n${q.explanation}`);
                              } else {
                                playIncorrectSound();
                                alert(`Chưa đúng rồi! Hãy thử lại nhé.\nGợi ý: ${q.options[q.correctIdx]}`);
                              }
                            }}
                            className="p-3 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 border border-gray-200 rounded-xl text-left text-xs font-bold transition-all text-gray-700 cursor-pointer"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
