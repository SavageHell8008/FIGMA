import React from 'react';
import MetricCard from './dashboard/MetricCard';
import EarningsChart from './dashboard/EarningsChart';
import OrganizationsTable from './dashboard/OrganizationsTable';
import RecentActivities from './dashboard/RecentActivities';
import Messages from './dashboard/Messages';

import { 
  TrendingUp, 
  TrendingDown, 
  BookOpen, 
  Users, 
  DollarSign, 
  FileText 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Alex! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Courses"
          value="7,265"
          percentageChange="+1.01%"
          trend="up"
          icon={<BookOpen className="h-6 w-6 text-primary-600" />}
        />
        <MetricCard
          title="Total Students"
          value="3,671"
          percentageChange="-0.03%"
          trend="down"
          icon={<Users className="h-6 w-6 text-primary-600" />}
        />
        <MetricCard
          title="Total Earnings"
          value="156"
          percentageChange="+15.03%"
          trend="up"
          icon={<DollarSign className="h-6 w-6 text-primary-600" />}
        />
        <MetricCard
          title="Total Invoice"
          value="$2,657"
          percentageChange="34%"
          trend="up"
          icon={<FileText className="h-6 w-6 text-primary-600" />}
          chartData={[4, 6, 8, 7, 9, 8, 8, 9, 8, 7, 8, 9]}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-1 rounded-lg bg-white p-4 shadow lg:col-span-2">
          <EarningsChart />
        </div>
        <div className="col-span-1 rounded-lg bg-white p-4 shadow">
          <RecentActivities />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-1 rounded-lg bg-white p-4 shadow lg:col-span-2">
          <OrganizationsTable />
        </div>
        <div className="col-span-1 rounded-lg bg-white p-4 shadow">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;