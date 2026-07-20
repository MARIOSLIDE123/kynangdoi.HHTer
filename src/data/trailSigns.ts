import { TrailSignItem } from '../types';

export const TRAIL_SIGNS: TrailSignItem[] = [
  {
    id: "bat_dau_di",
    name: "Bắt đầu đi",
    meaning: "Bắt đầu cuộc hành trình rèn luyện, đi theo chiều mũi tên.",
    category: "di_chuyen",
    svgPath: "M 10 50 L 90 50 M 70 30 L 90 50 L 70 70",
    description: "Ký hiệu mũi tên thẳng, đầu mũi tên chỉ hướng xuất phát.",
    exampleScenario: "Đặt ngay tại cổng trại hoặc điểm khởi hành của hành trình trò chơi lớn."
  },
  {
    id: "theo_huong_nay",
    name: "Đi theo hướng này",
    meaning: "Hướng đi chính xác cần tuân thủ.",
    category: "di_chuyen",
    svgPath: "M 10 50 H 90 M 65 25 L 90 50 L 65 75",
    description: "Mũi tên đơn mảnh, sắc nét, thường vẽ trên đất hoặc xếp bằng cành cây.",
    exampleScenario: "Tại các ngã rẽ không rõ ràng để định hướng cho đội viên."
  },
  {
    id: "re_trai",
    name: "Rẽ bên trái",
    meaning: "Chuyển hướng di chuyển sang bên trái.",
    category: "di_chuyen",
    svgPath: "M 90 70 V 50 H 10 M 30 30 L 10 50 L 30 70",
    description: "Mũi tên vuông góc quay đầu về hướng bên trái người đi.",
    exampleScenario: "Sắp tới ngã ba, có cắm dấu rẽ trái vào đường mòn nhỏ."
  },
  {
    id: "re_phai",
    name: "Rẽ bên phải",
    meaning: "Chuyển hướng di chuyển sang bên phải.",
    category: "di_chuyen",
    svgPath: "M 10 70 V 50 H 90 M 70 30 L 90 50 L 70 70",
    description: "Mũi tên vuông góc quay đầu về hướng bên phải.",
    exampleScenario: "Chỉ đường đi tránh khu vực sạt lở hoặc khu vực cấm bên trái."
  },
  {
    id: "tranh_vat_can",
    name: "Đường đi vòng tránh",
    meaning: "Đi vòng qua vật cản, chướng ngại vật trước mặt.",
    category: "di_chuyen",
    svgPath: "M 10 50 Q 50 10 90 50 M 70 30 L 90 50 L 70 65 M 40 45 H 60 V 55 H 40 Z",
    description: "Mũi tên cong vòng lên trên một khối hộp mô tả vật cản.",
    exampleScenario: "Phía trước có ao sâu hoặc lùm gai nhọn nguy hiểm, đi vòng qua."
  },
  {
    id: "chay_nhanh_len",
    name: "Chạy nhanh lên",
    meaning: "Yêu cầu cả đội tăng tốc, chạy nhanh để bắt kịp thời gian.",
    category: "di_chuyen",
    svgPath: "M 10 50 H 90 M 70 30 L 90 50 L 70 70 M 55 30 L 75 50 L 55 70 M 40 30 L 60 50 L 40 70",
    description: "Mũi tên có 3 lớp đầu mũi tên xếp chồng lên nhau tạo cảm giác tốc độ.",
    exampleScenario: "Trạm kế tiếp sắp đóng cửa hoặc sắp hết thời gian thi đấu."
  },
  {
    id: "di_cham_lai",
    name: "Đi chậm lại",
    meaning: "Giảm tốc độ di chuyển, chú ý an toàn.",
    category: "di_chuyen",
    svgPath: "M 10 50 H 90 M 70 30 L 90 50 L 70 70 M 40 30 L 40 70 M 50 30 L 50 70",
    description: "Mũi tên bị chặn lại bởi các vạch đứng cắt ngang phía sau đầu mũi tên.",
    exampleScenario: "Sắp đi vào đoạn đường trơn trượt hoặc dốc đá cheo leo nguy hiểm."
  },
  {
    id: "quay_tro_lai",
    name: "Trở lại đường cũ",
    meaning: "Quay đầu 180 độ, quay lại điểm rẽ trước.",
    category: "di_chuyen",
    svgPath: "M 15 35 H 85 C 95 35 95 65 85 65 H 15 M 35 50 L 15 65 L 35 80",
    description: "Mũi tên uốn vòng chữ U chỉ ngược lại hướng ban đầu.",
    exampleScenario: "Đội viên đi nhầm hướng đã đi quá xa, dấu này yêu cầu quay lại gấp."
  },
  {
    id: "sai_duong",
    name: "Đã đi sai đường",
    meaning: "Hướng đi này hoàn toàn sai, không được đi vào.",
    category: "canh_bao",
    svgPath: "M 20 20 L 80 80 M 80 20 L 20 80",
    description: "Dấu gạch chéo chữ X lớn, báo hiệu ngõ cụt hoặc hiểm họa.",
    exampleScenario: "Đặt tại lối vào khu bảo tồn cấm hoặc bãi sụt lún nguy hiểm."
  },
  {
    id: "nguy_hiem",
    name: "Nguy hiểm phía trước",
    meaning: "Cảnh báo có nguy hiểm khẩn cấp nguy hại đến tính mạng.",
    category: "canh_bao",
    svgPath: "M 50 15 L 90 80 H 10 Z M 50 40 V 60 M 50 70 V 73",
    description: "Hình tam giác đều có chứa dấu chấm cảm bên trong.",
    exampleScenario: "Khu vực có sạt lở đá bão lũ, hoặc có hố sâu không rào chắn."
  },
  {
    id: "thu_du",
    name: "Có thú dữ / Thú dữ nguy hiểm",
    meaning: "Cảnh báo khu vực rừng rậm có thú dữ, rắn rết hoặc bẫy.",
    category: "canh_bao",
    svgPath: "M 30 30 Q 30 50 50 70 Q 70 50 70 30 C 60 10 40 10 30 30 M 50 35 L 45 45 H 55 Z M 40 35 H 45 M 55 35 H 60",
    description: "Biểu tượng hàm răng sắc nhọn hoặc vết chân thú dữ gạch chéo.",
    exampleScenario: "Khu vực sườn núi rậm rạp thường có ong rừng hoặc rắn độc làm tổ."
  },
  {
    id: "cau_gay",
    name: "Cầu gãy / Đường tắc",
    meaning: "Cảnh báo cầu phía trước đã gãy, sông sâu nguy hiểm.",
    category: "canh_bao",
    svgPath: "M 10 40 H 40 L 50 65 L 60 40 H 90 M 10 50 H 35 L 50 75 L 65 50 H 90",
    description: "Hai đường song song biểu trưng cho cây cầu bị nứt gãy sập ở giữa.",
    exampleScenario: "Cây cầu khỉ bắc qua suối bị lũ cuốn trôi, cần tìm lối đi khác."
  },
  {
    id: "nuoc_uong_duoc",
    name: "Nước uống được",
    meaning: "Có nguồn nước sạch, ngọt, an toàn để uống.",
    category: "thong_tin",
    svgPath: "M 10 60 Q 30 40 50 60 T 90 60 M 50 20 V 45 M 43 35 L 50 45 L 57 35",
    description: "Làn sóng nước dạt dào kèm theo ký hiệu giọt nước hoặc cốc sạch.",
    exampleScenario: "Gần giếng nước tự nhiên hoặc bể nước lọc sinh hoạt dã ngoại."
  },
  {
    id: "nuoc_doc",
    name: "Nước không uống được",
    meaning: "Nguồn nước nhiễm bẩn, nhiễm độc hoặc nước mặn.",
    category: "canh_bao",
    svgPath: "M 10 60 Q 30 40 50 60 T 90 60 M 35 25 L 65 55 M 65 25 L 35 55",
    description: "Sóng nước nhưng có một dấu X lớn đè lên trên.",
    exampleScenario: "Ao nước đục chứa hóa chất nông nghiệp hoặc nguồn nước tù đọng."
  },
  {
    id: "chu_y",
    name: "Chú ý / Coi chừng",
    meaning: "Cần chú ý quan sát xung quanh, có thể có bất ngờ.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 M 50 30 V 55 M 50 68 V 72",
    description: "Vòng tròn bao quanh dấu chấm than đứng thẳng cảnh giác.",
    exampleScenario: "Gần tới mật thư thứ hai hoặc điểm ranh giới đổi hướng quan trọng."
  },
  {
    id: "tin_tuc_huong_nay",
    name: "Có tin tức ở hướng này",
    meaning: "Có thông tin chỉ dẫn bí mật hoặc rương tiếp tế.",
    category: "thong_tin",
    svgPath: "M 15 25 H 85 V 75 H 15 Z M 15 25 L 50 50 L 85 25 M 50 50 V 75",
    description: "Hình bì thư có mũi tên chỉ sang một góc bên cạnh.",
    exampleScenario: "Gợi ý cho người chơi tìm mẩu giấy ghi nhiệm vụ giấu trong hốc đá."
  },
  {
    id: "mat_thu_buoc",
    name: "Mật thư cách đây ... bước",
    meaning: "Có mật thư nằm ẩn cách vị trí này số bước chân ghi trong hình.",
    category: "menh_lenh",
    svgPath: "M 20 20 H 80 V 80 H 20 Z M 35 45 H 65 M 35 60 H 65 M 40 30 H 45",
    description: "Hình tờ giấy mật thư cuộn tròn hoặc vuông vẽ số bước cụ thể bên cạnh.",
    exampleScenario: "Được vẽ trên một tảng đá phẳng: 'MT -> 15' nghĩa là bước tiếp 15 bước sẽ thấy."
  },
  {
    id: "trai_huong_nay",
    name: "Trại ở hướng này",
    meaning: "Đất trại chính, đích đến nằm theo hướng mũi tên chỉ.",
    category: "thong_tin",
    svgPath: "M 20 80 L 50 25 L 80 80 Z M 35 80 V 60 H 65 V 80",
    description: "Hình vẽ túp lều chữ A xinh xắn hướng về phía trước dã ngoại.",
    exampleScenario: "Biển chỉ dẫn chào mừng quay trở lại khu trung tâm cắm trại."
  },
  {
    id: "nguon_nuoc_met",
    name: "Nguồn nước cách đây ... mét",
    meaning: "Có suối hoặc giếng sạch cách đây khoảng cách cụ thể.",
    category: "thong_tin",
    svgPath: "M 50 20 C 25 55 25 80 50 80 C 75 80 75 55 50 20 Z M 40 60 H 60",
    description: "Hình giọt nước khổng lồ ghi khoảng cách mét bên trong hoặc bên dưới.",
    exampleScenario: "Chỉ đường đi lấy nước nấu cơm trưa cho toàn tiểu đội."
  },
  {
    id: "hai_nga",
    name: "Đường chia làm hai ngả",
    meaning: "Đường đi phía trước tách đôi. Cần xem kỹ chỉ dẫn đi nhánh nào.",
    category: "di_chuyen",
    svgPath: "M 50 90 V 55 L 20 25 M 50 55 L 80 25 M 10 25 H 35 M 65 25 H 90",
    description: "Ký hiệu hình chữ Y chỉ hai hướng tỏa đi trái và phải.",
    exampleScenario: "Ngã rẽ lối mòn lên đỉnh núi và lối mòn đi xuống thung lũng."
  },
  {
    id: "ba_nga",
    name: "Đường chia làm ba ngả",
    meaning: "Đường rẽ 3 hướng phức tạp. Tránh lạc đội ngũ.",
    category: "di_chuyen",
    svgPath: "M 50 90 V 45 M 50 45 L 15 15 M 50 45 V 10 M 50 45 L 85 15",
    description: "Chữ mũi ba chạc tỏa lên hướng Bắc, Tây Bắc và Đông Bắc.",
    exampleScenario: "Một giao lộ trong rừng thưa đòi hỏi tinh thần tập trung dò bản đồ."
  },
  {
    id: "chuong_ngai_vat",
    name: "Có chướng ngại vật",
    meaning: "Phía trước mặt có hào sâu, cây đổ chắn ngang đường.",
    category: "canh_bao",
    svgPath: "M 10 70 L 90 30 M 10 30 L 90 70 M 10 50 H 90",
    description: "Các thanh ngang chắn chéo đè nặng lên trục thẳng biểu thị sự bế tắc.",
    exampleScenario: "Mây sương mù dốc đá trơn trượt hoặc khu vực đang sửa chữa rào chắn."
  },
  {
    id: "an_toan",
    name: "Bình an / An toàn",
    meaning: "Khu vực an toàn, có thể hạ trại nghỉ ngơi, lấy lại sức.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 1 49.9 10 M 35 50 L 45 60 L 68 35",
    description: "Hình tròn chứa một dấu tick chữ V lớn biểu tượng xanh lá cây hòa bình.",
    exampleScenario: "Bãi cỏ bằng phẳng dã ngoại không có muỗi độc hay sụt lún dốc đứng."
  },
  {
    id: "cuu_toi_voi",
    name: "Cứu tôi với (SOS)",
    meaning: "Đội viên hoặc trạm gặp nguy khẩn cấp cần hỗ trợ y tế ngay lập tức.",
    category: "canh_bao",
    svgPath: "M 15 35 Q 25 15 35 35 T 55 35 M 20 65 L 80 65 M 30 75 L 70 75",
    description: "Xếp 3 đống củi hình tam giác tỏa khói hoặc 3 vạch lớn đè song song.",
    exampleScenario: "Khi thành viên bị chấn thương nặng cần sự trợ giúp cứu nạn dã ngoại."
  },
  {
    id: "dung_lai",
    name: "Đứng lại / Đợi ở đây",
    meaning: "Yêu cầu cả tiểu đội tập hợp đứng lại chờ lệnh trưởng trạm.",
    category: "menh_lenh",
    svgPath: "M 50 10 L 90 30 V 70 L 50 90 L 10 70 V 30 Z M 30 50 H 70",
    description: "Hình bát giác đều (giống biển báo Stop quốc tế) có vạch ngang thẳng.",
    exampleScenario: "Tại ranh giới trước khi vào cổng thử thách thử trí thông minh."
  },
  {
    id: "hang_mot",
    name: "Đi hàng một",
    meaning: "Bắt buộc đi thành hàng dọc thẳng tắp, không đi dàn hàng ngang.",
    category: "menh_lenh",
    svgPath: "M 50 10 V 90 M 40 30 H 60 M 40 50 H 60 M 40 70 H 60",
    description: "Trục dọc thẳng đứng có các nấc ngang nhỏ biểu hiện hàng dọc kỷ luật.",
    exampleScenario: "Đi dọc theo mép bờ ruộng nhỏ hẹp hoặc sườn đồi dốc đứng."
  },
  {
    id: "giai_tan",
    name: "Giải tán / Về nhà",
    meaning: "Kết thúc hành trình, mọi người tự do giải tán hoặc về nhà.",
    category: "menh_lenh",
    svgPath: "M 50 50 M 50 50 L 15 15 M 50 50 L 85 15 M 50 50 L 15 85 M 50 50 L 85 85 M 50 25 V 10 M 50 75 V 90",
    description: "Biểu tượng tâm tỏa tròn ra 4 góc chỉ sự tự do, kết thúc hành trình.",
    exampleScenario: "Sau buổi lửa trại hoặc sau lễ tổng kết trò chơi lớn tuyên dương."
  },
  {
    id: "toi_o_day",
    name: "Tôi ở đây",
    meaning: "Điểm đóng quân của người chỉ đường hoặc mục tiêu trạm tìm kiếm.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 M 50 30 A 20 20 0 1 0 50 70 A 20 20 0 1 0 50 30",
    description: "Hai vòng tròn đồng tâm phóng tầm mắt tựa hồng tâm bắn súng.",
    exampleScenario: "Nơi thủ quỹ hoặc trưởng trạm ẩn nấp trong trò chơi trinh sát mật."
  },
  {
    id: "da_ve_nha",
    name: "Chúng tôi đã về nhà",
    meaning: "Trạm kết thúc hoàn toàn. Mọi người đã dọn dẹp và di chuyển về nhà.",
    category: "thong_tin",
    svgPath: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 M 50 45 A 5 5 0 1 0 50 55 A 5 5 0 1 0 50 45",
    description: "Một vòng tròn lớn có một chấm tròn đặc nằm chính tâm vòng tròn.",
    exampleScenario: "Vẽ tại điểm cuối của chặng đường chơi để báo hiệu không còn ai phía sau."
  },
  {
    id: "gap_nhau_gio",
    name: "Gặp nhau lúc ... giờ",
    meaning: "Lệnh tập hợp toàn đội tại đây đúng giờ quy định ghi trong lòng dấu.",
    category: "menh_lenh",
    svgPath: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 M 50 50 L 70 50 M 50 50 V 25",
    description: "Hình mặt đồng hồ tròn trịa vẽ hai kim chỉ mốc thời gian tụ họp.",
    exampleScenario: "Đặt tại bãi trung tâm: vẽ thêm chữ '15h' báo giờ hội quân duyệt đội ngũ."
  },
  {
    id: "di_lang_le",
    name: "Đi lặng lẽ / Yên lặng",
    meaning: "Yêu cầu tuyệt đối giữ im lặng, không đùa giỡn, tránh bị phát hiện.",
    category: "menh_lenh",
    svgPath: "M 10 30 H 90 M 10 50 H 90 M 10 70 H 90 M 30 15 V 85",
    description: "Ba thanh ngang song song chặn bởi một thanh dọc lớn giống hình khoá miệng.",
    exampleScenario: "Hành quân đêm trinh sát căn cứ giả định bảo đảm yếu tố bí mật."
  },
  {
    id: "dot_lua_o_day",
    name: "Có lửa / Đốt lửa ở đây",
    meaning: "Khu vực được phép thắp lửa sưởi ấm hoặc nấu nướng.",
    category: "thong_tin",
    svgPath: "M 50 15 Q 65 50 50 85 Q 35 50 50 15 M 50 40 Q 60 60 50 80 Q 40 60 50 40 M 20 85 H 80",
    description: "Biểu tượng ngọn lửa ba tầng sinh động bập bùng trên củi khô.",
    exampleScenario: "Điểm quy định nấu cơm di động dã ngoại tranh giải khéo tay."
  }
];
