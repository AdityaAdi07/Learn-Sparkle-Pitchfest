import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Subsection, LearningModeType } from '../types';

interface ChapterContentProps {
  subsection: Subsection;
  mode: LearningModeType;
  onComplete: () => void;
  userName: string;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ 
  subsection, 
  mode, 
  onComplete, 
  userName 
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  const getModeSpecificContent = () => {
    switch (mode) {
      case 'flashCards':
        return (
          <div className="flex justify-center">
            <Card className="w-full max-w-md p-5 bg-blue-50 border-blue-200 shadow-md rounded-xl">
              <div className="flex flex-col items-center">
                <div className="w-70 h-81 mb-4 flex items-center justify-center overflow-hidden rounded-md bg-white border border-blue-100">
                  {/* Render image only if present in content */}
                  <span dangerouslySetInnerHTML={{ __html: subsection.content.replace(/.*(<img[^>]+>).*$/, '$1') }} />
                </div>
                <div className="text-base text-blue-700 text-center" style={{ minHeight: '2.5em' }}>
                  {/* Render description only (remove image tag) */}
                  <span dangerouslySetInnerHTML={{ __html: subsection.content.replace(/<img[^>]+>/, '') }} />
                </div>
              </div>
            </Card>
          </div>
        );
      
      case 'visual':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 sm:p-6 rounded-xl border-l-4 border-green-400 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 w-full">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-1 sm:mb-2">🎥 Visual Learning Content</h3>
                <p className="text-green-700 text-sm sm:text-base">[Upload Video Here]</p>
              </div>
            </div>
          </div>
        );
      
      case 'audio':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
            <div className="flex justify-center gap-4 mt-2">
                <button
                  className="px-3 py-1 rounded bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold text-xs"
                  onClick={() => {
                    const audio = document.querySelector('audio[id^="audio-"]') as HTMLAudioElement;
                    if (audio) audio.currentTime = Math.max(0, audio.currentTime - 5);
                  }}
                >⏪ 5s</button>
                <button
                  className="px-3 py-1 rounded bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold text-xs"
                  onClick={() => {
                    const audio = document.querySelector('audio[id^="audio-"]') as HTMLAudioElement;
                    if (audio) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
                  }}
                >5s ⏩</button>
              </div>
            </div>
            
          </div>
        );
    }
  };

  if (isCompleted) {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl animate-bounce">🎉</div>
        <h2 className="text-2xl font-bold text-green-600">
          Nice going, {userName}! Ready to test yourself?
        </h2>
        <p className="text-gray-600">Get ready for the quiz!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-1 mb-2">
        <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed mb-1">Welcome {userName} to {subsection.title}</h2>
      </div>

      {/* Content */}
      <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="space-y-6">
          {/* Description */}
          {mode === 'visual' ? (
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
              <div className="w-full overflow-hidden">
                <div
                  dangerouslySetInnerHTML={{ __html: subsection.content }}
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </div>
          ) : mode === 'audio' ? (
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg">
              <div className="w-full overflow-hidden">
                <div
                  dangerouslySetInnerHTML={{ __html: subsection.content.replace('<audio ', '<audio style=\'width:100%;max-width:350px;\' ') }}
                />
              </div>
            </div>
          ) : mode !== 'flashCards' && (
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
              <p className="text-gray-800 leading-relaxed">{subsection.content}</p>
            </div>
          )}

          {/* Mode-specific content */}
          {getModeSpecificContent()}

          {/* Complete Button */}
          <div className="text-center pt-6">
            <Button 
              onClick={handleComplete}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              I&apos;ve Finished This Section! ✨
            </Button>
          </div>
        </div>
      </Card>

      {/* Motivational Message */}
      <div className="text-center">
        <p className="text-gray-600 italic">
          "Keep going, {userName}! You&apos;re on fire 🔥!"
        </p>
      </div>
    </div>
  );
};

export default ChapterContent;
