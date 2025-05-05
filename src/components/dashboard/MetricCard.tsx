import React from 'react';
import { TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  percentageChange: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  chartData?: number[];
}

const MetricCard = ({
  title,
  value,
  percentageChange,
  trend,
  icon,
  chartData,
}: MetricCardProps) => {
  return (
    <div className="rounded-lg bg-white/50 backdrop-blur-sm p-4 shadow transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/70">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
          <MoreVertical size={16} />
        </button>
      </div>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold animate-fade-in">{value}</h2>
            <span
              className={`flex items-center text-xs font-medium ${
                trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {trend === 'up' ? (
                <TrendingUp size={14} className="mr-1 animate-bounce" />
              ) : (
                <TrendingDown size={14} className="mr-1 animate-bounce" />
              )}
              {percentageChange}
            </span>
          </div>
          {!chartData && (
            <p className="mt-1 text-xs text-gray-500">
              Compared to last week
            </p>
          )}
        </div>
        {!chartData && (
          <div className="rounded-full bg-primary-50 p-2 animate-pulse">{icon}</div>
        )}
      </div>
      
      {chartData && (
        <div className="mt-4 h-10">
          <div className="flex h-full items-end justify-between">
            {chartData.map((value, index) => (
              <div
                key={index}
                className="w-1 rounded-sm bg-primary-500 transition-all duration-500 hover:bg-primary-600"
                style={{ 
                  height: `${value * 10}%`,
                  animation: `slideUp ${0.2 + index * 0.1}s ease-out`
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricCard;