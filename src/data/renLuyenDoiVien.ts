export interface BadgeTrainingItem {
  id: string;
  title: string;
  icon: string;
  emoji: string;
  bgGradient: string;
  intro: string;
  standards: string[];
  conditions: string;
  videoUrl?: string;
  lessons: { title: string; content: string }[];
  quizQuestions: { question: string; options: string[]; correctIdx: number; explanation: string }[];
}

export const REN_LUYEN_DOI_VIEN_BADGES: BadgeTrainingItem[] = [
  {
    id: "nghi_thuc_doi",
    title: "Nghi thức Đội",
    icon: "badge_nghi_thuc",
    emoji: "🏕",
    bgGradient: "from-emerald-450 to-green-600",
    intro: "Mục tiêu giúp Đội viên măng non thành thạo các kỹ năng, nghi lễ và động tác đội ngũ, nâng cao tính kỷ luật tự giác.",
    standards: [
      "Hiểu rõ lịch sử thành lập Đội TNTP Hồ Chí Minh, ý nghĩa khẩu hiệu, cờ Đội, cờ nước.",
      "Thực hiện thắt và tháo khăn quàng đỏ đúng kỹ thuật dưới 15 giây.",
      "Thực hiện dứt khoát các động tác tại chỗ (Nghiêm, Nghỉ, Chào, Quay trái/phải/sau).",
      "Nhận biết và di chuyển đúng vị trí trong 4 đội hình cơ bản (Hàng dọc, Hàng ngang, Chữ U, Vòng tròn)."
    ],
    conditions: "Đạt từ 16/20 điểm trong bài thi lý thuyết tổng hợp về Nghi thức Đội và hoàn thành 5 thử thách thắt khăn quàng.",
    lessons: [
      {
        title: "Ý nghĩa của kỷ luật Nghi thức",
        content: "Nghi thức Đội không đơn thuần là các động tác cơ thể mà là sự thể hiện lòng tôn kính Tổ quốc, tinh thần đồng đội keo sơn gắn kết. Khi mọi người cùng bước đều bước, cùng giơ tay chào Đội dưới cờ hiệu, chúng ta là một tập thể đoàn kết vững mạnh nhất."
      },
      {
        title: "Quy tắc chỉ huy còi hiệu",
        content: "Chỉ huy sử dụng còi hơi phát tín hiệu còi cờ chuẩn xác. Một tiếng còi dài ngân vang là lệnh chuẩn bị. Các nhịp còi dồn dập ngắn là hiệu lệnh di chuyển nhanh. Nhận biết nhanh nhịp còi giúp đội ngũ phản xạ nhanh chóng, trật tự."
      }
    ],
    quizQuestions: [
      {
        question: "Cự ly hẹp giữa hai Đội viên đứng cạnh nhau trong hàng ngang được đo bằng gì?",
        options: ["Một cánh tay", "Một khuỷu tay", "Một nắm tay", "Một bước chân"],
        correctIdx: 2,
        explanation: "Cự ly hẹp được xác định bằng một nắm tay (tay trái chống hông bạn bên cạnh, nắm tay khép khép chạm đùi)."
      },
      {
        question: "Khẩu lệnh quay đằng sau quay, người Đội viên thực hiện quay về hướng bên nào?",
        options: ["Bên trái 180 độ", "Bên phải 180 độ", "Bên phải 90 độ", "Quay hướng nào thuận tay thì quay"],
        correctIdx: 1,
        explanation: "Động tác đằng sau quay luôn thực hiện quay người về bên phải một vòng bán nguyệt 180 độ."
      }
    ]
  },
  {
    id: "an_toan_giao_thong",
    title: "An toàn giao thông",
    icon: "badge_atgt",
    emoji: "🚦",
    bgGradient: "from-blue-400 to-cyan-500",
    intro: "Mục tiêu trang bị kiến thức và kỹ năng thực hành giúp học sinh tiểu học đi đường an toàn, phòng chống tai nạn giao thông.",
    standards: [
      "Nhận biết và giải thích đúng ý nghĩa của 4 nhóm biển báo giao thông chính đường bộ.",
      "Thực hiện đội mũ bảo hiểm đúng quy cách (vừa cỡ đầu, cài quai chắc chắn cằm cách 2 ngón tay).",
      "Biết cách đi bộ an toàn trên vỉa hè, đi sát mép đường bên phải khi không có vỉa hè.",
      "Biết cách đi xe đạp an toàn, xin đường rẽ trái phải đúng luật bảo đảm an toàn."
    ],
    conditions: "Hoàn thành bài thi trắc nghiệm Luật An toàn giao thông đạt từ 16/20 điểm đúng trở lên.",
    lessons: [
      {
        title: "Phân biệt 4 nhóm biển báo chính",
        content: "1. Biển báo cấm (Hình tròn, viền đỏ, nền trắng, hình vẽ đen): Báo hiệu những việc cấm làm.\n2. Biển báo nguy hiểm (Hình tam giác đều, viền đỏ, nền vàng, hình vẽ đen): Báo trước nguy cơ hiểm họa.\n3. Biển chỉ dẫn (Hình vuông/Chữ nhật, nền xanh lam): Hướng dẫn thông tin hữu ích.\n4. Biển hiệu lệnh (Hình tròn, nền xanh lam, hình vẽ trắng): Bắt buộc thực hiện theo hiệu lệnh."
      },
      {
        title: "Kỹ năng đội mũ bảo hiểm 3 bước",
        content: "Bước 1: Chọn mũ bảo hiểm đạt tiêu chuẩn vừa vặn với kích thước đầu của em.\nBước 2: Đội mũ ngay ngắn thẳng đầu sao cho vành mũ song song chân mày.\nBước 3: Cài khóa quai mũ ôm sát cổ, thử đút 2 ngón tay dưới cằm, nếu vừa là quai cài chuẩn an toàn."
      }
    ],
    quizQuestions: [
      {
        question: "Biển báo giao thông đường bộ có hình tam giác đều, viền đỏ, nền vàng là nhóm biển báo gì?",
        options: ["Biển báo cấm", "Biển báo nguy hiểm", "Biển hiệu lệnh", "Biển chỉ dẫn"],
        correctIdx: 1,
        explanation: "Hình tam giác đều viền đỏ nền vàng là quy chuẩn biển báo nguy hiểm cảnh báo hiểm họa phía trước."
      },
      {
        question: "Khi đi bộ trên đường không có vỉa hè, em phải đi như thế nào là đúng luật?",
        options: ["Đi giữa lòng đường", "Đi sát mép đường bên tay trái", "Đi sát mép đường bên tay phải", "Đi zích zắc để tránh xe"],
        correctIdx: 2,
        explanation: "Luật quy định người đi bộ ở nơi không có vỉa hè phải đi sát mép đường bên tay phải theo chiều đi của mình."
      }
    ]
  },
  {
    id: "nha_sinh_hoc_nho_tuoi",
    title: "Nhà sinh học nhỏ tuổi",
    icon: "badge_sinh_hoc",
    emoji: "🌱",
    bgGradient: "from-green-400 to-emerald-500",
    intro: "Khơi dậy niềm yêu thích nghiên cứu thực vật, bảo vệ động vật hoang dã và rèn luyện thói quen bảo vệ môi trường xanh.",
    standards: [
      "Phân loại rác thải sinh hoạt hàng ngày thành 3 nhóm tại nguồn (Hữu cơ, Vô cơ, Tái chế).",
      "Nhận biết và nêu công dụng của 5 loại cây thuốc nam phổ biến (Tía tô, Gừng, Đinh lăng, Sả, Bạc hà).",
      "Hiểu biết về biến đổi khí hậu và 3 hành động cụ thể để giảm rác thải nhựa hàng ngày.",
      "Tự trồng và chăm sóc một cây xanh hoặc một chậu hoa nhỏ tại góc học tập."
    ],
    conditions: "Vượt qua thử thách phân loại 20 loại rác thải thực tế và đạt 16/20 câu hỏi trắc nghiệm thế giới tự nhiên.",
    lessons: [
      {
        title: "Quy tắc phân loại rác thải tại nguồn",
        content: "1. Rác hữu cơ dễ phân hủy (thức ăn thừa, rau củ quả hỏng, lá cây rụng): Dùng để ủ phân bón hữu cơ.\n2. Rác tái chế (giấy, bìa carton, chai nhựa, lon nhôm vỏ hộp sữa): Gửi đi nhà máy tái chế làm đồ dùng mới.\n3. Rác vô cơ còn lại (túi nilon rách, hộp xốp, sành sứ vỡ): Mang chôn lấp xử lý bảo đảm vệ sinh."
      },
      {
        title: "Hạn chế rác thải nhựa với quy tắc 3R",
        content: "Reduce (Giảm thiểu): Hạn chế dùng đồ nhựa dùng một lần như cốc nhựa ống hút túi nilon.\nReuse (Tái sử dụng): Dùng lại chai lọ cũ làm bình tưới nước hoặc hộp đựng bút xinh xắn.\nRecycle (Tái chế): Thu gom rác thải nhựa chuyển về trạm tái chế mầm non."
      }
    ],
    quizQuestions: [
      {
        question: "Vỏ hộp sữa giấy sau khi uống xong được phân loại vào nhóm rác nào?",
        options: ["Rác hữu cơ dễ phân hủy", "Rác vô cơ còn lại", "Rác tái chế", "Rác độc hại"],
        correctIdx: 2,
        explanation: "Vỏ hộp giấy có thể tái chế thu hồi sợi giấy cellulose làm bột giấy sạch."
      },
      {
        question: "Lá cây rụng trong sân trường thuộc loại rác nào?",
        options: ["Rác tái chế", "Rác hữu cơ dễ phân hủy", "Rác vô cơ còn lại", "Chất thải nguy hại"],
        correctIdx: 1,
        explanation: "Lá cây là chất hữu cơ tự nhiên phân hủy sinh học tự nhiên làm mùn đất rất tốt."
      }
    ]
  },
  {
    id: "tin_hoc_tre",
    title: "Tin học trẻ",
    icon: "badge_tin_hoc",
    emoji: "💻",
    bgGradient: "from-sky-400 to-indigo-500",
    intro: "Hướng dẫn các kỹ năng tin học cơ bản, soạn thảo văn bản văn phòng và quy tắc lướt mạng internet an toàn lành mạnh.",
    standards: [
      "Sử dụng bàn phím gõ văn bản 10 ngón cơ bản (đặt tay đúng các phím cơ sở F và J).",
      "Biết cách tìm kiếm thông tin học tập an toàn trên Google sử dụng từ khóa khoa học chính xác.",
      "Hiểu thế nào là thông tin cá nhân và 3 nguyên tắc bảo mật tài khoản cá nhân trực tuyến.",
      "Biết cách gửi một bức thư điện tử email kèm tệp tin tài liệu học tập của em."
    ],
    conditions: "Hoàn thành bài kiểm tra trắc nghiệm Kỹ năng số đạt tối thiểu 16/20 điểm đúng.",
    lessons: [
      {
        title: "Nguyên tắc đặt tay gõ phím 10 ngón",
        content: "Hàng phím cơ sở là hàng phím quan trọng nhất. Ngón trỏ tay trái đặt lên phím F (có gờ nổi), ngón trỏ tay phải đặt lên phím J (có gờ nổi). Các ngón còn lại đặt tự nhiên bên cạnh phím cơ sở. Gõ xong ngón nào quay về vị trí cơ sở cũ ngay lập tức."
      },
      {
        title: "Lướt internet an toàn không lộ thông tin",
        content: "Tuyệt đối không chia sẻ mật khẩu tài khoản học tập, số điện thoại, địa chỉ nhà, trường học của em cho người lạ trên mạng xã hội. Khi gặp các đường link lạ hoặc trang web yêu cầu nhập thông tin, hãy hỏi ngay ý kiến của bố mẹ hoặc thầy cô."
      }
    ],
    quizQuestions: [
      {
        question: "Hai phím nào trên bàn phím máy tính có gờ nổi để đặt ngón trỏ định vị gõ 10 ngón?",
        options: ["Phím G và H", "Phím F và J", "Phím A và S", "Phím D và K"],
        correctIdx: 1,
        explanation: "Phím F và J là hai phím định vị có gờ nổi định vị xúc giác ngón trỏ hai bàn tay trên bàn phím."
      },
      {
        question: "Khi có người lạ trên mạng hỏi xin số điện thoại và địa chỉ nhà riêng, em nên làm gì?",
        options: ["Cung cấp ngay lập tức để làm quen", "Từ chối thẳng thắn và báo ngay cho bố mẹ hoặc thầy cô biết", "Đưa số điện thoại giả", "Hẹn gặp mặt ngoài đời thực"],
        correctIdx: 1,
        explanation: "Bảo mật thông tin cá nhân là tối quan trọng để giữ an toàn thân thể của học sinh mầm non trực tuyến."
      }
    ]
  },
  {
    id: "van_dong_vien_nho_tuoi",
    title: "Vận động viên nhỏ tuổi",
    icon: "badge_van_dong",
    emoji: "🏃",
    bgGradient: "from-orange-400 to-red-500",
    intro: "Khuyến khích rèn luyện thể dục thể thao nâng cao tầm vóc, sức bền và hiểu biết về chế độ dinh dưỡng học đường khỏe mạnh.",
    standards: [
      "Thực hiện đều đặn thói quen tập thể dục buổi sáng 10 phút mỗi ngày nâng cao sức bền.",
      "Hiểu luật chơi cơ bản và trực tiếp chơi tối thiểu 1 môn thể thao đội nhóm (bóng đá, cầu lông, cờ vua...).",
      "Hiểu tháp dinh dưỡng cân đối và tầm quan trọng của việc uống đủ 1.5 lít nước sạch mỗi ngày.",
      "Biết cách sơ cứu cơ bản các vết xước ngoài da nhỏ khi chơi thể thao dã ngoại."
    ],
    conditions: "Hoàn thành bài thi trắc nghiệm Thể thao & Sức khỏe đạt 16/20 điểm đúng trở lên.",
    lessons: [
      {
        title: "Tầm quan trọng của việc khởi động trước khi tập",
        content: "Khởi động là bước bắt buộc trước khi tập thể thao. Xoay đều các khớp cổ tay, cổ chân, khớp gối, vai khoảng 5 phút giúp làm nóng cơ thể, giãn cơ phòng ngừa các chấn thương trật khớp co cơ đau đớn."
      },
      {
        title: "Uống nước đúng cách khi tập luyện",
        content: "Không nên uống quá nhiều nước cùng một lúc ngay sau khi chạy mệt. Hãy uống từng ngụm nhỏ, nước lọc sạch ấm để cơ thể hấp thụ dễ dàng. Tránh nước ngọt có gas dã ngoại vì gây đầy hơi chướng bụng khi hoạt động."
      }
    ],
    quizQuestions: [
      {
        question: "Trước khi bắt đầu chơi bóng đá hay chạy nhanh, em bắt buộc phải làm việc gì đầu tiên?",
        options: ["Uống thật nhiều nước ngọt", "Ăn một bữa thật no nê", "Khởi động xoay các khớp nhẹ nhàng 5 phút", "Ngồi nghỉ ngơi thư giãn"],
        correctIdx: 2,
        explanation: "Khởi động giúp làm nóng cơ xương khớp, tránh chấn thương chuột rút ngã đau đớn khi vận động mạnh."
      },
      {
        question: "Mỗi ngày cơ thể học sinh tiểu học cần bổ sung khoảng bao nhiêu lít nước sạch là cân đối?",
        options: ["0.5 lít nước", "Từ 1.5 đến 2 lít nước sạch", "Uống càng nhiều nước ngọt càng tốt", "5 lít nước lọc"],
        correctIdx: 1,
        explanation: "Bổ sung trung bình khoảng 1.5 đến 2.0 lít nước sạch giúp cơ thể tuần hoàn giải độc tố dẻo dai khỏe mạnh."
      }
    ]
  },
  {
    id: "cham_hoc",
    title: "Chuyên hiệu Chăm học",
    icon: "badge_cham_hoc",
    emoji: "📚",
    bgGradient: "from-purple-500 to-pink-500",
    intro: "Rèn luyện đức tính tự học tự chủ, thói quen đi học chuyên cần và kỹ năng lập thời gian biểu khoa học tại nhà.",
    standards: [
      "Đi học đầy đủ chuyên cần, không đi học muộn trừ trường hợp ốm đau khẩn cấp.",
      "Hoàn thành toàn bộ bài tập về nhà và chuẩn bị sách vở đúng thời khóa biểu tối hôm trước.",
      "Hăng hái phát biểu xây dựng bài trong lớp học, chú ý lắng nghe lời giảng thầy cô.",
      "Có thời gian biểu tự học cố định tại nhà và tuân thủ nghiêm túc tự giác hàng ngày."
    ],
    conditions: "Hoàn thành bài thi kỹ năng tự học đạt từ 16/20 điểm đúng trở lên.",
    lessons: [
      {
        title: "Phương pháp Pomodoro học tập tập trung",
        content: "Học tập tập trung cao độ bằng phương pháp quả cà chua: Học tập nghiêm túc trong 25 phút (không điện thoại, không tivi đồ chơi), sau đó nghỉ giải lao thư giãn 5 phút. Lặp lại 3-4 lần giúp não bộ học nhớ lâu, học bài nhanh mà không mệt mỏi."
      },
      {
        title: "Sắp xếp góc học tập khoa học ngăn nắp",
        content: "Góc học tập sạch sẽ ngăn nắp giúp tăng cảm hứng học tập tốt. Sách vở xếp gọn gàng theo môn học trên giá. Bút thước để trong hộp gọn gàng. Đủ ánh sáng đèn chống cận giúp bảo vệ đôi mắt ngọc ngà của em."
      }
    ],
    quizQuestions: [
      {
        question: "Thời điểm tốt nhất để em chuẩn bị sách vở và đồ dùng học tập cho ngày mai đi học là lúc nào?",
        options: ["Sáng sớm chuẩn bị vội vàng trước khi đi học", "Tối hôm trước sau khi hoàn thành bài tập về nhà", "Đến lớp mượn bạn bè đồ dùng sau", "Không cần chuẩn bị trước"],
        correctIdx: 1,
        explanation: "Chuẩn bị sách vở tối hôm trước giúp em chủ động, đầy đủ tài liệu học tập, tránh đi học muộn quên đồ."
      },
      {
        question: "Trong giờ học trên lớp, khi muốn phát biểu đóng góp ý kiến xây dựng bài học, em cần làm gì?",
        options: ["Nói chen ngang lời cô giáo giảng", "Giơ tay phát biểu lịch sự và chờ thầy cô gọi tên", "Hét thật to câu trả lời", "Nói thầm với bạn bên cạnh"],
        correctIdx: 1,
        explanation: "Giơ tay phát biểu lịch sự là biểu hiện tôn trọng thầy cô giáo và giữ trật tự kỷ luật lớp học Đội viên."
      }
    ]
  }
];
