'use client'

import { useState, useEffect } from 'react'
import PageLayout from '@/components/PageLayout'
import { motion } from 'framer-motion'
import { Users, Activity, TrendingUp, Calendar, Shield, BarChart3, Settings, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// Mock data for demonstration
const mockTeamData = {
  teamName: 'Development Team',
  members: [
    { id: 1, name: 'John Developer', email: 'john@example.com', usage: 1250, lastActive: '2 hours ago', status: 'active' },
    { id: 2, name: 'Sarah Engineer', email: 'sarah@example.com', usage: 890, lastActive: '1 hour ago', status: 'active' },
    { id: 3, name: 'Mike Designer', email: 'mike@example.com', usage: 650, lastActive: '3 hours ago', status: 'active' },
    { id: 4, name: 'Lisa Architect', email: 'lisa@example.com', usage: 1100, lastActive: '30 minutes ago', status: 'active' },
    { id: 5, name: 'Tom Builder', email: 'tom@example.com', usage: 0, lastActive: 'Never', status: 'pending' },
  ],
  totalUsage: 3890,
  dailyLimit: 'Unlimited',
  monthlyLimit: 'Unlimited',
  billingCycle: 'Monthly',
  nextBilling: 'Jan 15, 2025',
}

export default function TeamDashboard() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-blue/5" />
        
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Team Usage Dashboard
              </h1>
              <p className="text-gray-300">
                Monitor your team's AI usage and manage licenses
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="bg-dark-700 hover:bg-dark-600">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Link href="/team-settings">
                <Button variant="secondary" className="bg-dark-700 hover:bg-dark-600">
                  <Settings className="w-4 h-4 mr-2" />
                  Team Settings
                </Button>
              </Link>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-700 rounded-xl p-6 border border-dark-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">Team</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">5</h3>
              <p className="text-sm text-gray-400">Active Members</p>
              <p className="text-xs text-gray-500 mt-2">4 active, 1 pending</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-dark-700 rounded-xl p-6 border border-dark-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent-blue/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-accent-blue" />
                </div>
                <span className="text-xs text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full">Usage</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">3,890</h3>
              <p className="text-sm text-gray-400">Total Conversations</p>
              <p className="text-xs text-gray-500 mt-2">This month</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-dark-700 rounded-xl p-6 border border-dark-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-green" />
                </div>
                <span className="text-xs text-accent-green bg-accent-green/10 px-2 py-1 rounded-full">Growth</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">+24%</h3>
              <p className="text-sm text-gray-400">Usage Trend</p>
              <p className="text-xs text-gray-500 mt-2">vs last month</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-dark-700 rounded-xl p-6 border border-dark-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-accent-yellow/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent-yellow" />
                </div>
                <span className="text-xs text-accent-yellow bg-accent-yellow/10 px-2 py-1 rounded-full">Billing</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">$100</h3>
              <p className="text-sm text-gray-400">Monthly Plan</p>
              <p className="text-xs text-gray-500 mt-2">Renews {mockTeamData.nextBilling}</p>
            </motion.div>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2 mb-6">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-primary text-dark'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {range === '7d' ? 'Last 7 days' : range === '30d' ? 'Last 30 days' : 'Last 90 days'}
              </button>
            ))}
          </div>

          {/* Team Members Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-700 rounded-xl border border-dark-600 overflow-hidden"
          >
            <div className="p-6 border-b border-dark-600">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Team Members
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-800">
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Member</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Status</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-gray-300">Usage</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Last Active</th>
                    <th className="text-right px-6 py-4 text-sm font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTeamData.members.map((member, index) => (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-t border-dark-600 hover:bg-dark-800/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-white">{member.name}</p>
                          <p className="text-xs text-gray-400">{member.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          member.status === 'active' 
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {member.status === 'active' ? 'Active' : 'Pending Invite'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div>
                          <p className="text-sm font-medium text-white">{member.usage.toLocaleString()}</p>
                          <p className="text-xs text-gray-400">conversations</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-300">{member.lastActive}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {member.status === 'pending' ? (
                          <button className="text-xs text-primary hover:text-primary-light">
                            Resend Invite
                          </button>
                        ) : (
                          <button className="text-xs text-gray-400 hover:text-white">
                            View Details
                          </button>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Usage Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 bg-dark-700 rounded-xl border border-dark-600 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Usage Analytics
              </h2>
              <p className="text-sm text-gray-400">
                Showing data for {timeRange === '7d' ? 'last 7 days' : timeRange === '30d' ? 'last 30 days' : 'last 90 days'}
              </p>
            </div>
            
            {/* Chart placeholder */}
            <div className="h-64 bg-dark-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Usage analytics chart</p>
                <p className="text-gray-500 text-xs mt-1">Coming soon</p>
              </div>
            </div>
          </motion.div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-dark-700 rounded-lg border border-dark-600 flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Team Security:</span> Each team member has their own individual license key. 
                Usage is tracked separately for security and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}