import React from 'react';
import { MoreVertical } from 'lucide-react';

const EarningsChart = () => {
  return (
    <div className="transition-all duration-300 hover:scale-[1.02]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Earnings</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-primary-500 animate-pulse"></div>
            <span className="text-xs text-gray-500">Income</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-xs text-gray-500">Expense</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      <div className="relative h-60 w-full backdrop-blur-sm bg-white/50 rounded-lg p-4 hover:bg-white/70 transition-all duration-300">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-1 flex flex-col justify-between text-xs text-gray-500">
              <div>1000K</div>
              <div>750K</div>
              <div>500K</div>
              <div>250K</div>
              <div>0</div>
            </div>
            
            <div className="col-span-11 relative h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full rounded-lg bg-blue-50/50 p-4">
                  <div className="relative h-full w-full overflow-hidden">
                    <div className="absolute left-[60%] top-[40%] flex flex-col items-center animate-bounce">
                      <div className="h-4 w-4 rounded-full bg-white border-2 border-primary-500 animate-pulse"></div>
                      <div className="mt-2 rounded bg-white/80 backdrop-blur-sm p-2 shadow-md">
                        <p className="text-xs font-semibold">Sep 14, 2025</p>
                        <p className="text-xs text-primary-500">$837,000</p>
                        <p className="text-xs text-purple-500">$580,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-2 grid grid-cols-12 gap-0">
            <div className="col-span-1"></div>
            <div className="col-span-11 flex justify-between text-xs text-gray-500">
              <div>Jan</div>
              <div>Feb</div>
              <div>Mar</div>
              <div>Apr</div>
              <div>May</div>
              <div>Jun</div>
              <div>Jul</div>
              <div>Aug</div>
              <div>Sep</div>
              <div>Oct</div>
              <div>Nov</div>
              <div>Dec</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;