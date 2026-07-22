import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Compass,
  Trophy,
  Award,
  User,
  Settings,
  Home,
  Volume2,
  VolumeX,
  Sparkles,
  Search,
  CheckCircle,
  XCircle,
  RefreshCw,
  Info,
  Calendar,
  Layers,
  Activity,
  ChevronRight,
  Download,
  Upload,
  Clock,
  Flame,
  ArrowRight,
  X
} from 'lucide-react';

import { UserProfile, MorseItem, SemaphoreItem, TrailSignItem, Question, PracticeExercise } from './types';
import { MORSE_GROUPS, MORSE_TIMELINE, MORSE_PRINCIPLES, MORSE_TOWER } from './data/morse';
import { SEMAPHORE_CIRCLES, SEMAPHORE_ALL_ITEMS, SEMAPHORE_HISTORY } from './data/semaphore';
import { TRAIL_SIGNS } from './data/trailSigns';
import { QUIZ_QUESTIONS, PRACTICE_EXERCISES_MORSE, PRACTICE_EXERCISES_SEMAPHORE, PRACTICE_EXERCISES_DAU_DUONG } from './data/questions';

import { CHALLENGES_LIST, ChallengeItem } from './data/challenges';
import NghiThucDoiTheory from './components/NghiThucDoiTheory';
import MiniGames from './components/MiniGames';

import ScenicBackground from './components/ScenicBackground';
import Mascot from './components/Mascot';
import ConfettiEffect from './components/ConfettiEffect';
import ProfileModal from './components/ProfileModal';
import MorseTowerComponent from './components/MorseTowerComponent';
import {
  playClickSound,
  playCorrectSound,
  playIncorrectSound,
  playLevelUpSound,
  playFlagWhoosh,
  playMorseSound,
  setMuted,
  getMuted
} from './utils/audio';

