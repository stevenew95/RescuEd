import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  Calendar,
  CheckCircle,
  Brain,
  Heart,
  Activity
} from 'lucide-react'

export default function ProgressTrackingDemo() {
  const [activeView, setActiveView] = useState<'overview' | 'learning' | 'compliance'>('overview')

  const stats = {
    overview: {
      totalHours: 24.5,
      targetHours: 40,
      coursesCompleted: 12,
      averageScore: 94,
      streak: 15,
      rank: "Top 10%"
    },
    recentActivity: [
      { date: "Nov 28", course: "Advanced Cardiac Assessment", score: 96, hours: 2.5 },
      { date: "Nov 25", course: "Respiratory Pathophysiology", score: 92, hours: 3.0 },
      { date: "Nov 22", course: "Trauma Assessment", score: 98, hours: 2.0 },
      { date: "Nov 19", course: "Pharmacology Update", score: 89, hours: 1.5 }
    ],
    skillProgress: [
      { skill: "Cardiac Assessment", level: 85, trend: "up" },
      { skill: "Respiratory Care", level: 92, trend: "up" },
      { skill: "Trauma Management", level: 78, trend: "stable" },
      { skill: "Pharmacology", level: 88, trend: "up" },
      { skill: "Pathophysiology", level: 95, trend: "up" }
    ]
  }

  const ComplianceCalendar = () => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h4 className="text-lg font-semibold text-white mb-4">CE Compliance Calendar</h4>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-gray-400 text-xs p-2">{day}</div>
        ))}
        {Array.from({ length: 30 }, (_, i) => {
          const hasActivity = Math.random() > 0.7
          const isToday = i === 15
          return (
            <motion.div
              key={i}
              className={`aspect-square rounded flex items-center justify-center text-xs ${
                isToday 
                  ? 'bg-blue-500 text-white' 
                  : hasActivity 
                  ? 'bg-green-500/30 text-green-300' 
                  : 'bg-gray-700 text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {i + 1}
            </motion.div>
          )
        })}
      </div>
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500/30 rounded"></div>
          <span className="text-gray-400">Learning Activity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-gray-400">Today</span>
        </div>
      </div>
    </div>
  )

  const LearningInsights = () => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h4 className="text-lg font-semibold text-white mb-4">Learning Insights</h4>
      <div className="space-y-4">
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">Peak Learning Time</span>
          </div>
          <p className="text-gray-300 text-sm">You learn best between 6-8 PM with 89% average scores</p>
        </div>
        
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Improvement Trend</span>
          </div>
          <p className="text-gray-300 text-sm">Your scores improved 12% over the last month</p>
        </div>
        
        <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Focus Areas</span>
          </div>
          <p className="text-gray-300 text-sm">Consider more trauma management content to round out skills</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-yellow-400" />
        <h3 className="text-xl font-bold text-white">Smart Progress Tracking</h3>
        <div className="ml-auto bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
          Advanced Analytics
        </div>
      </div>

      {/* View Selector */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'learning', label: 'Learning', icon: Brain },
          { id: 'compliance', label: 'Compliance', icon: CheckCircle }
        ].map((view) => (
          <motion.button
            key={view.id}
            onClick={() => setActiveView(view.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeView === view.id
                ? 'bg-yellow-500 text-black'
                : 'bg-white/10 text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <view.icon className="w-4 h-4" />
            {view.label}
          </motion.button>
        ))}
      </div>

      {/* Overview View */}
      {activeView === 'overview' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.overview.totalHours}</div>
              <div className="text-gray-400 text-sm">CE Hours</div>
              <div className="text-xs text-gray-500">of {stats.overview.targetHours} required</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.overview.coursesCompleted}</div>
              <div className="text-gray-400 text-sm">Completed</div>
              <div className="text-xs text-gray-500">courses this year</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.overview.averageScore}%</div>
              <div className="text-gray-400 text-sm">Avg Score</div>
              <div className="text-xs text-gray-500">+8% from last quarter</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <TrendingUp className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.overview.rank}</div>
              <div className="text-gray-400 text-sm">Ranking</div>
              <div className="text-xs text-gray-500">among peers</div>
            </div>
          </div>

          {/* CE Progress Bar */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-white">CE Hours Progress</h4>
              <span className="text-sm text-gray-400">
                {stats.overview.totalHours} / {stats.overview.targetHours} hours
              </span>
            </div>
            <div className="bg-gray-700 rounded-full h-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full h-3"
                initial={{ width: 0 }}
                animate={{ width: `${(stats.overview.totalHours / stats.overview.targetHours) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-white font-semibold">Q1</div>
                <div className="text-green-400 text-sm">✓ Complete</div>
              </div>
              <div>
                <div className="text-white font-semibold">Q2</div>
                <div className="text-green-400 text-sm">✓ Complete</div>
              </div>
              <div>
                <div className="text-white font-semibold">Q3</div>
                <div className="text-yellow-400 text-sm">In Progress</div>
              </div>
              <div>
                <div className="text-gray-400 font-semibold">Q4</div>
                <div className="text-gray-500 text-sm">Pending</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
            <div className="space-y-3">
              {stats.recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-medium">{activity.course}</div>
                      <div className="text-gray-400 text-sm">{activity.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">{activity.score}%</div>
                    <div className="text-gray-400 text-sm">{activity.hours}h CE</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Learning View */}
      {activeView === 'learning' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Skill Progress */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-6">Skill Development</h4>
              <div className="space-y-4">
                {stats.skillProgress.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.skill}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">{skill.level}%</span>
                        <TrendingUp className={`w-4 h-4 ${
                          skill.trend === 'up' ? 'text-green-400' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <LearningInsights />
          </div>
        </motion.div>
      )}

      {/* Compliance View */}
      {activeView === 'compliance' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <ComplianceCalendar />
            
            <div className="space-y-6">
              {/* Certification Status */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Certification Status</h4>
                <div className="space-y-3">
                  {[
                    { cert: 'NREMT Paramedic', status: 'Current', expires: 'Mar 2025', color: 'green' },
                    { cert: 'ACLS', status: 'Current', expires: 'Jan 2025', color: 'yellow' },
                    { cert: 'PALS', status: 'Current', expires: 'Jun 2025', color: 'green' },
                    { cert: 'BLS', status: 'Current', expires: 'Dec 2024', color: 'yellow' }
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{cert.cert}</div>
                        <div className="text-gray-400 text-sm">Expires {cert.expires}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cert.color === 'green' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {cert.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Upcoming Deadlines</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-white font-medium">BLS Renewal</div>
                      <div className="text-yellow-300 text-sm">Due in 6 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Q4 CE Requirements</div>
                      <div className="text-blue-300 text-sm">15.5 hours remaining</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Demo Summary */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Activity className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">Smart Progress Tracking</h4>
        <p className="text-gray-300 mb-4">
          See exactly how you're progressing, identify areas for improvement, and stay compliant 
          with intelligent tracking and insights.
        </p>
        <div className="text-sm text-gray-400">
          Full platform includes detailed analytics, personalized recommendations, and automated compliance alerts
        </div>
      </motion.div>
    </div>
  )
}