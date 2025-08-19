import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Download,
  Clock,
  Headphones,
  MessageCircle,
  Star,
  Bookmark
} from 'lucide-react'

export default function PodcastDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(847) // 14:07
  const [duration] = useState(2156) // 35:56
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = (currentTime / duration) * 100

  const episodeInfo = {
    title: "Critical Care Transport: When Every Minute Counts",
    guest: "Dr. Maria Rodriguez, Flight Paramedic",
    description: "An in-depth conversation about decision-making in high-acuity transports, team communication, and managing complex patients in confined spaces.",
    duration: "35:56",
    published: "Nov 28, 2024",
    rating: 4.9,
    downloads: "2.8K"
  }

  const chapters = [
    { time: 0, title: "Introduction & Background", current: false },
    { time: 420, title: "Transport Decision Making", current: false },
    { time: 847, title: "Communication in Crisis", current: true },
    { time: 1260, title: "Equipment Considerations", current: false },
    { time: 1680, title: "Case Study Discussion", current: false },
    { time: 1980, title: "Key Takeaways", current: false }
  ]

  const keyQuotes = [
    {
      time: "12:34",
      speaker: "Dr. Rodriguez",
      quote: "The moment you stop thinking three steps ahead is the moment your patient is in danger."
    },
    {
      time: "18:45", 
      speaker: "Host",
      quote: "How do you balance speed with safety when the stakes are this high?"
    },
    {
      time: "23:12",
      speaker: "Dr. Rodriguez", 
      quote: "Your worst day in the field teaches you more than your best day in the classroom."
    }
  ]

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Headphones className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Expert Podcast Series</h3>
        <div className="ml-auto bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
          Audio Learning
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Player */}
        <div className="lg:col-span-2">
          {/* Episode Info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">{episodeInfo.title}</h4>
                <p className="text-purple-300 font-semibold mb-2">with {episodeInfo.guest}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{episodeInfo.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {episodeInfo.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {episodeInfo.rating}
                  </div>
                  <div>{episodeInfo.downloads} downloads</div>
                  <div>{episodeInfo.published}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{formatTime(currentTime)}</span>
                <span>Communication in Crisis</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div 
                className="bg-gray-700 rounded-full h-2 cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const progress = (e.clientX - rect.left) / rect.width
                  setCurrentTime(Math.floor(progress * duration))
                }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full h-2 relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                </motion.div>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.button
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkipBack className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </motion.button>

              <motion.button
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkipForward className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Additional Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-gray-400" />
                  <div className="w-20 bg-gray-700 rounded-full h-1">
                    <div className="bg-purple-400 rounded-full h-1 w-3/4"></div>
                  </div>
                </div>

                <select 
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                  className="bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1.0}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2.0}>2x</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Live Transcript */}
          {isPlaying && (
            <motion.div
              className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Live Transcript</h4>
              <div className="bg-gray-800/50 rounded-lg p-4 max-h-32 overflow-y-auto">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-purple-300 font-semibold">[14:07] Dr. Rodriguez:</span> "When you're in that confined space 30,000 feet up, your communication has to be crystal clear. There's no room for assumptions. Every team member needs to know exactly what's happening and what their role is..."
                </p>
              </div>
              <div className="mt-3 text-xs text-gray-400">
                Transcripts are automatically generated and include timestamps for easy reference
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Chapter Navigation */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Chapters</h4>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTime(chapter.time)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    chapter.current 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{chapter.title}</span>
                    <span className="text-xs">{formatTime(chapter.time)}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Key Quotes */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Key Quotes</h4>
            <div className="space-y-4">
              {keyQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-lg p-4 cursor-pointer hover:bg-purple-500/20 transition-colors"
                  onClick={() => setCurrentTime(parseInt(quote.time.split(':')[0]) * 60 + parseInt(quote.time.split(':')[1]))}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-xs text-purple-300 mb-2">{quote.time} • {quote.speaker}</div>
                  <p className="text-gray-300 text-sm italic leading-relaxed">"{quote.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Discussion */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Episode Discussion</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-semibold">Mike R.</div>
                  <div className="text-gray-400 text-xs">2 hours ago</div>
                  <p className="text-gray-300 text-sm mt-1">Great insights on team communication. Anyone else notice similarities to their own transport experiences?</p>
                </div>
              </div>
            </div>
            
            <motion.button
              className="w-full flex items-center justify-center gap-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 py-3 rounded-lg hover:bg-purple-500/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Join Discussion
            </motion.button>
          </div>
        </div>
      </div>

      {/* Demo Summary */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Headphones className="w-8 h-8 text-purple-400 mx-auto mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">Learn On The Go</h4>
        <p className="text-gray-300 mb-4">
          High-quality conversations with experts, perfect for commutes, workouts, or downtime. 
          All episodes include transcripts, chapters, and discussion threads.
        </p>
        <div className="text-sm text-gray-400">
          Full platform includes 50+ episodes with EMS leaders, physicians, and experienced providers
        </div>
      </motion.div>
    </div>
  )
}