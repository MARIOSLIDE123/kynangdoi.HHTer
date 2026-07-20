import { Question, PracticeExercise } from '../types';

// 100 CHALLENGE QUESTIONS BANK
export const QUIZ_QUESTIONS: Question[] = [
  // --- MORSE QUESTIONS (35 Questions) ---
  {
    id: "m1",
    category: "morse",
    difficulty: "easy",
    questionText: "Ký hiệu ngắn '•' trong mã Morse được gọi là gì?",
    options: ["Tè", "Tích", "Còi dài", "Ngắt quãng"],
    correctIndex: 1,
    explanation: "Dấu chấm '•' đại diện cho âm thanh ngắn, dứt khoát và được gọi là 'Tích' trong tiếng Việt.",
    visualType: "morse",
    visualValue: "."
  },
  {
    id: "m2",
    category: "morse",
    difficulty: "easy",
    questionText: "Ký hiệu dài '—' trong mã Morse được gọi là gì?",
    options: ["Tè", "Tích", "Còi ngắn", "Tách"],
    correctIndex: 0,
    explanation: "Dấu gạch '—' đại diện cho âm thanh dài, ngân vang gấp 3 lần dấu chấm và được gọi là 'Tè'.",
    visualType: "morse",
    visualValue: "-"
  },
  {
    id: "m3",
    category: "morse",
    difficulty: "easy",
    questionText: "Chữ cái nào được cấu tạo chỉ bằng duy nhất một dấu Tích '•'?",
    options: ["T", "I", "E", "A"],
    correctIndex: 2,
    explanation: "Chữ E là chữ cái đơn giản nhất, ký hiệu là '•'.",
    visualType: "morse",
    visualValue: "."
  },
  {
    id: "m4",
    category: "morse",
    difficulty: "easy",
    questionText: "Chữ cái nào được cấu tạo chỉ bằng duy nhất một dấu Tè '—'?",
    options: ["E", "M", "T", "O"],
    correctIndex: 2,
    explanation: "Chữ T là chữ cái được cấu tạo bằng duy nhất một dấu gạch ngang '—'.",
    visualType: "morse",
    visualValue: "-"
  },
  {
    id: "m5",
    category: "morse",
    difficulty: "easy",
    questionText: "Tín hiệu khẩn cấp SOS có mã Morse là gì?",
    options: ["... --- ...", "--- ... ---", "... ... ...", "--- --- ---"],
    correctIndex: 0,
    explanation: "SOS được ký hiệu là ba chấm, ba gạch, ba chấm (... --- ...), dễ phát và dễ nhận biết nhất.",
    visualType: "morse",
    visualValue: "... --- ..."
  },
  {
    id: "m6",
    category: "morse",
    difficulty: "easy",
    questionText: "Ai là người phát minh ra mã Morse đầu tiên?",
    options: ["Thomas Edison", "Samuel Morse", "Alexander Bell", "Albert Einstein"],
    correctIndex: 1,
    explanation: "Samuel Finley Breese Morse (người Mỹ) đã phát minh ra máy điện báo và mã Morse vào khoảng năm 1836.",
    visualType: "none"
  },
  {
    id: "m7",
    category: "morse",
    difficulty: "easy",
    questionText: "Độ dài của một dấu Tè '—' tương đương với mấy dấu Tích '•'?",
    options: ["2 dấu Tích", "3 dấu Tích", "4 dấu Tích", "5 dấu Tích"],
    correctIndex: 1,
    explanation: "Theo quy chuẩn quốc tế, một tiếng gạch dài (Tè) dài bằng chính xác 3 tiếng chấm ngắn (Tích).",
    visualType: "none"
  },
  {
    id: "m8",
    category: "morse",
    difficulty: "easy",
    questionText: "Khoảng cách giữa hai từ khác nhau trong văn bản Morse tương đương mấy đơn vị Tích?",
    options: ["3 đơn vị", "5 đơn vị", "7 đơn vị", "10 đơn vị"],
    correctIndex: 2,
    explanation: "Giữa các từ trong mã Morse được ngăn cách bằng khoảng lặng dài bằng 7 đơn vị thời gian Tích.",
    visualType: "none"
  },
  {
    id: "m9",
    category: "morse",
    difficulty: "easy",
    questionText: "Mẹo nhớ chữ 'I' dã ngoại (gồm 2 chấm '..') là gì?",
    options: ["Tôi", "Hai", "Mơ", "Sa"],
    correctIndex: 1,
    explanation: "Chữ 'I' gồm 2 chấm được ghi nhớ bằng từ đồng âm 'Hai' (2 chấm).",
    visualType: "morse",
    visualValue: ".."
  },
  {
    id: "m10",
    category: "morse",
    difficulty: "easy",
    questionText: "Chữ cái nào trong Morse gồm 3 dấu chấm '...'?",
    options: ["H", "S", "I", "E"],
    correctIndex: 1,
    explanation: "Chữ S gồm 3 chấm '...', ghi nhớ bằng mẹo 'Sa' (Sa ngã ba chấm).",
    visualType: "morse",
    visualValue: "..."
  },
  {
    id: "m11",
    category: "morse",
    difficulty: "medium",
    questionText: "Chữ cái nào sau đây thuộc Nhóm 1 (Nhóm đối xứng)?",
    options: ["A", "D", "M", "R"],
    correctIndex: 2,
    explanation: "Chữ M gồm hai dấu gạch '--', thuộc nhóm 1 gồm hoàn toàn dấu đối xứng gạch.",
    visualType: "morse",
    visualValue: "--"
  },
  {
    id: "m12",
    category: "morse",
    difficulty: "medium",
    questionText: "Mã Morse của chữ cái 'A' là gì?",
    options: [".-", "-.", "..-", "-.."],
    correctIndex: 0,
    explanation: "Chữ A có mã Morse là Chấm Gạch (.-), ghi nhớ bằng từ 'Anh'.",
    visualType: "morse",
    visualValue: ".-"
  },
  {
    id: "m13",
    category: "morse",
    difficulty: "medium",
    questionText: "Mã Morse '-.' là chữ cái nào?",
    options: ["A", "N", "U", "D"],
    correctIndex: 1,
    explanation: "Mã '-.' (Gạch Chấm) là chữ N, ngược lại của chữ A (.-), ghi nhớ bằng từ 'Nam'.",
    visualType: "morse",
    visualValue: "-."
  },
  {
    id: "m14",
    category: "morse",
    difficulty: "medium",
    questionText: "Mẹo nhớ của chữ 'D' (-..) dã ngoại là gì?",
    options: ["Dê", "U", "Vẽ", "Bò"],
    correctIndex: 0,
    explanation: "Chữ D (-..) được ghi nhớ bằng mẹo âm 'Dê', ngược lại của chữ U (..-).",
    visualType: "morse",
    visualValue: "-.."
  },
  {
    id: "m15",
    category: "morse",
    difficulty: "medium",
    questionText: "Cặp chữ nào dưới đây đối nghịch nhau tuyệt đối (Nhóm đảo ngược)?",
    options: ["A và N", "E và T", "M và O", "H và V"],
    correctIndex: 0,
    explanation: "A (.-) và N (-.) đối nghịch đảo ngược nhau hoàn toàn về vị trí chấm gạch.",
    visualType: "none"
  },
  {
    id: "m16",
    category: "morse",
    difficulty: "medium",
    questionText: "Chữ cái nào sau đây thuộc Nhóm 3 (R-K, L-Y, F-Q)?",
    options: ["V", "C", "P", "R"],
    correctIndex: 3,
    explanation: "Chữ R (.-.) thuộc nhóm 3, đối nghịch đảo ngược của K (-.-).",
    visualType: "morse",
    visualValue: ".-."
  },
  {
    id: "m17",
    category: "morse",
    difficulty: "medium",
    questionText: "Chữ 'V' trong mã Morse được biểu diễn như thế nào?",
    options: ["...-", "-...", "..-.", ".--."],
    correctIndex: 0,
    explanation: "Chữ V gồm 3 chấm 1 gạch (...-), ghi nhớ bằng từ 'Vẽ', đối nghịch chữ B (-...).",
    visualType: "morse",
    visualValue: "...-"
  },
  {
    id: "m18",
    category: "morse",
    difficulty: "medium",
    questionText: "Mã Morse '.--' đại diện cho chữ cái nào?",
    options: ["G", "W", "P", "X"],
    correctIndex: 1,
    explanation: "Chữ W có mã Morse là '.--' (Chấm Gạch Gạch), ghi nhớ bằng chữ 'Vui'.",
    visualType: "morse",
    visualValue: ".--"
  },
  {
    id: "m19",
    category: "morse",
    difficulty: "medium",
    questionText: "Chữ cái nào được cấu tạo bằng cách 'Gánh nước' (Chấm Gạch Chấm)?",
    options: ["K", "R", "L", "F"],
    correctIndex: 1,
    explanation: "Chữ R được ký hiệu là '.-.' (Chấm Gạch Chấm), có cấu trúc kẹp giữa đối xứng như đòn gánh.",
    visualType: "morse",
    visualValue: ".-."
  },
  {
    id: "m20",
    category: "morse",
    difficulty: "medium",
    questionText: "Theo Tháp Morse, nếu đi từ Gốc, rẽ TRÁI (•) rồi rẽ PHẢI (—), ta sẽ đạt được chữ gì?",
    options: ["N", "I", "A", "T"],
    correctIndex: 2,
    explanation: "Từ Gốc rẽ Trái (Chấm) ra E, rồi rẽ Phải (Gạch) ra chữ A (.-).",
    visualType: "none"
  },
  {
    id: "m21",
    category: "morse",
    difficulty: "hard",
    questionText: "Chữ cái nào trong Morse có ký hiệu là '-.-.'?",
    options: ["C", "Z", "Y", "Q"],
    correctIndex: 0,
    explanation: "Chữ C có mã '-.-.' (Gạch Chấm Gạch Chấm), ghi nhớ bằng từ 'Cá'.",
    visualType: "morse",
    visualValue: "-.-."
  },
  {
    id: "m22",
    category: "morse",
    difficulty: "hard",
    questionText: "Mẹo nhớ của chữ 'CH' (4 gạch '----') trong Công tác Đội là gì?",
    options: ["Chờ", "Chạy", "Chiến", "Chơi"],
    correctIndex: 0,
    explanation: "Chữ CH gồm 4 dấu gạch liên tiếp '----' được ghi nhớ bằng từ 'Chờ' (Chờ đợi lâu dài).",
    visualType: "morse",
    visualValue: "----"
  },
  {
    id: "m23",
    category: "morse",
    difficulty: "hard",
    questionText: "Ký hiệu của số 1 trong mã Morse là gì?",
    options: [".----", "..---", "...--", "----."],
    correctIndex: 0,
    explanation: "Số 1 trong Morse gồm 1 chấm và 4 gạch liên tiếp (.----).",
    visualType: "morse",
    visualValue: ".----"
  },
  {
    id: "m24",
    category: "morse",
    difficulty: "hard",
    questionText: "Ký hiệu của số 5 trong mã Morse là gì?",
    options: [".....", "-----", ".....---", "---....."],
    correctIndex: 0,
    explanation: "Số 5 được biểu thị bằng 5 dấu chấm liên tiếp (.....).",
    visualType: "morse",
    visualValue: "....."
  },
  {
    id: "m25",
    category: "morse",
    difficulty: "hard",
    questionText: "Ký hiệu của số 0 trong mã Morse là gì?",
    options: [".....", "-----", ".-.-.", "-.-.-"],
    correctIndex: 1,
    explanation: "Số 0 được biểu thị bằng 5 dấu gạch dài liên tiếp (-----).",
    visualType: "morse",
    visualValue: "-----"
  },
  {
    id: "m26",
    category: "morse",
    difficulty: "hard",
    questionText: "Dịch từ mã Morse sau ra từ tiếng Việt: '-.-. .--. -..'?",
    options: ["C P D", "C W D", "C J B", "C K D"],
    correctIndex: 0,
    explanation: "'-.-.' = C; '.--.' = P; '-..' = D. Ghép lại được C P D.",
    visualType: "morse",
    visualValue: "-.-. .--. -.."
  },
  {
    id: "m27",
    category: "morse",
    difficulty: "hard",
    questionText: "Chữ cái nào sau đây thuộc tầng thứ 4 (4 ký tự) của Tháp Morse?",
    options: ["S", "O", "H", "W"],
    correctIndex: 2,
    explanation: "Chữ H gồm bốn chấm (....) nằm ở tầng thứ 4 của tháp Morse.",
    visualType: "morse",
    visualValue: "...."
  },
  {
    id: "m28",
    category: "morse",
    difficulty: "hard",
    questionText: "Mã Morse của chữ 'Q' là gì?",
    options: ["--.-", "..-.", ".--.", "-..-"],
    correctIndex: 0,
    explanation: "Chữ Q có mã Morse là '--.-' (Gạch Gạch Chấm Gạch), ngược lại với chữ F (..-.).",
    visualType: "morse",
    visualValue: "--.-"
  },
  {
    id: "m29",
    category: "morse",
    difficulty: "hard",
    questionText: "Ký hiệu '.-..' tương ứng với chữ cái nào?",
    options: ["Y", "L", "F", "P"],
    correctIndex: 1,
    explanation: "'.-..' là mã Morse của chữ L, ngược lại với chữ Y (-.--).",
    visualType: "morse",
    visualValue: ".-.."
  },
  {
    id: "m30",
    category: "morse",
    difficulty: "hard",
    questionText: "Khi gửi mã Morse, khoảng lặng giữa các dấu chấm và gạch trong CÙNG một chữ cái dài bao lâu?",
    options: ["1 đơn vị Tích", "2 đơn vị Tích", "3 đơn vị Tích", "Dứt khoát không có khoảng lặng"],
    correctIndex: 0,
    explanation: "Khoảng cách giữa các chấm và gạch trong cùng một chữ cái là chính xác bằng một đơn vị thời gian Tích.",
    visualType: "none"
  },
  {
    id: "m31",
    category: "morse",
    difficulty: "hard",
    questionText: "Chữ cái 'Z' có mã Morse là gì?",
    options: ["--..", "..--", "-.-.", ".-.-"],
    correctIndex: 0,
    explanation: "Chữ Z có mã Morse là '--..' (Gạch Gạch Chấm Chấm), ghi nhớ bằng mẹo 'Zê'.",
    visualType: "morse",
    visualValue: "--.."
  },
  {
    id: "m32",
    category: "morse",
    difficulty: "hard",
    questionText: "Mã Morse '.---' là chữ cái nào?",
    options: ["J", "C", "Q", "Y"],
    correctIndex: 0,
    explanation: "Chữ J có mã '.---' (Chấm 3 Gạch), ghi nhớ bằng từ 'Gió'.",
    visualType: "morse",
    visualValue: ".---"
  },
  {
    id: "m33",
    category: "morse",
    difficulty: "hard",
    questionText: "Trong bảng Morse, chữ cái 'G' có mã là gì?",
    options: ["--.", ".--", "-..", "..-"],
    correctIndex: 0,
    explanation: "Chữ G có mã '--.' (Gạch Gạch Chấm), đối nghịch chữ W (.--).",
    visualType: "morse",
    visualValue: "--."
  },
  {
    id: "m34",
    category: "morse",
    difficulty: "hard",
    questionText: "Dịch mã Morse sau sang chữ cái: '.--.-'?",
    options: ["Không có chữ này", "Đây là chữ cái mở rộng", "Chữ Á", "Chữ Đ"],
    correctIndex: 0,
    explanation: "Ký hiệu '.--.-' không tương ứng với chữ cái cơ bản nào trong bảng chữ cái quốc tế chuẩn.",
    visualType: "none"
  },
  {
    id: "m35",
    category: "morse",
    difficulty: "hard",
    questionText: "Whistle còi Morse gửi tín hiệu 'Tè Tè Tích Tích Tè' dịch ra số mấy?",
    options: ["7", "8", "3", "2"],
    correctIndex: 1,
    explanation: "'--..-' tương ứng với số 8 trong hệ thống chữ số Morse quốc tế (2 gạch 2 chấm 1 gạch).",
    visualType: "morse",
    visualValue: "---.."
  },

  // --- SEMAPHORE QUESTIONS (35 Questions) ---
  {
    id: "s1",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Kích thước chuẩn của mỗi lá cờ Semaphore dùng trong huấn luyện Đội viên là bao nhiêu?",
    options: ["30cm x 30cm", "40cm x 40cm", "50cm x 50cm", "60cm x 60cm"],
    correctIndex: 1,
    explanation: "Cờ Semaphore hình vuông kích thước 40cm x 40cm, chia chéo hai màu đỏ và vàng nổi bật.",
    visualType: "none"
  },
  {
    id: "s2",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Màu sắc của lá cờ Semaphore được chia chéo thành hai tam giác màu nào?",
    options: ["Xanh và Đỏ", "Đỏ và Vàng", "Đỏ và Trắng", "Vàng và Xanh lá"],
    correctIndex: 1,
    explanation: "Lá cờ Semaphore được chia chéo thành hai tam giác màu Đỏ và màu Vàng tươi.",
    visualType: "none"
  },
  {
    id: "s3",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Claude Chappe phát minh ra hệ thống truyền tin Semaphore đầu tiên ở quốc gia nào?",
    options: ["Anh", "Mỹ", "Pháp", "Đức"],
    correctIndex: 2,
    explanation: "Claude Chappe phát minh ra Semaphore vào năm 1792 tại nước Pháp cứu cánh liên lạc tầm xa.",
    visualType: "none"
  },
  {
    id: "s4",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Bảng chữ cái Semaphore tiếng Việt được chia thành tổng cộng bao nhiêu Vòng chữ cái?",
    options: ["5 vòng", "6 vòng", "7 vòng", "8 vòng"],
    correctIndex: 2,
    explanation: "Hệ thống Semaphore chuẩn chia bảng chữ cái làm 7 vòng dựa trên góc cố định cánh tay thứ nhất.",
    visualType: "none"
  },
  {
    id: "s5",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Trong Semaphore, chữ cái 'A' nằm ở vòng thứ mấy?",
    options: ["Vòng 1", "Vòng 2", "Vòng 3", "Vòng 4"],
    correctIndex: 0,
    explanation: "Chữ A nằm ở Vòng 1, là chữ đầu tiên với tay trái cố định ở hướng Nam.",
    visualType: "semaphore",
    visualValue: "A"
  },
  {
    id: "s6",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Khi đánh chữ cái 'A', tay TRÁI và tay PHẢI chỉ vào góc hướng nào?",
    options: ["Nam và Tây Nam", "Nam và Tây", "Nam và Bắc", "Đông và Tây"],
    correctIndex: 0,
    explanation: "Chữ A có tay trái hướng Nam (180°) và tay phải hướng Tây Nam (225°).",
    visualType: "semaphore",
    visualValue: "A"
  },
  {
    id: "s7",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Cán cờ Semaphore có chiều dài khoảng bao nhiêu?",
    options: ["30-40cm", "50-60cm", "70-80cm", "90-100cm"],
    correctIndex: 1,
    explanation: "Cán cờ Semaphore thường làm bằng gỗ tròn nhẹ dài khoảng 50 - 60cm để dễ cầm vẫy.",
    visualType: "none"
  },
  {
    id: "s8",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Trong Semaphore, vị trí cánh tay hướng thẳng lên trời (Bắc) tương ứng góc bao nhiêu độ?",
    options: ["0 độ", "90 độ", "180 độ", "270 độ"],
    correctIndex: 0,
    explanation: "Hướng Bắc thẳng đứng lên trời quy ước là 0 độ (hoặc 360 độ).",
    visualType: "none"
  },
  {
    id: "s9",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Chữ cái 'D' thuộc Vòng 1 có hướng cờ chỉ như thế nào?",
    options: ["Nam và Bắc", "Nam và Tây Bắc", "Tây và Đông", "Tây Bắc và Đông Nam"],
    correctIndex: 0,
    explanation: "Chữ D có tay trái cố định hướng Nam (180°) và tay phải chỉ thẳng đứng hướng Bắc (0°).",
    visualType: "semaphore",
    visualValue: "D"
  },
  {
    id: "s10",
    category: "semaphore",
    difficulty: "easy",
    questionText: "Góc quay giữa mỗi vị trí cờ Semaphore chuẩn kề nhau là bao nhiêu độ?",
    options: ["30 độ", "45 độ", "60 độ", "90 độ"],
    correctIndex: 1,
    explanation: "8 vị trí cờ chia đều đường tròn 360 độ, mỗi vị trí cách nhau góc đúng 45 độ.",
    visualType: "none"
  },
  {
    id: "s11",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Ở Vòng 1, cánh tay TRÁI được giữ cố định ở hướng nào?",
    options: ["Hướng Bắc (0°)", "Hướng Nam (180°)", "Hướng Đông (90°)", "Hướng Tây (270°)"],
    correctIndex: 1,
    explanation: "Ở vòng 1 (từ A đến G), tay trái cố định chỉ thẳng xuống hướng Nam (180°).",
    visualType: "none"
  },
  {
    id: "s12",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Trong Vòng 2, cánh tay TRÁI được giữ cố định hướng nào?",
    options: ["Tây Nam (225°)", "Tây Bắc (315°)", "Đông Nam (135°)", "Đông Bắc (45°)"],
    correctIndex: 0,
    explanation: "Ở vòng 2 (từ H đến N), tay trái cố định chỉ xéo xuống hướng Tây Nam (225°).",
    visualType: "none"
  },
  {
    id: "s13",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Chữ cái nào sau đây thuộc Vòng 2 của Semaphore?",
    options: ["C", "H", "O", "T"],
    correctIndex: 1,
    explanation: "Chữ H là chữ khởi đầu của Vòng 2, vị trí tay trái Tây Nam và tay phải Tây.",
    visualType: "semaphore",
    visualValue: "H"
  },
  {
    id: "s14",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Chữ cái 'K' nằm ở Vòng mấy?",
    options: ["Vòng 1", "Vòng 2", "Vòng 3", "Vòng 4"],
    correctIndex: 1,
    explanation: "Chữ K thuộc Vòng 2, vị trí tay trái chỉ Tây Nam (225°) và tay phải chỉ hướng Bắc (0°).",
    visualType: "semaphore",
    visualValue: "K"
  },
  {
    id: "s15",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Khi hai cánh tay tạo thành góc thẳng 180 độ cắt chéo giữa hướng Tây Bắc và Đông Nam, đó là tín hiệu gì?",
    options: ["Chữ Z", "Lỗi / Sửa lỗi", "Chữ J", "Báo Số"],
    correctIndex: 1,
    explanation: "Tín hiệu Sửa Lỗi (Annul) thuộc Vòng 4 có góc cờ Tây Bắc (315°) và Đông Nam (135°).",
    visualType: "semaphore",
    visualValue: "SỬA LỖI"
  },
  {
    id: "s16",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Chữ cái nào thuộc Vòng 3 của Semaphore?",
    options: ["P", "U", "V", "W"],
    correctIndex: 0,
    explanation: "Chữ P thuộc Vòng 3 (tay trái chỉ Tây 270° và tay phải chỉ thẳng Bắc 0°).",
    visualType: "semaphore",
    visualValue: "P"
  },
  {
    id: "s17",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Khi tay TRÁI chỉ Tây Bắc (315°) và tay PHẢI chỉ Đông Bắc (45°), đó là chữ gì?",
    options: ["T", "U", "Y", "V"],
    correctIndex: 1,
    explanation: "Chữ U thuộc Vòng 4 có tay trái Tây Bắc và tay phải Đông Bắc.",
    visualType: "semaphore",
    visualValue: "U"
  },
  {
    id: "s18",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Cánh tay chỉ hướng Tây Bắc ứng với góc bao nhiêu độ trên đồng hồ góc?",
    options: ["135 độ", "225 độ", "270 độ", "315 độ"],
    correctIndex: 3,
    explanation: "Tây Bắc nằm giữa Tây (270°) và Bắc (0°/360°), ứng với góc 315 độ.",
    visualType: "none"
  },
  {
    id: "s19",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Chữ 'J' nằm ở vị trí đặc biệt nào ở Vòng 5?",
    options: ["Bắc và Đông (0° và 90°)", "Bắc và Tây (0° và 270°)", "Nam và Đông", "Tây và Đông"],
    correctIndex: 0,
    explanation: "Chữ J thuộc Vòng 5, có tay trái hướng Bắc (0°) và tay phải hướng Đông (90°).",
    visualType: "semaphore",
    visualValue: "J"
  },
  {
    id: "s20",
    category: "semaphore",
    difficulty: "medium",
    questionText: "Khi phát tín hiệu báo trước sắp gửi số (Numerical Sign), tư thế cờ là gì?",
    options: ["Tây Bắc và Đông Nam", "Bắc và Đông Bắc", "Đông và Tây", "Nam và Tây Nam"],
    correctIndex: 1,
    explanation: "Tín hiệu Báo Số có tư thế tay trái Bắc (0°) và tay phải Đông Bắc (45°).",
    visualType: "semaphore",
    visualValue: "BÁO SỐ"
  },
  {
    id: "s21",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ cái 'Z' nằm ở Vòng mấy?",
    options: ["Vòng 4", "Vòng 5", "Vòng 6", "Vòng 7"],
    correctIndex: 3,
    explanation: "Chữ Z là chữ cái duy nhất thuộc Vòng 7 với tay trái chỉ Đông (90°) và tay phải chỉ Đông Nam (135°).",
    visualType: "semaphore",
    visualValue: "Z"
  },
  {
    id: "s22",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Nếu nhìn thẳng người phát tin, chữ cái nào tạo góc cờ cân đối đối xứng qua trục dọc?",
    options: ["D và H", "C và E", "U và P", "B và F"],
    correctIndex: 1,
    explanation: "Chữ C (180° và 315° - Tây Bắc) và chữ E (180° và 45° - Đông Bắc) đối xứng nhau hoàn hảo qua trục dọc.",
    visualType: "none"
  },
  {
    id: "s23",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ cái 'W' thuộc Vòng mấy và có các hướng góc nào?",
    options: ["Vòng 6, Đông Bắc và Đông", "Vòng 5, Bắc và Đông", "Vòng 6, Đông Bắc và Đông Nam", "Vòng 7, Đông và Đông Nam"],
    correctIndex: 0,
    explanation: "Chữ W thuộc Vòng 6, tay trái chỉ hướng Đông Bắc (45°) và tay phải hướng Đông (90°).",
    visualType: "semaphore",
    visualValue: "W"
  },
  {
    id: "s24",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ cái 'X' có vị trí cờ hướng tay nào?",
    options: ["Đông Bắc và Đông Nam", "Đông Bắc và Đông", "Bắc và Đông Nam", "Tây Bắc và Tây Nam"],
    correctIndex: 0,
    explanation: "Chữ X thuộc Vòng 6, có vị trí tay trái Đông Bắc (45°) và tay phải Đông Nam (135°).",
    visualType: "semaphore",
    visualValue: "X"
  },
  {
    id: "s25",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Trong Semaphore, từ 'MẸ' được truyền tin cần đánh các chữ cái nào theo chuẩn quốc tế?",
    options: ["M - E - Dấu nặng", "M - E - E", "M - E - J", "M - E - S"],
    correctIndex: 2,
    explanation: "Trong bảng mã Semaphore không có dấu mũ tiếng Việt, chữ MẸ được viết Telex là M - E - J (chữ J thay cho dấu nặng).",
    visualType: "none"
  },
  {
    id: "s26",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Để phát tin chữ cái 'Đ' trong Semaphore tiếng Việt Telex, ta phát hai chữ cái nào liên tiếp?",
    options: ["D và D", "D và E", "D và O", "D và R"],
    correctIndex: 0,
    explanation: "Để biểu diễn chữ Đ, theo chuẩn Telex ta phát hai chữ D liên tiếp (D và D).",
    visualType: "none"
  },
  {
    id: "s27",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Người nhận tin nhìn người phát tin thấy cánh tay chỉ xéo lên bên tay trái họ là hướng gì?",
    options: ["Tây Bắc", "Đông Bắc", "Tây Nam", "Đông Nam"],
    correctIndex: 1,
    explanation: "Do đối diện người nhận, bên trái của người nhận chính là bên phải của người phát, tương ứng hướng Đông Bắc.",
    visualType: "none"
  },
  {
    id: "s28",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ cái 'Y' có vị trí góc cờ như thế nào?",
    options: ["Tây Bắc và Đông", "Tây Bắc và Bắc", "Tây Bắc và Đông Bắc", "Tây và Đông"],
    correctIndex: 0,
    explanation: "Chữ Y thuộc Vòng 4, tay trái chỉ Tây Bắc (315°) và tay phải chỉ hướng Đông (90°).",
    visualType: "semaphore",
    visualValue: "Y"
  },
  {
    id: "s29",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ cái nào sau đây KHÔNG có trong Vòng 3?",
    options: ["O", "P", "Q", "T"],
    correctIndex: 3,
    explanation: "Chữ T thuộc Vòng 4 (tay trái Tây Bắc 315°), không thuộc Vòng 3.",
    visualType: "semaphore",
    visualValue: "T"
  },
  {
    id: "s30",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Khi kết thúc một từ để chuyển sang từ tiếp theo, người phát tin Semaphore làm động tác gì?",
    options: ["Hai tay chéo cờ hướng Nam", "Giơ hai cờ thẳng đứng lên trời", "Quay tròn hai lá cờ", "Đánh chữ Sửa Lỗi"],
    correctIndex: 0,
    explanation: "Để ngăn cách từ, người phát tin đưa cả hai cờ về tư thế nghỉ chéo hướng Nam (vị trí nghỉ ngắt chữ).",
    visualType: "none"
  },
  {
    id: "s31",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ cái 'V' có góc tay cố định tay trái hướng Bắc. Tay phải hướng nào?",
    options: ["Đông Nam (135°)", "Đông (90°)", "Đông Bắc (45°)", "Nam (180°)"],
    correctIndex: 0,
    explanation: "Chữ V thuộc Vòng 5, tay trái Bắc (0°) và tay phải Đông Nam (135°).",
    visualType: "semaphore",
    visualValue: "V"
  },
  {
    id: "s32",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Ở tư thế nghỉ (chưa phát tin), người phát tin cầm hai cờ chéo góc bao nhiêu dưới chân?",
    options: ["Hai cờ chéo nhau hướng xuống đất dạng chữ X", "Hai cờ ôm sát hông", "Hai cờ giơ ngang ngực", "Hai cờ đặt song song hướng thẳng"],
    correctIndex: 0,
    explanation: "Tư thế nghỉ là chéo hai cờ tạo hình chữ X trước bụng hướng xuống chân để tránh che chắn tầm nhìn.",
    visualType: "none"
  },
  {
    id: "s33",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Trong Semaphore, chữ cái nào có góc cờ trùng hướng với chữ cái 'O' nhưng ngược vị trí tay?",
    options: ["Không trùng chữ nào", "Chữ I", "Chữ K", "Chữ H"],
    correctIndex: 0,
    explanation: "Mỗi chữ cái Semaphore đều có một bộ góc duy nhất phân biệt rõ ràng.",
    visualType: "none"
  },
  {
    id: "s34",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Chữ 'O' thuộc Vòng 3 có các góc cờ nào?",
    options: ["Tây và Tây Bắc (270° và 315°)", "Tây và Đông Bắc", "Tây và Bắc", "Tây và Tây Nam"],
    correctIndex: 0,
    explanation: "Chữ O thuộc Vòng 3, có tay trái hướng Tây (270°) và tay phải hướng Tây Bắc (315°).",
    visualType: "semaphore",
    visualValue: "O"
  },
  {
    id: "s35",
    category: "semaphore",
    difficulty: "hard",
    questionText: "Từ 'DI' (đi) đánh Telex trong Semaphore là gì?",
    options: ["D - I", "D - D - I", "D - I - J", "D - D - I - I"],
    correctIndex: 0,
    explanation: "Từ DI không có dấu tiếng Việt đặc biệt nên đánh đơn giản là D - I.",
    visualType: "none"
  },

  // --- DẤU ĐƯỜNG QUESTIONS (30 Questions) ---
  {
    id: "d1",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Dấu đường (Trail Signs) có vai trò chính là gì trong các hoạt động Đội?",
    options: ["Trang trí lều trại", "Định hướng và chỉ dẫn đường đi dã ngoại", "Báo điểm số thi đấu", "Để làm tín hiệu cấp cứu trên biển"],
    correctIndex: 1,
    explanation: "Dấu đường dùng để vẽ/xếp trên hành trình dã ngoại, giúp các tiểu đội đi đúng đường và tránh nguy hiểm.",
    visualType: "none"
  },
  {
    id: "d2",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Ký hiệu hình mũi tên thẳng có ý nghĩa gì?",
    options: ["Dừng lại", "Đi theo hướng này", "Đã đi sai đường", "Có nguy hiểm"],
    correctIndex: 1,
    explanation: "Mũi tên thẳng báo hiệu hãy tiếp tục đi theo hướng chỉ của đầu mũi tên.",
    visualType: "dau_duong",
    visualValue: "theo_huong_nay"
  },
  {
    id: "d3",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Dấu đường hình chữ 'X' lớn báo hiệu điều gì?",
    options: ["An toàn", "Đã đi sai đường", "Có nguồn nước", "Đang rẽ trái"],
    correctIndex: 1,
    explanation: "Dấu chữ X báo hiệu 'Sai đường' hoặc 'Cấm đi vào', yêu cầu đội viên lập tức quay lại.",
    visualType: "dau_duong",
    visualValue: "sai_duong"
  },
  {
    id: "d4",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Hình vẽ một hình tam giác có chứa dấu chấm cảm (!) ở giữa báo hiệu điều gì?",
    options: ["Nước uống được", "Nguy hiểm phía trước", "Bình an an toàn", "Về nhà giải tán"],
    correctIndex: 1,
    explanation: "Hình tam giác có dấu chấm cảm báo hiệu 'Nguy hiểm phía trước', cần hết sức cảnh giác.",
    visualType: "dau_duong",
    visualValue: "nguy_hiem"
  },
  {
    id: "d5",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Có bao nhiêu dấu đường chuẩn được giới thiệu trong tài liệu Đội viên?",
    options: ["12 dấu", "24 dấu", "32 dấu", "40 dấu"],
    correctIndex: 2,
    explanation: "Trong huấn luyện Đội viên có tất cả 32 dấu đường cơ bản.",
    visualType: "none"
  },
  {
    id: "d6",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Khi thấy dấu đường hình túp lều chữ A, điều đó báo hiệu gì?",
    options: ["Đất trại ở hướng này", "Có thú dữ", "Gặp nhau lúc 12h", "Cầu bị gãy"],
    correctIndex: 0,
    explanation: "Hình túp lều chữ A báo hiệu 'Trại ở hướng này', giúp đội viên biết đã gần tới đất trại.",
    visualType: "dau_duong",
    visualValue: "trai_huong_nay"
  },
  {
    id: "d7",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Hình vẽ giọt nước lớn báo hiệu thông tin gì?",
    options: ["Mưa to nguy hiểm", "Có nguồn nước", "Có lều trại", "Đường rẽ đôi"],
    correctIndex: 1,
    explanation: "Hình giọt nước chỉ dẫn 'Nguồn nước cách đây ... mét' để đội viên lấy nước sinh hoạt.",
    visualType: "dau_duong",
    visualValue: "nguon_nuoc_met"
  },
  {
    id: "d8",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Ký hiệu một vòng tròn có một chấm tròn đặc nằm ở giữa tâm có ý nghĩa gì?",
    options: ["Bắt đầu đi", "Chúng tôi đã về nhà", "Đi chậm lại", "Nguy hiểm phía trước"],
    correctIndex: 1,
    explanation: "Vòng tròn có chấm đặc ở tâm báo hiệu 'Chúng tôi đã về nhà' hoặc 'Kết thúc hành trình'.",
    visualType: "dau_duong",
    visualValue: "da_ve_nha"
  },
  {
    id: "d9",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Hình vẽ ngọn lửa trên các thanh củi khô báo hiệu điều gì?",
    options: ["Có đám cháy rừng", "Nơi đốt lửa / Có lửa ở hướng này", "Cấm thắp lửa", "Có thú dữ rừng sâu"],
    correctIndex: 1,
    explanation: "Hình ngọn lửa báo hiệu 'Nơi đốt lửa / Có lửa ở đây' để sưởi ấm hoặc nấu nướng.",
    visualType: "dau_duong",
    visualValue: "dot_lua_o_day"
  },
  {
    id: "d10",
    category: "dau_duong",
    difficulty: "easy",
    questionText: "Dấu đường hình chữ Y biểu thị điều gì?",
    options: ["Đường chia đôi ngả", "Đường chia ba ngả", "Đường cụt cấm đi", "Quay đầu cũ"],
    correctIndex: 0,
    explanation: "Chữ Y mô tả trực quan ngã rẽ tách thành hai nhánh đi trái hoặc phải.",
    visualType: "dau_duong",
    visualValue: "hai_nga"
  },
  {
    id: "d11",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Dấu đường thường được vẽ hay xếp bằng vật liệu gì dã ngoại?",
    options: ["Sơn xịt rực rỡ", "Phấn trắng, cành cây, sỏi đá tự nhiên", "Mực vĩnh cửu", "Băng dính nhựa màu"],
    correctIndex: 1,
    explanation: "Dấu đường dã ngoại thường vẽ bằng phấn hoặc xếp từ các nguyên liệu sẵn có như cành cây, sỏi, đá để bảo vệ môi trường dã ngoại.",
    visualType: "none"
  },
  {
    id: "d12",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Khi thiết lập dấu đường, nguyên tắc đặt dấu ở vị trí nào là chuẩn nhất?",
    options: ["Giữa lối đi chính", "Phía bên PHẢI đường đi, nơi cao ráo dễ quan sát", "Trốn thật kỹ dưới tán lá rậm", "Treo lơ lửng trên cành cây rất cao"],
    correctIndex: 1,
    explanation: "Dấu đường phải đặt bên phải hướng di chuyển, tầm mắt vừa phải để dễ nhìn thấy và tránh bị người qua lại dẫm nát.",
    visualType: "none"
  },
  {
    id: "d13",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Hình tam giác có vạch nứt ngang song song đè sụp ở giữa biểu thị cảnh báo gì?",
    options: ["Có đá lở", "Cầu gãy / Đường tắc nghẽn", "Có vực thẳm sâu", "Có thú dữ rình rập"],
    correctIndex: 1,
    explanation: "Đây là ký hiệu 'Cầu gãy / Đường tắc', báo hiệu cầu sập nguy hiểm.",
    visualType: "dau_duong",
    visualValue: "cau_gay"
  },
  {
    id: "d14",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Hình vẽ một bức bì thư có chứa dấu mũi tên hướng đi có nghĩa là gì?",
    options: ["Có bưu điện", "Có tin tức / Mật thư ẩn giấu ở hướng này", "Đã gửi thư về nhà", "Khu vực cấm đọc thư"],
    correctIndex: 1,
    explanation: "Hình bì thư có ý nghĩa báo hiệu 'Có tin tức ở hướng này', nhắc nhở tìm mật thư gợi ý.",
    visualType: "dau_duong",
    visualValue: "tin_tuc_huong_nay"
  },
  {
    id: "d15",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Hình vẽ tròn đồng tâm giống như hồng tâm bắn súng biểu đạt thông tin gì?",
    options: ["Tôi ở đây", "Tránh xa nơi này", "Vùng nguy hiểm tột cùng", "Cổng đất trại Đội"],
    correctIndex: 0,
    explanation: "Ký hiệu hai vòng tròn đồng tâm biểu thị 'Tôi ở đây' báo hiệu vị trí trưởng trạm đóng quân.",
    visualType: "dau_duong",
    visualValue: "toi_o_day"
  },
  {
    id: "d16",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Khi thấy dấu đường vẽ một hình tròn có chứa dấu tick chữ V ở giữa, điều đó có nghĩa gì?",
    options: ["Đúng hướng đi", "An toàn / Bình an", "Đứng đợi lệnh", "Vạch xuất phát"],
    correctIndex: 1,
    explanation: "Hình tròn chứa dấu tick báo hiệu 'An toàn / Bình an', nơi hạ trại thích hợp lành mạnh.",
    visualType: "dau_duong",
    visualValue: "an_toan"
  },
  {
    id: "d17",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Ký hiệu chiếc bì thư kèm dòng chữ 'MT -> 10' có nghĩa là gì?",
    options: ["Mật thư cách đây 10 bước chân", "Đến trạm thư trong 10 phút", "Gửi thư tốn 10 đồng", "Mật thư số 10"],
    correctIndex: 0,
    explanation: "Ký hiệu này viết tắt của 'Mật thư cách đây 10 bước' theo hướng chỉ.",
    visualType: "dau_duong",
    visualValue: "mat_thu_buoc"
  },
  {
    id: "d18",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Hình vẽ ba vạch song song chắn ngang đầu mũi tên mang nghĩa ra mệnh lệnh gì?",
    options: ["Chạy thật nhanh", "Đi chậm lại", "Đứng đợi ở đây", "Đi hàng một dọc"],
    correctIndex: 1,
    explanation: "Vách chặn đứng ở đuôi/đầu mũi tên bắt buộc 'Đi chậm lại' để đảm bảo an toàn.",
    visualType: "dau_duong",
    visualValue: "di_cham_lai"
  },
  {
    id: "d19",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Ký hiệu một làn sóng nước có dấu chữ X đè lên có ý nghĩa gì?",
    options: ["Sóng to nguy hại", "Nguồn nước không uống được / Nước nhiễm độc", "Cấm bơi lội", "Có lụt lội dâng trào"],
    correctIndex: 1,
    explanation: "Làn sóng đại diện nước, gạch chéo X cảnh báo nước nhiễm bẩn độc hại không được uống.",
    visualType: "dau_duong",
    visualValue: "nuoc_doc"
  },
  {
    id: "d20",
    category: "dau_duong",
    difficulty: "medium",
    questionText: "Mũi tên uốn cong vòng lên trên một vật cản hình hộp biểu đạt mệnh lệnh gì?",
    options: ["Chạy nhảy qua", "Đường đi vòng tránh vật cản", "Trèo qua hầm dốc", "Đường bị chặn đứng"],
    correctIndex: 1,
    explanation: "Mũi tên uốn vòng qua mô tả 'Đường đi vòng tránh vật cản' trước mắt.",
    visualType: "dau_duong",
    visualValue: "tranh_vat_can"
  },
  {
    id: "d21",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Hình chiếc mặt đồng hồ tròn có kim biểu thị mệnh lệnh nào?",
    options: ["Báo giờ đi ngủ", "Gặp nhau lúc ... giờ", "Hết giờ chơi game", "Đi nhanh lên kẻo trễ"],
    correctIndex: 1,
    explanation: "Hình đồng hồ là ký hiệu 'Gặp nhau lúc ... giờ', nhắc giờ hội quân của tiểu đội.",
    visualType: "dau_duong",
    visualValue: "gap_nhau_gio"
  },
  {
    id: "d22",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Ba thanh ngang song song bị cắt ngang qua một trục dọc lớn giống hình răng khóa biểu trưng mệnh lệnh gì?",
    options: ["Đi im lặng / Đi lặng lẽ", "Không được đi qua", "Đường đi bộ", "Khu cắm trại yên tĩnh"],
    correctIndex: 0,
    explanation: "Ký hiệu này tượng trưng cho việc khóa miệng giữ bí mật: 'Đi lặng lẽ / Yên lặng'.",
    visualType: "dau_duong",
    visualValue: "di_lang_le"
  },
  {
    id: "d23",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Một trục đứng có các nấc ngang nhỏ song song giống hình thang đứng đại diện mệnh lệnh nào?",
    options: ["Trèo thang leo núi", "Đi hàng một dọc kỷ luật", "Đi dốc đá thẳng đứng", "Vượt tường rào cản"],
    correctIndex: 1,
    explanation: "Hình thang dọc nấc ngang đại diện cho xếp hàng dọc chỉnh tề: 'Đi hàng một'.",
    visualType: "dau_duong",
    visualValue: "hang_mot"
  },
  {
    id: "d24",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Khi hạ trại hoàn tất và di chuyển đi, người dọn trại phải làm gì với các dấu đường đã đặt trước đó?",
    options: ["Giữ nguyên cho đẹp rừng", "Xóa sạch các dấu đường cũ để tránh làm nhiễu thông tin cho các đoàn sau", "Chụp ảnh lưu niệm rồi giữ nguyên", "Xịt sơn đỏ đè lên"],
    correctIndex: 1,
    explanation: "Nguyên tắc bảo vệ môi trường và sinh hoạt dã ngoại là phải thu dọn, xóa sạch dấu đường của đoàn mình sau khi kết thúc chặng.",
    visualType: "none"
  },
  {
    id: "d25",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Ký hiệu tâm điểm tỏa 4 mũi tên xéo ra 4 góc chỉ điều gì?",
    options: ["Giải tán / Về nhà", "Lạc đường bốn phía", "Chia làm bốn ngả", "Khu dã ngoại đa hướng"],
    correctIndex: 0,
    explanation: "Biểu tượng tỏa ra 4 hướng biểu thị 'Giải tán / Về nhà' kết thúc trò chơi.",
    visualType: "dau_duong",
    visualValue: "giai_tan"
  },
  {
    id: "d26",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Ký hiệu ba chạc mũi tên tỏa lên phía Bắc, Tây Bắc và Đông Bắc có tên là gì?",
    options: ["Đường cụt ngã ba", "Đường chia làm ba ngả", "Đi theo ba nhóm", "Ba hướng nguy hiểm"],
    correctIndex: 1,
    explanation: "Ký hiệu này có tên là 'Đường chia làm ba ngả' cảnh báo ngã rẽ ba nhánh.",
    visualType: "dau_duong",
    visualValue: "ba_nga"
  },
  {
    id: "d27",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Lỗi thường gặp nhất của đội viên khi đi tìm dấu đường dã ngoại là gì?",
    options: ["Đi quá nhanh bỏ qua dấu", "Chỉ nhìn xuống đất mà không nhìn hai bên vật cản", "Đi nhầm sang tiểu đội khác", "Cả A và B đều đúng"],
    correctIndex: 3,
    explanation: "Đội viên hay mắc lỗi đi quá nhanh, chủ quan hoặc chỉ nhìn xuống mặt đất bỏ qua các gốc cây bệ đá xung quanh đặt dấu.",
    visualType: "none"
  },
  {
    id: "d28",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Ký hiệu bát giác đều chứa thanh gạch ngang dứt khoát là mệnh lệnh gì?",
    options: ["Không được rẽ trái", "Đứng lại / Chờ đợi ở đây", "Đất cụt nguy hiểm", "Vòng tròn an toàn"],
    correctIndex: 1,
    explanation: "Hình bát giác đều báo hiệu dừng: 'Đứng lại / Đợi ở đây'.",
    visualType: "dau_duong",
    visualValue: "dung_lai"
  },
  {
    id: "d29",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Mũi tên uốn lượn vòng ngược 180 độ chỉ ngược lại hướng đi là dấu đường gì?",
    options: ["Tránh dốc cao", "Trở lại đường cũ / Quay lại", "Sai đường ngõ cụt", "Rẽ phải gấp"],
    correctIndex: 1,
    explanation: "Biểu thị lệnh 'Trở lại đường cũ', yêu cầu đội đi ngược về ngã rẽ trước.",
    visualType: "dau_duong",
    visualValue: "quay_tro_lai"
  },
  {
    id: "d30",
    category: "dau_duong",
    difficulty: "hard",
    questionText: "Nước ngọt lấy từ giếng đất sạch dã ngoại, có thể uống trực tiếp được ký hiệu bởi dấu nào?",
    options: ["Nước không uống được", "Nước uống được", "An toàn", "Có nguồn nước cách 10m"],
    correctIndex: 1,
    explanation: "Nguồn nước trong lành, ngọt lành uống được biểu thị bằng dấu 'Nước uống được'.",
    visualType: "dau_duong",
    visualValue: "nuoc_uong_duoc"
  }
];


