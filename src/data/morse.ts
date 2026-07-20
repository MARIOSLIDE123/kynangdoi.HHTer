import { MorseItem } from '../types';

export const MORSE_GROUPS = [
  {
    id: 1,
    title: "Nhóm 1: Nhóm đối xứng (Chỉ dùng Chấm hoặc Chỉ dùng Gạch)",
    description: "Các chữ gồm hoàn toàn dấu chấm (•) hoặc hoàn toàn dấu gạch (—). Rất dễ nhớ!",
    items: [
      { char: "E", code: ".", group: 1, mnemonic: "Em (1 chấm)" },
      { char: "I", code: "..", group: 1, mnemonic: "Hai (2 chấm)" },
      { char: "S", code: "...", group: 1, mnemonic: "Sa (3 chấm)" },
      { char: "H", code: "....", group: 1, mnemonic: "Học (4 chấm)" },
      { char: "T", code: "-", group: 1, mnemonic: "Tôi (1 gạch)" },
      { char: "M", code: "--", group: 1, mnemonic: "Mơ (2 gạch)" },
      { char: "O", code: "---", group: 1, mnemonic: "Ó (3 gạch)" },
      { char: "CH", code: "----", group: 1, mnemonic: "Chờ (4 gạch)" },
    ]
  },
  {
    id: 2,
    title: "Nhóm 2: Nhóm đảo ngược (A-N, U-D, V-B)",
    description: "Các cặp chữ đối nghịch nhau tuyệt đối về cấu trúc chấm gạch.",
    items: [
      { char: "A", code: ".-", group: 2, mnemonic: "Anh (Chấm Gạch) - Ngược của N" },
      { char: "N", code: "-.", group: 2, mnemonic: "Nam (Gạch Chấm) - Ngược của A" },
      { char: "U", code: "..-", group: 2, mnemonic: "U (Chấm Chấm Gạch) - Ngược của D" },
      { char: "D", code: "-..", group: 2, mnemonic: "Dê (Gạch Chấm Chấm) - Ngược của U" },
      { char: "V", code: "...-", group: 2, mnemonic: "Vẽ (3 Chấm 1 Gạch) - Ngược của B" },
      { char: "B", code: "-...", group: 2, mnemonic: "Bò (1 Gạch 3 Chấm) - Ngược của V" },
    ]
  },
  {
    id: 3,
    title: "Nhóm 3: Nhóm đảo ngược phức tạp (R-K, L-Y, F-Q)",
    description: "Các chữ đối nghịch hoặc tương quan cấu trúc tương đối thú vị.",
    items: [
      { char: "R", code: ".-.", group: 3, mnemonic: "Rổ (Chấm Gạch Chấm) - Gánh nước" },
      { char: "K", code: "-.-", group: 3, mnemonic: "Kem (Gạch Chấm Gạch) - Ngược của R" },
      { char: "L", code: ".-..", group: 3, mnemonic: "Lê (Chấm Gạch Chấm Chấm)" },
      { char: "Y", code: "-.--", group: 3, mnemonic: "Yêu (Gạch Chấm Gạch Gạch) - Ngược của L" },
      { char: "F", code: "..-.", group: 3, mnemonic: "Phở (Chấm Chấm Gạch Chấm)" },
      { char: "Q", code: "--.-", group: 3, mnemonic: "Quả (Gạch Gạch Chấm Gạch) - Ngược của F" },
    ]
  },
  {
    id: 4,
    title: "Nhóm 4: Nhóm đồng âm, mở rộng (W-G, P-X)",
    description: "Nhóm chữ có quy luật gộp hoặc đảo ngược khác biệt.",
    items: [
      { char: "W", code: ".--", group: 4, mnemonic: "Vui (Chấm Gạch Gạch) - Ngược của G" },
      { char: "G", code: "--.", group: 4, mnemonic: "Gà (Gạch Gạch Chấm) - Ngược của W" },
      { char: "P", code: ".--.", group: 4, mnemonic: "Pháp (Chấm Gạch Gạch Chấm) - Kẹp giữa" },
      { char: "X", code: "-..-", group: 4, mnemonic: "Xe (Gạch Chấm Chấm Gạch) - Ngược của P" },
    ]
  },
  {
    id: 5,
    title: "Nhóm 5: Nhóm chữ còn lại (C, J, Z)",
    description: "Các chữ cuối cùng cần ghi nhớ mẹo riêng lẻ.",
    items: [
      { char: "C", code: "-.-.", group: 5, mnemonic: "Cá (Gạch Chấm Gạch Chấm)" },
      { char: "J", code: ".---", group: 5, mnemonic: "Gió (Chấm 3 Gạch)" },
      { char: "Z", code: "--..", group: 5, mnemonic: "Zê (2 Gạch 2 Chấm)" },
    ]
  }
];

