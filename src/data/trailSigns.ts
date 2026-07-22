import { TrailSignItem } from '../types';

export const TRAIL_SIGNS: TrailSignItem[] = [
  // =========================================================================
  // A. 16 DẤU ĐƯỜNG DẠNG MŨI TÊN (Từ 1 đến 16)
  // =========================================================================
  {
    id: "bat_dau_di",
    name: "1. Bắt đầu đi",
    meaning: "Điểm khởi hành, bắt đầu cuộc hành trình rèn luyện.",
    category: "di_chuyen",
    svgPath: "M 32 34 A 16 16 0 1 0 32 66 A 16 16 0 1 0 32 34 M 32 50 L 32 50.1 M 48 50 H 82 M 68 36 L 82 50 L 68 64",
    description: "Vòng tròn có chấm tròn ở giữa nối tiếp mũi tên chỉ hướng đi.",
    exampleScenario: "Đặt ngay tại cổng xuất phát của trò chơi lớn dã ngoại."
  },
  {
    id: "theo_huong_nay",
    name: "2. Theo hướng này",
    meaning: "Hướng đi chính xác cần đi theo.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 68 33 L 85 50 L 68 67",
    description: "Mũi tên đơn chỉ hướng thẳng.",
    exampleScenario: "Đặt trên lối đi chính để xác nhận hướng đi đúng."
  },
  {
    id: "di_nhanh_len",
    name: "3. Đi nhanh lên",
    meaning: "Tăng tốc độ di chuyển của đội ngũ.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 52 33 L 69 50 L 52 67 M 68 33 L 85 50 L 68 67",
    description: "Mũi tên có 2 đầu nhọn (hai chevron xếp chồng).",
    exampleScenario: "Khi thời gian của chặng sắp hết, yêu cầu đội đi nhanh hơn."
  },
  {
    id: "chay",
    name: "4. Chạy",
    meaning: "Di chuyển bằng tư thế chạy nhanh lập tức.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 37 33 L 54 50 L 37 67 M 52 33 L 69 50 L 52 67 M 68 33 L 85 50 L 68 67",
    description: "Mũi tên có 3 đầu nhọn (ba chevron xếp chồng).",
    exampleScenario: "Được vẽ khi cần chạy nhanh tránh bão hoặc hội quân khẩn cấp."
  },
  {
    id: "di_cham_lai",
    name: "5. Đi chậm lại",
    meaning: "Giảm tốc độ, chú ý các yếu tố an toàn xung quanh.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 68 33 L 85 50 L 68 67 M 40 33 L 50 67",
    description: "Mũi tên có một vạch chéo cắt ngang qua thân.",
    exampleScenario: "Chuẩn bị đi vào khu vực sình lầy hoặc dốc đứng nguy hiểm."
  },
  {
    id: "quay_tro_lai",
    name: "6. Quay trở lại",
    meaning: "Quay ngược lại hướng cũ 180 độ.",
    category: "di_chuyen",
    svgPath: "M 85 35 H 15 M 32 20 L 15 35 L 32 50 M 15 65 H 85 M 68 50 L 85 65 L 68 80",
    description: "Hai mũi tên song song ngược chiều nhau.",
    exampleScenario: "Báo hiệu đội đi sai hướng cũ, cần quay đầu lại ngã ba cũ."
  },
  {
    id: "chuong_ngai_phai_vuot_qua",
    name: "7. Chướng ngại phải vượt qua",
    meaning: "Phía trước có chướng ngại vật buộc phải vượt qua trực tiếp.",
    category: "canh_bao",
    svgPath: "M 15 50 H 85 M 68 33 L 85 50 L 68 67 M 34 33 L 44 67 M 48 33 L 58 67",
    description: "Mũi tên có hai vạch chéo song song cắt ngang qua thân.",
    exampleScenario: "Phía trước có hàng rào thép gai hoặc mương nước nông."
  },
  {
    id: "chia_lam_2_nhom",
    name: "8. Chia làm 2 nhóm",
    meaning: "Phân chia lực lượng thành hai nhóm đi hai ngả khác nhau.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 40 M 40 50 L 82 20 M 64 16 L 82 20 L 75 35 M 40 50 L 82 80 M 75 65 L 82 80 L 64 84",
    description: "Mũi tên rẽ nhánh đôi hướng lên trên và xuống dưới.",
    exampleScenario: "Phân đội chia đôi để thực hiện trinh sát hai bên sườn đồi."
  },
  {
    id: "hai_nhom_nhap_lai",
    name: "9. Hai nhóm nhập lại",
    meaning: "Hội quân, hai nhóm nhập lại thành một đoàn.",
    category: "di_chuyen",
    svgPath: "M 18 20 L 50 50 M 18 80 L 50 50 M 50 50 H 85 M 68 33 L 85 50 L 68 67",
    description: "Hai đường chỉ dẫn hội tụ lại thành một mũi tên thẳng duy nhất.",
    exampleScenario: "Báo hiệu điểm kết thúc phân tuyến, hai cánh quân gặp nhau."
  },
  {
    id: "re_trai",
    name: "10. Rẽ trái",
    meaning: "Đi theo lối rẽ vuông góc về phía bên trái.",
    category: "di_chuyen",
    svgPath: "M 18 70 H 70 V 20 M 53 37 L 70 20 L 87 37",
    description: "Đường thẳng bẻ góc vuông hướng lên trên.",
    exampleScenario: "Tại ngã rẽ lối mòn nhỏ rậm rạp rẽ vào lán trại."
  },
  {
    id: "re_phai",
    name: "11. Rẽ phải",
    meaning: "Đi theo lối rẽ vuông góc về phía bên phải.",
    category: "di_chuyen",
    svgPath: "M 18 30 H 70 V 80 M 53 63 L 70 80 L 87 63",
    description: "Đường thẳng bẻ góc vuông hướng xuống dưới.",
    exampleScenario: "Rẽ phải để vào lối đi tắt xuống thung lũng có suối sạch."
  },
  {
    id: "qua_cau",
    name: "12. Qua cầu",
    meaning: "Phía trước có cây cầu bắc ngang, đi qua cầu an toàn.",
    category: "thong_tin",
    svgPath: "M 30 25 C 45 42 55 42 70 25 M 30 75 C 45 58 55 58 70 75 M 15 50 H 85 M 68 33 L 85 50 L 68 67",
    description: "Biểu tượng thành cầu cong thu hẹp ở giữa kèm mũi tên đi qua.",
    exampleScenario: "Điểm đến là cầu khỉ hoặc cầu treo vượt sông."
  },
  {
    id: "mat_thu_huong_nay",
    name: "13. Mật Thư hướng này",
    meaning: "Có hòm thư hoặc mật thư giấu ở hướng mũi tên.",
    category: "thong_tin",
    svgPath: "M 15 30 H 55 V 70 H 15 Z M 15 30 L 55 70 M 55 30 L 15 70 M 55 50 H 85 M 70 35 L 85 50 L 70 65",
    description: "Hình bao thư (chữ nhật gạch X) kèm mũi tên chỉ hướng.",
    exampleScenario: "Giúp đội viên định vị chính xác vị trí giấu mật thư trạm kế tiếp."
  },
  {
    id: "theo_loi_tat",
    name: "14. Theo lối tắt",
    meaning: "Đi theo đường tắt ngắn hơn để tiết kiệm thời gian.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 68 33 L 85 50 L 68 67 M 58 35 L 64 45 M 65 35 L 71 45",
    description: "Mũi tên thẳng có hai gạch nhỏ song song nghiêng nhẹ ở phần cánh.",
    exampleScenario: "Lối đi băng qua rừng thưa bỏ qua cung đường vòng rộng."
  },
  {
    id: "theo_loi_song",
    name: "15. Theo lối sông",
    meaning: "Hành quân bám sát dọc theo dòng sông.",
    category: "thong_tin",
    svgPath: "M 15 30 H 55 V 70 H 15 Z M 20 40 Q 28 35 35 40 T 50 40 M 20 50 Q 28 45 35 50 T 50 50 M 20 60 Q 28 55 35 60 T 50 60 M 55 50 H 85 M 70 35 L 85 50 L 70 65",
    description: "Khung chữ nhật có các gợn sóng nước bên trong nối tiếp mũi tên chỉ hướng.",
    exampleScenario: "Bám bờ sông Hồng đi xuôi về phía hạ lưu."
  },
  {
    id: "vuot_suoi",
    name: "16. Vượt suối",
    meaning: "Vượt qua dòng suối trước mặt để sang bờ bên kia.",
    category: "thong_tin",
    svgPath: "M 25 25 Q 18 45 30 65 T 25 85 M 38 22 Q 31 42 43 62 T 38 82 M 51 19 Q 44 39 56 59 T 51 79 M 64 16 Q 57 36 69 56 T 64 76 M 18 82 L 85 18 M 63 20 L 85 18 L 83 40",
    description: "Mũi tên chéo đè lên các gợn sóng nước chảy dọc.",
    exampleScenario: "Vượt qua đoạn suối nông nhiều đá cuội trơn trượt."
  },

  // =========================================================================
  // B. 16 DẤU ĐƯỜNG DẠNG HÌNH VẼ (Từ 17 đến 32)
  // =========================================================================
  {
    id: "theo_loi_suoi",
    name: "17. Theo lối suối",
    meaning: "Men theo khe suối, dòng suối để di chuyển.",
    category: "thong_tin",
    svgPath: "M 22 15 Q 14 35 25 55 T 22 88 M 38 15 Q 30 35 41 55 T 38 88 M 54 15 Q 46 35 57 55 T 54 88 M 70 15 Q 62 35 73 55 T 70 88",
    description: "Bốn đường gợn sóng nước chảy dọc song song.",
    exampleScenario: "Đường đi khó khăn trong rừng sâu cần bám theo nguồn nước suối."
  },
  {
    id: "co_trai_gan_day",
    name: "18. Có trại gần đây",
    meaning: "Khu vực đất trại hoặc điểm tập kết sinh hoạt cách đây không xa.",
    category: "thong_tin",
    svgPath: "M 15 75 L 42 18 M 55 75 L 28 18 M 15 75 H 55 M 35 25 V 75 M 55 75 H 90 M 75 62 L 90 75 L 75 88",
    description: "Hình lều chữ A có cọc cắm chéo ở đỉnh, nối tiếp mũi tên nằm ngang bên phải.",
    exampleScenario: "Chỉ lối rẽ vào trạm trung tâm đất trại."
  },
  {
    id: "cam_trai_duoc",
    name: "19. Cắm trại được",
    meaning: "Khu đất bằng phẳng, rộng rãi, an toàn, được phép dựng lều.",
    category: "menh_lenh",
    svgPath: "M 50 12 L 90 82 H 10 Z M 50 30 L 76 72 H 24 Z",
    description: "Hai hình tam giác đồng tâm lồng vào nhau.",
    exampleScenario: "Lối vào bãi cỏ lớn của rừng thưa thích hợp hạ lều."
  },
  {
    id: "khong_cam_trai_duoc",
    name: "20. Không cắm trại được",
    meaning: "Khu đất cấm cắm trại do sạt lở nguy hiểm hoặc đất tư nhân.",
    category: "menh_lenh",
    svgPath: "M 50 12 L 90 82 H 10 Z M 50 30 L 76 72 H 24 Z M 15 20 L 85 85 M 85 20 L 15 85",
    description: "Hai hình tam giác lồng nhau bị gạch chéo chữ X lớn đè lên.",
    exampleScenario: "Vùng lòng hồ thủy điện xả lũ cấm hạ trại qua đêm."
  },
  {
    id: "duong_cam",
    name: "21. Đường cấm",
    meaning: "Lối đi cấm, ngõ cụt nguy hiểm tuyệt đối không bước vào.",
    category: "canh_bao",
    svgPath: "M 20 20 L 80 80 M 80 20 L 20 80",
    description: "Chữ X lớn kẻ nổi bật trên đá hoặc đất cát.",
    exampleScenario: "Lối rẽ vào vực sâu hoang dại cấm đội viên đi nhầm."
  },
  {
    id: "nuoc_uong_duoc",
    name: "22. Nước uống được",
    meaning: "Nguồn nước giếng sạch, suối trong lành có thể đun sôi uống trực tiếp.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 M 22 32 Q 36 26 50 32 T 78 32 M 14 44 Q 32 38 50 44 T 86 44 M 14 56 Q 32 50 50 56 T 86 56 M 22 68 Q 36 62 50 68 T 78 68",
    description: "Vòng tròn chứa các đường gợn sóng nước nằm ngang.",
    exampleScenario: "Vẽ tại trạm tiếp nước ngọt sinh hoạt của ban tổ chức."
  },
  {
    id: "nuoc_doc",
    name: "23. Nước độc (Không uống được)",
    meaning: "Nguồn nước nhiễm bẩn, nhiễm độc hóa chất, cấm uống thử.",
    category: "canh_bao",
    svgPath: "M 50 12 L 90 85 H 10 Z M 32 48 Q 41 43 50 48 T 68 48 M 24 60 Q 37 55 50 60 T 76 60 M 16 72 Q 33 67 50 72 T 84 72",
    description: "Hình tam giác chứa các đường sóng nước nằm ngang.",
    exampleScenario: "Nước ao tù đọng ngập bùn bẩn ô nhiễm nghiêm trọng."
  },
  {
    id: "nguy_hiem",
    name: "24. Nguy hiểm",
    meaning: "Có nguy hiểm khẩn cấp phía trước, cần thận trọng hết mức.",
    category: "canh_bao",
    svgPath: "M 50 12 L 90 85 H 10 Z M 50 58 L 50 58.1",
    description: "Hình tam giác đều có một dấu chấm tròn lớn nằm chính tâm.",
    exampleScenario: "Vẽ cảnh báo tại khu vực vách đá trơn trượt cheo leo dễ té ngã."
  },
  {
    id: "lam_cang",
    name: "25. Làm cáng",
    meaning: "Nhiệm vụ làm cáng cứu thương giả định vận chuyển thương binh.",
    category: "thong_tin",
    svgPath: "M 18 50 A 8 8 0 1 0 18 50.1 M 82 50 A 8 8 0 1 0 82 50.1 M 18 38 H 82 V 62 H 18 Z M 31 38 V 62 M 44 38 V 62 M 57 38 V 62 M 70 38 V 62 M 18 38 L 82 62 M 18 62 L 82 38",
    description: "Biểu tượng chiếc cáng thương: hai tay cầm hình tròn, vải cáng có lưới đan.",
    exampleScenario: "Yêu cầu đội viên tìm cành cây và khăn quàng làm cáng sơ cứu bạn."
  },
  {
    id: "ve_trai_luc_10_gio",
    name: "26. Về trại lúc 10 giờ",
    meaning: "Hội quân tập hợp toàn liên đội tại đất trại lúc 10 giờ.",
    category: "thong_tin",
    svgPath: "M 45 18 A 34 34 0 1 0 45 86 A 34 34 0 1 0 45 18 M 25 74 L 52 30 M 65 74 L 38 30 M 25 74 H 65 M 45 30 V 74 M 72 10 V 26 M 80 10 H 87 V 26 H 80 Z M 92 8 V 26 M 92 17 H 98 V 26",
    description: "Vòng tròn chứa lều chữ A bên trong, có ký hiệu '10h' rõ ràng ở góc trên bên phải.",
    exampleScenario: "Lệnh hội quân chuẩn bị làm lễ bế mạc dã ngoại."
  },
  {
    id: "di_theo_dau_chan",
    name: "27. Đi theo dấu chân",
    meaning: "Bám sát dấu chân người đi trước dốc đứng tránh bị lạc.",
    category: "thong_tin",
    svgPath: "M 15 35 H 85 M 15 65 H 85 M 35 15 V 85 M 65 15 V 85",
    description: "Hình khung lưới gồm 2 đường nằm ngang cắt 2 đường thẳng đứng (#).",
    exampleScenario: "Khu vực đồi cát hoặc bùn lầy đòi hỏi bám gót người dẫn đường."
  },
  {
    id: "doi_o_day",
    name: "28. Đợi ở đây",
    meaning: "Dừng lại, đứng tập hợp chờ lệnh mới của chỉ huy.",
    category: "thong_tin",
    svgPath: "M 12 20 H 88 V 80 H 12 Z M 26 34 H 74 V 66 H 26 Z",
    description: "Hai hình chữ nhật đồng tâm lồng vào nhau.",
    exampleScenario: "Đội tiên phong dừng lại chờ đội hậu cần bắt kịp."
  },
  {
    id: "binh_an",
    name: "29. Bình an (an toàn)",
    meaning: "Vùng đất an toàn, không có chướng ngại hiểm họa.",
    category: "thong_tin",
    svgPath: "M 15 25 L 35 50 L 15 75 M 40 25 L 60 50 L 40 75 M 65 25 L 85 50 L 65 75",
    description: "Ba ký hiệu chevron xếp nối tiếp hướng về bên phải (>>>).",
    exampleScenario: "Vượt qua trạm thử thách khó khăn, báo hiệu đường đi tiếp an toàn."
  },
  {
    id: "co_ke_nghich",
    name: "30. Có kẻ nghịch (Có địch)",
    meaning: "Cảnh báo khu vực có lực lượng đối phương săn đuổi.",
    category: "canh_bao",
    svgPath: "M 15 25 L 35 50 L 15 75 M 40 25 L 60 50 L 40 75 M 85 25 L 65 50 L 85 75",
    description: "Hai chevron hướng sang phải và một chevron hướng trái đối nghịch (>> <).",
    exampleScenario: "Trong trò chơi trinh sát đêm phòng tránh quân địch mai phục."
  },
  {
    id: "co_thu_du",
    name: "31. Có thú dữ",
    meaning: "Có nguy cơ gặp rắn rết độc, ong rừng hoặc thú rừng lớn.",
    category: "canh_bao",
    svgPath: "M 50 18 A 14 14 0 0 1 72 28 A 14 14 0 0 1 82 50 A 14 14 0 0 1 72 72 A 14 14 0 0 1 50 82 A 14 14 0 0 1 28 72 A 14 14 0 0 1 18 50 A 14 14 0 0 1 28 28 A 14 14 0 0 1 50 18 M 50 50 L 50 50.1",
    description: "Hình bụi cây/tán lá gợn mây tròn trịa 8 múi chứa một dấu chấm tròn ở tâm.",
    exampleScenario: "Báo trước khi đi vào lùm rậm nhiều bụi gai có rắn lục xanh."
  },
  {
    id: "da_den_noi",
    name: "32. Đã đến nơi (Hết dấu)",
    meaning: "Điểm đích cuối cùng, kết thúc toàn bộ lộ trình.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 M 50 50 L 50 50.1",
    description: "Vòng tròn lớn đồng tâm bao quanh một chấm tròn đặc ở chính giữa.",
    exampleScenario: "Đặt tại tâm trại chính hoặc điểm vạch đích kết thúc trò chơi lớn."
  }
];
