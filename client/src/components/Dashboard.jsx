import { useState, useEffect } from 'react';
import Header from './Header';
import BiddingCard from './BiddingCard';
import FeatureCard from './FeatureCard';
import { TrendingUp, Shield, Zap, Target, Users, Award } from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Debugging user object
    console.log('User object:', user);
  }, [user]);

  const currentBiddings = [
    {
      id: 1,
      title: "Website Development Project",
      budget: "$2,500 - $5,000",
      deadline: "3 days left",
      status: "leading",
      competitors: 12,
      yourBid: "$3,200",
    },
    {
      id: 2,
      title: "Mobile App UI/UX Design",
      budget: "$1,200 - $2,800",
      deadline: "1 day left",
      status: "competing",
      competitors: 8,
      yourBid: "$1,800",
    },
    {
      id: 3,
      title: "E-commerce Platform Setup",
      budget: "$800 - $1,500",
      deadline: "5 days left",
      status: "pending",
      competitors: 15,
      yourBid: "$1,100",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Smart Bid Analysis",
      description: "AI-powered insights to optimize your bidding strategy and increase win rates.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security ensures your data and transactions are always protected.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Real-time Notifications",
      description: "Instant alerts for new opportunities and bid status updates.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Find the perfect projects that match your skills and expertise.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with other professionals and learn from successful bidders.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Award,
      title: "Success Tracking",
      description: "Detailed analytics and performance metrics to track your success.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <Header user={user} onLogout={onLogout} activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div className="animate-fade-in">
            {/* Welcome Section */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Welcome back, {user.email || 'User'}! 👋
                </h1>
                <p className="text-gray-300 text-lg">
                  Let's help you win more projects today
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-300 text-sm font-medium">Active Bids</p>
                    <p className="text-2xl font-bold text-white">3</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-xl rounded-xl p-6 border border-green-500/20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-300 text-sm font-medium">Win Rate</p>
                    <p className="text-2xl font-bold text-white">78%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-300 text-sm font-medium">Total Earned</p>
                    <p className="text-2xl font-bold text-white">$12.5K</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cyan-300 text-sm font-medium">Projects Won</p>
                    <p className="text-2xl font-bold text-white">24</p>
                  </div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Current Biddings */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Current Biddings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentBiddings.map((bid, index) => (
                  <BiddingCard key={bid.id} bid={bid} index={index} />
                ))}
              </div>
            </div>

            {/* Why Choose BidBuddy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose BidBuddy?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'voice' && (
          <div className="text-center py-20 animate-fade-in">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-12 border border-gray-700/50 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Voice Assistant</h3>
              <p className="text-gray-400">
                Voice assistant feature coming soon! This will help you manage your bids using voice commands.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
