import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff, PhoneOff, Settings, User } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const VoiceCallUI = () => {
  const [isMicActive, setIsMicActive] = useState(true)
  const [isCallActive, setIsCallActive] = useState(true)

  const toggleMic = () => {
    setIsMicActive(!isMicActive)
  }

  const restartCall = () => {
    setIsCallActive(true)
    setIsMicActive(true)
  }

  if (!isCallActive) {
    return (
      <motion.div 
        className="min-h-screen bg-black flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl">
              <PhoneOff className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Call Ended</h2>
            <p className="text-gray-400 mb-8">The voice session has been terminated</p>
            <motion.button
              onClick={restartCall}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-all duration-200 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start New Call
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="min-h-screen bg-black flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Settings Button - Top Right */}
      <motion.div 
        className="absolute top-6 right-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button
          className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Main Content - Centered Layout */}
      <div className="h-full flex items-center justify-center relative overflow-visible">
        {/* Centered Spline 3D Scene */}
        <motion.div 
          className="pointer-events-none flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
          style={{ 
            transformOrigin: "center center",
            position: "relative",
            zIndex: 1
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Spline scene="https://prod.spline.design/sF5pLaNqkkeifFKg/scene.splinecode" />
          </motion.div>
        </motion.div>

        {/* Bottom Section - Control Panel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div 
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            style={{ zIndex: 10 }}
          >
            {/* Microphone Toggle Button */}
            <motion.button
              onClick={toggleMic}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                isMicActive 
                  ? 'bg-gray-700/80 hover:bg-gray-600/80 text-white' 
                  : 'bg-red-500/90 hover:bg-red-600/90 text-white'
              } shadow-lg backdrop-blur-sm border border-gray-600/30`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={isMicActive ? {} : { 
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' 
              }}
            >
              {isMicActive ? (
                <Mic className="w-5 h-5" />
              ) : (
                <MicOff className="w-5 h-5" />
              )}
            </motion.button>

          </motion.div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20 pointer-events-none" />
    </motion.div>
  )
}

export default VoiceCallUI
