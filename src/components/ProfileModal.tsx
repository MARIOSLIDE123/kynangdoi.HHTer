import React, { useState } from 'react';
import { UserProfile } from '../types';
import { playClickSound, playLevelUpSound } from '../utils/audio';

const AVAILABLE_AVATARS = [
  { id: 'cadet_boy', name: 'Đội viên Nam', emoji: '🧑‍✈️', bg: 'bg-blue-100' },
  { id: 'cadet_girl', name: 'Đội viên Nữ', emoji: '👧', bg: 'bg-pink-100' },
  { id: 'panda', name: 'Gấu Trúc ngoan', emoji: '🐼', bg: 'bg-gray-100' },
  { id: 'puppy', name: 'Cún con chăm chỉ', emoji: '🐶', bg: 'bg-amber-100' },
  { id: 'cat', name: 'Mèo con nhanh nhẹn', emoji: '🐱', bg: 'bg-orange-100' }
];

interface ProfileModalProps {
  isOpen: boolean;
  onSave: (profile: UserProfile) => void;
}

export default function ProfileModal({ isOpen, onSave }: ProfileModalProps) {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [school, setSchool] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('cadet_boy');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !className.trim() || !school.trim()) {
      setError('Em hãy điền đầy đủ thông tin nha!');
      return;
    }

    const defaultProfile: UserProfile = {
      name: name.trim(),
      className: className.trim(),
      school: school.trim(),
      avatar: selectedAvatar,
      score: 0,
      level: 1,
      exp: 0,
      streak: 1,
      badges: ['beginner'], // Starting badge
      completedLessons: [],
      completedQuizzes: 0,
      totalQuestionsAnswered: 0,
      correctAnswersCount: 0,
      lastActiveDate: new Date().toISOString().split('T')[0],
      history: [
        {
          date: new Date().toLocaleDateString('vi-VN'),
          score: 0,
          activity: 'Đăng ký tài khoản thành công! 🎉'
        }
      ]
    };

    playLevelUpSound();
    onSave(defaultProfile);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gradient-to-br from-[#ffffff] to-[#eef8ff] rounded-[40px] border-4 border-[#8eb859] shadow-2xl p-8 max-w-lg w-full transform scale-100 transition-all relative">
        {/* Mascot decoration mini badge */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#8eb859] px-6 py-2 rounded-full border-4 border-white shadow-lg">
          <span className="font-title text-xl text-white font-bold whitespace-nowrap">👤 ĐĂNG KÝ ĐỘI VIÊN</span>
        </div>

        <div className="mt-4 text-center">
          <h2 className="font-title text-3xl text-[#2c3e50] font-bold">Chào mừng em đến với <span className="whitespace-nowrap">ứng dụng!</span></h2>
          <p className="text-sm text-[#57606f] mt-1">Hãy tạo một <span className="whitespace-nowrap">thẻ Đội viên</span> siêu ngầu để <span className="whitespace-nowrap">bắt đầu</span> <span className="whitespace-nowrap">học tập</span> nhé!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Avatar selector */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2c3e50] block text-center">Em hãy chọn hình <span className="whitespace-nowrap">đại diện:</span></label>
            <div className="flex justify-center gap-3">
              {AVAILABLE_AVATARS.map((av) => (
                <button
                  key={av.id}
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setSelectedAvatar(av.id);
                  }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border-4 transition-all relative ${av.bg} ${
                    selectedAvatar === av.id ? 'border-[#8eb859] scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={av.name}
                >
                  {av.emoji}
                  {selectedAvatar === av.id && (
                    <span className="absolute -bottom-2 -right-2 bg-[#8eb859] text-white text-[10px] px-1 rounded-full border border-white">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="text-center text-xs text-[#8eb859] font-bold">
              {AVAILABLE_AVATARS.find(av => av.id === selectedAvatar)?.name}
            </div>
          </div>

          {/* Form fields */}
          <div className="space-y-3">
            <div>
              <label htmlFor="name-input" className="text-sm font-bold text-[#2c3e50] block mb-1"><span className="whitespace-nowrap">Họ và tên</span> của em:</label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Ví dụ: Nguyễn Văn An"
                className="w-full px-5 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#8eb859] outline-none text-[#2c3e50] font-medium transition-all text-base bg-white/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="class-input" className="text-sm font-bold text-[#2c3e50] block mb-1">Lớp của <span className="whitespace-nowrap">em:</span></label>
                <input
                  id="class-input"
                  type="text"
                  value={className}
                  onChange={(e) => {
                    setClassName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Ví dụ: Lớp 4A"
                  className="w-full px-5 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#8eb859] outline-none text-[#2c3e50] font-medium transition-all text-base bg-white/50"
                />
              </div>

              <div>
                <label htmlFor="school-input" className="text-sm font-bold text-[#2c3e50] block mb-1">Trường học:</label>
                <input
                  id="school-input"
                  type="text"
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Ví dụ: Tiểu học Nguyễn Huệ"
                  className="w-full px-5 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#8eb859] outline-none text-[#2c3e50] font-medium transition-all text-base bg-white/50"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-center text-red-500 font-bold text-xs">{error}</p>}

          <button
            id="register-submit-btn"
            type="submit"
            className="w-full bg-[#8eb859] hover:bg-[#7ca446] active:translate-y-1 text-white font-title text-xl py-4 rounded-2xl shadow-lg border-b-4 border-[#658735] transition-all"
          >
            🚀 SẴN SÀNG LÊN ĐƯỜNG!
          </button>
        </form>
      </div>
    </div>
  );
}
