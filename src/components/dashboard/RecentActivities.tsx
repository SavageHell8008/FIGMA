import React from 'react';
import { MoreVertical, Bell } from 'lucide-react';

const activities = [
  {
    id: 1,
    icon: <Bell className="h-5 w-5 text-primary-500" />,
    bgColor: 'bg-primary-100',
    title: 'Microsoft',
    description: 'Intellectual property downloaded',
    time: '2 hours ago',
  },
  {
    id: 2,
    icon: <Bell className="h-5 w-5 text-indigo-500" />,
    bgColor: 'bg-indigo-100',
    title: 'Unstop',
    description: 'weekly update',
    time: '5 hours ago',
  },
];

const RecentActivities = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
        <a 
          href="#" 
          className="text-xs font-medium text-gray-500 hover:text-primary-600"
        >
          view all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="flex items-start rounded-lg p-3 transition-colors duration-150 hover:bg-gray-50"
          >
            <div className={`mr-3 rounded-lg ${activity.bgColor} p-2`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
              <p className="text-xs text-gray-500">{activity.description}</p>
            </div>
            <div className="text-xs text-gray-400">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;