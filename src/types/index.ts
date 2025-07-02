
export interface User {
  name: string;
  progress: {
    flashCards: ModeProgress;
    visual: ModeProgress;
    audio: ModeProgress;
  };
  badges: string[];
  totalScore: number;
}

export interface ModeProgress {
  currentChapter: number;
  completedChapters: number[];
  totalProgress: number;
}

export type LearningModeType = 'flashCards' | 'visual' | 'audio';

export interface Question {
  id: number;
  type: 'trueFalse' | 'multipleChoice';
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation?: string;
}

export interface Chapter {
  id: number;
  title: string;
  subsections: Subsection[];
  finalQuiz: Question[];
}

export interface Subsection {
  id: number;
  title: string;
  content: string;
  questions: Question[];
}
