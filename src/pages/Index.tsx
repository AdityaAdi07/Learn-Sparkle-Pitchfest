import React, { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import Dashboard from '../components/Dashboard';
import LearningMode from '../components/LearningMode';
import { User, LearningModeType } from '../types';

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentMode, setCurrentMode] = useState<LearningModeType | null>(null);
  const [currentChapter, setCurrentChapter] = useState<number>(1);

  // Load user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('learningUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save user data to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('learningUser', JSON.stringify(user));
    }
  }, [user]);

  const handleUserSetup = (name: string) => {
    const newUser: User = {
      name,
      progress: {
        flashCards: { currentChapter: 1, completedChapters: [], totalProgress: 0 },
        visual: { currentChapter: 1, completedChapters: [], totalProgress: 0 },
        audio: { currentChapter: 1, completedChapters: [], totalProgress: 0 }
      },
      badges: [],
      totalScore: 0
    };
    setUser(newUser);
  };

  const handleModeSelect = (mode: LearningModeType) => {
    setCurrentMode(mode);
    setCurrentChapter(user?.progress[mode].currentChapter || 1);
  };

  const handleBackToDashboard = () => {
    setCurrentMode(null);
  };

  const updateUserProgress = (mode: LearningModeType, chapter: number, progress: number) => {
    if (!user) return;
    
    const updatedUser = { ...user };
    updatedUser.progress[mode].totalProgress = progress;
    
    // If chapter is completed, add to completed chapters
    if (progress >= 100 && !updatedUser.progress[mode].completedChapters.includes(chapter)) {
      updatedUser.progress[mode].completedChapters.push(chapter);
      updatedUser.progress[mode].currentChapter = chapter + 1;
      
      // Add badge for completing chapter
      const badgeName = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Chapter ${chapter} Master`;
      if (!updatedUser.badges.includes(badgeName)) {
        updatedUser.badges.push(badgeName);
      }
    }
    
    setUser(updatedUser);
  };

  if (!user) {
    return <WelcomeScreen onUserSetup={handleUserSetup} />;
  }

  if (currentMode) {
    return (
      <LearningMode
        mode={currentMode}
        user={user}
        chapter={currentChapter}
        onBack={handleBackToDashboard}
        onProgressUpdate={updateUserProgress}
      />
    );
  }

  return (
    <>
    <Dashboard
      user={user}
      onModeSelect={handleModeSelect}
      onEditName={() => setUser(null)}
    />
    </>
  );
};

export default Index;
