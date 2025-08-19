import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, ArrowRight, Brain, Droplets, Activity } from 'lucide-react'

export default function PathophysiologyModule() {
  const [activeSystem, setActiveSystem] = useState<'cardiovascular' | 'respiratory' | 'neurological'>('cardiovascular')
  const [currentStep, setCurrentStep] = useState(0)

  const pathophysiologyData = {
    cardiovascular: {
      title: "Heart Failure Pathophysiology",
      icon: Heart,
      color: "text-red-400",
      steps: [
        {
          title: "Initial Insult",
          description: "Myocardial damage reduces contractility",
          details: "Whether from MI, hypertension, or cardiomyopathy, the heart's ability to pump effectively is compromised.",
          visualization: "🫀💔"
        },
        {
          title: "Compensatory Mechanisms",
          description: "Body activates neurohormonal responses",
          details: "SNS activation increases HR and contractility. RAAS activation retains fluid. Frank-Starling mechanism stretches myofibrils.",
          visualization: "⚡🧠💊"
        },
        {
          title: "Progressive Dysfunction", 
          description: "Compensation becomes maladaptive",
          details: "Increased workload worsens heart function. Fluid retention increases preload. Vasoconstriction increases afterload.",
          visualization: "🔄⬇️💔"
        },
        {
          title: "Clinical Manifestations",
          description: "Signs and symptoms appear",
          details: "Decreased CO causes fatigue, weakness. Fluid backup causes edema, dyspnea. Poor perfusion affects end-organs.",
          visualization: "🫁💧🧠"
        }
      ]
    },
    respiratory: {
      title: "Respiratory Failure Cascade",
      icon: Droplets,
      color: "text-blue-400",
      steps: [
        {
          title: "Primary Injury",
          description: "Alveolar-capillary membrane damage",
          details: "Inflammation, infection, or trauma disrupts gas exchange at the alveolar level.",
          visualization: "🫁💥"
        },
        {
          title: "V/Q Mismatch",
          description: "Ventilation-perfusion imbalance develops",
          details: "Some alveoli receive ventilation but poor perfusion. Others have good perfusion but poor ventilation.",
          visualization: "⚖️🔄"
        },
        {
          title: "Hypoxemia",
          description: "Inadequate oxygen delivery",
          details: "Shunting and dead space increase. PaO2 falls despite supplemental oxygen.",
          visualization: "📉💨"
        },
        {
          title: "Systemic Effects",
          description: "Multi-organ involvement",
          details: "Tissue hypoxia affects cellular metabolism. Compensatory mechanisms may fail.",
          visualization: "🧠💔🫘"
        }
      ]
    },
    neurological: {
      title: "Intracranial Pressure Dynamics",
      icon: Brain,
      color: "text-purple-400",
      steps: [
        {
          title: "Monroe-Kellie Doctrine",
          description: "Fixed cranial volume principle",
          details: "Skull contains brain, blood, and CSF in fixed volume. Increase in one requires decrease in others.",
          visualization: "🧠=💧+🩸"
        },
        {
          title: "Initial Compensation",
          description: "CSF and venous blood displacement",
          details: "Small increases in volume compensated by CSF movement and venous compression.",
          visualization: "💧⬇️🩸⬇️"
        },
        {
          title: "Decompensation",
          description: "ICP rises exponentially",
          details: "Once compensatory mechanisms exhausted, small volume increases cause dramatic ICP rises.",
          visualization: "📈💥"
        },
        {
          title: "Herniation",
          description: "Brain tissue displacement",
          details: "High ICP forces brain tissue through anatomical openings, causing secondary injury.",
          visualization: "🧠⬇️💀"
        }
      ]
    }
  }

  const currentData = pathophysiologyData[activeSystem]
  const currentStepData = currentData.steps[currentStep]

  return (
    <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="w-6 h-6 text-red-400" />
        <h3 className="text-xl font-bold text-white">Interactive Pathophysiology</h3>
        <div className="ml-auto bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
          Deep Understanding
        </div>
      </div>

      {/* System Selector */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {(Object.keys(pathophysiologyData) as Array<keyof typeof pathophysiologyData>).map((system) => {
          const data = pathophysiologyData[system]
          return (
            <motion.button
              key={system}
              onClick={() => {
                setActiveSystem(system)
                setCurrentStep(0)
              }}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                activeSystem === system
                  ? 'bg-white/10 border-white/30 text-white'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <data.icon className={`w-8 h-8 mx-auto mb-2 ${data.color}`} />
              <div className="font-semibold text-sm">{data.title}</div>
            </motion.button>
          )
        })}
      </div>

      {/* Current Module */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <currentData.icon className={`w-8 h-8 ${currentData.color}`} />
            {currentData.title}
          </h4>
          <div className="text-sm text-gray-400">
            Step {currentStep + 1} of {currentData.steps.length}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-8">
          {currentData.steps.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-red-400' : 'bg-gray-600'
              }`}
              style={{ width: `${100 / currentData.steps.length}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${100 / currentData.steps.length}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>

        {/* Current Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h5 className="text-xl font-bold text-white mb-3">{currentStepData.title}</h5>
              <p className="text-gray-300 text-lg mb-4">{currentStepData.description}</p>
              <p className="text-gray-400 leading-relaxed">{currentStepData.details}</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">{currentStepData.visualization}</div>
              <div className="text-sm text-gray-400">Visual Representation</div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          <div className="text-center">
            <div className="text-white font-semibold">{currentStepData.title}</div>
            <div className="text-gray-400 text-sm">Understanding the cascade</div>
          </div>

          <motion.button
            onClick={() => setCurrentStep(Math.min(currentData.steps.length - 1, currentStep + 1))}
            disabled={currentStep === currentData.steps.length - 1}
            className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            whileHover={currentStep < currentData.steps.length - 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep < currentData.steps.length - 1 ? { scale: 0.95 } : {}}
          >
            Next <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Knowledge Check */}
      {currentStep === currentData.steps.length - 1 && (
        <motion.div
          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-lg font-bold text-white mb-3">Knowledge Check</h4>
          <p className="text-gray-300 mb-4">
            You've completed the {currentData.title.toLowerCase()} module. In the full version, 
            you would now take an interactive quiz to reinforce your understanding.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">What You've Learned:</div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Progressive nature of pathological processes</li>
                <li>• Compensatory mechanisms and their limits</li>
                <li>• Clinical manifestations and their origins</li>
                <li>• Critical decision points for interventions</li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">Next Steps:</div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Interactive quiz with explanations</li>
                <li>• Case studies applying this knowledge</li>
                <li>• Assessment protocols and tools</li>
                <li>• Treatment decision trees</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Demo summary */}
      <motion.div
        className="mt-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Activity className="w-8 h-8 text-red-400 mx-auto mb-3" />
        <h4 className="text-xl font-bold text-white mb-2">Deep Pathophysiology Learning</h4>
        <p className="text-gray-300 mb-4">
          This interactive approach helps you understand the "why" behind what you see, 
          making you a more confident and effective provider.
        </p>
        <div className="text-sm text-gray-400">
          Full platform includes 50+ pathophysiology modules with animations and 3D models
        </div>
      </motion.div>
    </div>
  )
}