export interface LessonItem {
  id: number;
  title: string;
  shortDesc: string;
  icon: string;
  bgGradient: string;
  historyTimeline?: { year: string; event: string; details: string }[];
  meaningDetails?: string;
  principles?: string[];
  memorizeTips: string;
  visualData?: any;
  exampleScenario: string;
  steps?: { stepNum: number; title: string; desc: string; animType?: string }[];
  detailsMap?: { part: string; title: string; desc: string; coords: { x: number; y: number } }[];
  formations?: { name: string; whenToUse: string; desc: string; layoutData: string; example: string }[];
  commands?: { cmd: string; voiceLabel: string; animationId: string; description: string }[];
  quizQuestions: { question: string; options: string[]; correctIdx: number; explanation: string }[];
}

export const NGHI_THUC_DOI_LESSONS: LessonItem[] = [
  {
    id: 1,
    title: "Bài 1: Giới thiệu Đội TNTP Hồ Chí Minh",
    shortDesc: "Lịch sử hình thành, khẩu hiệu, 5 điều Bác Hồ dạy và điều lệ Đội.",
    icon: "⛺️",
    bgGradient: "from-emerald-400 to-green-600",
    historyTimeline: [
      { year: "15/05/1941", event: "Thành lập Đội", details: "Đội Nhi đồng Cứu quốc được thành lập tại thôn Nà Mạ, xã Trường Hà, Hà Quảng, Cao Bằng với 5 đội viên đầu tiên do Kim Đồng làm Đội trưởng." },
      { year: "1956", event: "Đội Thiếu niên Tiền phong", details: "Đội được đổi tên thành Đội Thiếu niên Tiền phong Việt Nam để khẳng định vai trò đi đầu, dẫn dắt thế hệ măng non đất nước." },
      { year: "30/01/1970", event: "Đội TNTP Hồ Chí Minh", details: "Ban Chấp hành Trung ương Đảng quyết định cho Đội mang tên Bác Hồ vĩ đại nhằm giáo dục lòng kính yêu Bác và phấn đấu rèn luyện theo gương Bác." }
    ],
    meaningDetails: "Đội Thiếu niên Tiền phong Hồ Chí Minh là tổ chức của thiếu nhi Việt Nam do Chủ tịch Hồ Chí Minh và Đảng Cộng sản Việt Nam sáng lập, Đoàn Thanh niên Cộng sản Hồ Chí Minh phụ trách. Đội là trường học giáo dục thiếu nhi theo 5 điều Bác Hồ dạy, giúp em phấn đấu trở thành Đội viên tốt, cháu ngoan Bác Hồ và Đoàn viên tương lai.",
    principles: [
      "Điều lệ Đội gồm có 7 chương và 19 điều quy định rõ về nhiệm vụ, quyền lợi của Đội viên.",
      "Khẩu hiệu Đội: 'Vì tổ quốc xã hội chủ nghĩa, Vì lý tưởng của Bác Hồ vĩ đại - Sẵn sàng!'",
      "5 điều Bác Hồ dạy: Yêu Tổ quốc yêu đồng bào, Học tập tốt lao động tốt, Đoàn kết tốt kỷ luật tốt, Giữ gìn vệ sinh thật tốt, Khiêm tốn thật thà dũng cảm."
    ],
    memorizeTips: "💡 Ghi nhớ nhanh khẩu hiệu Đội bằng cách hô to chữ 'Sẵn sàng!' dứt khoát kết hợp tay phải chào Đội chào chuẩn nghi thức.",
    exampleScenario: "Đọc to 5 điều Bác Hồ dạy mỗi sáng trước khi vào lớp học để tự nhắc nhở bản thân học tập chăm chỉ.",
    quizQuestions: [
      {
        question: "Đội TNTP Hồ Chí Minh được thành lập vào ngày tháng năm nào?",
        options: ["15/05/1931", "15/05/1941", "26/03/1931", "19/05/1941"],
        correctIdx: 1,
        explanation: "Đội được thành lập ngày 15 tháng 5 năm 1941 tại Pác Bó, Cao Bằng."
      },
      {
        question: "Ai là người Đội trưởng đầu tiên của Đội?",
        options: ["Vừ A Dính", "Lê Văn Tám", "Nông Văn Dền (Kim Đồng)", "Nông Văn Thàn"],
        correctIdx: 2,
        explanation: "Anh Kim Đồng (tên thật là Nông Văn Dền) là đội trưởng đầu tiên của Đội."
      }
    ]
  },
  {
    id: 2,
    title: "Bài 2: Huy hiệu Đội",
    shortDesc: "Cấu tạo chi tiết, màu sắc và khẩu hiệu thiêng liêng của Huy hiệu Đội.",
    icon: "🎖",
    bgGradient: "from-amber-400 to-orange-500",
    meaningDetails: "Huy hiệu Đội hình tròn, ở trong có búp măng non trên nền cờ đỏ sao vàng. Dưới có băng chữ 'SẴN SÀNG'.",
    principles: [
      "Nền đỏ sao vàng: Tượng trưng cho lá cờ Tổ quốc Việt Nam thiêng liêng.",
      "Măng non xanh: Chỉ thế hệ măng non, tương lai tốt đẹp của nước nhà đầy sức sống.",
      "Băng chữ 'SẴN SÀNG': Khẩu hiệu hành động dứt khoát của toàn thể Đội viên quyết tâm học tập và rèn luyện."
    ],
    memorizeTips: "💡 Búp măng non luôn hướng thẳng đứng chỉ sự ngay thẳng, vươn lên không ngừng của người Đội viên.",
    exampleScenario: "Huy hiệu Đội được đeo trên ngực áo bên trái, ngay phía trên túi áo đồng phục khi đi học và sinh hoạt Đội.",
    visualData: { rotation3D: true, glowEffect: true },
    quizQuestions: [
      {
        question: "Ý nghĩa của búp măng non trên Huy hiệu Đội là gì?",
        options: ["Chỉ món ăn măng tre", "Chỉ lứa tuổi thiếu niên, nhi đồng - thế hệ tương lai", "Tượng trưng cho núi rừng Cao Bằng", "Tượng trưng cho sự cứng cáp"],
        correctIdx: 1,
        explanation: "Búp măng non tượng trưng cho thế hệ măng non nước nhà, tương lai của Tổ quốc Việt Nam."
      },
      {
        question: "Chữ viết trên băng dưới huy hiệu Đội là gì?",
        options: ["TIỀN PHONG", "ĐỘI VIÊN", "SẴN SÀNG", "CHĂM NGOAN"],
        correctIdx: 2,
        explanation: "Dưới huy hiệu Đội có băng chữ đỏ ghi khẩu hiệu hành động: 'SẴN SÀNG'."
      }
    ]
  },
  {
    id: 3,
    title: "Bài 3: Khăn quàng đỏ",
    shortDesc: "Ý nghĩa thiêng liêng, kích thước quy chuẩn và cách bảo quản khăn quàng.",
    icon: "🧣",
    bgGradient: "from-red-400 to-rose-600",
    meaningDetails: "Khăn quàng đỏ là một phần của lá cờ Tổ quốc Việt Nam. Màu đỏ tượng trưng cho dòng máu nóng của các anh hùng liệt sĩ đã hy sinh vì nền độc lập, tự do của dân tộc. Đeo khăn quàng nhắc nhở em lòng tự hào Tổ quốc và nghĩa vụ phấn đấu học tập rèn luyện tốt.",
    principles: [
      "Cấu tạo: Hình tam giác cân bằng vải màu đỏ, bề mặt phẳng phiu sạch sẽ.",
      "Kích thước tối thiểu: Chiều cao đường cao 0.25m, chiều dài cạnh đáy 1.0m.",
      "Đeo khăn quàng đỏ khi đến trường học tập, khi tham gia sinh hoạt Đội và các hoạt động cộng đồng của Đội."
    ],
    memorizeTips: "💡 Khi không sử dụng khăn quàng, em hãy gấp gọn gàng cất vào cặp để khăn không bị nhăn hoặc bẩn nhé!",
    exampleScenario: "Trước khi ra khỏi nhà đi học, hãy đứng trước gương chỉnh khăn quàng đỏ vuông vắn, ngay ngắn giữa cổ áo.",
    quizQuestions: [
      {
        question: "Kích thước tối thiểu quy chuẩn của khăn quàng đỏ Đội viên là bao nhiêu?",
        options: ["Đáy 0.8m, cao 0.2m", "Đáy 1.0m, cao 0.25m", "Đáy 1.2m, cao 0.3m", "Đáy 0.9m, cao 0.22m"],
        correctIdx: 1,
        explanation: "Khăn quàng đỏ tiêu chuẩn Đội có kích thước tối thiểu là đường cao 0.25 mét và cạnh đáy dài 1.0 mét."
      },
      {
        question: "Khăn quàng đỏ tượng trưng cho điều gì?",
        options: ["Một món đồ trang sức đẹp", "Một phần lá cờ Tổ quốc, màu đỏ của máu các liệt sĩ", "Màu sắc nổi bật dã ngoại", "Một tấm vải giữ ấm cổ"],
        correctIdx: 1,
        explanation: "Khăn quàng đỏ là một phần cờ Tổ quốc, màu đỏ tượng trưng cho xương máu anh hùng liệt sĩ hy sinh vì độc lập dân tộc."
      }
    ]
  },
  {
    id: 4,
    title: "Bài 4: Đồng phục Đội",
    shortDesc: "Chi tiết trang phục học đường tiêu chuẩn dành cho nam và nữ Đội viên.",
    icon: "👕",
    bgGradient: "from-blue-400 to-indigo-500",
    meaningDetails: "Đồng phục Đội tạo nên vẻ đẹp trang nghiêm, kỷ luật và đoàn kết giữa các Đội viên trong trường học và các ngày lễ kỷ niệm.",
    detailsMap: [
      { part: "ao", title: "Áo sơ mi trắng", desc: "Áo màu trắng, có cổ bẻ ngay ngắn, cúc áo đầy đủ. Trên vai áo có cầu vai thêu chỉ chắc chắn.", coords: { x: 50, y: 30 } },
      { part: "huy_hieu", title: "Huy hiệu Đội", desc: "Đeo trên ngực áo bên trái, ngay phía trên miệng túi áo ngực.", coords: { x: 42, y: 32 } },
      { part: "khan_quang", title: "Khăn quàng đỏ", desc: "Thắt nút dẹt cân đối quanh cổ áo sơ mi bẻ bẻ gọn gàng.", coords: { x: 50, y: 22 } },
      { part: "quan_vay", title: "Quần hoặc Váy", desc: "Màu xanh lam sẫm hoặc màu đen sạch sẽ. Đội viên nữ có thể mặc váy xòe chữ A màu tối.", coords: { x: 50, y: 65 } },
      { part: "mu", title: "Mũ ca-nô trắng", desc: "Mũ vải màu trắng, viền đỏ nổi bật, đội ngay ngắn trên đầu lệch nhẹ về bên phải.", coords: { x: 50, y: 10 } },
      { part: "giay", title: "Giày hoặc Sandal", desc: "Giày vải màu trắng hoặc xăng-đan quai hậu sẫm màu ôm sát chân.", coords: { x: 50, y: 92 } }
    ],
    memorizeTips: "💡 Hãy luôn giữ đồng phục phẳng phiu và sơ vin (bỏ áo vào quần/váy) thật chỉnh tề trước khi đến trường em nhé!",
    exampleScenario: "Mặc đầy đủ đồng phục Đội kèm mũ ca-nô và khăn quàng trong các buổi lễ chào cờ đầu tuần.",
    quizQuestions: [
      {
        question: "Huy hiệu Đội được gắn ở vị trí nào trên đồng phục?",
        options: ["Ngực áo bên phải", "Cổ áo bên trái", "Ngực áo bên trái, trên miệng túi áo", "Trên mũ ca-nô"],
        correctIdx: 2,
        explanation: "Huy hiệu Đội được đeo ngay ngắn ở ngực áo bên trái, phía trên miệng túi áo sơ mi."
      },
      {
        question: "Mũ ca-nô đồng phục Đội viên có màu sắc như thế nào?",
        options: ["Màu xanh lam viền vàng", "Màu trắng viền đỏ", "Màu đỏ viền vàng", "Màu trắng tinh khôi"],
        correctIdx: 1,
        explanation: "Mũ ca-nô của Đội viên là mũ vải màu trắng viền đỏ nổi bật."
      }
    ]
  },
  {
    id: 5,
    title: "Bài 5: Thắt khăn quàng",
    shortDesc: "Hướng dẫn quy trình 5 bước thắt khăn quàng đỏ đúng kỹ thuật.",
    icon: "🪢",
    bgGradient: "from-purple-400 to-indigo-600",
    meaningDetails: "Thắt khăn quàng đỏ là kỹ năng cơ bản nhất của Đội viên, thể hiện sự khéo léo và nghiêm túc chấp hành nghi thức Đội.",
    steps: [
      { stepNum: 1, title: "Gấp nếp khăn", desc: "Dựng cổ áo sơ mi lên. Gấp khăn quàng đỏ từ đỉnh tam giác xuống đáy, cuộn lại khoảng 3-4 nếp gấp bản rộng khoảng 3cm phẳng phiu.", animType: "fold" },
      { stepNum: 2, title: "Luồn qua cổ", desc: "Đặt khăn vào cổ áo từ phía sau, để hai dải khăn rủ xuống phía trước ngực áo.", animType: "place" },
      { stepNum: 3, title: "So dải khăn", desc: "So hai đầu dải khăn sao cho bằng nhau. Đặt dải khăn bên trái lên trên dải khăn bên phải.", animType: "overlap" },
      { stepNum: 4, title: "Thắt nút thứ nhất", desc: "Vòng dải bên trái dưới dải bên phải lên trên cổ, luồn vào trong rút nhẹ tạo nút thắt đầu tiên cố định.", animType: "first_knot" },
      { stepNum: 5, title: "Thắt nút dẹt hoàn thành", desc: "Lấy dải khăn dài bên dưới vòng lên, tạo nút dẹt chặt chẽ với dải kia. Chỉnh dải khăn xòe đều, bẻ cổ áo xuống đè lên khăn.", animType: "second_knot" }
    ],
    memorizeTips: "💡 Công thức ghi nhớ nhanh nút thắt khăn quàng: 'Trái đè Phải, luồn qua nút; Dưới vòng lên, thắt nút dẹt'.",
    exampleScenario: "Luyện tập thắt khăn quàng đỏ 3 lần mỗi tối cuối tuần để đôi tay dẻo dai thắt nhanh dưới 15 giây.",
    quizQuestions: [
      {
        question: "Khi bắt đầu thắt khăn quàng, bước đầu tiên em cần làm gì với cổ áo?",
        options: ["Bẻ cổ áo xuống phẳng phiu", "Dựng cổ áo sơ mi đứng lên", "Tháo cúc cổ áo", "Giữ nguyên cổ áo"],
        correctIdx: 1,
        explanation: "Bước đầu tiên là dựng đứng cổ áo sơ mi lên để đặt khăn quàng đỏ vào dưới cổ áo dễ dàng."
      },
      {
        question: "Nút thắt cuối cùng của khăn quàng đỏ gọi là gì?",
        options: ["Nút thòng lọng", "Nút dẹt (nút dẹt đôi)", "Nút thuyền chài", "Nút thắt nút đơn"],
        correctIdx: 1,
        explanation: "Nút thắt khăn quàng đỏ hoàn chỉnh phải là nút dẹt, giúp hai dải khăn xòe đều sang hai bên ngực áo."
      }
    ]
  },
  {
    id: 6,
    title: "Bài 6: Tháo khăn quàng",
    shortDesc: "Các bước tháo khăn gọn gàng và cách gấp cất giữ bảo quản khăn quàng.",
    icon: "🔓",
    bgGradient: "from-pink-400 to-rose-500",
    meaningDetails: "Tháo khăn quàng đỏ nhẹ nhàng, đúng kỹ thuật giúp giữ khăn phẳng phiu, không bị rách hay tuột chỉ nút thắt.",
    steps: [
      { stepNum: 1, title: "Giữ nút thắt", desc: "Tay trái cầm nhẹ vào giữa nút dẹt của khăn quàng đỏ trước ngực.", animType: "hold_knot" },
      { stepNum: 2, title: "Rút dải dẹt", desc: "Tay phải cầm dải khăn nằm phía trên của nút thắt kéo nhẹ ra phía trước để nới lỏng nút dẹt.", animType: "pull_loose" },
      { stepNum: 3, title: "Tháo rời", desc: "Rút nhẹ dải khăn còn lại để nút dẹt mở ra hoàn toàn. Tay phải đưa khăn ra khỏi cổ áo, hạ cổ áo sơ mi xuống bẻ nếp cũ.", animType: "remove_scarf" }
    ],
    memorizeTips: "💡 Tuyệt đối không giật mạnh khăn quàng đỏ từ phía sau vì sẽ làm nhăn nát hoặc làm hỏng vải khăn quàng.",
    exampleScenario: "Sau khi đi học về, hãy tháo khăn quàng đỏ đúng cách và treo lên móc áo gọn gàng cho ngày mai học tập.",
    quizQuestions: [
      {
        question: "Đâu là hành vi không nên làm khi tháo khăn quàng đỏ?",
        options: ["Nới lỏng nút dẹt từ từ", "Giật mạnh khăn quàng từ đằng sau gáy", "Giữ nhẹ nút thắt bằng tay trái", "Treo khăn lên móc sau khi tháo"],
        correctIdx: 1,
        explanation: "Giật mạnh khăn quàng từ đằng sau gáy có thể làm hỏng khăn quàng, làm đau cổ và hỏng cổ áo sơ mi."
      }
    ]
  },
  {
    id: 7,
    title: "Bài 7: Đội hình đội ngũ",
    shortDesc: "Mô hình trực quan của các đội hình tập hợp cơ bản của Đội viên.",
    icon: "🚩",
    bgGradient: "from-teal-400 to-emerald-600",
    meaningDetails: "Đội hình đội ngũ giúp tập hợp Đội nhanh chóng, kỷ luật, tạo điều kiện thuận lợi để chỉ huy điều hành các hoạt động tập thể.",
    formations: [
      {
        name: "Đội hình Hàng dọc",
        whenToUse: "Khi cần tập hợp nhanh, duyệt đội ngũ, di chuyển trên đường hẹp dã ngoại.",
        desc: "Phân đội 1 xếp hàng dọc bên tay trái của chỉ huy. Các phân đội tiếp theo xếp song song phía sau. Người đứng sau cách người đứng trước một cánh tay.",
        layoutData: "vertical",
        example: "Tập hợp toàn trường xếp hàng chuẩn bị di chuyển vào hội trường dã ngoại."
      },
      {
        name: "Đội hình Hàng ngang",
        whenToUse: "Khi cần điểm số, kiểm tra sĩ số, sinh hoạt ngoài trời diện tích rộng.",
        desc: "Phân đội 1 xếp hàng ngang trước mặt chỉ huy, phân đội trưởng đứng đầu bên trái. Các phân đội tiếp theo xếp song song phía dưới.",
        layoutData: "horizontal",
        example: "Tiểu đội xếp hàng ngang để nhận nhiệm vụ trò chơi lớn từ trưởng trạm."
      },
      {
        name: "Đội hình Chữ U",
        whenToUse: "Khi làm lễ chào cờ, lễ kết nạp Đội viên hoặc sinh hoạt Chi đội.",
        desc: "Phân đội 1 xếp hàng dọc bên tay trái chỉ huy. Các phân đội giữa xếp hàng ngang đáy chữ U quay về phía chỉ huy. Phân đội cuối xếp dọc bên tay phải chỉ huy.",
        layoutData: "shape_u",
        example: "Chi đội 5A xếp đội hình chữ U trang nghiêm để thực hiện Lễ kết nạp Đội viên mới."
      },
      {
        name: "Đội hình Vòng tròn",
        whenToUse: "Khi tổ chức trò chơi tập thể, sinh hoạt lửa trại, hát đồng ca vui chơi.",
        desc: "Tất cả các đội viên nắm tay nhau xếp thành vòng tròn đồng tâm quay mặt vào trong hướng về chỉ huy đứng giữa tâm vòng tròn.",
        layoutData: "circle",
        example: "Toàn bộ liên đội kết vòng tròn lớn xung quanh ngọn lửa trại dã ngoại."
      }
    ],
    memorizeTips: "💡 Khi tập hợp đội hình hàng dọc, cánh tay phải chỉ huy giơ thẳng hướng Bắc. Khi hàng ngang, chỉ huy dang ngang hai cánh tay.",
    exampleScenario: "Nghe hiệu còi tập hợp chữ U, di chuyển nhanh chóng, không gây tiếng ồn về đúng vị trí phân đội của mình.",
    quizQuestions: [
      {
        question: "Đội hình nào thường được sử dụng phổ biến nhất khi tổ chức Lễ chào cờ trang nghiêm?",
        options: ["Đội hình Vòng tròn", "Đội hình Hàng dọc", "Đội hình chữ U", "Đội hình hình chữ V"],
        correctIdx: 2,
        explanation: "Đội hình chữ U quay mặt về phía cột cờ/chỉ huy là đội hình chuẩn mực nhất dành cho Lễ chào cờ Chi đội."
      },
      {
        question: "Cự ly rộng giữa hai Đội viên đứng cạnh nhau trong hàng ngang là bao nhiêu?",
        options: ["Một nắm tay", "Một cánh tay", "Một khuỷu tay", "Hai bước chân"],
        correctIdx: 2,
        explanation: "Cự ly rộng trong hàng ngang được xác định bằng một khuỷu tay (tay trái chống hông đầu ngón tay chạm khủy tay bạn bên cạnh)."
      }
    ]
  },
  {
    id: 8,
    title: "Bài 8: Khẩu lệnh",
    shortDesc: "Các câu lệnh chỉ huy chuẩn nghi thức kèm âm thanh đọc còi lệnh.",
    icon: "🔊",
    bgGradient: "from-sky-400 to-blue-600",
    meaningDetails: "Khẩu lệnh chỉ huy dứt khoát, rõ ràng giúp toàn đội thực hiện đồng đều, chính xác các động tác nghi thức Đội.",
    commands: [
      { cmd: "Nghiêm!", voiceLabel: "Nghiêm", animationId: "stand_straight", description: "Tư thế đứng thẳng chỉnh tề, gót khép, hai tay áp sát đùi." },
      { cmd: "Nghỉ!", voiceLabel: "Nghỉ", animationId: "stand_at_ease", description: "Tư thế thả lỏng một chân bằng cách chùng đầu gối bên trái hoặc phải." },
      { cmd: "Chào!", voiceLabel: "Chào", animationId: "salute", description: "Thực hiện động tác chào Đội bằng tay phải giơ lên đầu bẻ góc khủy 45 độ." },
      { cmd: "Bên trái - Quay!", voiceLabel: "Bên trái quay", animationId: "turn_left", description: "Quay người sang bên trái 90 độ bằng gót chân trái và mũi chân phải." },
      { cmd: "Bên phải - Quay!", voiceLabel: "Bên phải quay", animationId: "turn_right", description: "Quay người sang bên phải 90 độ bằng gót chân phải và mũi chân trái." },
      { cmd: "Đằng sau - Quay!", voiceLabel: "Đằng sau quay", animationId: "turn_back", description: "Quay người ra phía sau 180 độ về bên phải bằng gót phải và mũi trái." },
      { cmd: "Đi đều - Bước!", voiceLabel: "Đi đều bước", animationId: "walk_march", description: "Bắt đầu bước chân trái nhịp nhàng đi đều theo nhịp còi hiệu." },
      { cmd: "Đứng lại - Đứng!", voiceLabel: "Đứng lại đứng", animationId: "walk_stop", description: "Nghe động lệnh 'Đứng!' rơi vào chân phải, bước thêm một bước trái rồi khép chân phải." },
      { cmd: "Giải tán!", voiceLabel: "Giải tán", animationId: "disband", description: "Tự do giải tán khỏi hàng ngũ sau khi kết thúc buổi sinh hoạt." }
    ],
    memorizeTips: "💡 Khẩu lệnh luôn gồm hai phần: Dự lệnh (nói ngân dài để chuẩn bị) và Động lệnh (nói to, dứt khoát để thực hiện ngay lập tức).",
    exampleScenario: "Nghe chỉ huy hô to: 'Bên phải...' (dự lệnh chuẩn bị tinh thần), '...Quay!' (động lệnh quay dứt khoát).",
    quizQuestions: [
      {
        question: "Khẩu lệnh chỉ huy gồm những thành phần cơ bản nào?",
        options: ["Mệnh lệnh và Lời giải thích", "Hiệu còi và Động lệnh", "Dự lệnh và Động lệnh", "Lời chào và Hướng dẫn"],
        correctIdx: 2,
        explanation: "Khẩu lệnh chỉ huy chuẩn nghi thức Đội luôn gồm Dự lệnh (báo trước hành động) và Động lệnh (yêu cầu thực thi)."
      },
      {
        question: "Khi nghe khẩu lệnh 'Đứng lại - Đứng!', động lệnh 'Đứng!' rơi vào chân bên nào của Đội viên?",
        options: ["Chân trái", "Chân phải", "Cả hai chân cùng lúc", "Chân nào cũng được"],
        correctIdx: 1,
        explanation: "Động lệnh 'Đứng!' luôn rơi vào bàn chân phải chạm đất, sau đó Đội viên bước thêm một bước chân trái và khép chân phải về tư thế nghiêm."
      }
    ]
  },
  {
    id: 9,
    title: "Bài 9: Động tác cá nhân",
    shortDesc: "Chi tiết kỹ thuật động tác tại chỗ và di động của Đội viên.",
    icon: "🚶",
    bgGradient: "from-cyan-400 to-teal-500",
    meaningDetails: "Các động tác cá nhân rèn luyện tư thế ngay ngắn, tác phong nhanh nhẹn, tinh thần kỷ luật tự giác của mỗi Đội viên măng non.",
    principles: [
      "Động tác tại chỗ: Nghiêm, Nghỉ, Chào, Quay trái, Quay phải, Quay sau, Dậm chân tại chỗ.",
      "Động tác di động: Đi đều, Đứng lại, Tiến, Lùi, Bước sang trái, Bước sang phải, Đổi chân khi đi đều sai nhịp còi."
    ],
    memorizeTips: "💡 Khi thực hiện động tác Chào Đội, cánh tay phải khép kín 5 ngón tay sát nhau, lòng bàn tay hướng nhẹ ra trước, khủy tay giơ ngang vai.",
    exampleScenario: "Tự đứng luyện tập động tác chào Đội trước gương để tay phải không che khuất khuôn mặt.",
    quizQuestions: [
      {
        question: "Tư thế hai bàn chân khi đứng ở tư thế 'Nghiêm' chuẩn nghi thức là gì?",
        options: ["Hai bàn chân song song khép sát", "Gót chân khép sát, hai mũi chân mở rộng một góc khoảng 60 độ", "Hai chân dang rộng bằng vai", "Gót chân mở rộng, hai mũi chân chạm nhau"],
        correctIdx: 1,
        explanation: "Tư thế nghiêm chuẩn là đứng thẳng lưng, gót chân khép sát nhau, hai bàn chân mở rộng về hai phía tạo góc 60 độ."
      },
      {
        question: "Động tác Chào của Đội viên được thực hiện bằng tay nào?",
        options: ["Tay trái", "Tay phải", "Hai tay đan vào nhau", "Tay nào cũng được tùy thói quen"],
        correctIdx: 1,
        explanation: "Động tác Chào Đội chỉ được thực hiện bằng tay phải giơ lên đầu nghiêm trang."
      }
    ]
  },
  {
    id: 10,
    title: "Bài 10: Lễ kết nạp Đội viên",
    shortDesc: "Trình tự chuẩn các nghi thức kết nạp học sinh ưu tú vào Đội.",
    icon: "📖",
    bgGradient: "from-orange-400 to-red-500",
    meaningDetails: "Lễ kết nạp Đội viên là cột mốc ý nghĩa lớn ghi nhận sự tiến bộ của học sinh tiểu học, chào mừng các em bước vào tổ chức Đội TNTP Hồ Chí Minh.",
    steps: [
      { stepNum: 1, title: "Chào cờ nghi thức", desc: "Hát Đội ca vang dội, hô vang khẩu hiệu Đội nghiêm trang dưới bóng cờ Tổ quốc.", animType: "flag_ceremony" },
      { stepNum: 2, title: "Báo cáo tiến trình", desc: "Đại diện Chi đội đọc báo cáo rèn luyện phấn đấu của các nhi đồng ưu tú trong thời gian qua.", animType: "report" },
      { stepNum: 3, title: "Đọc quyết định kết nạp", desc: "Trưởng ban tổ chức hoặc BCH Chi đội đọc quyết định kết nạp Đội viên mới của Ban giám hiệu/Liên đội.", animType: "read_decision" },
      { stepNum: 4, title: "Tuyên hứa lời thề", desc: "Học sinh được kết nạp đứng trước cờ đọc 3 lời hứa Đội viên: Thực hiện 5 điều Bác dạy, Chấp hành điều lệ Đội, Giữ gìn danh dự Đội.", animType: "vow" },
      { stepNum: 5, title: "Trao và thắt khăn quàng", desc: "Đại diện BCH Chi đội/Tổng phụ trách trao khăn quàng đỏ. Đội viên mới tự thắt khăn quàng và thực hiện động tác Chào nhận nhiệm vụ.", animType: "give_scarf" }
    ],
    memorizeTips: "💡 Khi đọc lời thề hứa kết thúc bằng tiếng hô lớn: 'Xin hứa!' dứt khoát tự hào.",
    exampleScenario: "Học thuộc lòng 3 lời hứa của Đội viên mới để đọc to, dõng dạc trong ngày Lễ kết nạp Đội viên của lớp.",
    quizQuestions: [
      {
        question: "Lời hứa thứ nhất của Đội viên mới khi được kết nạp vào Đội là gì?",
        options: ["Chăm chỉ giúp đỡ bố mẹ", "Thực hiện tốt 5 điều Bác Hồ dạy", "Đạt điểm 10 học tập tốt", "Đi tham gia dã ngoại đầy đủ"],
        correctIdx: 1,
        explanation: "Lời hứa đầu tiên là hứa thực hiện tốt 5 điều Bác Hồ dạy thiếu niên nhi đồng."
      }
    ]
  },
  {
    id: 11,
    title: "Bài 11: Đại hội Chi đội",
    shortDesc: "Quy trình tổ chức đại hội bầu Ban chấp hành Chi đội hàng năm.",
    icon: "🏫",
    bgGradient: "from-blue-500 to-cyan-600",
    meaningDetails: "Đại hội Chi đội bầu ra Ban chỉ huy Chi đội mới để dẫn dắt chi đội lớp học tập tốt, hoàn thành xuất sắc các phong trào Đội trong năm học.",
    principles: [
      "Trình tự gồm: Nghi lễ chào cờ Đội, tuyên bố lý do giới thiệu đại biểu, cử Đoàn Chủ tịch và Thư ký đại hội.",
      "Thông qua báo cáo tổng kết năm cũ và dự thảo phương hướng hoạt động năm mới.",
      "Biểu quyết chỉ tiêu thi đua, bầu cử Ban chỉ huy Chi đội mới công bằng, bỏ phiếu kín bầu cử kiểm phiếu nghiêm túc."
    ],
    memorizeTips: "💡 Ban chỉ huy Chi đội gồm 3 thành viên: 1 Chi đội trưởng (điều hành chung) và 2 Chi đội phó hỗ trợ.",
    exampleScenario: "Tham gia ứng cử hoặc bỏ phiếu sáng suốt chọn ra bạn lớp trưởng, bạn năng nổ nhất vào Ban chỉ huy lớp mình.",
    quizQuestions: [
      {
        question: "Số lượng thành viên Ban chỉ huy Chi đội lớp học thường là bao nhiêu bạn?",
        options: ["1 bạn", "3 bạn", "5 bạn", "7 bạn"],
        correctIdx: 1,
        explanation: "BCH Chi đội thông thường có 3 thành viên để phân công công việc hiệu quả, dân chủ."
      }
    ]
  },
  {
    id: 12,
    title: "Bài 12: Đại hội Liên đội",
    shortDesc: "Quy trình đại hội toàn trường và cơ cấu tổ chức Liên đội măng non.",
    icon: "🏛",
    bgGradient: "from-indigo-400 to-purple-600",
    meaningDetails: "Đại hội Liên đội là đại hội cấp cao nhất của học sinh toàn trường, thống nhất kế hoạch hành động lớn, bầu Ban chỉ huy Liên đội xuất sắc điều hành.",
    principles: [
      "Có sự tham dự chỉ đạo trực tiếp của Thầy/Cô Tổng phụ trách Đội và Ban giám hiệu nhà trường.",
      "Có các tiết mục văn nghệ chào mừng, hoạt cảnh báo cáo thành tích nổi bật của liên đội trường.",
      "Trình biểu quyết dự thảo hoạt động toàn trường, bầu cử Ban chỉ huy Liên đội mới gồm đại diện các chi đội xuất sắc."
    ],
    memorizeTips: "💡 Đại hội Liên đội thường tổ chức vào thời điểm đầu năm học mới (khoảng tháng 9 hoặc tháng 10 hàng năm).",
    exampleScenario: "Đại diện Chi đội lớp tham gia Đại hội Liên đội trường, đóng góp ý kiến về phong trào Kế hoạch nhỏ bảo vệ môi trường.",
    quizQuestions: [
      {
        question: "Đại hội Liên đội trường học thường được tổ chức vào thời điểm nào?",
        options: ["Cuối năm học (tháng 5)", "Đầu năm học mới (tháng 9 hoặc tháng 10)", "Giữa học kỳ 1 (tháng 12)", "Trong kỳ nghỉ hè"],
        correctIdx: 1,
        explanation: "Đại hội Liên đội được tổ chức vào đầu năm học mới để lập kế hoạch hoạt động xuyên suốt năm học."
      }
    ]
  },
  {
    id: 13,
    title: "Bài 13: Đại hội Cháu ngoan Bác Hồ",
    shortDesc: "Ý nghĩa lễ tuyên dương thành tích xuất sắc của các Đội viên tiêu biểu.",
    icon: "🎖",
    bgGradient: "from-rose-400 to-pink-650",
    meaningDetails: "Đại hội Cháu ngoan Bác Hồ là ngày hội lớn nhất biểu dương những gương mặt Đội viên có thành tích xuất sắc nhất trong học tập, lao động và rèn luyện đạo đức gương mẫu.",
    principles: [
      "Nghi lễ báo công dâng Bác: Đội viên xuất sắc dâng hoa báo cáo lên Bác những bông hoa điểm 10 dâng Bác kính yêu.",
      "Trao tặng Huy hiệu Cháu ngoan Bác Hồ - phần thưởng vinh dự nhất của tuổi măng non Việt Nam.",
      "Tổ chức giao lưu, chia sẻ kinh nghiệm học tập tốt, rèn luyện kỹ năng của các thủ lĩnh Đội nhí xuất sắc."
    ],
    memorizeTips: "💡 Hãy tích cực học tập, đạt nhiều điểm 10 để vinh dự nhận tấm Huy hiệu Cháu ngoan Bác Hồ đỏ thắm tự hào em nhé!",
    exampleScenario: "Vinh dự được bầu chọn làm đại biểu tham gia Đại hội Cháu ngoan Bác Hồ cấp Quận/Huyện nhờ thành tích thủ khoa học tập tốt.",
    quizQuestions: [
      {
        question: "Phần thưởng danh giá nhất được trao tặng cho Đội viên tiêu biểu tại Đại hội Cháu ngoan Bác Hồ là gì?",
        options: ["Một chiếc cặp sách mới", "Huy hiệu Cháu ngoan Bác Hồ", "Huy hiệu Chuyên hiệu Tin học", "Huy hiệu Morse"],
        correctIdx: 1,
        explanation: "Huy hiệu Cháu ngoan Bác Hồ là phần thưởng vinh dự ghi nhận nỗ lực rèn luyện của Đội viên xuất sắc nhất."
      }
    ]
  }
];
