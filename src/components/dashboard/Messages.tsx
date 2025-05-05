import React from 'react';
import { MoreVertical } from 'lucide-react';

const messages = [
  {
    id: 1,
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Abhishek',
    message: 'Hi!',
    time: '12:34 pm',
    unread: true,
  },
  {
    id: 2,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Vivek',
    message: 'Do your work',
    time: '12:34 pm',
    unread: false,
  },
  {
    id: 3,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Lucky',
    message: 'Hi!',
    time: '12:34 pm',
    unread: false,
  },
];

const Messages = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className="flex items-center rounded-lg p-3 transition-colors duration-150 hover:bg-gray-50"
          >
            <div className="relative mr-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img 
                  src={message.avatar} 
                  alt={message.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              {message.unread && (
                <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-primary-500 ring-2 ring-white"></span>
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">{message.name}</h4>
              <p className="text-xs text-gray-500 truncate">{message.message}</p>
            </div>
            <div className="text-xs text-gray-400">{message.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;