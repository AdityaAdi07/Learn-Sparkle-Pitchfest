import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { User, LearningModeType, Chapter } from '../types';
import ChapterContent from './ChapterContent';
import Quiz from './Quiz';
import { mockChapters, visualChapters, audioChapters } from '../data/mockData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

interface LearningModeProps {
  mode: LearningModeType;
  user: User;
  chapter: number;
  onBack: () => void;
  onProgressUpdate: (mode: LearningModeType, chapter: number, progress: number) => void;
}

const LearningMode: React.FC<LearningModeProps> = ({
  mode,
  user,
  chapter,
  onBack,
  onProgressUpdate
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState(mockChapters[0].id.toString());
  const [currentSubsection, setCurrentSubsection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showChapterQuiz, setShowChapterQuiz] = useState(false);
  const [subsectionProgress, setSubsectionProgress] = useState<{ [chapterId: string]: boolean[] }>({});
  const [chapterCompleted, setChapterCompleted] = useState(false);

  const chapters = mode === 'audio' ? audioChapters : mode === 'visual' ? visualChapters : mockChapters;
  const currentChapter = chapters.find(c => c.id.toString() === selectedChapterId) || chapters[0];
  const chapterIndex = chapters.findIndex(c => c.id.toString() === selectedChapterId);
  const modeConfig = {
    flashCards: { title: 'Flash Card Learning', icon: '🔤', color: 'from-blue-400 to-blue-600' },
    visual: { title: 'Visual Learning', icon: '🎥', color: 'from-green-400 to-green-600' },
    audio: { title: 'Audio Learning', icon: '🎧', color: 'from-purple-400 to-purple-600' }
  };

  useEffect(() => {
    if (currentChapter) {
      setSubsectionProgress(prev => {
        if (prev[selectedChapterId]) return prev;
        return {
          ...prev,
          [selectedChapterId]: new Array(currentChapter.subsections.length).fill(false)
        };
      });
      setCurrentSubsection(0);
      setShowQuiz(false);
      setShowChapterQuiz(false);
      setChapterCompleted(false);
    }
  }, [selectedChapterId]);

  const calculateProgress = () => {
    const progressArr = subsectionProgress[selectedChapterId] || [];
    if (!progressArr.length) return 0;
    const completed = progressArr.filter(Boolean).length;
    return Math.round((completed / progressArr.length) * 100);
  };

  const handleSubsectionComplete = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      setSubsectionProgress(prev => {
        const chapterProgress = prev[selectedChapterId] ? [...prev[selectedChapterId]] : new Array(currentChapter.subsections.length).fill(false);
        chapterProgress[currentSubsection] = true;
        return { ...prev, [selectedChapterId]: chapterProgress };
      });
      // Check if all subsections are complete
      const progressArr = subsectionProgress[selectedChapterId] || new Array(currentChapter.subsections.length).fill(false);
      const updatedArr = [...progressArr];
      updatedArr[currentSubsection] = true;
      if (updatedArr.every(Boolean)) {
        setShowChapterQuiz(true);
      } else {
        setCurrentSubsection(prev => prev + 1);
      }
    }
    setShowQuiz(false);
  };

  const handleChapterComplete = (passed: boolean) => {
    if (passed) {
      setChapterCompleted(true);
      onProgressUpdate(mode, chapter, 100);
    }
    setShowChapterQuiz(false);
  };

  if (!currentChapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Chapter Not Found</h2>
          <p className="text-gray-600 mb-4">This chapter is not available yet.</p>
          <Button onClick={onBack}>Back to Dashboard</Button>
        </Card>
      </div>
    );
  }

  if (chapterCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex items-center justify-center">
        <Card className="p-8 text-center max-w-md bg-white/95 backdrop-blur-md shadow-2xl">
          <div className="space-y-6">
            <div className="text-6xl animate-bounce">🎉</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Congratulations, {user.name}!
            </h2>
            <p className="text-lg text-gray-700">
              You just completed Chapter {currentChapter.id}! 💪
            </p>
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg px-4 py-2">
              🎖️ Chapter {currentChapter.id} Master
            </Badge>
            <div className="space-y-3">
              <Button 
                onClick={() => setChapterCompleted(false)}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              >
                Back to Chapter
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (showChapterQuiz) {
    return (
      <Quiz
        questions={currentChapter.finalQuiz}
        onComplete={handleChapterComplete}
        title={`Chapter ${currentChapter.id} Final Quiz`}
        userName={user.name}
        isChapterQuiz={true}
      />
    );
  }

  if (showQuiz) {
    return (
      <Quiz
        questions={currentChapter.subsections[currentSubsection].questions}
        onComplete={handleQuizComplete}
        title={`${currentChapter.subsections[currentSubsection].title} Quiz`}
        userName={user.name}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onBack}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-base px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
              >
                ← Back
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-3xl drop-shadow-md">{modeConfig[mode].icon}</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 drop-shadow-sm tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">
                  {modeConfig[mode].title}
                </h1>
              </div>
            </div>
          </div>
          {/* Tabs for chapters */}
          <div className="mt-6">
            <div className="mb-2 ml-1 text-sm font-semibold text-blue-700 tracking-wide uppercase">Navigate Chapters</div>
            <Tabs value={selectedChapterId} onValueChange={setSelectedChapterId}>
              <div className="relative min-w-0">
                <TabsList
                  className="w-full flex overflow-x-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-md p-2 gap-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {chapters.map((ch) => (
                    <TabsTrigger
                      key={ch.id}
                      value={ch.id.toString()}
                      className={`
                        px-3 py-1.5 rounded-full transition-all duration-200
                        font-semibold text-sm min-w-[100px] max-w-[140px] truncate
                        border-2 border-transparent
                        ${selectedChapterId === ch.id.toString()
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-blue-700 scale-105'
                          : 'bg-white text-blue-700 hover:bg-blue-100 border-blue-200'}
                        focus:outline-none
                      `}
                      title={ch.title}
                    >
                      {ch.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {/* Scroll indicator for overflow */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/90 to-transparent" />
              </div>
            </Tabs>
          </div>
          {/* Progress */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Chapter Progress</span>
              <span className="text-sm font-semibold text-purple-600">{calculateProgress()}%</span>
            </div>
            <Progress value={calculateProgress()} className="h-2" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        {/* Show quiz, chapter quiz, or content as before */}
        {chapterCompleted ? (
          <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex items-center justify-center">
            <Card className="p-8 text-center max-w-md bg-white/95 backdrop-blur-md shadow-2xl">
              <div className="space-y-6">
                <div className="text-6xl animate-bounce">🎉</div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Congratulations, {user.name}!
                </h2>
                <p className="text-lg text-gray-700">
                  You just completed Chapter {currentChapter.id}! 💪
                </p>
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg px-4 py-2">
                  🎖️ Chapter {currentChapter.id} Master
                </Badge>
                <div className="space-y-3">
                  <Button 
                    onClick={() => setChapterCompleted(false)}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  >
                    Back to Chapter
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ) : showChapterQuiz ? (
          <Quiz
            questions={currentChapter.finalQuiz}
            onComplete={handleChapterComplete}
            title={`Chapter ${currentChapter.id} Final Quiz`}
            userName={user.name}
            isChapterQuiz={true}
          />
        ) : showQuiz ? (
          <Quiz
            questions={currentChapter.subsections[currentSubsection].questions}
            onComplete={handleQuizComplete}
            title={`${currentChapter.subsections[currentSubsection].title} Quiz`}
            userName={user.name}
          />
        ) : (
        <ChapterContent
          subsection={currentChapter.subsections[currentSubsection]}
          mode={mode}
          onComplete={handleSubsectionComplete}
          userName={user.name}
        />
        )}
      </div>
    </div>
  );
};

export default LearningMode;
