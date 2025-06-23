
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <div 
      className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:scale-105 hover:border-blue-500/30 transition-all duration-300 animate-fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Hover Effect */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
      </div>
    </div>
  );
};

export default FeatureCard;
