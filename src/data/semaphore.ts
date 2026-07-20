import { SemaphoreItem } from '../types';

export const SEMAPHORE_CIRCLES = [
  {
    circle: 1,
    title: "Vòng 1 (A đến G)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Nam (180°), cánh tay PHẢI (R) di chuyển qua các vị trí khác từ Tây Nam đến Đông Nam.",
    items: [
      { char: "A", leftAngle: 180, rightAngle: 225, circle: 1, mnemonic: "Kim chỉ hướng Nam và Tây Nam" },
      { char: "B", leftAngle: 180, rightAngle: 270, circle: 1, mnemonic: "Kim chỉ hướng Nam và Tây" },
      { char: "C", leftAngle: 180, rightAngle: 315, circle: 1, mnemonic: "Kim chỉ hướng Nam và Tây Bắc" },
      { char: "D", leftAngle: 180, rightAngle: 0, circle: 1, mnemonic: "Kim chỉ hướng Nam và Bắc" },
      { char: "E", leftAngle: 180, rightAngle: 45, circle: 1, mnemonic: "Kim chỉ hướng Nam và Đông Bắc" },
      { char: "F", leftAngle: 180, rightAngle: 90, circle: 1, mnemonic: "Kim chỉ hướng Nam và Đông" },
      { char: "G", leftAngle: 180, rightAngle: 135, circle: 1, mnemonic: "Kim chỉ hướng Nam và Đông Nam" }
    ]
  },
  {
    circle: 2,
    title: "Vòng 2 (H đến N - Bỏ J)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Tây Nam (225°), cánh tay PHẢI (R) di chuyển bắt đầu từ hướng Tây (270°).",
    items: [
      { char: "H", leftAngle: 225, rightAngle: 270, circle: 2, mnemonic: "Hướng Tây Nam và Tây" },
      { char: "I", leftAngle: 225, rightAngle: 315, circle: 2, mnemonic: "Hướng Tây Nam và Tây Bắc" },
      { char: "K", leftAngle: 225, rightAngle: 0, circle: 2, mnemonic: "Hướng Tây Nam và Bắc" },
      { char: "L", leftAngle: 225, rightAngle: 45, circle: 2, mnemonic: "Hướng Tây Nam và Đông Bắc" },
      { char: "M", leftAngle: 225, rightAngle: 90, circle: 2, mnemonic: "Hướng Tây Nam và Đông" },
      { char: "N", leftAngle: 225, rightAngle: 135, circle: 2, mnemonic: "Hướng Tây Nam và Đông Nam" }
    ]
  },
  {
    circle: 3,
    title: "Vòng 3 (O đến S)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Tây (270°), cánh tay PHẢI (R) di chuyển bắt đầu từ hướng Tây Bắc (315°).",
    items: [
      { char: "O", leftAngle: 270, rightAngle: 315, circle: 3, mnemonic: "Hướng Tây và Tây Bắc" },
      { char: "P", leftAngle: 270, rightAngle: 0, circle: 3, mnemonic: "Hướng Tây và Bắc" },
      { char: "Q", leftAngle: 270, rightAngle: 45, circle: 3, mnemonic: "Hướng Tây và Đông Bắc" },
      { char: "R", leftAngle: 270, rightAngle: 90, circle: 3, mnemonic: "Hướng Tây và Đông" },
      { char: "S", leftAngle: 270, rightAngle: 135, circle: 3, mnemonic: "Hướng Tây và Đông Nam" }
    ]
  },
  {
    circle: 4,
    title: "Vòng 4 (T, U, Y và Xóa/Lỗi)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Tây Bắc (315°), cánh tay PHẢI (R) di chuyển bắt đầu từ hướng Bắc (0°).",
    items: [
      { char: "T", leftAngle: 315, rightAngle: 0, circle: 4, mnemonic: "Hướng Tây Bắc và Bắc" },
      { char: "U", leftAngle: 315, rightAngle: 45, circle: 4, mnemonic: "Hướng Tây Bắc và Đông Bắc" },
      { char: "Y", leftAngle: 315, rightAngle: 90, circle: 4, mnemonic: "Hướng Tây Bắc và Đông" },
      { char: "SỬA LỖI", leftAngle: 315, rightAngle: 135, circle: 4, mnemonic: "Tây Bắc và Đông Nam (Một đường chéo thẳng)" }
    ]
  },
  {
    circle: 5,
    title: "Vòng 5 (Chữ Số, J, V)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Bắc (0°), cánh tay PHẢI (R) di chuyển từ hướng Đông Bắc.",
    items: [
      { char: "BÁO SỐ", leftAngle: 0, rightAngle: 45, circle: 5, mnemonic: "Hướng Bắc và Đông Bắc (Numerical Sign)" },
      { char: "J", leftAngle: 0, rightAngle: 90, circle: 5, mnemonic: "Hướng Bắc và Đông (Vị trí đặc biệt của J)" },
      { char: "V", leftAngle: 0, rightAngle: 135, circle: 5, mnemonic: "Hướng Bắc và Đông Nam" }
    ]
  },
  {
    circle: 6,
    title: "Vòng 6 (W, X)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Đông Bắc (45°), cánh tay PHẢI (R) di chuyển từ hướng Đông.",
    items: [
      { char: "W", leftAngle: 45, rightAngle: 90, circle: 6, mnemonic: "Hướng Đông Bắc và Đông" },
      { char: "X", leftAngle: 45, rightAngle: 135, circle: 6, mnemonic: "Hướng Đông Bắc và Đông Nam" }
    ]
  },
  {
    circle: 7,
    title: "Vòng 7 (Z)",
    description: "Cánh tay TRÁI (L) cố định ở hướng Đông (90°), cánh tay PHẢI (R) cố định ở hướng Đông Nam (135°).",
    items: [
      { char: "Z", leftAngle: 90, rightAngle: 135, circle: 7, mnemonic: "Hướng Đông và Đông Nam" }
    ]
  }
];

export const SEMAPHORE_ALL_ITEMS: SemaphoreItem[] = SEMAPHORE_CIRCLES.flatMap(c => c.items);

export const SEMAPHORE_HISTORY = {
  title: "Lịch sử Semaphore",
  description: "Semaphore được phát minh bởi Claude Chappe tại Pháp vào năm 1792. Hệ thống ban đầu dùng các thanh gỗ quay để tạo góc và truyền tin tầm xa. Sau đó được ứng dụng vào hải quân sử dụng hai lá cờ vuông màu đỏ và vàng nổi bật.",
  flagSpecs: {
    size: "40cm x 40cm",
    design: "Chia đôi chéo thành hai tam giác màu Đỏ (Red) và Vàng (Yellow). Màu Đỏ nằm gần cán cờ.",
    woodLength: "50cm đến 60cm"
  }
};
