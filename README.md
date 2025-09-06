# Voice Call UI

A modern, ChatGPT Voice-style interface built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Full-screen dark interface with premium gradients and shadows
- **Interactive Avatar**: Circular avatar with pulsing glow effect when microphone is active
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Controls**: Microphone toggle and end call functionality
- **State Management**: Real-time UI updates based on call and microphone status

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon set

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── VoiceCallUI.jsx    # Main voice call interface component
├── App.jsx                # Root application component
├── main.jsx              # Application entry point
└── index.css             # Global styles with Tailwind imports
```

## Component Features

### VoiceCallUI Component

- **Avatar Section**: Gradient circular avatar with User icon
- **Pulsing Animation**: When microphone is active, avatar glows with animated shadow
- **Status Display**: Shows current state ("Listening..." or "Microphone is muted")
- **Control Panel**: 
  - Microphone toggle (gray when active, red when muted)
  - End call button (red with phone-off icon)
- **Settings Button**: Top-right corner for future configuration options
- **Call End Screen**: Displays when call is terminated with restart option

### Animations

- Fade-in transitions for all elements
- Hover effects with scale transforms
- Pulsing glow effect for active microphone state
- Smooth state transitions between active/inactive states

## Customization

The component uses Tailwind's utility classes and can be easily customized:

- **Colors**: Modify gradient colors in the avatar and button classes
- **Animations**: Adjust Framer Motion transition durations and easing
- **Layout**: Change spacing and sizing using Tailwind utilities
- **Icons**: Replace Lucide React icons with your preferred icon set

## Next Steps

This UI is ready for integration with:
- WebRTC for real-time audio capture
- Speech recognition APIs
- Voice synthesis capabilities
- Backend voice processing services

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.
