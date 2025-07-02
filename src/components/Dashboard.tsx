import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { User, LearningModeType } from '../types';

interface DashboardProps {
  user: User;
  onModeSelect: (mode: LearningModeType) => void;
  onEditName: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onModeSelect, onEditName }) => {
  const modes = [
    {
      id: 'flashCards' as LearningModeType,
      title: 'Flash Card Learning',
      icon: '🔤',
      description: 'Quick and effective memorization',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      id: 'visual' as LearningModeType,
      title: 'Visual Learning',
      icon: '🎥',
      description: 'Learn through interactive visuals',
      color: 'from-green-400 to-green-600',
      hoverColor: 'hover:from-green-500 hover:to-green-700'
    },
    {
      id: 'audio' as LearningModeType,
      title: 'Audio Learning',
      icon: '🎧',
      description: 'Listen and learn on the go',
      color: 'from-purple-400 to-purple-600',
      hoverColor: 'hover:from-purple-500 hover:to-purple-700'
    }
  ];

  const getTotalProgress = () => {
    const total = Object.values(user.progress).reduce((acc, mode) => acc + mode.totalProgress, 0);
    return Math.round(total / 3);
  };

  const getLastActivity = (mode: LearningModeType) => {
    const progress = user.progress[mode];
    if (progress.completedChapters.length > 0) {
      return `Continue Chapter ${progress.currentChapter}`;
    }
    return 'Start your journey!';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👋</span>
                <h1 className="text-2xl font-bold text-gray-800">
                  Welcome back, <span className="text-purple-600">{user.name}</span>!
                </h1>
              </div>
            </div>
            <Button 
              onClick={onEditName}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
            >
              Create Player
            </Button>
          </div>
          
          {/* Overall Progress */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Overall Progress</span>
              <span className="text-sm font-semibold text-purple-600">{getTotalProgress()}%</span>
            </div>
            <Progress value={getTotalProgress()} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Learning Modes */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Choose Your Learning Adventure! 🚀
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <Card
                key={mode.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
                onClick={() => onModeSelect(mode.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${mode.color}`}></div>
                
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-6xl mb-3 group-hover:animate-bounce">
                      {mode.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {mode.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {mode.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-purple-600">
                        {user.progress[mode.id].totalProgress}%
                      </span>
                    </div>
                    <Progress value={user.progress[mode.id].totalProgress} className="h-1.5" />
                    
                    <p className="text-xs text-gray-500 text-center">
                      {getLastActivity(mode.id)}
                    </p>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${mode.color} ${mode.hoverColor} text-white font-semibold transition-all duration-300 group-hover:shadow-lg`}
                  >
                    {user.progress[mode.id].totalProgress > 0 ? 'Continue' : 'Start'} Learning
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              🏆 Your Achievements
            </h3>
            <span className="text-sm text-gray-600">
              {user.badges.length} badges earned
            </span>
          </div>
          
          {user.badges.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {user.badges.map((badge, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 text-sm animate-pulse"
                >
                  🎖️ {badge}
                </Badge>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">🎯</div>
              <p>Complete your first chapter to earn badges!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