export const MORSE_TIMELINE = [
  {
    year: "1836",
    title: "Phát minh",
    description: "Samuel Morse phát minh ra máy điện báo và phác thảo hệ thống ký hiệu chấm gạch đầu tiên."
  },
  {
    year: "1844",
    title: "Bản tin đầu tiên",
    description: "Bản tin chính thức đầu tiên được gửi đi: 'What hath God wrought' giữa Washington và Baltimore."
  },
  {
    year: "1865",
    title: "Morse Quốc tế",
    description: "Đại hội Điện báo Quốc tế chuẩn hóa bảng Morse thành mã Morse Quốc tế dùng đến ngày nay."
  },
  {
    year: "1912",
    title: "Sự kiện Titanic",
    description: "Tín hiệu SOS (• • • — — — • • •) được sử dụng rộng rãi và cứu sống hơn 700 hành khách."
  },
  {
    year: "Hiện nay",
    title: "Kỹ năng sinh tồn & Sinh hoạt Đội",
    description: "Morse là kỹ năng truyền tin thiết yếu trong hoạt động dã ngoại, cứu hộ, huấn luyện Đội."
  }
];

export const MORSE_PRINCIPLES = {
  elements: [
    { name: "Chấm (Dot)", symbol: "•", duration: "1 đơn vị thời gian", desc: "Tiếng còi ngắn, dứt khoát (Tích)." },
    { name: "Gạch (Dash)", symbol: "—", duration: "3 đơn vị thời gian", desc: "Tiếng còi dài, ngân vang (Tè)." },
    { name: "Cách trong chữ", symbol: "Khoảng lặng", duration: "1 đơn vị thời gian", desc: "Giữa các chấm và gạch trong cùng một chữ cái." },
    { name: "Cách giữa chữ", symbol: "Khoảng lặng", duration: "3 đơn vị thời gian", desc: "Giữa các chữ cái trong một từ." },
    { name: "Cách giữa từ", symbol: "Khoảng lặng / dấu gạch chéo", duration: "7 đơn vị thời gian", desc: "Giữa các từ khác nhau." }
  ],
  sosExample: {
    text: "S O S",
    code: "... --- ...",
    vietnamese: "Tích Tích Tích - Tè Tè Tè - Tích Tích Tích"
  }
};

export const MORSE_TOWER = {
  description: "Tháp Morse giúp học viên học nhẩm bằng cách đi theo nhánh: Rẽ TRÁI khi nghe Chấm (•) và rẽ PHẢI khi nghe Gạch (—).",
  layers: [
    { level: 0, label: "Gốc bắt đầu", items: [{ char: "BẮT ĐẦU", code: "" }] },
    { level: 1, label: "Nhánh 1 ký tự (• Trái / — Phải)", items: [{ char: "E", code: "." }, { char: "T", code: "-" }] },
    { level: 2, label: "Nhánh 2 ký tự", items: [{ char: "I", code: ".." }, { char: "A", code: ".-" }, { char: "N", code: "-." }, { char: "M", code: "--" }] },
    { level: 3, label: "Nhánh 3 ký tự", items: [
      { char: "S", code: "..." }, { char: "U", code: "..-" }, { char: "R", code: ".-." }, { char: "W", code: ".--" },
      { char: "D", code: "-.." }, { char: "K", code: "-.-" }, { char: "G", code: "--." }, { char: "O", code: "---" }
    ] },
    { level: 4, label: "Nhánh 4 ký tự", items: [
      { char: "H", code: "...." }, { char: "V", code: "...-" }, { char: "F", code: "..-." }, { char: "L", code: ".-.." },
      { char: "P", code: ".--." }, { char: "J", code: ".---" }, { char: "B", code: "-..." }, { char: "X", code: "-..-" },
      { char: "C", code: "-.-." }, { char: "Y", code: "-.--" }, { char: "Z", code: "--.." }, { char: "Q", code: "--.-" }
    ] }
  ]
};