// --- PRACTICE EXERCISES ---
// 50 Morse Exercises
export const PRACTICE_EXERCISES_MORSE: PracticeExercise[] = Array.from({ length: 50 }, (_, i) => {
  const words = [
    "DI", "SAN", "HOC", "TOT", "DOI", "KHOE", "BAN", "MORSE", "SOS", "TIN",
    "CAMP", "RUNG", "NUI", "YEU", "NUOC", "CHOI", "HOC", "VUI", "ANH", "NAM",
    "LE", "CA", "GIO", "BO", "DE", "VE", "KEM", "QUA", "PHAP", "XE",
    "HOA", "BINH", "DOAN_KET", "TIEN_PHONG", "CHI_HUY", "TRUYEN_TIN", "DOC_LAP", "TU_DO", "MANG_NON", "MANG_TRE",
    "SAO", "BAC_HO", "KHAN_QUANG", "HUY_HIEU", "CO_DOI", "DAN_TRAI", "MAT_THU", "LUYEN_TAP", "CHI_DOI", "LIEN_DOI"
  ];
  const rawWord = words[i % words.length];
  // Convert word to mock morse code based on letters
  const simpleMorseMap: Record<string, string> = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '_': '/'
  };
  const code = rawWord.split("").map(c => simpleMorseMap[c] || "").join(" ");
  return {
    id: `pm_${i+1}`,
    type: 'morse',
    question: `Dịch từ sau sang mã Morse: "${rawWord.replace("_", " ")}"`,
    answer: code,
    hint: `Mẹo: ghép mã từng chữ cái đại diện.`,
    choices: [
      code,
      code.replace(/\./g, "-").replace(/-/g, "."),
      code + " .",
      code.split(" ").reverse().join(" ")
    ].sort(() => Math.random() - 0.5)
  };
});

