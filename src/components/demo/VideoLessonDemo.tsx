import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Pause, Volume2, Settings, Maximize, BookOpen, MessageCircle, Clock } from 'lucide-react'

export default function VideoLessonDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showNotes, setShowNotes] = useState(false)

  const lessonTopics = [
    { time: "0:00", topic: "Introduction to Airway Assessment", current: true },
    { time: "2:30", topic: "Visual Inspection Techniques" },
    { time: "5:15", topic: "Palpation and Movement Assessment" },
    { time: "8:45", topic: "Predictive Scoring Systems" },
    { time: "12:00", topic: "Documentation and Communication" }
  ]

  const keyPoints = [
    "Look for obvious anatomical abnormalities before patient contact",
    "The 3-3-2 rule: A simple bedside assessment tool",
    "Thyromental distance assessment in supine patients",
    "When to call for backup before attempting intubation"
  ]

  return (
    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Play className="w-6 h-6 text-green-400" />
        <h3 className="text-xl font-bold text-white">Professional Video Lesson</h3>
        <div className="ml-auto bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
          Advanced Airway Management
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl aspect-video relative overflow-hidden group">
            {/* Video thumbnail/placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">Difficult Airway Assessment</h4>
                <p className="text-gray-300 mb-6">with Dr. Sarah Chen, Flight Paramedic</p>
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white ml-1" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4 text-white">
                <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-sm">2:34</span>
                  <div className="flex-1 bg-white/20 rounded-full h-1 cursor-pointer"
                       onClick={(e) => {
                         const rect = e.currentTarget.getBoundingClientRect()
                         const progress = (e.clientX - rect.left) / rect.width * 100
                         setProgress(progress)
                       }}>
                    <motion.div 
                      className="bg-green-400 rounded-full h-1"
                      style={{ width: `${progress}%` }}
                      animate={{ width: isPlaying ? `${Math.min(progress + 0.5, 100)}%` : `${progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="text-sm">14:32</span>
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5" />
                  <Settings className="w-5 h-5" />
                  <Maximize className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quality indicator */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-white text-xs font-medium">1080p HD</span>
            </div>

            {/* Live note overlay */}
            {isPlaying && (
              <motion.div
                className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm rounded-lg p-4 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="text-yellow-400 text-sm font-semibold mb-1">Key Point</div>
                <div className="text-white text-sm">
                  Notice how the provider checks thyromental distance before patient contact
                </div>
              </motion.div>
            )}
          </div>

          {/* Video description */}
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-3">About This Lesson</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Learn systematic airway assessment techniques from an experienced flight paramedic. 
              This lesson covers visual inspection, physical assessment, and predictive tools 
              to identify difficult airways before attempting intubation.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                14:32 duration
              </div>
              <div>•</div>
              <div>2.5 CE Hours</div>
              <div>•</div>
              <div>Updated Oct 2024</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Lesson Outline */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Lesson Outline</h4>
            <div className="space-y-3">
              {lessonTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                    topic.current 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs font-mono w-12">{topic.time}</span>
                  <span className="text-sm">{topic.topic}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Key Takeaways</h4>
            <div className="space-y-3">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive Features */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Interactive Features</h4>
            <div className="space-y-3">
              <motion.button
                onClick={() => setShowNotes(!showNotes)}
                className="w-full flex items-center gap-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-semibold">Take Notes</span>
              </motion.button>

              <motion.button
                className="w-full flex items-center gap-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Ask Questions</span>
              </motion.button>
            </div>
          </div>

          {/* Notes Section */}
          {showNotes && (
            <motion.div
              className="bg-white/5 border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Your Notes</h4>
              <textarea
                className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:outline-none resize-none"
                placeholder="Take notes during the lesson... Your notes are automatically saved and timestamped."
              />
              <div className="mt-3 text-xs text-gray-400">
                Notes are automatically timestamped and synced across your devices
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Demo completion message */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h4 className="text-xl font-bold text-white mb-2">Professional Video Content</h4>
        <p className="text-gray-300 mb-4">
          This demo shows our high-quality video lessons created by working providers. 
          Full lessons include interactive quizzes, downloadable resources, and CE tracking.
        </p>
        <div className="text-sm text-gray-400">
          In the full platform: 100+ video lessons, expert interviews, and skill demonstrations
        </div>
      </motion.div>
    </div>
  )
}