
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface WelcomeScreenProps {
  onUserSetup: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onUserSetup }) => {
  const [name, setName] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsAnimating(true);
      setTimeout(() => {
        onUserSetup(name.trim());
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <Card className={`relative z-10 p-8 max-w-md w-full bg-white/95 backdrop-blur-md shadow-2xl border-0 transition-all duration-500 ${
        isAnimating ? 'scale-105 rotate-1' : 'hover:scale-102'
      }`}>
        <div className="text-center space-y-6">
          {/* Animated Welcome Icon */}
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl animate-bounce">
              🎯
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-xl animate-pulse">
              ✨
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to LearnFun!
            </h1>
            <p className="text-gray-600 text-lg">
              Hey there! What's your name?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your awesome name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg py-3 border-2 border-purple-200 focus:border-purple-400 rounded-xl"
              autoFocus
            />
            
            <Button
              type="submit"
              disabled={!name.trim()}
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let&apos;s Start Learning! 🚀
            </Button>
          </form>

          <div className="text-sm text-gray-500 space-y-1">
            <p>🎮 Gamified Learning Experience</p>
            <p>📈 Track Your Progress</p>
            <p>🏆 Earn Awesome Badges</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
