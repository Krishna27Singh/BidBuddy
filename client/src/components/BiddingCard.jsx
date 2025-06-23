
import { Clock, Users, DollarSign, TrendingUp } from 'lucide-react';

const BiddingCard = ({ bid, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'leading':
        return 'from-green-500 to-emerald-500';
      case 'competing':
        return 'from-yellow-500 to-orange-500';
      case 'pending':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'leading':
        return 'Leading';
      case 'competing':
        return 'Competing';
      case 'pending':
        return 'Pending';
      default:
        return 'Unknown';
    }
  };

  return (
    <div 
      className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:scale-105 hover:border-blue-500/50 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getStatusColor(bid.status)} text-white text-xs font-medium`}>
          {getStatusText(bid.status)}
        </div>
        <div className="text-gray-400 text-sm flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {bid.deadline}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2">
        {bid.title}
      </h3>

      {/* Project Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-300 text-sm">
          <DollarSign className="w-4 h-4 mr-2 text-green-400" />
          <span className="font-medium">Budget:</span>
          <span className="ml-1">{bid.budget}</span>
        </div>
        
        <div className="flex items-center text-gray-300 text-sm">
          <Users className="w-4 h-4 mr-2 text-blue-400" />
          <span className="font-medium">Competitors:</span>
          <span className="ml-1">{bid.competitors}</span>
        </div>

        <div className="flex items-center text-gray-300 text-sm">
          <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
          <span className="font-medium">Your Bid:</span>
          <span className="ml-1 text-white font-semibold">{bid.yourBid}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
        View Details
      </button>
    </div>
  );
};

export default BiddingCard;
