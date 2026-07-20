import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, Clock, CheckCircle, ChevronLeft, Play, X, Star } from 'lucide-react';
import { REN_LUYEN_DOI_VIEN_BADGES, BadgeTrainingItem } from '../data/renLuyenDoiVien';
import { UserProfile } from '../types';
import { playClickSound, playCorrectSound, playIncorrectSound } from '../utils/audio';

interface RenLuyenDoiVienTabProps {
  user: UserProfile;
  saveUserProfile: (updated: UserProfile) => void;
  addReward: (points: number, exp: number, activity: string) => void;
}

export default function RenLuyenDoiVienTab({ user, saveUserProfile, addReward }: RenLuyenDoiVienTabProps) {
  const [selectedBadge, setSelectedBadge] = useState<BadgeTrainingItem | null>(null);
  const [isTakingTest, setIsTakingTest] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [testResult, setTestResult] = useState<{ score: number; passed: boolean } | null>(null);

  const earnedBadges = user.badges || [];

  const handleStartTest = () => {
    playClickSound();
    setIsTakingTest(true);
    setCurrentQIndex(0);
    setAnswers([]);
    setTestResult(null);
  };

  const handleAnswerQuestion = (optionIdx: number) => {
    playClickSound();
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);

    if (selectedBadge && currentQIndex < selectedBadge.quizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else if (selectedBadge) {
      // Finished test
      let correctCount = 0;
      selectedBadge.quizQuestions.forEach((q, idx) => {
        if (newAnswers[idx] === q.correctIdx) {
          correctCount++;
        }
      });

      const totalQs = selectedBadge.quizQuestions.length;
      const passed = correctCount === totalQs; // Require all correct for primary măng non validation!
      
      setTestResult({ score: correctCount, passed });

      if (passed && !earnedBadges.includes(selectedBadge.id)) {
        // Unlock badge
        playCorrectSound();
        const updatedBadges = [...earnedBadges, selectedBadge.id];
        const updatedUser: UserProfile = {
          ...user,
          badges: updatedBadges
        };
        saveUserProfile(updatedUser);
        addReward(50, 80, `Đạt chuyên hiệu rèn luyện "${selectedBadge.title}" 🎉`);
      } else if (!passed) {
        playIncorrectSound();
      }
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Back Button if in detail view */}
      {selectedBadge && (
        <button
          id="back-to-badges-list-btn"
          onClick={() => {
            playClickSound();
            setSelectedBadge(null);
            setIsTakingTest(false);
            setTestResult(null);
          }}
          className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-slate-50 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>QUAY LẠI DANH SÁCH CHUYÊN HIỆU</span>
        </button>
      )}

      <AnimatePresence mode="wait">
        {!selectedBadge ? (
          /* MAIN LIST OF 6 CHUYÊN HIỆU */
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-white p-6 md:p-8 shadow-2xl text-center space-y-3">
              <h2 className="font-title text-3xl text-emerald-950 font-black flex items-center justify-center gap-2">
                ⭐ CHƯƠNG TRÌNH RÈN LUYỆN ĐỘI VIÊN
              </h2>
              <p className="text-xs text-gray-500 max-w-lg mx-auto font-semibold">
                Chào mừng em đến với Đấu trường chuyên hiệu măng non! Hãy học lý thuyết của từng chuyên đề rồi vượt qua bài kiểm tra để thu thập trọn bộ 6 huy hiệu danh giá nhé!
              </p>
            </div>

            {/* Grid of Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REN_LUYEN_DOI_VIEN_BADGES.map((badge) => {
                const isEarned = earnedBadges.includes(badge.id);
                return (
                  <button
                    key={badge.id}
                    id={`badge-card-${badge.id}`}
                    onClick={() => {
                      playClickSound();
                      setSelectedBadge(badge);
                    }}
                    className={`bg-white hover:scale-[1.03] active:scale-95 border-4 rounded-[40px] p-6 text-left shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between min-h-[240px] cursor-pointer ${
                      isEarned ? 'border-yellow-400' : 'border-white'
                    }`}
                  >
                    {/* Badge Emoji background background decoration */}
                    <div className="absolute -right-6 -bottom-6 text-slate-100 group-hover:scale-110 transition-transform text-9xl select-none font-bold opacity-30">
                      {badge.emoji}
                    </div>

                    <div className="space-y-4 z-10 w-full">
                      <div className="flex justify-between items-start">
                        <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl shadow-inner border border-slate-100 relative group-hover:scale-105 transition-transform">
                          {badge.emoji}
                        </div>
                        {isEarned ? (
                          <span className="bg-yellow-400 text-[#5c3f21] text-[9px] font-black px-2.5 py-1 rounded-full border border-white shadow-md uppercase tracking-wider flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#5c3f21]" />
                            <span>ĐÃ ĐẠT</span>
                          </span>
                        ) : (
                          <span className="bg-slate-100 text-gray-400 text-[9px] font-black px-2.5 py-1 rounded-full border border-gray-150 uppercase tracking-wider">
                            Chưa đạt
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-title text-2xl font-black text-gray-800 tracking-tight group-hover:text-emerald-600 transition-colors">
                          {badge.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-semibold line-clamp-2 leading-relaxed">
                          {badge.intro}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-emerald-600 font-black text-xs mt-4 z-10">
                      <span>{isEarned ? "Xem chi tiết tiêu chuẩn" : "Học và Thi ngay"}</span>
                      <span>➔</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* CHUYÊN HIỆU DETAIL VIEW & TEST VIEW */
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Left detail panel */}
            <div className="lg:col-span-8 bg-white/95 backdrop-blur-md rounded-[40px] border-4 border-white p-6 md:p-8 shadow-2xl space-y-6">
              
              {/* Badge overview */}
              <div className="flex items-center gap-5 border-b border-gray-100 pb-5">
                <div className="w-20 h-20 shrink-0 rounded-3xl bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center text-5xl">
                  {selectedBadge.emoji}
                </div>
                <div>
                  <h2 className="font-title text-3xl font-black text-gray-800 leading-tight">
                    Chuyên hiệu: {selectedBadge.title}
                  </h2>
                  <p className="text-xs text-gray-500 font-semibold mt-1 leading-relaxed">
                    {selectedBadge.intro}
                  </p>
                </div>
              </div>

              {/* Standard List */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-3xl border border-slate-100">
                <h4 className="font-title text-lg text-emerald-950 font-bold flex items-center gap-1">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span>TIÊU CHUẨN ĐẠT CHUYÊN HIỆU</span>
                </h4>
                <ul className="space-y-2">
                  {selectedBadge.standards.map((st, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-semibold leading-relaxed">
                      <span className="text-emerald-500 mt-0.5 font-bold">✓</span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Theoretical lessons */}
              <div className="space-y-4">
                <h4 className="font-title text-lg text-emerald-950 font-bold flex items-center gap-1">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span>BÀI HỌC LÝ THUYẾT CHUYÊN ĐỀ</span>
                </h4>
                <div className="space-y-4">
                  {selectedBadge.lessons.map((les, idx) => (
                    <div key={idx} className="p-5 bg-white border border-gray-150 rounded-3xl shadow-sm space-y-2">
                      <span className="font-black text-xs text-emerald-600 uppercase block tracking-wider">Mục #{idx + 1}: {les.title}</span>
                      <p className="text-xs text-gray-600 font-medium leading-relaxed whitespace-pre-line">{les.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right test certification panel */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-[35px] border-4 border-white p-6 shadow-xl space-y-6 text-center">
              
              {!isTakingTest ? (
                /* Ready screen before taking test */
                <div className="space-y-5 py-4">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-3xl mx-auto border-2 border-white shadow-md animate-bounce">
                    🛡️
                  </div>
                  <div className="space-y-1">
                    <span className="font-title text-xl text-gray-800 font-black block">THI CẤP CHUYÊN HIỆU</span>
                    <p className="text-[10px] text-gray-400 font-medium max-w-xs mx-auto">
                      Đoàn của em sẵn sàng chưa? Trả lời đúng hoàn toàn các câu hỏi để chính thức mở khóa chuyên hiệu và tích lũy cấp độ nhé!
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50/50 border border-yellow-100 rounded-2xl text-left text-[10px] text-yellow-800 space-y-1.5 font-semibold">
                    <p>⚡ Tổng câu hỏi: {selectedBadge.quizQuestions.length} câu trắc nghiệm.</p>
                    <p>⚡ Yêu cầu: Trả lời đúng tuyệt đối không sai.</p>
                    <p>⚡ Phần thưởng: +50 điểm, +80 EXP & Huy hiệu.</p>
                  </div>

                  <button
                    id="start-badge-test-btn"
                    onClick={handleStartTest}
                    className="w-full bg-[#8eb859] hover:bg-[#7ca446] text-white font-title text-base py-3.5 rounded-2xl shadow-lg border-b-4 border-[#658735] transition-all cursor-pointer"
                  >
                    🚀 BẮT ĐẦU THI CẤP!
                  </button>
                </div>
              ) : (
                /* Testing screen */
                <div className="space-y-5 text-left">
                  {!testResult ? (
                    <div className="space-y-4">
                      {/* Progress header header */}
                      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-[9px] font-black text-emerald-850 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          CÂU HỎI {currentQIndex + 1} / {selectedBadge.quizQuestions.length}
                        </span>
                      </div>

                      {/* Question Text */}
                      <p className="text-xs font-black text-gray-800 leading-relaxed min-h-[50px]">
                        {selectedBadge.quizQuestions[currentQIndex].question}
                      </p>

                      {/* Options Picker */}
                      <div className="grid grid-cols-1 gap-2">
                        {selectedBadge.quizQuestions[currentQIndex].options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            id={`badge-test-opt-${oIdx}`}
                            onClick={() => handleAnswerQuestion(oIdx)}
                            className="p-3.5 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 border border-gray-200 rounded-2xl text-left text-xs font-bold transition-all text-gray-700 cursor-pointer shadow-sm"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Test Results Screen */
                    <div className="text-center space-y-5 py-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl mx-auto border-4 border-white shadow-lg ${
                        testResult.passed ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600 animate-shake'
                      }`}>
                        {testResult.passed ? '✓' : '✗'}
                      </div>

                      <div className="space-y-1">
                        <span className="font-title text-xl text-gray-800 font-black block">
                          {testResult.passed ? "CHÚC MỪNG EM!" : "HỌC LẠI BÀI VÀ THỬ LẠI"}
                        </span>
                        <p className="text-[11px] text-gray-500 font-medium">
                          Kết quả trả lời đúng: {testResult.score} / {selectedBadge.quizQuestions.length} câu hỏi.
                        </p>
                      </div>

                      {testResult.passed ? (
                        <div className="bg-emerald-50 border-2 border-emerald-100 text-emerald-800 p-4 rounded-3xl text-xs font-black max-w-sm mx-auto shadow-sm">
                          🎉 Em xuất sắc mở khóa Chuyên hiệu "{selectedBadge.title}"! Nhận thêm +50 điểm và +80 EXP vào thẻ Đội viên.
                        </div>
                      ) : (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-3xl max-w-sm mx-auto text-xs text-red-750 font-medium shadow-inner leading-relaxed">
                          Chưa đạt yêu cầu tuyệt đối! Hãy đọc kỹ bài học lý thuyết bên cạnh và quay lại thi lại bất cứ lúc nào nhé.
                        </div>
                      )}

                      <button
                        id="retry-test-btn"
                        onClick={handleStartTest}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-title text-base py-3 rounded-2xl shadow-lg border-b-4 border-emerald-700 transition-all cursor-pointer"
                      >
                        {testResult.passed ? "🔄 THI LẠI ĐỂ RÈN LUYỆN" : "🔄 THỬ SỨC LẠI"}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
