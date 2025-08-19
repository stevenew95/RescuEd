import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, AlertTriangle, Clock, Heart } from 'lucide-react'

export default function InteractiveCaseStudy() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedChoices, setSelectedChoices] = useState<number[]>([])
  const [showFeedback, setShowFeedback] = useState(false)

  const caseSteps = [
    {
      id: 0,
      scenario: "You respond to a 67-year-old male with chest pain at a local restaurant. Patient is conscious, sitting upright, appears diaphoretic and pale. He rates his pain 8/10, describing it as 'crushing' and radiating to his left arm.",
      vitals: "BP: 160/95, HR: 110, RR: 24, SpO2: 94% on RA, Temp: 98.6°F",
      question: "What is your immediate priority?",
      choices: [
        { 
          text: "Obtain a 12-lead ECG immediately", 
          correct: true,
          explanation: "Excellent choice. Given the classic presentation of chest pain with radiation, obtaining a 12-lead ECG is crucial for identifying ST-elevation or other acute changes."
        },
        { 
          text: "Start an IV and give nitroglycerin", 
          correct: false,
          explanation: "While IV access is important, you should obtain the 12-lead first to rule out right-sided MI or other contraindications to nitroglycerin."
        },
        { 
          text: "Give high-flow oxygen via non-rebreather", 
          correct: false,
          explanation: "With SpO2 of 94%, supplemental oxygen is appropriate, but the 12-lead ECG takes priority for diagnosis and treatment planning."
        }
      ]
    },
    {
      id: 1,
      scenario: "Your 12-lead shows ST elevation in leads II, III, and aVF with reciprocal changes in I and aVL. The patient's pain has increased to 9/10. He's now asking for his wife and seems anxious.",
      vitals: "BP: 170/100, HR: 118, RR: 26, SpO2: 92% on 4L NC",
      question: "Based on the ECG findings, what's your next priority?",
      choices: [
        { 
          text: "Notify receiving hospital of STEMI and request cath lab activation", 
          correct: true,
          explanation: "Perfect! Inferior STEMI requires immediate cath lab activation. Time is muscle - every minute counts for this patient's outcome."
        },
        { 
          text: "Give aspirin and wait to see if pain improves", 
          correct: false,
          explanation: "While aspirin is indicated, this patient needs immediate reperfusion therapy. Waiting could result in significant myocardial damage."
        },
        { 
          text: "Increase oxygen to non-rebreather mask", 
          correct: false,
          explanation: "Oxygen management is important, but cath lab activation is the priority intervention that will save this patient's heart muscle."
        }
      ]
    }
  ]

  const handleChoiceSelect = (choiceIndex: number) => {
    const newSelectedChoices = [...selectedChoices]
    newSelectedChoices[currentStep] = choiceIndex
    setSelectedChoices(newSelectedChoices)
    setShowFeedback(true)
  }

  const handleNextStep = () => {
    if (currentStep < caseSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowFeedback(false)
    }
  }

  const currentCase = caseSteps[currentStep]
  const selectedChoice = selectedChoices[currentStep]

  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-6 h-6 text-red-400" />
        <h3 className="text-xl font-bold text-white">Interactive Case Study: Chest Pain</h3>
        <div className="ml-auto bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
          Step {currentStep + 1} of {caseSteps.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-gray-700 rounded-full h-2 mb-8">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-2"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / caseSteps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Scenario */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-400" />
          Scenario
        </h4>
        <p className="text-gray-300 leading-relaxed mb-4">{currentCase.scenario}</p>
        
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h5 className="text-white font-semibold mb-2">Vital Signs:</h5>
          <p className="text-gray-300 text-sm font-mono">{currentCase.vitals}</p>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">{currentCase.question}</h4>
        
        <div className="space-y-3">
          {currentCase.choices.map((choice, index) => (
            <motion.button
              key={index}
              onClick={() => !showFeedback && handleChoiceSelect(index)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                showFeedback
                  ? selectedChoice === index
                    ? choice.correct
                      ? 'bg-green-500/20 border-green-500 text-green-100'
                      : 'bg-red-500/20 border-red-500 text-red-100'
                    : choice.correct && selectedChoice !== index
                    ? 'bg-green-500/10 border-green-500/50 text-green-200'
                    : 'bg-white/5 border-white/10 text-gray-400'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
              disabled={showFeedback}
              whileHover={!showFeedback ? { scale: 1.02 } : {}}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center gap-3">
                {showFeedback && (
                  <>
                    {choice.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : selectedChoice === index ? (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    ) : null}
                  </>
                )}
                <span className="font-medium">{choice.text}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <motion.div
          className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="text-white font-semibold mb-3">Clinical Reasoning:</h5>
          <p className="text-gray-300 leading-relaxed">
            {currentCase.choices[selectedChoice]?.explanation}
          </p>
          
          {currentStep < caseSteps.length - 1 && (
            <motion.button
              onClick={handleNextStep}
              className="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Case →
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Completion */}
      {showFeedback && currentStep === caseSteps.length - 1 && (
        <motion.div
          className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">Case Complete!</h4>
          <p className="text-gray-300 mb-4">
            Excellent work navigating this inferior STEMI case. This type of scenario-based learning 
            helps you practice critical decision-making in a safe environment.
          </p>
          <div className="text-sm text-gray-400">
            In the full version: Additional cases, detailed pathophysiology explanations, 
            and progress tracking across multiple scenarios.
          </div>
        </motion.div>
      )}
    </div>
  )
}