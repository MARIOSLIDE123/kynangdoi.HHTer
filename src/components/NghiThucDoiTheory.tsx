import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { NGHI_THUC_REFERENCES, NghiThucRefArticle } from '../data/nghiThucDoi';
import { playClickSound } from '../utils/audio';

export default function NghiThucDoiTheory() {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 rounded-[35px] p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border-4 border-white">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-wide uppercase border border-white/30">
            <BookOpen className="w-4 h-4 text-yellow-300" />
            <span>SỔ TAY CÔNG TÁC ĐỘI</span>
          </div>
          <h2 className="font-title text-2xl md:text-3xl font-black tracking-tight drop-shadow-md">
            CÁC TÀI LIỆU THAM KHẢO VỀ NGHI THỨC
          </h2>
          <p className="text-xs md:text-sm text-emerald-100 max-w-2xl font-medium leading-relaxed">
            Nhấp vào từng ô bên dưới để chuyển sang đọc bài viết hướng dẫn chi tiết chuẩn Nghi thức Đội TNTP Hồ Chí Minh trên báo Mực Tím (Tuổi Trẻ).
          </p>
        </div>
      </div>

      {/* Grid of 8 Reference Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
        {NGHI_THUC_REFERENCES.map((item: NghiThucRefArticle, idx: number) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => playClickSound()}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-5 md:p-6 border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group relative overflow-hidden block no-underline"
          >
            {/* Top Tag & Icon */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {item.category}
                </span>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.bgGradient} text-white flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-title text-base md:text-lg font-black text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                {item.title}
              </h3>

              {/* Short Description */}
              <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4">
                {item.shortDesc}
              </p>
            </div>

            {/* Link Button */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-black text-emerald-600 group-hover:text-emerald-700 flex items-center gap-1.5">
                <span>ĐỌC BÀI VIẾT TÀI LIỆU</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[10px] text-gray-400 font-bold group-hover:underline">
                muctim.tuoitre.vn ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
