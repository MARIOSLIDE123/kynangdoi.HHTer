export interface UserProfile {
  name: string;
  className: string;
  school: string;
  avatar: string; // ID or key of avatar
  score: number;
  level: number;
  exp: number;
  streak: number;
  badges: string[]; // List of Badge IDs
  completedLessons: string[]; // List of lesson IDs completed
  completedQuizzes: number;
  totalQuestionsAnswered: number;
  correctAnswersCount: number;
  lastActiveDate?: string; // YYYY-MM-DD
  history: {
    date: string;
    score: number;
    activity: string;
  }[];
}

export interface MorseItem {
  char: string;
  code: string; // e.g. ".-"
  group: number; // 1 to 5
  soundFrequency?: number;
  mnemonic: string; // Mẹo nhớ tiếng Việt
  vietnameseExplanation?: string;
}

export interface SemaphoreItem {
  char: string;
  leftAngle: number; // Arm angle in degrees (0, 45, 90, 135, 180, 225, 270, 315)
  rightAngle: number; // Arm angle in degrees
  circle: number; // 1 to 7
  mnemonic: string;
  isNumber?: boolean;
}

export interface TrailSignItem {
  id: string;
  name: string;
  meaning: string;
  category: 'di_chuyen' | 'canh_bao' | 'menh_lenh' | 'thong_tin';
  svgPath: string; // Key or descriptive shape rendering info
  description: string;
  exampleScenario: string;
}

export interface Question {
  id: string;
  category: 'morse' | 'semaphore' | 'dau_duong' | 'tong_hop';
  difficulty: 'easy' | 'medium' | 'hard';
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  visualType?: 'none' | 'semaphore' | 'morse' | 'dau_duong';
  visualValue?: string; // For rendering specific sign or flag or morse code
}

export interface PracticeExercise {
  id: string;
  type: 'morse' | 'semaphore' | 'dau_duong';
  question: string;
  answer: string;
  hint?: string;
  choices?: string[];
  visualData?: any;
}
