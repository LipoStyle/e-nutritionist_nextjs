'use client'

import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function TestObserver() {
  const testRef = useRef(null)
  const isVisible = useInView(testRef)

  return (
    <div style={{ height: '200vh', paddingTop: '80vh' }}>
      <div
        ref={testRef}
        style={{
          height: '200px',
          backgroundColor: isVisible ? 'limegreen' : 'gray',
          transition: 'all 0.4s ease-in-out',
          textAlign: 'center',
          lineHeight: '200px',
          fontSize: '20px',
          color: '#fff'
        }}
      >
        {isVisible ? '✅ Visible!' : '👀 Scroll to see me'}
      </div>
    </div>
  )
}