export default function App() {
  // --- CORE APP STATE ---
  const [user, setUser] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'theory' | 'practice' | 'badge_training' | 'tournament' | 'achievements' | 'profile' | 'settings'>('home');
  const [theorySubTab, setTheorySubTab] = useState<'morse' | 'semaphore' | 'dau_duong' | 'nghi_thuc'>('morse');
  const [practiceSubTab, setPracticeSubTab] = useState<'morse' | 'semaphore' | 'dau_duong' | 'challenges' | 'mini_games'>('morse');

  // --- CHALLENGES STATE ---
  const [completedChallengeIds, setCompletedChallengeIds] = useState<number[]>([]);
  const [activeChallenge, setActiveChallenge] = useState<ChallengeItem | null>(null);
  const [challengeSelectedAnsIdx, setChallengeSelectedAnsIdx] = useState<number | null>(null);
  const [challengeIsSubmitted, setChallengeIsSubmitted] = useState<boolean>(false);
  const [challengeFeedback, setChallengeFeedback] = useState<string>("");

  // --- TWO PLAYER TOURNAMENT STATE ---
  const [isTwoPlayer, setIsTwoPlayer] = useState<boolean>(false);
  const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
  const [p1Score, setP1Score] = useState<number>(0);
  const [p2Score, setP2Score] = useState<number>(0);
  const [p1CorrectCount, setP1CorrectCount] = useState<number>(0);
  const [p2CorrectCount, setP2CorrectCount] = useState<number>(0);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [isConfettiActive, setIsConfettiActive] = useState<boolean>(false);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);

  const [morseSubTab, setMorseSubTab] = useState<'intro' | 'groups' | 'tower' | 'letter_by_letter'>('intro');

  // --- MORSE LETTER LEARNING ---
  const [selectedLearnLetter, setSelectedLearnLetter] = useState<string>("A");
  const [isBuzzerFlashing, setIsBuzzerFlashing] = useState<boolean>(false);

  // --- SEMAPHORE SIMULATOR STATE ---
  const [selectedSemChar, setSelectedSemChar] = useState<string>("A");
  const [semSpeedMultiplier, setSemSpeedMultiplier] = useState<number>(1); // 1 = normal, 0.5 = slow

  // --- TRAIL SIGNS STATES ---
  const [searchSignQuery, setSearchSignQuery] = useState<string>("");
  const [filterSignCategory, setFilterSignCategory] = useState<string>("all");

  // --- PRACTICE MODULE STATE ---
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [practiceSelectedAnswer, setPracticeSelectedAnswer] = useState<string | null>(null);
  const [practiceIsSubmitted, setPracticeIsSubmitted] = useState<boolean>(false);
  const [practiceScore, setPracticeScore] = useState<number>(0);
  const [practiceFeedback, setPracticeFeedback] = useState<string>("");

  // --- TOURNAMENT STATE ---
  const [tournamentActive, setTournamentActive] = useState<boolean>(false);
  const [tournamentQuestions, setTournamentQuestions] = useState<Question[]>([]);
  const [tournamentIndex, setTournamentIndex] = useState<number>(0);
  const [tournamentSelectedIdx, setTournamentSelectedIdx] = useState<number | null>(null);
  const [tournamentIsAnswered, setTournamentIsAnswered] = useState<boolean>(false);
  const [tournamentTimeLeft, setTournamentTimeLeft] = useState<number>(15); // 15s per question
  const [tournamentScore, setTournamentScore] = useState<number>(0);
  const [tournamentCorrectCount, setTournamentCorrectCount] = useState<number>(0);
  const [tournamentResultsReady, setTournamentResultsReady] = useState<boolean>(false);
  const [perfectBonusEarned, setPerfectBonusEarned] = useState<boolean>(false);

  // --- INITIAL LOAD & SYNCHRONIZATION ---
  useEffect(() => {
    const savedProfile = localStorage.getItem('doi_vien_profile');
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile) as UserProfile;
        setUser(parsed);
        const savedChallenges = localStorage.getItem('doi_vien_completed_challenges');
        if (savedChallenges) {
          setCompletedChallengeIds(JSON.parse(savedChallenges));
        }
        // Sync mute settings from localStorage
        const savedMute = localStorage.getItem('doi_vien_muted');
        if (savedMute === 'true') {
          setIsAudioMuted(true);
          setMuted(true);
        }
      } catch (e) {
        setShowRegisterModal(true);
      }
    } else {
      setShowRegisterModal(true);
    }
  }, []);

  // Timer loop for tournament
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (tournamentActive && !tournamentIsAnswered && tournamentTimeLeft > 0) {
      timer = setTimeout(() => {
        setTournamentTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (tournamentActive && !tournamentIsAnswered && tournamentTimeLeft === 0) {
      // Timeout handles incorrect automatically
      handleAnswerTournament(-1);
    }
    return () => clearTimeout(timer);
  }, [tournamentActive, tournamentTimeLeft, tournamentIsAnswered]);

  // --- SOUND TOGGLE ---
  const toggleMute = () => {
    const nextMute = !isAudioMuted;
    setIsAudioMuted(nextMute);
    setMuted(nextMute);
    localStorage.setItem('doi_vien_muted', String(nextMute));
    playClickSound();
  };

  // --- SAVE PROFILE & EXP ACCUMULATION HELPER ---
  const saveUserProfile = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    localStorage.setItem('doi_vien_profile', JSON.stringify(updatedUser));
  };

  const addReward = (points: number, expGained: number, activityTitle: string) => {
    if (!user) return;
    
    let newScore = user.score + points;
    let newExp = user.exp + expGained;
    let newLevel = user.level;

    // Check for level up. 1 Level requires 100 EXP
    const expNeeded = newLevel * 100;
    let levelUpOccurred = false;
    if (newExp >= expNeeded) {
      newExp -= expNeeded;
      newLevel += 1;
      levelUpOccurred = true;
    }

    // Check badges progress
    const updatedBadges = [...user.badges];
    if (newScore >= 100 && !updatedBadges.includes('bronze')) updatedBadges.push('bronze');
    if (newScore >= 300 && !updatedBadges.includes('silver')) updatedBadges.push('silver');
    if (newScore >= 600 && !updatedBadges.includes('gold')) updatedBadges.push('gold');
    if (newScore >= 1000 && !updatedBadges.includes('diamond')) updatedBadges.push('diamond');
    if (newScore >= 2000 && !updatedBadges.includes('master')) updatedBadges.push('master');

    const newHistoryItem = {
      date: new Date().toLocaleDateString('vi-VN'),
      score: points,
      activity: `${activityTitle} (${points > 0 ? '+' : ''}${points} điểm, +${expGained} EXP)`
    };

    const updatedUser: UserProfile = {
      ...user,
      score: newScore,
      level: newLevel,
      exp: newExp,
      badges: updatedBadges,
      history: [newHistoryItem, ...user.history.slice(0, 49)] // Keep last 50 activities
    };

    saveUserProfile(updatedUser);

    if (levelUpOccurred) {
      playLevelUpSound();
      setIsConfettiActive(true);
      setTimeout(() => setIsConfettiActive(false), 3000);
    }
  };

  const handleSelectChallengeOption = (idx: number) => {
    if (challengeIsSubmitted) return;
    playClickSound();
    setChallengeSelectedAnsIdx(idx);
  };

  const handleSubmitChallenge = () => {
    if (!activeChallenge || challengeSelectedAnsIdx === null || challengeIsSubmitted) return;
    const isCorrect = challengeSelectedAnsIdx === activeChallenge.correctIdx;
    setChallengeIsSubmitted(true);

    if (isCorrect) {
      playCorrectSound();
      setChallengeFeedback("Chính xác rồi! Em thật xuất sắc! 🌟");
      addReward(activeChallenge.points, activeChallenge.coins, `Hoàn thành thử thách #${activeChallenge.id}: ${activeChallenge.title}`);
      const nextCompleted = [...completedChallengeIds, activeChallenge.id];
      setCompletedChallengeIds(nextCompleted);
      localStorage.setItem('doi_vien_completed_challenges', JSON.stringify(nextCompleted));
    } else {
      playIncorrectSound();
      setChallengeFeedback(`Chưa đúng rồi! Đáp án đúng là: ${activeChallenge.options[activeChallenge.correctIdx]}. Đừng nản lòng nhé!`);
    }
  };

  // --- LOCAL STORAGE EXPORT/IMPORT ---
  const exportData = () => {
    playClickSound();
    if (!user) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(user, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `DoiVien_${user.name.replace(/\s+/g, '_')}_ThanhTich.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    playClickSound();
    const fileReader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      fileReader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string) as UserProfile;
          if (imported.name && imported.level) {
            saveUserProfile(imported);
            playLevelUpSound();
            alert(`Nhập dữ liệu thành công! Chào mừng trở lại, ${imported.name}! 🎉`);
          } else {
            alert("Tệp tin không đúng định dạng thẻ Đội viên!");
          }
        } catch (err) {
          alert("Lỗi khi đọc tệp tin dữ liệu!");
        }
      };
      fileReader.readAsText(event.target.files[0]);
    }
  };

  // --- PRACTICE MODULE WORKFLOW ---
  const getCurrentPracticeExercises = (): PracticeExercise[] => {
    if (practiceSubTab === 'morse') return PRACTICE_EXERCISES_MORSE;
    if (practiceSubTab === 'semaphore') return PRACTICE_EXERCISES_SEMAPHORE;
    return PRACTICE_EXERCISES_DAU_DUONG;
  };

  const handleStartPractice = (tab: 'morse' | 'semaphore' | 'dau_duong') => {
    playClickSound();
    setPracticeSubTab(tab);
    setPracticeIndex(0);
    setPracticeSelectedAnswer(null);
    setPracticeIsSubmitted(false);
    setPracticeFeedback("");
  };

  const handleSelectPracticeAnswer = (ans: string) => {
    if (practiceIsSubmitted) return;
    playClickSound();
    setPracticeSelectedAnswer(ans);
  };

  const handlePlayPracticeAudio = (answerCode: string) => {
    // Only play if type is morse code
    setIsBuzzerFlashing(true);
    playMorseSound(answerCode, () => setIsBuzzerFlashing(false));
  };

  const handlePlayCharSound = (code: string) => {
    setIsBuzzerFlashing(true);
    playMorseSound(code, () => setIsBuzzerFlashing(false));
  };

  const handleSubmitPractice = () => {
    if (!practiceSelectedAnswer || practiceIsSubmitted) return;
    const currentList = getCurrentPracticeExercises();
    const currentEx = currentList[practiceIndex];
    const isCorrect = practiceSelectedAnswer === currentEx.answer;

    setPracticeIsSubmitted(true);
    if (isCorrect) {
      playCorrectSound();
      setPracticeFeedback("Chính xác rồi! Em giỏi quá! 🌟");
      addReward(10, 15, `Hoàn thành bài luyện tập ${practiceSubTab.toUpperCase()} số ${practiceIndex + 1}`);
    } else {
      playIncorrectSound();
      setPracticeFeedback(`Chưa đúng rồi em ơi! Đáp án đúng là: ${currentEx.answer}. Đừng nản lòng nhé!`);
    }
  };

  const handleNextPractice = () => {
    playClickSound();
    const currentList = getCurrentPracticeExercises();
    if (practiceIndex < currentList.length - 1) {
      setPracticeIndex(prev => prev + 1);
      setPracticeSelectedAnswer(null);
      setPracticeIsSubmitted(false);
      setPracticeFeedback("");
    } else {
      // Reached the end of practice list
      setIsConfettiActive(true);
      setTimeout(() => setIsConfettiActive(false), 2500);
      alert(`Chúc mừng em đã hoàn thành tất cả ${currentList.length} bài luyện tập của phần này! 🎉`);
      setPracticeIndex(0);
      setPracticeSelectedAnswer(null);
      setPracticeIsSubmitted(false);
      setPracticeFeedback("");
    }
  };

  // --- TOURNAMENT WORKFLOW ---
  const handleStartTournament = () => {
    playClickSound();
    // Shuffle and pick 20 random questions
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 20);
    setTournamentQuestions(selected);
    setTournamentIndex(0);
    setTournamentSelectedIdx(null);
    setTournamentIsAnswered(false);
    setTournamentTimeLeft(15);
    setTournamentScore(0);
    setTournamentCorrectCount(0);
    setTournamentResultsReady(false);
    setPerfectBonusEarned(false);
    setTournamentActive(true);
  };

  const handleAnswerTournament = (selectedIdx: number) => {
    if (tournamentIsAnswered) return;
    setTournamentSelectedIdx(selectedIdx);
    setTournamentIsAnswered(true);

    const currentQ = tournamentQuestions[tournamentIndex];
    const isCorrect = selectedIdx === currentQ.correctIndex;

    let pointsEarned = 0;
    if (isCorrect) {
      playCorrectSound();
      setTournamentCorrectCount(prev => prev + 1);
      pointsEarned += 10;
      // Fast response bonus (within 5 seconds)
      if (tournamentTimeLeft > 10) {
        pointsEarned += 5;
      }
      setTournamentScore(prev => prev + pointsEarned);
    } else {
      playIncorrectSound();
    }
  };

  const handleNextTournamentQuestion = () => {
    playClickSound();
    if (tournamentIndex < 19) {
      setTournamentIndex(prev => prev + 1);
      setTournamentSelectedIdx(null);
      setTournamentIsAnswered(false);
      setTournamentTimeLeft(15);
    } else {
      // Finished all 20 questions
      setTournamentResultsReady(true);
      const allPerfect = tournamentCorrectCount === 20;
      setPerfectBonusEarned(allPerfect);

      // Save final stats
      if (user) {
        let bonusPoints = allPerfect ? 20 : 0;
        let totalExp = tournamentScore * 2;
        addReward(tournamentScore + bonusPoints, totalExp, `Thi đấu đạt thành tích ${tournamentCorrectCount}/20 câu đúng`);
      }

      setIsConfettiActive(true);
      setTimeout(() => setIsConfettiActive(false), 3000);
    }
  };

  // --- SEMAPHORE CHARACTER CHANGE TRIGGER ---
  const handleSelectSemChar = (char: string) => {
    playFlagWhoosh();
    setSelectedSemChar(char);
  };

  // Helper to obtain Semaphore coordinates for Mascot
  const getSemItemData = (char: string): SemaphoreItem => {
    return SEMAPHORE_ALL_ITEMS.find(item => item.char === char) || { char: "A", leftAngle: 180, rightAngle: 225, circle: 1, mnemonic: "" };
  };

  const currentSemData = getSemItemData(selectedSemChar);

  // --- MOCK LEADERBOARD FOR STUDENTS ---
  const getMockLeaderboard = () => {
    const mocks = [
      { name: "Đặng Hoàng Bách", className: "Lớp 5C", school: "TH Minh Đạo", score: 2450, streak: 12, level: 25 },
      { name: "Lê Minh Thư", className: "Lớp 4A", school: "TH Nguyễn Thái Sơn", score: 2120, streak: 8, level: 22 },
      { name: "Phạm Khánh Nam", className: "Lớp 3B", school: "TH Võ Thị Sáu", score: 1890, streak: 15, level: 19 },
      { name: "Trần Bảo Ngọc", className: "Lớp 5A", school: "TH Nguyễn Huệ", score: 1670, streak: 6, level: 17 },
      { name: "Nguyễn Hải Phong", className: "Lớp 4D", school: "TH Lê Ngọc Hân", score: 1420, streak: 9, level: 15 }
    ];
    if (user) {
      // Insert current user sorted
      const userItem = {
        name: user.name + " (Em)",
        className: user.className,
        school: user.school,
        score: user.score,
        streak: user.streak,
        level: user.level
      };
      const list = [...mocks, userItem].sort((a, b) => b.score - a.score);
      return list;
    }
    return mocks;
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden font-sans text-gray-800">
      {/* Cinematic Camping background */}
      <ScenicBackground />

      {/* Confetti Celebration canvas */}
      <ConfettiEffect active={isConfettiActive} />

      {/* --- RECONSTRUCT USER ENTRY MODAL --- */}
      <ProfileModal
        isOpen={showRegisterModal}
        onSave={(newProfile) => {
          saveUserProfile(newProfile);
          setShowRegisterModal(false);
        }}
      />

      {/* --- TOP APPLICATION HEADER --- */}
      <header className="w-full bg-white/40 backdrop-blur-md border-b-4 border-white/60 py-4 px-6 shadow-lg z-40 sticky top-0 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand Brand */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2 rounded-[24px] border border-white shadow-md">
            <div className="bg-[#e74c3c] text-white p-2.5 rounded-full shadow-md border-2 border-white animate-bounce-slow flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-title text-xl md:text-2xl text-[#2c3e50] font-black tracking-tight flex items-center gap-2 whitespace-nowrap">
                📡 KỸ NĂNG ĐỘI HHTER
              </h1>
              <span className="text-[10px] text-[#517522] font-body block uppercase tracking-wider font-extrabold">
                Học mà chơi - Chơi mà học ⛺️
              </span>
            </div>
          </div>

          {/* Quick Stats bar if user is logged in */}
          {user && (
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-2.5 px-5 rounded-full shadow-md border-2 border-white text-xs">
              <div className="flex items-center gap-1.5 font-black text-orange-600">
                <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                <span>Chuỗi: {user.streak} ngày</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex items-center gap-1.5 font-black text-yellow-600">
                <Award className="w-4 h-4 text-yellow-500" />
                <span>Điểm: {user.score}</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-black text-[10px] border border-white shadow-sm">
                  LV.{user.level}
                </span>
                <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-300 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-green-500"
                    style={{ width: `${(user.exp / (user.level * 100)) * 100}%` }}
                  />
                </div>
              </div>
              <button
                id="header-mute-toggle"
                onClick={toggleMute}
                className="p-1.5 bg-white/95 hover:bg-gray-100 rounded-full shadow-sm border border-gray-100 text-gray-500 hover:text-gray-800 transition-colors ml-2 flex items-center justify-center cursor-pointer"
                title={isAudioMuted ? "Bật âm thanh" : "Tắt âm thanh"}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-emerald-500" />}
              </button>
            </div>
          )}
        </div>

        {/* --- DYNAMIC PIXAR-STYLE TAB NAVIGATION --- */}
        <nav className="max-w-5xl mx-auto mt-4">
          <div className="flex flex-wrap justify-center gap-2.5 bg-white/30 backdrop-blur-md p-2 rounded-[32px] border border-white/60 shadow-lg">
            {[
              { id: 'home', label: 'Trang chủ', icon: Home, color: 'bg-emerald-500 border-emerald-700' },
              { id: 'theory', label: 'Học lý thuyết', icon: BookOpen, color: 'bg-blue-500 border-blue-700' },
              { id: 'practice', label: 'Luyện tập', icon: Compass, color: 'bg-orange-500 border-orange-700' },
              { id: 'tournament', label: 'Thi đấu', icon: Trophy, color: 'bg-yellow-500 border-yellow-600' },
              { id: 'achievements', label: 'Thành tích', icon: Award, color: 'bg-purple-500 border-purple-700' },
              { id: 'profile', label: 'Hồ sơ', icon: User, color: 'bg-pink-500 border-pink-700' },
              { id: 'settings', label: 'Cài đặt', icon: Settings, color: 'bg-gray-500 border-gray-700' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => {
                    playClickSound();
                    setActiveTab(tab.id as any);
                    // Reset subtabs
                    if (tab.id === 'tournament') setTournamentActive(false);
                  }}
                  className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-2xl text-xs font-extrabold transition-all relative border-b-4 ${
                    isActive
                      ? `${tab.color} text-white shadow-lg scale-105 -translate-y-1`
                      : 'bg-white/80 text-[#2c3e50] border-gray-300 hover:border-gray-100 hover:bg-white hover:translate-y-0.5 cursor-pointer'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* --- MAIN CORE CONTAINER --- */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 z-30">
        <AnimatePresence mode="wait">
          
          {/* ========================================================= */}
          {/* TAB 1: TRANG CHỦ (Home Dashboard) */}
          {/* ========================================================= */}
          {activeTab === 'home' && user && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
            >
              {/* Cadet Profile Card */}
              <div className="md:col-span-4 bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-white p-6 shadow-2xl flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#8eb859]/10 w-32 h-32 rounded-full blur-2xl -z-10" />
                
                {/* Badge title ribbon */}
                <span className="bg-amber-400 text-[#5c3f21] px-4.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wide border-2 border-white shadow-md mb-4">
                  🎖️ Đội viên gương mẫu
                </span>

                {/* Big Avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-emerald-200 border-4 border-white shadow-lg flex items-center justify-center text-5xl mb-4 relative">
                  {user.avatar === 'cadet_boy' && '🧑‍✈️'}
                  {user.avatar === 'cadet_girl' && '👧'}
                  {user.avatar === 'panda' && '🐼'}
                  {user.avatar === 'puppy' && '🐶'}
                  {user.avatar === 'cat' && '🐱'}
                  
                  {/* Small level tag */}
                  <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white font-black text-[10px] px-2.5 py-0.5 rounded-full border-2 border-white shadow-md">
                    LV.{user.level}
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="font-title text-3xl text-[#2c3e50] font-black tracking-tight">{user.name}</h2>
                  <p className="text-xs font-black text-[#517522] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block">{user.className} • {user.school}</p>
                </div>

                {/* Progress bar container */}
                <div className="w-full mt-4 bg-white/60 p-4 rounded-3xl border border-white shadow-inner">
                  <div className="flex justify-between text-[11px] font-black text-gray-500 mb-1.5">
                    <span>Tiến trình cấp độ:</span>
                    <span>{user.exp}/{user.level * 100} EXP</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-300 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-green-500"
                      style={{ width: `${(user.exp / (user.level * 100)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Mini Mascot with dialog speech bubble */}
                <div className="mt-5 flex items-center gap-3 w-full border-t border-gray-100/80 pt-4">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-2xl border-2 border-emerald-100 flex items-center justify-center text-3xl shadow-md">
                    ⛺️
                  </div>
                  <div className="text-left text-xs bg-emerald-50/90 text-[#3d601b] p-3 rounded-2xl border border-white relative shadow-sm">
                    <div className="absolute top-4 -left-2 w-2 h-2 bg-emerald-50 border-l border-b border-white rotate-45" />
                    <strong>Mascot:</strong> "Chào {user.name.split(' ').pop()}! Hôm nay em muốn tập vẫy Semaphore hay giải đố Morse nào?"
                  </div>
                </div>
              </div>

              {/* Navigation Grid Grid */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 📡 MORSE CARD */}
                <button
                  id="shortcut-morse-card"
                  onClick={() => {
                    playClickSound();
                    setActiveTab('theory');
                    setTheorySubTab('morse');
                    setMorseSubTab('groups');
                  }}
                  className="bg-gradient-to-br from-blue-400 to-indigo-500 hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-left shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between min-h-[220px] text-white cursor-pointer"
                >
                  <div className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform text-9xl font-mono select-none">📡</div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-3.5 py-1 rounded-full font-black tracking-wider uppercase">MỤC 1</span>
                    <h3 className="font-title text-2xl md:text-3xl font-black mt-3 text-white tracking-tight"><span className="whitespace-nowrap">MÃ MORSE</span></h3>
                    <p className="text-xs text-white/95 mt-1.5 leading-relaxed font-semibold">Tiếng còi tích tè, học thuộc nguyên lý, giải đố còi đồng đội dã ngoại.</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-black text-sm mt-4">
                    <span>Học ngay</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </button>

                {/* 🚩 SEMAPHORE CARD */}
                <button
                  id="shortcut-semaphore-card"
                  onClick={() => {
                    playClickSound();
                    setActiveTab('theory');
                    setTheorySubTab('semaphore');
                  }}
                  className="bg-gradient-to-br from-red-400 to-rose-600 hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-left shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between min-h-[220px] text-white cursor-pointer"
                >
                  <div className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform text-9xl select-none">🚩</div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-3.5 py-1 rounded-full font-black tracking-wider uppercase">MỤC 2</span>
                    <h3 className="font-title text-2xl md:text-3xl font-black mt-3 text-white tracking-tight"><span className="whitespace-nowrap">CỜ SEMAPHORE</span></h3>
                    <p className="text-xs text-white/95 mt-1.5 leading-relaxed font-semibold">Góc vẫy cờ chuẩn 7 vòng tròn chữ cái cùng Mascot hoạt họa Pixar sinh động.</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-black text-sm mt-4">
                    <span>Học ngay</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </button>

                {/* 🪧 DẤU ĐƯỜNG CARD */}
                <button
                  id="shortcut-trail-card"
                  onClick={() => {
                    playClickSound();
                    setActiveTab('theory');
                    setTheorySubTab('dau_duong');
                  }}
                  className="bg-gradient-to-br from-emerald-400 to-green-600 hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-left shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between min-h-[220px] text-white cursor-pointer"
                >
                  <div className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform text-9xl select-none">🪧</div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-3.5 py-1 rounded-full font-black tracking-wider uppercase">MỤC 3</span>
                    <h3 className="font-title text-2xl md:text-3xl font-black mt-3 text-white tracking-tight"><span className="whitespace-nowrap">DẤU ĐƯỜNG</span></h3>
                    <p className="text-xs text-white/95 mt-1.5 leading-relaxed font-semibold">Đầy đủ 32 dấu đường chỉ dẫn, cảnh báo, mệnh lệnh cho trò chơi lớn dã ngoại.</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-black text-sm mt-4">
                    <span>Học ngay</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </button>

                {/* 🎯 THỬ THÁCH CARD */}
                <button
                  id="shortcut-challenge-card"
                  onClick={() => {
                    playClickSound();
                    setActiveTab('tournament');
                  }}
                  className="bg-gradient-to-br from-amber-400 to-orange-500 hover:scale-[1.03] active:scale-95 border-4 border-white rounded-[40px] p-6 text-left shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between min-h-[220px] text-white cursor-pointer"
                >
                  <div className="absolute -right-6 -bottom-6 text-white/10 group-hover:scale-110 transition-transform text-9xl select-none">🎯</div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs px-3.5 py-1 rounded-full font-black tracking-wider uppercase">THI THỬ</span>
                    <h3 className="font-title text-2xl md:text-3xl font-black mt-3 text-white tracking-tight"><span className="whitespace-nowrap">BÀI THI TOÀN DIỆN</span></h3>
                    <p className="text-xs text-white/95 mt-1.5 leading-relaxed font-semibold">Hơn 100 câu đố tính thời gian, rèn luyện tư thế chuẩn còi cờ.</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-black text-sm mt-4">
                    <span>Chơi thi đấu</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </button>

              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: HỌC LÝ THUYẾT (Theory & Lessons) */}
          {/* ========================================================= */}
          {activeTab === 'theory' && (
            <motion.div
              key="theory"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap justify-center gap-3 bg-white/40 backdrop-blur-md p-2.5 rounded-[32px] max-w-2xl mx-auto border border-white/60 shadow-lg mb-6">
                {[
                  { id: 'morse', label: '📡 MORSE', color: 'bg-blue-500 border-blue-700 text-white shadow-md' },
                  { id: 'semaphore', label: '🚩 SEMAPHORE', color: 'bg-red-500 border-red-700 text-white shadow-md' },
                  { id: 'dau_duong', label: '🪧 DẤU ĐƯỜNG', color: 'bg-green-500 border-green-700 text-white shadow-md' },
                  { id: 'nghi_thuc', label: '🎖 NGHI THỨC', color: 'bg-emerald-500 border-emerald-700 text-white shadow-md' }
                ].map((sTab) => {
                  const isActive = theorySubTab === sTab.id;
                  return (
                    <button
                      key={sTab.id}
                      id={`theory-subtab-${sTab.id}`}
                      onClick={() => {
                        playClickSound();
                        setTheorySubTab(sTab.id as any);
                      }}
                      className={`px-5 py-2.5 rounded-2xl font-black text-xs transition-all border-b-4 whitespace-nowrap ${
                        isActive 
                          ? `${sTab.color} scale-105 -translate-y-0.5` 
                          : 'bg-white/80 border-gray-300 text-gray-600 hover:bg-white hover:text-gray-900 cursor-pointer'
                      }`}
                    >
                      {sTab.label}
                    </button>
                  );
                })}
              </div>

              {/* ----------------- THEORY: MORSE ----------------- */}
              {theorySubTab === 'morse' && (
                <div className="space-y-6">
                  {/* Morse Sub Sub tabs */}
                  <div className="flex flex-wrap justify-center gap-2.5 bg-white/30 backdrop-blur-md p-1.5 rounded-2xl max-w-2xl mx-auto border border-white/50">
                    {[
                      { id: 'intro', label: '📖 Lịch sử & Nguyên lý', color: 'bg-blue-500 border-blue-700 text-white' },
                      { id: 'groups', label: '📑 5 Nhóm Chữ Cái', color: 'bg-blue-500 border-blue-700 text-white' },
                      { id: 'tower', label: '🌳 Tháp Phân Nhánh', color: 'bg-blue-500 border-blue-700 text-white' },
                      { id: 'letter_by_letter', label: '🔍 Học Từng Chữ', color: 'bg-blue-500 border-blue-700 text-white' }
                    ].map((mTab) => {
                      const isActive = morseSubTab === mTab.id;
                      return (
                        <button
                          key={mTab.id}
                          id={`morse-subtab-${mTab.id}`}
                          onClick={() => {
                            playClickSound();
                            setMorseSubTab(mTab.id as any);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-black transition-all border-b-4 whitespace-nowrap ${
                            isActive 
                              ? `${mTab.color} shadow-md -translate-y-0.5` 
                              : 'bg-white/90 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-950 cursor-pointer'
                          }`}
                        >
                          {mTab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* SUB TAB: intro */}
                  {morseSubTab === 'intro' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl space-y-4">
                        <h3 className="font-title text-2xl text-blue-900 font-black tracking-tight">📜 LỊCH SỬ PHÁT MINH</h3>
                        <p className="text-xs font-semibold text-[#4d5656] leading-relaxed">
                          Hệ thống điện tín do nhà phát minh <strong className="text-blue-600 font-bold">Samuel Morse</strong> sáng lập ra vào năm 1836. Bằng các tổ hợp dấu chấm ngắn và dấu gạch dài đại diện cho còi ngắt hơi, thông tin liên lạc được vẫy gửi nhanh gọn vượt núi rừng hải đảo tầm xa.
                        </p>
                        <div className="space-y-3 mt-4">
                          <h4 className="font-black text-xs text-blue-950 uppercase tracking-wider">Timeline lịch sử:</h4>
                          {MORSE_TIMELINE.map((item, idx) => (
                            <div key={idx} className="flex gap-3 border-l-2 border-blue-200 pl-3">
                              <span className="font-black text-xs text-blue-600 shrink-0">{item.year}</span>
                              <div>
                                <h5 className="font-black text-xs text-gray-800">{item.title}</h5>
                                <p className="text-[10px] text-gray-500 font-medium">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl space-y-4">
                        <h3 className="font-title text-2xl text-blue-900 font-black tracking-tight">⚙️ NGUYÊN LÝ HOẠT ĐỘNG</h3>
                        <p className="text-xs font-semibold text-[#4d5656]">
                          Mã Morse quốc tế cấu thành từ hai yếu tố cơ bản là <strong className="text-blue-600 font-bold">Tích (Dot)</strong> và <strong className="text-red-500 font-bold">Tè (Dash)</strong>. Quy tắc căn chỉnh timing dứt khoát như sau:
                        </p>
                        <div className="space-y-2.5 mt-2">
                          {MORSE_PRINCIPLES.elements.map((el, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-blue-50/50 rounded-2xl border border-blue-100">
                              <div>
                                <span className="font-black text-xs text-blue-950 block">{el.name} ({el.symbol})</span>
                                <span className="text-[10px] text-gray-500 font-medium">{el.desc}</span>
                              </div>
                              <span className="text-[10px] font-black text-blue-600 bg-white px-2.5 py-1 rounded-full border border-blue-100">{el.duration}</span>
                            </div>
                          ))}
                        </div>
                        {/* SOS Example card */}
                        <div className="bg-amber-50 rounded-3xl p-5 border border-amber-200 text-center shadow-inner mt-4">
                          <span className="text-[10px] font-black text-amber-800 uppercase block mb-1">Ví dụ phát tin cầu cứu SOS:</span>
                          <span className="font-mono text-2xl tracking-widest font-black text-amber-600">{MORSE_PRINCIPLES.sosExample.code}</span>
                          <p className="text-[11px] text-amber-700/80 mt-1 font-semibold">{MORSE_PRINCIPLES.sosExample.vietnamese}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUB TAB: groups */}
                  {morseSubTab === 'groups' && (
                    <div className="space-y-6">
                      {MORSE_GROUPS.map((group) => (
                        <div key={group.id} className="bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl space-y-4">
                          <div className="border-b border-gray-100 pb-3 flex items-center justify-between">
                            <div>
                              <h4 className="font-title text-xl text-blue-900 font-black">{group.title}</h4>
                              <p className="text-xs text-gray-500 font-medium">{group.description}</p>
                            </div>
                            <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase tracking-wider">Còi Morse</span>
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                            {group.items.map((item) => (
                              <div
                                key={item.char}
                                id={`morse-item-card-${item.char}`}
                                className="bg-white border-2 border-blue-100 rounded-3xl p-4 flex flex-col justify-between items-center text-center shadow-md relative group hover:border-blue-400 hover:scale-[1.05] transition-all"
                              >
                                <span className="font-title text-3xl font-black text-blue-950">{item.char}</span>
                                <span className="font-mono text-xs tracking-wider font-extrabold text-blue-600 bg-blue-50/50 px-2 py-1 rounded-lg mt-1 mb-2 border border-blue-100">
                                  {item.code}
                                </span>
                                <span className="text-[10px] font-medium text-gray-400 italic block min-h-[30px] line-clamp-2">
                                  💡 {item.mnemonic}
                                </span>
                                
                                <button
                                  id={`play-còi-btn-${item.char}`}
                                  onClick={() => handlePlayCharSound(item.code)}
                                  className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-black text-[10px] py-1.5 rounded-xl transition-all shadow-md border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 cursor-pointer"
                                >
                                  📢 Còi
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SUB TAB: tower */}
                  {morseSubTab === 'tower' && (
                    <MorseTowerComponent />
                  )}

                  {/* SUB TAB: letter_by_letter */}
                  {morseSubTab === 'letter_by_letter' && (
                    <div className="bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl max-w-2xl mx-auto space-y-6 text-center">
                      <h3 className="font-title text-2xl text-blue-900 font-black tracking-tight">🔍 HỌC PHÁT ÂM VÀ GHI NHỚ TỪNG CHỮ CÁI</h3>
                      
                      {/* Letter Selector selector carousel */}
                      <div className="flex flex-wrap justify-center gap-2 p-3 bg-gray-50/80 rounded-3xl border border-gray-100">
                        {MORSE_GROUPS.flatMap(g => g.items).map((item) => (
                          <button
                            key={item.char}
                            id={`letter-selector-${item.char}`}
                            onClick={() => {
                              playClickSound();
                              setSelectedLearnLetter(item.char);
                            }}
                            className={`w-10 h-10 rounded-xl font-black transition-all text-sm flex items-center justify-center border-b-4 ${
                              selectedLearnLetter === item.char
                                ? 'bg-blue-600 text-white border-blue-800 shadow-md -translate-y-0.5'
                                : 'bg-white hover:bg-gray-100 text-[#2c3e50] border-gray-200 cursor-pointer'
                            }`}
                          >
                            {item.char}
                          </button>
                        ))}
                      </div>

                      {/* Display detail panel */}
                      {(() => {
                        const matched = MORSE_GROUPS.flatMap(g => g.items).find(i => i.char === selectedLearnLetter);
                        if (!matched) return null;
                        return (
                          <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white rounded-3xl border-2 border-blue-100 space-y-4">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 inline-block">CHỮ CÁI CHỌN HỌC</span>
                            <div className="font-title text-7xl font-black text-blue-950 animate-pulse">{matched.char}</div>
                            
                            {/* Animated Beep Visual Visual */}
                            <div className="flex justify-center items-center gap-4 py-4">
                              <span className="font-mono text-3xl font-black text-blue-600 tracking-wider">
                                {matched.code}
                              </span>
                              <button
                                id="play-mnemonic-sound-btn"
                                onClick={() => handlePlayCharSound(matched.code)}
                                className={`w-14 h-14 rounded-full flex items-center justify-center border-4 shadow-md transition-all border-b-8 active:border-b-2 active:translate-y-1 cursor-pointer ${
                                  isBuzzerFlashing
                                    ? 'bg-amber-400 border-white scale-110'
                                    : 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600 hover:scale-105'
                                }`}
                              >
                                🔊
                              </button>
                            </div>

                            <div className="bg-white border border-blue-100 p-4 rounded-2xl max-w-md mx-auto">
                              <h5 className="font-black text-xs text-blue-900 uppercase tracking-wide">Mẹo ghi nhớ dã ngoại:</h5>
                              <p className="text-sm font-semibold text-gray-700 mt-1">💡 {matched.mnemonic}</p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                </div>
              )}

              {/* ----------------- THEORY: SEMAPHORE ----------------- */}
              {theorySubTab === 'semaphore' && (
                <div className="space-y-6">
                  
                  {/* Mascot interactive simulator screen */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left panel: mascot flag waving display */}
                    <div className="lg:col-span-5 bg-white/95 backdrop-blur-lg rounded-[40px] p-6 border-4 border-white shadow-2xl flex flex-col items-center justify-between text-center relative overflow-hidden">
                      <div className="space-y-1">
                        <h3 className="font-title text-2xl text-red-950 font-black tracking-tight"><span className="whitespace-nowrap">🚩 BẢNG VẼ SEMAPHORE MASCOT</span></h3>
                        <p className="text-xs text-gray-500 font-medium">Bấm chữ cái bên tay phải, Mascot sẽ vẫy cờ cho em nhìn nhé!</p>
                      </div>

                      {/* Mascot rendering */}
                      <div className="w-56 h-64 flex items-center justify-center my-4">
                        <Mascot
                          leftAngle={currentSemData.leftAngle}
                          rightAngle={currentSemData.rightAngle}
                          expression="smile"
                        />
                      </div>

                      {/* Display specs detail block */}
                      <div className="w-full bg-red-50 p-4 rounded-3xl border border-red-100/80 shadow-inner">
                        <div className="text-sm font-title font-black text-red-950">
                          Chữ cái: {currentSemData.char} (Thuộc Vòng {currentSemData.circle})
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 mt-1">
                          Góc tay Trái: {currentSemData.leftAngle}° | Góc tay Phải: {currentSemData.rightAngle}°
                        </div>
                        <p className="text-xs text-red-700 font-semibold mt-2 leading-relaxed">
                          💡 Mẹo nhớ: {currentSemData.mnemonic || "Cố định một tay và di chuyển tay còn lại."}
                        </p>
                      </div>
                    </div>

                    {/* Right panel: alphabet keyboard picker */}
                    <div className="lg:col-span-7 bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl space-y-4 flex flex-col justify-between">
                      
                      {/* History & details of flag */}
                      <div className="p-4 bg-white/60 border border-red-100 rounded-3xl shadow-inner">
                        <span className="font-title text-lg text-red-950 font-black block">📖 Lịch sử cờ Semaphore</span>
                        <p className="text-xs text-[#566573] leading-relaxed mt-1.5 font-semibold">
                          {SEMAPHORE_HISTORY.description} Kích thước mỗi lá cờ là <strong className="text-red-600">{SEMAPHORE_HISTORY.flagSpecs.size}</strong> gồm hai tam giác màu Đỏ và Vàng.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-black text-xs uppercase text-red-800 tracking-wider">Hệ thống 7 vòng chữ cái Semaphore:</h4>
                        
                        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                          {SEMAPHORE_CIRCLES.map((circle) => (
                            <div key={circle.circle} className="space-y-1.5">
                              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block border-b border-gray-100 pb-1">
                                {circle.title} - <span className="text-[9px] text-gray-400 capitalize">{circle.description}</span>
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {circle.items.map((item) => {
                                  const isActive = selectedSemChar === item.char;
                                  return (
                                    <button
                                      key={item.char}
                                      id={`sem-char-btn-${item.char}`}
                                      onClick={() => handleSelectSemChar(item.char)}
                                      className={`px-3 py-2 rounded-xl font-black transition-all text-xs flex items-center justify-between border-b-4 ${
                                        isActive
                                          ? 'bg-red-500 text-white border-red-700 shadow-md -translate-y-0.5'
                                          : 'bg-white hover:bg-red-50 text-gray-800 border-gray-200 hover:border-gray-100 cursor-pointer'
                                      }`}
                                    >
                                      <span>{item.char}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* ----------------- THEORY: TRAIL SIGNS ----------------- */}
              {theorySubTab === 'dau_duong' && (
                <div className="space-y-6">
                  
                  {/* Filter and search bar bar */}
                  <div className="bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div>
                      <h3 className="font-title text-2xl text-green-950 font-black tracking-tight"><span className="whitespace-nowrap">🪧 THƯ VIỆN 32 DẤU ĐƯỜNG DÃ NGOẠI</span></h3>
                      <p className="text-xs text-gray-500 font-medium">Giới thiệu trọn vẹn toàn bộ các dấu hiệu xếp bằng sỏi, cành cây dã ngoại.</p>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                      {/* Search box */}
                      <div className="relative flex-1 md:w-60">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                          id="trail-search-input"
                          type="text"
                          value={searchSignQuery}
                          onChange={(e) => setSearchSignQuery(e.target.value)}
                          placeholder="Tìm tên dấu đường..."
                          className="w-full pl-9 pr-4 py-2.5 rounded-2xl border-2 border-gray-200 focus:border-green-400 outline-none text-xs bg-white"
                        />
                      </div>

                      {/* Category Selector Selector */}
                      <select
                        id="trail-category-filter"
                        value={filterSignCategory}
                        onChange={(e) => setFilterSignCategory(e.target.value)}
                        className="bg-white border-2 border-gray-200 px-3 py-2 rounded-2xl text-xs font-bold text-gray-700 focus:border-green-400 outline-none cursor-pointer"
                      >
                        <option value="all">Tất cả nhóm</option>
                        <option value="di_chuyen">Di chuyển</option>
                        <option value="canh_bao">Cảnh báo</option>
                        <option value="menh_lenh">Mệnh lệnh</option>
                        <option value="thong_tin">Thông tin</option>
                      </select>
                    </div>
                  </div>

                  {/* List Grid of signs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TRAIL_SIGNS.filter((sign) => {
                      const matchesSearch = sign.name.toLowerCase().includes(searchSignQuery.toLowerCase()) || sign.meaning.toLowerCase().includes(searchSignQuery.toLowerCase());
                      const matchesCategory = filterSignCategory === "all" || sign.category === filterSignCategory;
                      return matchesSearch && matchesCategory;
                    }).map((sign) => (
                      <div
                        key={sign.id}
                        id={`trail-sign-card-${sign.id}`}
                        className="bg-white/95 backdrop-blur-lg border-4 border-white rounded-[40px] p-6 flex flex-col justify-between shadow-2xl relative hover:border-green-400 hover:scale-[1.02] transition-all"
                      >
                        {/* Category label badge */}
                        <span className={`absolute top-4 right-4 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase border ${
                          sign.category === 'di_chuyen' ? 'bg-blue-50 border-blue-200 text-blue-600' :
                          sign.category === 'canh_bao' ? 'bg-red-50 border-red-200 text-red-600' :
                          sign.category === 'menh_lenh' ? 'bg-amber-50 border-amber-200 text-amber-600' :
                          'bg-green-50 border-green-200 text-green-600'
                        }`}>
                          {sign.category === 'di_chuyen' ? 'Di chuyển' :
                           sign.category === 'canh_bao' ? 'Cảnh báo' :
                           sign.category === 'menh_lenh' ? 'Mệnh lệnh' :
                           'Thông tin'}
                        </span>

                        <div className="space-y-4">
                          {/* SVG sign drawing box */}
                          <div className="w-full h-32 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-4 shadow-inner">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="#2c3e50" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="filter drop-shadow-md">
                              <path d={sign.svgPath} />
                            </svg>
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-title text-xl text-green-950 font-black">{sign.name}</h4>
                            <p className="text-xs font-semibold text-gray-700">{sign.meaning}</p>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 pt-3 mt-4 text-[11px] text-gray-500 space-y-1 bg-green-50/30 p-2.5 rounded-xl">
                          <p><strong>Cấu tạo:</strong> {sign.description}</p>
                          <p><strong>Ví dụ:</strong> {sign.exampleScenario}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}
              {/* ----------------- THEORY: NGHI THỨC ĐỘI ----------------- */}
              {theorySubTab === 'nghi_thuc' && (
                <NghiThucDoiTheory />
              )}

            </motion.div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: LUYỆN TẬP (Interactive practice sessions) */}
          {/* ========================================================= */}
          {activeTab === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {/* Module selection buttons */}
              <div className="bg-white/95 backdrop-blur-lg rounded-[40px] p-6 md:p-8 border-4 border-white shadow-2xl text-center space-y-4">
                <h3 className="font-title text-2xl text-orange-950 font-black tracking-tight"><span className="whitespace-nowrap">🎮 CHẾ ĐỘ LUYỆN TẬP PHẢN XẠ</span></h3>
                <p className="text-xs text-gray-500 font-medium">Giúp em rèn phản xạ còi cờ và dấu chỉ để ghi điểm tích lũy cấp độ nhé!</p>
                
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {[
                    { id: 'morse', label: '📡 LUYỆN MORSE', activeColor: 'bg-blue-500 border-blue-700 text-white' },
                    { id: 'semaphore', label: '🚩 LUYỆN SEMAPHORE', activeColor: 'bg-red-500 border-red-700 text-white' },
                    { id: 'dau_duong', label: '🪧 LUYỆN DẤU ĐƯỜNG', activeColor: 'bg-green-500 border-green-700 text-white' },
                    { id: 'challenges', label: '🎯 THỬ THÁCH', activeColor: 'bg-yellow-500 border-yellow-750 text-white' },
                    { id: 'mini_games', label: '🧩 TRÒ CHƠI', activeColor: 'bg-emerald-500 border-emerald-700 text-white' }
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      id={`practice-select-${sub.id}`}
                      onClick={() => {
                        playClickSound();
                        setPracticeSubTab(sub.id as any);
                        setPracticeIndex(0);
                        setPracticeSelectedAnswer(null);
                        setPracticeIsSubmitted(false);
                        setPracticeFeedback("");
                        setActiveChallenge(null);
                      }}
                      className={`px-5 py-3 rounded-2xl font-black text-xs transition-all border-b-4 whitespace-nowrap cursor-pointer ${
                        practiceSubTab === sub.id
                          ? `${sub.activeColor} shadow-md -translate-y-0.5 scale-105`
                          : 'bg-white hover:bg-orange-50 text-gray-750 border-gray-300 hover:border-gray-100'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Exercise Box */}
              {(practiceSubTab === 'morse' || practiceSubTab === 'semaphore' || practiceSubTab === 'dau_duong') && (() => {
                const currentList = getCurrentPracticeExercises();
                const currentEx = currentList[practiceIndex];
                if (!currentEx) return null;
                return (
                  <div className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-white p-6 shadow-2xl space-y-6 relative overflow-hidden">
                    
                    {/* Header stats of practice */}
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-[10px] font-black text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full uppercase border border-orange-100">
                        BÀI LUYỆN TẬP {practiceIndex + 1} / {currentList.length}
                      </span>
                      <span className="text-[10px] bg-orange-100/60 text-orange-800 px-3 py-1 rounded-full font-black border border-orange-200">
                        Đúng +10 điểm, +15 EXP
                      </span>
                    </div>

                    {/* Question text */}
                    <div className="text-center py-2">
                      <h4 className="font-title text-2xl text-gray-900 font-black leading-snug">
                        {currentEx.question}
                      </h4>
                    </div>

                    {/* Dynamic visual representation of exercise */}
                    <div className="flex justify-center items-center py-6 bg-orange-50/30 rounded-3xl border border-orange-100/80 shadow-inner">
                      {/* CASE A: Morse sound or symbol practice */}
                      {practiceSubTab === 'morse' && (
                        <div className="text-center space-y-3">
                          <button
                            id="play-practice-audio-btn"
                            onClick={() => handlePlayPracticeAudio(currentEx.answer)}
                            className={`w-20 h-20 rounded-full flex items-center justify-center border-4 shadow-md transition-all border-b-8 active:border-b-2 active:translate-y-1 cursor-pointer ${
                              isBuzzerFlashing
                                ? 'bg-amber-400 text-white border-white scale-110'
                                : 'bg-blue-500 hover:bg-blue-600 text-white border-blue-600 hover:scale-105'
                            }`}
                          >
                            📢 Nghe còi
                          </button>
                          <span className="text-[10px] text-gray-400 block font-semibold">Hãy bấm vào nút để nghe còi Morse</span>
                        </div>
                      )}

                      {/* CASE B: Semaphore angles guessing */}
                      {practiceSubTab === 'semaphore' && currentEx.visualData && (
                        <div className="w-40 h-48 flex items-center justify-center">
                          <Mascot
                            leftAngle={getSemItemData(currentEx.visualData.char).leftAngle}
                            rightAngle={getSemItemData(currentEx.visualData.char).rightAngle}
                            expression="normal"
                            size={160}
                            isAnimated={false}
                          />
                        </div>
                      )}

                      {/* CASE C: Trail sign meaning guess */}
                      {practiceSubTab === 'dau_duong' && currentEx.visualData && (
                        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-2xl shadow-md p-4 border-2 border-green-100">
                          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="#2c3e50" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
                            <path d={TRAIL_SIGNS.find(s => s.id === currentEx.visualData.signId)?.svgPath || ""} />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Multi choice buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {currentEx.choices?.map((opt, i) => (
                        <button
                          key={i}
                          id={`practice-opt-btn-${i}`}
                          onClick={() => handleSelectPracticeAnswer(opt)}
                          disabled={practiceIsSubmitted}
                          className={`p-4 rounded-3xl text-sm font-black text-left transition-all border-2 border-b-4 flex items-center justify-between shadow-sm cursor-pointer ${
                            practiceSelectedAnswer === opt
                              ? 'border-orange-500 bg-orange-50 text-orange-950'
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-slate-50 hover:border-gray-100'
                          }`}
                        >
                          <span>{opt}</span>
                          {practiceSelectedAnswer === opt && <span className="text-orange-500 font-bold text-lg">✓</span>}
                        </button>
                      ))}
                    </div>

                    {/* Feedback result */}
                    {practiceIsSubmitted && (
                      <div className={`p-4 rounded-3xl text-center border-2 font-black text-xs ${
                        practiceSelectedAnswer === currentEx.answer
                          ? 'bg-green-50 border-green-200 text-green-700'
                          : 'bg-red-50 border-red-200 text-red-700'
                      }`}>
                        {practiceFeedback}
                      </div>
                    )}

                    {/* Actions button */}
                    <div className="flex gap-4">
                      {!practiceIsSubmitted ? (
                        <button
                          id="practice-submit-btn"
                          onClick={handleSubmitPractice}
                          disabled={!practiceSelectedAnswer}
                          className="w-full bg-[#8eb859] hover:bg-[#7ca446] disabled:opacity-50 text-white font-title text-base py-4 rounded-3xl shadow-lg border-b-4 border-[#658735] transition-all cursor-pointer"
                        >
                          🚀 GỬI CÂU TRẢ LỜI
                        </button>
                      ) : (
                        <button
                          id="practice-next-btn"
                          onClick={handleNextPractice}
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-title text-base py-4 rounded-3xl shadow-lg border-b-4 border-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>BÀI TIẾP THEO</span>
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                  </div>
                );
              })()}

              {/* Render Challenges */}
              {practiceSubTab === 'challenges' && (
                <div className="space-y-6">
                  <AnimatePresence mode="wait">
                    {activeChallenge && (
                      <motion.div
                        key={activeChallenge.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-yellow-400 p-6 md:p-8 shadow-2xl space-y-6 relative overflow-hidden"
                      >
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                          <span className="text-[10px] font-black text-yellow-850 bg-yellow-50 px-3 py-1 rounded-full uppercase border border-yellow-100 shadow-sm">
                            THỬ THÁCH #{activeChallenge.id}: {activeChallenge.title}
                          </span>
                          <button
                            id="close-active-challenge"
                            onClick={() => {
                              playClickSound();
                              setActiveChallenge(null);
                            }}
                            className="text-gray-400 hover:text-gray-650 cursor-pointer"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <p className="text-xs text-gray-500 font-semibold">{activeChallenge.description}</p>
                        
                        <div className="text-center py-2">
                          <h4 className="font-title text-xl text-gray-900 font-black leading-relaxed">
                            {activeChallenge.questionText}
                          </h4>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeChallenge.options.map((opt, i) => (
                            <button
                              key={i}
                              id={`challenge-opt-btn-${i}`}
                              onClick={() => handleSelectChallengeOption(i)}
                              disabled={challengeIsSubmitted}
                              className={`p-4 rounded-3xl text-xs font-black text-left transition-all border-2 border-b-4 flex items-center justify-between shadow-sm cursor-pointer ${
                                challengeSelectedAnsIdx === i
                                  ? 'border-yellow-500 bg-yellow-50 text-yellow-950 shadow-inner animate-pulse'
                                  : 'border-gray-250 bg-white text-gray-700 hover:bg-slate-50'
                              }`}
                            >
                              <span>{opt}</span>
                            </button>
                          ))}
                        </div>

                        {challengeIsSubmitted && (
                          <div className={`p-4 rounded-3xl text-center border-2 font-black text-xs ${
                            challengeSelectedAnsIdx === activeChallenge.correctIdx
                              ? 'bg-green-50 border-green-200 text-green-700'
                              : 'bg-red-50 border-red-200 text-red-700'
                          }`}>
                            {challengeFeedback}
                          </div>
                        )}

                        <div className="flex gap-4">
                          {!challengeIsSubmitted ? (
                            <button
                              id="challenge-submit-btn"
                              onClick={handleSubmitChallenge}
                              disabled={challengeSelectedAnsIdx === null}
                              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 text-white font-title text-base py-3.5 rounded-2xl shadow-lg border-b-4 border-yellow-600 transition-all cursor-pointer"
                            >
                              🚀 GỬI CÂU TRẢ LỜI
                            </button>
                          ) : (
                            <button
                              id="challenge-next-btn"
                              onClick={() => {
                                playClickSound();
                                setActiveChallenge(null);
                                setChallengeSelectedAnsIdx(null);
                                setChallengeIsSubmitted(false);
                                setChallengeFeedback("");
                              }}
                              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-title text-base py-3.5 rounded-2xl shadow-lg border-b-4 border-blue-700 transition-all cursor-pointer"
                            >
                              QUAY LẠI DANH SÁCH THỬ THÁCH
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!activeChallenge && (
                    <div className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-white p-6 shadow-2xl space-y-4">
                      <div className="border-b border-gray-100 pb-3">
                        <span className="font-title text-xl text-yellow-950 font-black block">🎯 DANH SÁCH 100 NHIỆM VỤ RÈN LUYỆN</span>
                        <p className="text-[10px] text-gray-500 font-medium">Hoàn thành các nhiệm vụ để nhận EXP và Xu vàng. Đã vượt qua: {completedChallengeIds.length} / 100.</p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                        {CHALLENGES_LIST.map((c) => {
                          const isDone = completedChallengeIds.includes(c.id);
                          return (
                            <button
                              key={c.id}
                              id={`challenge-node-${c.id}`}
                              onClick={() => {
                                playClickSound();
                                setActiveChallenge(c);
                                setChallengeSelectedAnsIdx(null);
                                setChallengeIsSubmitted(false);
                                setChallengeFeedback("");
                              }}
                              className={`h-16 rounded-xl border-2 font-black transition-all flex flex-col items-center justify-center cursor-pointer ${
                                isDone
                                  ? 'bg-yellow-105 border-yellow-400 text-yellow-800'
                                  : 'bg-white border-gray-200 text-[#2c3e50] hover:bg-slate-50'
                              }`}
                            >
                              <span className="text-[8px] font-black uppercase text-gray-400">N.Vụ</span>
                              <span className="text-sm font-black">{c.id}</span>
                              {isDone && <span className="text-[8px] text-yellow-600 font-black">✓ Đạt</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Render Mini Games */}
              {practiceSubTab === 'mini_games' && user && (
                <MiniGames user={user} saveUserProfile={saveUserProfile} addReward={addReward} />
              )}

            </motion.div>
          )}



          {/* ========================================================= */}
          {/* TAB 4: THI ĐẤU (High stakes countdown quiz) */}
          {/* ========================================================= */}
          {activeTab === 'tournament' && (
            <motion.div
              key="tournament"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              
              {/* Case 1: Welcome Screen / Not started */}
              {!tournamentActive && (
                <div className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-white p-8 text-center shadow-2xl space-y-6">
                  <div className="w-20 h-20 bg-yellow-400 text-white p-4 rounded-full border-4 border-white shadow-xl mx-auto flex items-center justify-center text-4xl animate-bounce">
                    🏆
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-title text-3xl text-yellow-950 font-black tracking-tight"><span className="whitespace-nowrap">ĐẤU TRƯỜNG ĐỘI VIÊN HHTER</span></h3>
                    <p className="text-xs text-gray-500 max-w-md mx-auto font-medium">
                      Đoàn của em đã sẵn sàng tranh tài chưa? Hãy chọn chế độ đấu đơn một mình hoặc đấu đối kháng 2 người chơi local trên cùng thiết bị nhé!
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-5 rounded-3xl border border-yellow-100 max-w-sm mx-auto text-left text-xs text-yellow-800 space-y-1.5 font-semibold shadow-inner">
                    <p>⚡ Mỗi người chơi giải ngẫu nhiên các câu hỏi trong 15 giây/câu.</p>
                    <p>⚡ Chế độ 2P: câu lẻ cho Người chơi 1, câu chẵn cho Người chơi 2.</p>
                    <p>⚡ Người thắng cuộc sẽ vinh dự nhận cúp vàng của chỉ huy!</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3.5 max-w-md mx-auto">
                    <button
                      id="start-tournament-solo-btn"
                      onClick={() => {
                        setIsTwoPlayer(false);
                        handleStartTournament();
                      }}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-title text-base py-4 rounded-3xl shadow-lg border-b-4 border-yellow-600 transition-all cursor-pointer"
                    >
                      🚀 ĐẤU ĐƠN (1 NGƯỜI)
                    </button>
                    <button
                      id="start-tournament-2p-btn"
                      onClick={() => {
                        setIsTwoPlayer(true);
                        setActivePlayer(1);
                        setP1Score(0);
                        setP2Score(0);
                        setP1CorrectCount(0);
                        setP2CorrectCount(0);
                        handleStartTournament();
                      }}
                      className="flex-1 bg-orange-400 hover:bg-orange-500 text-white font-title text-base py-4 rounded-3xl shadow-lg border-b-4 border-orange-600 transition-all cursor-pointer"
                    >
                      🏆 ĐẤU ĐỐI KHÁNG (2P)
                    </button>
                  </div>
                </div>
              )}

              {/* Case 2: Active question screen */}
              {tournamentActive && !tournamentResultsReady && (
                <div className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-yellow-400 p-6 shadow-2xl space-y-6 relative overflow-hidden">
                  
                  {/* Timer progress bar bar */}
                  <div className="absolute top-0 left-0 w-full h-2.5 bg-gray-100">
                    <div
                      className={`h-full transition-all duration-1000 ${
                        tournamentTimeLeft > 5 ? 'bg-yellow-400' : 'bg-red-500 animate-pulse'
                      }`}
                      style={{ width: `${(tournamentTimeLeft / 15) * 100}%` }}
                    />
                  </div>

                  {/* Question Index and Score stats */}
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3 mt-1.5">
                    {isTwoPlayer ? (
                      <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${
                        activePlayer === 1
                          ? 'bg-blue-50 border-blue-250 text-blue-800 shadow-sm'
                          : 'bg-pink-50 border-pink-250 text-pink-850 shadow-sm'
                      }`}>
                        LƯỢT: NGƯỜI CHƠI {activePlayer} ({activePlayer === 1 ? 'Em' : 'Bạn'})
                      </span>
                    ) : (
                      <span className="text-[10px] font-black text-yellow-850 bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-100">
                        CÂU HỎI {tournamentIndex + 1} / 20
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2 text-[10px] font-black text-red-500 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      <Clock className="w-3.5 h-3.5 animate-pulse" />
                      <span>{tournamentTimeLeft} GIÂY</span>
                    </div>

                    <span className="text-[10px] font-black text-emerald-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                      {isTwoPlayer ? `P1: ${p1Score} | P2: ${p2Score}` : `ĐIỂM: ${tournamentScore}`}
                    </span>
                  </div>

                  {/* Question details text */}
                  {(() => {
                    const q = tournamentQuestions[tournamentIndex];
                    if (!q) return null;
                    return (
                      <div className="space-y-6">
                        <div className="text-center">
                          <span className="text-[9px] font-black text-yellow-600 uppercase tracking-widest bg-yellow-50 px-2.5 py-0.5 rounded-md border border-yellow-100 inline-block">Danh mục: {q.category.toUpperCase()} • Độ khó: {q.difficulty.toUpperCase()}</span>
                          <h4 className="font-title text-2xl text-gray-900 font-black mt-2 leading-snug">
                            {q.questionText}
                          </h4>
                        </div>

                        {/* Rendering specific visual if available */}
                        {q.visualType && q.visualType !== 'none' && (
                          <div className="flex justify-center items-center py-5 bg-slate-50 rounded-3xl border border-slate-100 max-w-sm mx-auto shadow-inner">
                            {q.visualType === 'morse' && q.visualValue && (
                              <div className="text-center space-y-2">
                                <span className="font-mono text-3xl tracking-widest font-black text-blue-650">
                                  {q.visualValue}
                                </span>
                              </div>
                            )}

                            {q.visualType === 'semaphore' && q.visualValue && (
                              <Mascot
                                leftAngle={getSemItemData(q.visualValue).leftAngle}
                                rightAngle={getSemItemData(q.visualValue).rightAngle}
                                expression="normal"
                                size={140}
                                isAnimated={false}
                              />
                            )}

                            {q.visualType === 'dau_duong' && q.visualValue && (
                              <div className="w-24 h-24 flex items-center justify-center bg-white p-3 rounded-2xl border-2 border-slate-100 shadow-md">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="#2c3e50" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                                  <path d={TRAIL_SIGNS.find(s => s.id === q.visualValue)?.svgPath || ""} />
                                </svg>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Options picker */}
                        <div className="grid grid-cols-1 gap-2.5">
                          {q.options.map((opt, idx) => {
                            const isSelected = tournamentSelectedIdx === idx;
                            const isCorrect = idx === q.correctIndex;
                            let btnStyle = "border-gray-200 bg-white text-gray-700 hover:bg-slate-50 hover:border-gray-100 cursor-pointer";

                            if (tournamentIsAnswered) {
                              if (isCorrect) {
                                btnStyle = "border-green-500 bg-green-50 text-green-950";
                              } else if (isSelected) {
                                btnStyle = "border-red-500 bg-red-50 text-red-950";
                              } else {
                                btnStyle = "border-gray-100 bg-gray-50 text-gray-450 opacity-60";
                              }
                            }

                            return (
                              <button
                                key={idx}
                                id={`tournament-opt-btn-${idx}`}
                                onClick={() => handleAnswerTournament(idx)}
                                disabled={tournamentIsAnswered}
                                className={`p-4 rounded-3xl text-sm font-black text-left transition-all border-2 border-b-4 flex items-center justify-between shadow-sm ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {tournamentIsAnswered && isCorrect && <span className="text-green-600 bg-green-100/60 px-2.5 py-1 rounded-full text-xs font-black">✓ Đúng</span>}
                                {tournamentIsAnswered && isSelected && !isCorrect && <span className="text-red-600 bg-red-100/60 px-2.5 py-1 rounded-full text-xs font-black">✗ Sai</span>}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation block if answered */}
                        {tournamentIsAnswered && (
                          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs text-gray-500 space-y-1 shadow-inner leading-relaxed">
                            <span className="font-black text-gray-800 block">💡 Giải thích của trưởng trạm:</span>
                            <p>{q.explanation}</p>
                          </div>
                        )}

                        {/* Button control for next question */}
                        {tournamentIsAnswered && (
                          <button
                            id="tournament-next-btn"
                            onClick={handleNextTournamentQuestion}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-title text-base py-4 rounded-3xl shadow-lg border-b-4 border-yellow-600 transition-all cursor-pointer"
                          >
                            {tournamentIndex === 19 ? "🏆 XEM KẾT QUẢ CUỐI CÙNG" : "TIẾP TỤC HÀNH TRÌNH 🚀"}
                          </button>
                        )}

                      </div>
                    );
                  })()}

                </div>
              )}

              {/* Case 3: Summary Results screen */}
              {tournamentResultsReady && (
                <div className="bg-white/95 backdrop-blur-lg rounded-[40px] border-4 border-white p-8 text-center shadow-2xl space-y-6">
                  <span className="text-xs bg-[#8eb859]/20 text-[#3d601b] px-4 py-1.5 rounded-full font-black uppercase tracking-wider border border-white shadow-md inline-block">
                    🎉 Hoàn thành Đấu trường
                  </span>

                  <h3 className="font-title text-3xl text-[#2c3e50] font-black tracking-tight">TỔNG KẾT THI ĐẤU</h3>

                  {isTwoPlayer ? (
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        <div className="bg-blue-50/70 p-4.5 rounded-3xl border border-blue-200 text-center shadow-md">
                          <span className="text-[10px] text-blue-800 uppercase font-black block">Người chơi 1 (Em)</span>
                          <span className="font-title text-3xl text-blue-600 font-black mt-1 block">{p1CorrectCount}/10 đúng</span>
                          <span className="block text-[10px] text-gray-400 mt-1 font-bold">{p1Score} điểm đạt</span>
                        </div>

                        <div className="bg-pink-50/70 p-4.5 rounded-3xl border border-pink-200 text-center shadow-md">
                          <span className="text-[10px] text-pink-850 uppercase font-black block">Người chơi 2 (Bạn)</span>
                          <span className="font-title text-3xl text-pink-600 font-black mt-1 block">{p2CorrectCount}/10 đúng</span>
                          <span className="block text-[10px] text-gray-400 mt-1 font-bold">{p2Score} điểm đạt</span>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-2 border-yellow-200 text-yellow-800 p-4 rounded-3xl text-xs font-black max-w-sm mx-auto shadow-sm">
                        👑 THỦ LĨNH TRẠM: {
                          p1Score > p2Score
                            ? "Người chơi 1 (Em) giành chiến thắng! 🎉 +40 điểm."
                            : p2Score > p1Score
                              ? "Người chơi 2 (Bạn) giành chiến thắng! Cố lên nhé."
                              : "Hòa điểm tuyệt đối! Cả hai đều rất giỏi! 🤝"
                        }
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Summary grid */}
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 text-center shadow-inner">
                          <span className="text-[10px] text-gray-400 uppercase font-bold block">Số câu đúng</span>
                          <span className="font-title text-4xl text-blue-600 font-black">{tournamentCorrectCount}/20</span>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 text-center shadow-inner">
                          <span className="text-[10px] text-gray-400 uppercase font-bold block">Tổng điểm đạt được</span>
                          <span className="font-title text-4xl text-yellow-500 font-black">+{tournamentScore}</span>
                        </div>
                      </div>

                      {perfectBonusEarned && (
                        <div className="bg-emerald-50 border-2 border-emerald-100 text-emerald-800 p-4 rounded-3xl text-xs font-black max-w-sm mx-auto shadow-sm">
                          🎉 Em xuất sắc giành thêm 20 điểm thưởng vì trả lời đúng tất cả 20 câu!
                        </div>
                      )}
                    </>
                  )}

                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-3xl max-w-sm mx-auto text-xs text-gray-500 font-medium shadow-inner leading-relaxed">
                    Bản tin thi đấu của em đã được gửi về Thẻ Đội viên và tự động tích lũy cấp độ nhé!
                  </div>

                  <div className="flex gap-4 max-w-md mx-auto">
                    <button
                      id="replay-tournament-btn"
                      onClick={handleStartTournament}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-title text-base py-4 rounded-3xl shadow-lg border-b-4 border-yellow-600 transition-all cursor-pointer"
                    >
                      🔄 THI ĐẤU LẠI
                    </button>
                    <button
                      id="back-home-from-tournament-btn"
                      onClick={() => {
                        playClickSound();
                        setActiveTab('home');
                      }}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-title text-base py-3.5 rounded-xl transition-all"
                    >
                      🏠 QUAY VỀ TRANG CHỦ
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          )}

          {/* ========================================================= */}
          {/* TAB 5: THÀNH TÍCH (Progress & Badge Rack) */}
          {/* ========================================================= */}
          {activeTab === 'achievements' && user && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Badge Rack Card */}
                <div className="md:col-span-7 bg-white/75 backdrop-blur-md rounded-[35px] border-4 border-purple-400 p-6 shadow-xl space-y-6">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-title text-2xl text-purple-950 font-bold">🌟 GIÁ DANH DỰ ĐỘI VIÊN (HUY HIỆU)</h3>
                    <p className="text-xs text-gray-500">Tích lũy điểm thi đấu để mở khóa các danh hiệu cao quý nhất nhé.</p>
                  </div>

                  {/* Badges layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'beginner', title: 'Người Mới', desc: 'Có thẻ Đội viên', scoreNeeded: 0, emoji: '🌟', bg: 'bg-yellow-100' },
                      { id: 'bronze', title: 'Đồng', desc: 'Đạt 100 điểm', scoreNeeded: 100, emoji: '🥉', bg: 'bg-orange-100' },
                      { id: 'silver', title: 'Bạc', desc: 'Đạt 300 điểm', scoreNeeded: 300, emoji: '🥈', bg: 'bg-gray-100' },
                      { id: 'gold', title: 'Vàng', desc: 'Đạt 600 điểm', scoreNeeded: 600, emoji: '🥇', bg: 'bg-yellow-200' },
                      { id: 'diamond', title: 'Kim Cương', desc: 'Đạt 1000 điểm', scoreNeeded: 1000, emoji: '💎', bg: 'bg-blue-100' },
                      { id: 'master', title: 'Siêu Truyền Tin', desc: 'Đạt 2000 điểm', scoreNeeded: 2000, emoji: '👑', bg: 'bg-purple-100' },
                      { id: 'nghi_thuc_doi', title: 'Nghi thức Đội', desc: 'Đạt Chuyên hiệu Nghi thức', scoreNeeded: 99999, emoji: '🏕', bg: 'bg-emerald-100' },
                      { id: 'an_toan_giao_thong', title: 'AT Giao thông', desc: 'Đạt Chuyên hiệu ATGT', scoreNeeded: 99999, emoji: '🚦', bg: 'bg-blue-100' },
                      { id: 'nha_sinh_hoc_nho_tuoi', title: 'Sinh học nhí', desc: 'Đạt Chuyên hiệu Sinh học', scoreNeeded: 99999, emoji: '🌱', bg: 'bg-green-105' },
                      { id: 'tin_hoc_tre', title: 'Tin học trẻ', desc: 'Đạt Chuyên hiệu Tin học', scoreNeeded: 99999, emoji: '💻', bg: 'bg-indigo-100' },
                      { id: 'van_dong_vien_nho_tuoi', title: 'Lực sĩ nhí', desc: 'Đạt Chuyên hiệu Thể thao', scoreNeeded: 99999, emoji: '🏃', bg: 'bg-orange-100' },
                      { id: 'cham_hoc', title: 'Chăm Học', desc: 'Đạt Chuyên hiệu Chăm học', scoreNeeded: 99999, emoji: '📚', bg: 'bg-pink-100' },
                      { id: 'morse_expert', title: 'Chuyên gia Morse', desc: 'Thành thạo truyền tin Morse', scoreNeeded: 1500, emoji: '📡', bg: 'bg-cyan-100' }
                    ].map((badge) => {
                      const isUnlocked = user.score >= badge.scoreNeeded || (user.badges || []).includes(badge.id);
                      return (
                        <div
                          key={badge.id}
                          id={`badge-card-${badge.id}`}
                          className={`border-2 rounded-2xl p-4 flex flex-col items-center text-center transition-all ${
                            isUnlocked
                              ? `${badge.bg} border-yellow-400 shadow-md scale-105`
                              : 'border-gray-200 opacity-40 bg-slate-50'
                          }`}
                        >
                          <span className="text-4xl mb-2">{isUnlocked ? badge.emoji : '🔒'}</span>
                          <span className="font-title text-base font-bold text-gray-800">{badge.title}</span>
                          <span className="text-[10px] text-gray-500">{badge.desc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Progress Stats Card */}
                <div className="md:col-span-5 bg-white/75 backdrop-blur-md rounded-[35px] border-4 border-purple-400 p-6 shadow-xl space-y-6 flex flex-col justify-between">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-title text-2xl text-purple-950 font-bold"><span className="whitespace-nowrap">📊 THỐNG KÊ CHI TIẾT</span></h3>
                    <p className="text-xs text-gray-500">Toàn bộ bảng xếp hạng và tỉ lệ đúng của em.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Score display */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500 uppercase">Tổng điểm:</span>
                      <span className="font-title text-2xl text-purple-600 font-bold">{user.score}</span>
                    </div>

                    {/* Badge Count display */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500 uppercase">Huy hiệu đạt được:</span>
                      <span className="font-title text-2xl text-amber-600 font-bold">{(user.badges || []).length} / 13</span>
                    </div>

                    {/* Level display */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500 uppercase">Cấp độ hiện tại:</span>
                      <span className="font-title text-2xl text-green-600 font-bold">Cấp {user.level}</span>
                    </div>
                  </div>

                  {/* Custom Progress SVG Bar Chart */}
                  <div className="mt-4 p-4 bg-purple-50/40 rounded-2xl border border-purple-100">
                    <span className="text-xs font-bold text-purple-950 block mb-3">BIỂU ĐỒ HOẠT ĐỘNG GẦN ĐÂY</span>
                    {/* Simplified cute SVG chart */}
                    <div className="h-28 w-full flex items-end justify-between gap-2 px-2">
                      {user.history.slice(0, 7).reverse().map((hist, idx) => {
                        const maxVal = Math.max(...user.history.map(h => Math.abs(h.score)), 10);
                        const pct = Math.min((Math.abs(hist.score) / maxVal) * 100, 100);
                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                            <span className="text-[9px] font-bold text-purple-600">+{hist.score}</span>
                            <div
                              className="w-full bg-gradient-to-t from-purple-500 to-pink-400 rounded-t-lg transition-all duration-500"
                              style={{ height: `${Math.max(pct, 10)}%` }}
                            />
                            <span className="text-[8px] text-gray-400 tracking-tighter truncate w-12 text-center">{hist.date.split('/')[0]}</span>
                          </div>
                        );
                      })}
                      {user.history.length === 0 && (
                        <div className="text-xs text-center text-gray-400 w-full mb-8">Chưa có lịch sử học tập gần đây!</div>
                      )}
                    </div>
                  </div>

                  {/* Subject Accuracy Rate Ring Chart */}
                  <div className="mt-4 p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100">
                    <span className="text-xs font-bold text-emerald-950 block mb-3">TỶ LỆ ĐÁP ÁN ĐÚNG THEO CHUYÊN ĐỀ</span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {[
                        { label: 'Morse', pct: 85, color: 'stroke-blue-500', bg: 'stroke-blue-100' },
                        { label: 'Sema', pct: 90, color: 'stroke-red-500', bg: 'stroke-red-100' },
                        { label: 'Dấu đường', pct: 75, color: 'stroke-green-500', bg: 'stroke-green-100' },
                        { label: 'Nghi thức', pct: 95, color: 'stroke-emerald-500', bg: 'stroke-emerald-100' }
                      ].map((item, idx) => {
                        const radius = 20;
                        const circum = 2 * Math.PI * radius;
                        const strokeDashoffset = circum - (item.pct / 100) * circum;
                        return (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
                                <circle cx="24" cy="24" r={radius} fill="transparent" strokeWidth="4" className={item.bg} />
                                <circle
                                  cx="24"
                                  cy="24"
                                  r={radius}
                                  fill="transparent"
                                  strokeWidth="4"
                                  className={item.color}
                                  strokeDasharray={circum}
                                  strokeDashoffset={strokeDashoffset}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span className="absolute text-[8px] font-black text-gray-800">{item.pct}%</span>
                            </div>
                            <span className="text-[8px] font-black text-gray-400 mt-1 uppercase">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

              {/* 🏆 LEADERBOARD BLOCK */}
              <div className="bg-white/75 backdrop-blur-md rounded-[35px] border-4 border-[#8eb859] p-6 shadow-xl">
                <div className="border-b border-gray-100 pb-3 text-center">
                  <h3 className="font-title text-3xl text-[#2c3e50] font-black"><span className="whitespace-nowrap">🏆 BẢNG XẾP HẠNG TOÀN QUỐC</span></h3>
                  <p className="text-xs text-gray-500">Top Đội viên xuất sắc dẫn đầu cả nước.</p>
                </div>

                <div className="mt-6 space-y-2 max-w-2xl mx-auto">
                  {getMockLeaderboard().map((lead, idx) => {
                    const isCurrentUser = lead.name.includes("(Em)");
                    return (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                          isCurrentUser
                            ? 'bg-amber-100 border-amber-400 font-bold scale-[1.01]'
                            : 'bg-white/80 border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black ${
                            idx === 0 ? 'bg-yellow-400 text-white' :
                            idx === 1 ? 'bg-gray-300 text-white' :
                            idx === 2 ? 'bg-amber-600 text-white' :
                            'bg-gray-100 text-gray-500'
                          }`}>
                            {idx + 1}
                          </span>
                          <div>
                            <span className="text-sm font-bold text-gray-800 block">{lead.name}</span>
                            <span className="text-[10px] text-gray-400 block">{lead.className} • {lead.school}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-orange-500 font-bold">🔥 Chuỗi: {lead.streak} ngày</span>
                          <span className="font-title text-base text-[#2c3e50] font-black">{lead.score} điểm</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          )}

          {/* ========================================================= */}
          {/* TAB 6: HỒ SƠ ĐỘI VIÊN (User profile overview) */}
          {/* ========================================================= */}
          {activeTab === 'profile' && user && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {/* Card visual of student uniform profile */}
              <div className="bg-white/80 backdrop-blur-md rounded-[40px] border-4 border-pink-400 p-8 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-pink-100 w-44 h-44 rounded-full blur-3xl -z-10" />

                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Mascot display representation */}
                  <div className="w-40 h-40 shrink-0 bg-white border-4 border-pink-200 rounded-3xl flex items-center justify-center text-8xl shadow-sm">
                    {user.avatar === 'cadet_boy' && '🧑‍✈️'}
                    {user.avatar === 'cadet_girl' && '👧'}
                    {user.avatar === 'panda' && '🐼'}
                    {user.avatar === 'puppy' && '🐶'}
                    {user.avatar === 'cat' && '🐱'}
                  </div>

                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <span className="bg-pink-100 text-pink-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                        Thẻ Đội viên số #00{user.level}{user.score}
                      </span>
                      <h3 className="font-title text-3xl text-gray-900 font-black mt-1">{user.name}</h3>
                      <p className="text-sm font-bold text-pink-700">{user.className} • {user.school}</p>
                    </div>

                    {/* Quick export/backup actions */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <button
                        id="export-data-btn"
                        onClick={exportData}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-title text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
                      >
                        <Download className="w-4 h-4" />
                        <span>Xuất tệp Lưu trữ</span>
                      </button>

                      <label className="bg-white border-2 border-pink-200 hover:bg-pink-50 text-pink-700 font-title text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-1.5">
                        <Upload className="w-4 h-4" />
                        <span>Nhập tệp Thẻ cũ</span>
                        <input
                          id="import-data-input"
                          type="file"
                          accept=".json"
                          onChange={importData}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Detailed Activities Timeline */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-title text-xl text-pink-950 font-bold mb-4">📜 NHẬT KÝ HOẠT ĐỘNG GẦN ĐÂY</h4>
                  
                  <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">
                    {user.history.map((hist, idx) => (
                      <div key={idx} className="flex gap-4 p-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl text-xs transition-colors">
                        <span className="font-bold text-pink-600 shrink-0 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {hist.date}
                        </span>
                        <span className="text-gray-700">{hist.activity}</span>
                      </div>
                    ))}
                    {user.history.length === 0 && (
                      <p className="text-gray-400 italic text-center text-xs py-6">Chưa có nhật ký hoạt động nào!</p>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          )}

          {/* ========================================================= */}
          {/* TAB 7: CÀI ĐẶT (Settings Panel) */}
          {/* ========================================================= */}
          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-[40px] border-4 border-gray-400 p-8 shadow-xl space-y-6">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-title text-3xl text-gray-900 font-bold">⚙️ CÀI ĐẶT ỨNG DỤNG</h3>
                  <p className="text-xs text-gray-500">Điều chỉnh âm thanh và các thông số hoạt động của ứng dụng.</p>
                </div>

                <div className="space-y-4">
                  {/* Mute audio toggler */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <span className="font-title text-lg text-gray-800 font-bold block">🔊 Âm thanh còi cờ</span>
                      <span className="text-xs text-gray-500">Bật hoặc tắt tất cả hiệu ứng âm thanh và còi Morse.</span>
                    </div>

                    <button
                      id="settings-mute-toggle"
                      onClick={toggleMute}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border-2 ${
                        isAudioMuted
                          ? 'bg-red-500 text-white border-red-400 shadow-md'
                          : 'bg-emerald-500 text-white border-emerald-400 shadow-md'
                      }`}
                    >
                      {isAudioMuted ? "🔇 ĐÃ TẮT" : "🔊 ĐANG BẬT"}
                    </button>
                  </div>

                  {/* Reset app data options */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <span className="font-title text-lg text-red-800 font-bold block">⚠️ Xóa tất cả dữ liệu</span>
                      <span className="text-xs text-gray-500">Khôi phục ứng dụng về trạng thái ban đầu để tạo thẻ mới.</span>
                    </div>

                    <button
                      id="reset-progress-btn"
                      onClick={() => {
                        playClickSound();
                        const confirmReset = window.confirm("Em có chắc chắn muốn xóa hết điểm số và bắt đầu lại từ đầu không? 😢");
                        if (confirmReset) {
                          localStorage.clear();
                          playIncorrectSound();
                          alert("Đã đặt lại dữ liệu thành công! Hãy tải lại trang để đăng ký Thẻ Đội viên mới nhé.");
                          window.location.reload();
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-title text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                    >
                      🔥 ĐẶT LẠI HOÀN TOÀN
                    </button>
                  </div>
                </div>

                {/* About credits section */}
                <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-500 space-y-1.5 bg-gray-50/50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-700 text-sm">Nguyễn Vũ Hùng</p>
                  <p className="font-semibold text-emerald-600">Giáo viên làm Tổng phụ trách Đội</p>
                  <p className="font-medium text-gray-400">Trường tiểu học Hà Huy Tập - Phường Gia Định - Thành phố Hồ Chí Minh</p>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* --- BOTTOM FOOTER COPRYIGHT --- */}
      <footer className="w-full text-center py-4 text-[10px] text-gray-400 font-medium z-30">
        © 2026 Kỹ năng Đội HHTer. Giáo án huấn luyện chuẩn chỉnh • Thiết kế Pixar 3D sinh động ⛺️
      </footer>
    </div>
  );
}