// 30 Semaphore Exercises
export const PRACTICE_EXERCISES_SEMAPHORE: PracticeExercise[] = Array.from({ length: 30 }, (_, i) => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Y", "J", "V", "W", "X", "Z", "SỬA LỖI", "BÁO SỐ"];
  const char = letters[i % letters.length];
  return {
    id: `ps_${i+1}`,
    type: 'semaphore',
    question: `Hãy nhìn tư thế cờ của Mascot và đoán xem đó là chữ cái nào?`,
    answer: char,
    hint: `Chú ý các góc chỉ cánh tay trái cố định và cánh tay phải xoay vòng tương ứng.`,
    visualData: { char },
    choices: [
      char,
      letters[(i + 1) % letters.length],
      letters[(i + 5) % letters.length],
      letters[(i + 12) % letters.length]
    ].sort(() => Math.random() - 0.5)
  };
});

// 30 Dấu đường Exercises
export const PRACTICE_EXERCISES_DAU_DUONG: PracticeExercise[] = Array.from({ length: 30 }, (_, i) => {
  const signs = [
    { id: "theo_huong_nay", name: "Theo hướng này", meaning: "Đi theo hướng chính mũi tên chỉ." },
    { id: "sai_duong", name: "Sai đường", meaning: "Đã đi vào lối cấm hoặc đi sai hướng." },
    { id: "nguy_hiem", name: "Nguy hiểm", meaning: "Phía trước có chướng ngại hoặc sạt lở nguy hiểm." },
    { id: "an_toan", name: "An toàn / Bình an", meaning: "Khu vực an toàn tuyệt đối." },
    { id: "trai_huong_nay", name: "Trại ở hướng này", meaning: "Khu vực cổng trại dã ngoại ở hướng chỉ." },
    { id: "nguon_nuoc_met", name: "Nguồn nước mét", meaning: "Nguồn nước sinh hoạt cách mốc khoảng cách cụ thể." },
    { id: "nuoc_uong_duoc", name: "Nước uống được", meaning: "Nguồn nước ngọt, trong lành uống trực tiếp." },
    { id: "nuoc_doc", name: "Nước không uống được", meaning: "Nguồn nước bẩn có thể nhiễm chất hóa học độc hại." },
    { id: "giai_tan", name: "Giải tán / Về nhà", meaning: "Kết thúc cuộc chơi dã ngoại trở về nhà tự do." },
    { id: "dung_lai", name: "Đứng lại", meaning: "Đội ngũ đứng tụ tập chờ chỉ huy trạm kế phát lệnh." }
  ];
  const item = signs[i % signs.length];
  return {
    id: `pd_${i+1}`,
    type: 'dau_duong',
    question: `Hãy đoán ý nghĩa của dấu đường có tên: "${item.name}"?`,
    answer: item.meaning,
    hint: `Dấu này đại diện cho danh mục chỉ dẫn, mệnh lệnh hoặc cảnh báo tương ứng.`,
    visualData: { signId: item.id },
    choices: [
      item.meaning,
      "Cấm đốt lửa và phá hoại cành cây rừng sâu dã ngoại.",
      "Gặp mặt chỉ huy tiểu đội thảo luận chiến thuật chơi lớn.",
      "Cầu sập dốc núi cheo leo cấm vượt qua bằng mọi giá."
    ].sort(() => Math.random() - 0.5)
  };
});
