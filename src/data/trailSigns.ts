import { TrailSignItem } from '../types';

export const TRAIL_SIGNS: TrailSignItem[] = [
  // --- A. 16 DẤU ĐƯỜNG DẠNG MŨI TÊN (1 to 16) ---
  {
    id: "bat_dau_di",
    name: "1. Bắt đầu đi",
    meaning: "Điểm khởi hành, bắt đầu cuộc hành trình rèn luyện.",
    category: "di_chuyen",
    svgPath: "M 35 50 A 15 15 0 1 1 35 50.1 M 35 50 A 2 2 0 1 1 35 50.1 M 55 50 H 85 M 75 40 L 85 50 L 75 60",
    description: "Vòng tròn có chấm ở giữa nối tiếp một mũi tên chỉ hướng đi.",
    exampleScenario: "Đặt ngay tại cổng xuất phát của trò chơi lớn dã ngoại."
  },
  {
    id: "theo_huong_nay",
    name: "2. Theo hướng này",
    meaning: "Hướng đi chính xác cần đi theo.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 65 30 L 85 50 L 65 70",
    description: "Mũi tên đơn mảnh chỉ hướng thẳng.",
    exampleScenario: "Đặt trên lối đi chính để xác nhận hướng đi đúng."
  },
  {
    id: "di_nhanh_len",
    name: "3. Đi nhanh lên",
    meaning: "Tăng tốc độ di chuyển của đội ngũ.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 65 30 L 85 50 L 65 70 M 50 30 L 70 50 L 50 70",
    description: "Mũi tên có 2 đầu nhọn (hai chevron xếp chồng).",
    exampleScenario: "Khi thời gian của chặng sắp hết, yêu cầu đội đi nhanh hơn."
  },
  {
    id: "chay",
    name: "4. Chạy",
    meaning: "Di chuyển bằng tư thế chạy nhanh lập tức.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 65 30 L 85 50 L 65 70 M 50 30 L 70 50 L 50 70 M 35 30 L 55 50 L 35 70",
    description: "Mũi tên có 3 đầu nhọn (ba chevron xếp chồng).",
    exampleScenario: "Được vẽ khi cần chạy nhanh tránh bão hoặc hội quân khẩn cấp."
  },
  {
    id: "di_cham_lai",
    name: "5. Đi chậm lại",
    meaning: "Giảm tốc độ, chú ý các yếu tố an toàn xung quanh.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 65 30 L 85 50 L 65 70 M 45 35 L 35 65",
    description: "Mũi tên có một vạch chéo cắt ngang qua thân.",
    exampleScenario: "Chuẩn bị đi vào khu vực sình lầy hoặc dốc đứng nguy hiểm."
  },
  {
    id: "quay_tro_lai",
    name: "6. Quay trở lại",
    meaning: "Quay ngược lại hướng cũ 180 độ.",
    category: "di_chuyen",
    svgPath: "M 20 40 H 80 M 65 25 L 80 40 L 65 55 M 80 60 H 20 M 35 45 L 20 60 L 35 75",
    description: "Hai mũi tên song song ngược chiều nhau.",
    exampleScenario: "Báo hiệu đội đi sai hướng cũ, cần quay đầu lại ngã ba cũ."
  },
  {
    id: "chuong_ngai_phai_vuot_qua",
    name: "7. Chướng ngại phải vượt qua",
    meaning: "Phía trước có chướng ngại vật buộc phải vượt qua trực tiếp.",
    category: "canh_bao",
    svgPath: "M 15 50 H 85 M 65 30 L 85 50 L 65 70 M 42 35 L 32 65 M 52 35 L 42 65",
    description: "Mũi tên có hai vạch chéo song song cắt ngang qua thân.",
    exampleScenario: "Phía trước có hàng rào thép gai hoặc mương nước nông."
  },
  {
    id: "chia_lam_2_nhom",
    name: "8. Chia làm 2 nhóm",
    meaning: "Phân chia lực lượng thành hai nhóm đi hai ngả khác nhau.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 45 L 75 25 M 60 20 L 75 25 L 70 40 M 45 50 L 75 75 M 70 60 L 75 75 L 60 80",
    description: "Mũi tên rẽ nhánh đôi hướng lên trên và xuống dưới.",
    exampleScenario: "Phân đội chia đôi để thực hiện trinh sát hai bên sườn đồi."
  },
  {
    id: "hai_nhom_nhap_lai",
    name: "9. Hai nhóm nhập lại",
    meaning: "Hội quân, hai nhóm nhập lại thành một đoàn.",
    category: "di_chuyen",
    svgPath: "M 15 25 L 45 50 M 15 75 L 45 50 H 85 M 70 35 L 85 50 L 70 65",
    description: "Hai đường chỉ dẫn hội tụ lại thành một mũi tên thẳng duy nhất.",
    exampleScenario: "Báo hiệu điểm kết thúc phân tuyến, hai cánh quân gặp nhau."
  },
  {
    id: "re_trai",
    name: "10. Rẽ trái",
    meaning: "Đi theo lối rẽ vuông góc về phía bên trái.",
    category: "di_chuyen",
    svgPath: "M 15 75 H 65 V 25 M 50 40 L 65 25 L 80 40",
    description: "Đường thẳng bẻ góc vuông hướng lên trên (chỉ hướng rẽ trái của lộ trình).",
    exampleScenario: "Tại ngã rẽ lối mòn nhỏ rậm rạp rẽ vào lán trại."
  },
  {
    id: "re_phai",
    name: "11. Rẽ phải",
    meaning: "Đi theo lối rẽ vuông góc về phía bên phải.",
    category: "di_chuyen",
    svgPath: "M 15 25 H 65 V 75 M 50 60 L 65 75 L 80 60",
    description: "Đường thẳng bẻ góc vuông hướng xuống dưới (chỉ hướng rẽ phải).",
    exampleScenario: "Rẽ phải để vào lối đi tắt xuống thung lũng có suối sạch."
  },
  {
    id: "qua_cau",
    name: "12. Qua cầu",
    meaning: "Phía trước có cây cầu bắc ngang, đi qua cầu an toàn.",
    category: "thong_tin",
    svgPath: "M 15 35 H 35 Q 50 45 65 35 H 85 M 15 65 H 35 Q 50 55 65 65 H 85 M 40 50 H 70 M 60 40 L 70 50 L 60 60",
    description: "Biểu tượng thành cầu cong thu hẹp ở giữa kèm mũi tên đi qua.",
    exampleScenario: "Điểm đến là cầu khỉ hoặc cầu treo vượt sông."
  },
  {
    id: "mat_thu_huong_nay",
    name: "13. Mật Thư hướng này",
    meaning: "Có hòm thư hoặc mật thư giấu ở hướng mũi tên.",
    category: "thong_tin",
    svgPath: "M 15 30 H 55 V 70 H 15 Z M 15 30 L 55 70 M 55 30 L 15 70 M 55 50 H 85 M 75 40 L 85 50 L 75 60",
    description: "Hình bao thư (hình chữ nhật có hai đường chéo gạch X) kèm mũi tên chỉ hướng.",
    exampleScenario: "Giúp đội viên định vị chính xác vị trí giấu mật thư trạm kế tiếp."
  },
  {
    id: "theo_loi_tat",
    name: "14. Theo lối tắt",
    meaning: "Đi theo đường tắt ngắn hơn để tiết kiệm thời gian.",
    category: "di_chuyen",
    svgPath: "M 15 50 H 85 M 65 30 L 85 50 L 65 70 M 70 35 L 75 25 M 78 37 L 83 27",
    description: "Mũi tên thẳng có hai gạch nhỏ song song nghiêng nhẹ ở phần cánh.",
    exampleScenario: "Lối đi băng qua rừng thưa bỏ qua cung đường vòng rộng."
  },
  {
    id: "theo_loi_song",
    name: "15. Theo lối sông",
    meaning: "Hành quân bám sát dọc theo dòng sông.",
    category: "thong_tin",
    svgPath: "M 15 30 H 55 V 70 H 15 Z M 20 40 Q 28 35 35 40 T 50 40 M 20 50 Q 28 45 35 50 T 50 50 M 20 60 Q 28 55 35 60 T 50 60 M 55 50 H 85 M 75 40 L 85 50 L 75 60",
    description: "Khung chữ nhật có các gợn sóng nước bên trong nối tiếp mũi tên chỉ hướng.",
    exampleScenario: "Bám bờ sông Hồng đi xuôi về phía hạ lưu."
  },
  {
    id: "vuot_suoi",
    name: "16. Vượt suối",
    meaning: "Vượt qua dòng suối trước mặt để sang bờ bên kia.",
    category: "thong_tin",
    svgPath: "M 20 80 L 80 20 M 65 20 H 80 V 35 M 25 35 Q 35 45 45 35 T 65 35 M 25 50 Q 35 60 45 50 T 65 50 M 25 65 Q 35 75 45 65 T 65 65 M 30 75 L 70 25",
    description: "Mũi tên chéo đè lên 3 gợn sóng nước nằm ngang.",
    exampleScenario: "Vượt qua đoạn suối nông nhiều đá cuội trơn trượt."
  },

  // --- B. 16 DẤU ĐƯỜNG DẠNG HÌNH VẼ (17 to 32) ---
  {
    id: "theo_loi_suoi",
    name: "17. Theo lối suối",
    meaning: "Men theo khe suối, dòng suối để di chuyển.",
    category: "thong_tin",
    svgPath: "M 30 15 Q 20 30 30 45 T 30 75 T 30 90 M 45 15 Q 35 30 45 45 T 45 75 T 45 90 M 60 15 Q 50 30 60 45 T 60 75 T 60 90",
    description: "Ba đường gợn sóng nước chảy dọc song song.",
    exampleScenario: "Đường đi khó khăn trong rừng sâu cần bám theo nguồn nước suối."
  },
  {
    id: "co_trai_gan_day",
    name: "18. Có trại gần đây",
    meaning: "Khu vực đất trại hoặc điểm tập kết sinh hoạt cách đây không xa.",
    category: "thong_tin",
    svgPath: "M 25 70 L 50 20 L 75 70 Z M 40 70 V 55 H 60 V 70 M 25 80 H 75 M 65 75 L 75 80 L 65 85",
    description: "Túp lều hình chữ A có mũi tên nằm ngang bên dưới.",
    exampleScenario: "Chỉ lối rẽ vào trạm trung tâm đất trại."
  },
  {
    id: "cam_trai_duoc",
    name: "19. Cắm trại được",
    meaning: "Khu đất bằng phẳng, rộng rãi, an toàn, được phép dựng lều.",
    category: "menh_lenh",
    svgPath: "M 50 15 L 90 80 H 10 Z M 50 27 L 78 74 H 22 Z",
    description: "Hai hình tam giác đồng tâm lồng vào nhau.",
    exampleScenario: "Lối vào bãi cỏ lớn của rừng thưa thích hợp hạ lều."
  },
  {
    id: "khong_cam_trai_duoc",
    name: "20. Không cắm trại được",
    meaning: "Khu đất cấm cắm trại do sạt lở nguy hiểm hoặc đất tư nhân.",
    category: "menh_lenh",
    svgPath: "M 50 15 L 90 80 H 10 Z M 50 27 L 78 74 H 22 Z M 15 25 L 85 85 M 85 25 L 15 85",
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
    svgPath: "M 50 10 A 40 40 0 1 1 50 90 A 40 40 0 1 1 50 10 M 25 40 Q 37.5 35 50 40 T 75 40 M 25 50 Q 37.5 45 50 50 T 75 50 M 25 60 Q 37.5 55 50 60 T 75 60",
    description: "Vòng tròn chứa 3 đường gợn sóng nước nằm ngang.",
    exampleScenario: "Vẽ tại trạm tiếp nước ngọt sinh hoạt của ban tổ chức."
  },
  {
    id: "nuoc_doc",
    name: "23. Nước độc (Không uống được)",
    meaning: "Nguồn nước nhiễm bẩn, nhiễm độc hóa chất, cấm uống thử.",
    category: "canh_bao",
    svgPath: "M 50 15 L 90 80 H 10 Z M 30 55 Q 40 50 50 55 T 70 55 M 30 65 Q 40 60 50 65 T 70 65",
    description: "Hình tam giác chứa các đường sóng nước nằm ngang.",
    exampleScenario: "Nước ao tù đọng ngập bùn bẩn ô nhiễm nghiêm trọng."
  },
  {
    id: "nguy_hiem",
    name: "24. Nguy hiểm",
    meaning: "Có nguy hiểm khẩn cấp phía trước, cần thận trọng hết mức.",
    category: "canh_bao",
    svgPath: "M 50 15 L 90 80 H 10 Z M 50 58 A 4 4 0 1 1 50 57.9",
    description: "Hình tam giác đều có một dấu chấm tròn lớn nằm chính tâm.",
    exampleScenario: "Vẽ cảnh báo tại khu vực vách đá trơn trượt cheo leo dễ té ngã."
  },
  {
    id: "lam_cang",
    name: "25. Làm cáng",
    meaning: "Nhiệm vụ làm cáng cứu thương giả định vận chuyển thương binh.",
    category: "thong_tin",
    svgPath: "M 10 40 H 90 M 10 60 H 90 M 25 40 A 10 10 0 0 0 25 60 M 75 40 A 10 10 0 0 0 75 60 M 35 40 V 60 M 45 40 V 60 M 55 40 V 60 M 65 40 V 60",
    description: "Hai đường song song dài có các nấc thẳng và vòng tròn ở hai đầu mô tả chiếc cáng tải thương.",
    exampleScenario: "Yêu cầu đội viên tìm cành cây và khăn quàng làm cáng sơ cứu bạn."
  },
  {
    id: "ve_trai_luc_10_gio",
    name: "26. Về trại lúc 10 giờ",
    meaning: "Hội quân tập hợp toàn liên đội tại đất trại lúc 10 giờ.",
    category: "thong_tin",
    svgPath: "M 50 10 A 38 38 0 1 1 49.9 10 M 35 65 L 50 35 L 65 65 Z M 44 65 V 53 H 56 V 65 M 78 22 L 88 12 M 80 8 H 92 V 20",
    description: "Vòng tròn bao quanh túp lều chữ A, có ký hiệu thời gian giờ ở góc phải bên ngoài.",
    exampleScenario: "Lệnh hội quân chuẩn bị làm lễ bế mạc dã ngoại."
  },
  {
    id: "di_theo_dau_chan",
    name: "27. Đi theo dấu chân",
    meaning: "Bám sát dấu chân người đi trước dốc đứng tránh bị lạc.",
    category: "thong_tin",
    svgPath: "M 20 30 H 80 M 20 50 H 80 M 20 70 H 80 M 35 15 V 85 M 65 15 V 85",
    description: "Một mạng lưới hình lưới mắt cáo tạo bởi 3 vạch ngang và 2 vạch dọc.",
    exampleScenario: "Khu vực đồi cát hoặc bùn lầy đòi hỏi bám gót người dẫn đường."
  },
  {
    id: "doi_o_day",
    name: "28. Đợi ở đây",
    meaning: "Dừng lại, đứng tập hợp chờ lệnh mới của chỉ huy.",
    category: "thong_tin",
    svgPath: "M 15 25 H 85 V 75 H 15 Z M 25 35 H 75 V 65 H 25 Z",
    description: "Hai hình chữ nhật đồng tâm lồng khít vào nhau.",
    exampleScenario: "Đội tiên phong dừng lại chờ đội hậu cần bắt kịp."
  },
  {
    id: "binh_an",
    name: "29. Bình an (an toàn)",
    meaning: "Vùng đất an toàn, không có chướng ngại hiểm họa.",
    category: "thong_tin",
    svgPath: "M 20 25 L 45 50 L 20 75 M 40 25 L 65 50 L 40 75 M 60 25 L 85 50 L 60 75",
    description: "Ba ký hiệu chevron xếp nối tiếp hướng về bên phải (>>>).",
    exampleScenario: "Vượt qua trạm thử thách khó khăn, báo hiệu đường đi tiếp an toàn."
  },
  {
    id: "co_ke_nghich",
    name: "30. Có kẻ nghịch (Có địch)",
    meaning: "Cảnh báo khu vực có lực lượng đối phương săn đuổi.",
    category: "canh_bao",
    svgPath: "M 20 25 L 45 50 L 20 75 M 40 25 L 65 50 L 40 75 M 80 25 L 55 50 L 80 75",
    description: "Hai chevron hướng sang phải và một chevron hướng trái đối nghịch (>> <).",
    exampleScenario: "Trong trò chơi trinh sát đêm phòng tránh quân địch mai phục."
  },
  {
    id: "co_thu_du",
    name: "31. Có thú dữ",
    meaning: "Có nguy cơ gặp rắn rết độc, ong rừng hoặc thú rừng lớn.",
    category: "canh_bao",
    svgPath: "M 40 20 Q 50 10 60 20 T 80 40 T 70 70 T 30 70 T 20 40 T 40 20 M 50 48 A 4 4 0 1 1 50 47.9",
    description: "Hình vòng cung mây viền nhấp nhô có một chấm tròn lớn ở tâm.",
    exampleScenario: "Báo trước khi đi vào lùm rậm nhiều bụi gai có rắn lục xanh."
  },
  {
    id: "da_den_noi",
    name: "32. Đã đến nơi (Hết dấu)",
    meaning: "Điểm đích cuối cùng, kết thúc toàn bộ lộ trình.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 1 50 90 A 40 40 0 1 1 50 10 M 50 46 A 4 4 0 1 1 50 45.9",
    description: "Vòng tròn lớn đồng tâm bao quanh một chấm tròn đặc ở chính giữa.",
    exampleScenario: "Đặt tại tâm trại chính hoặc điểm vạch đích kết thúc trò chơi lớn."
  }
];
