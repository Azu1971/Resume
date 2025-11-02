import React from 'react'
import { Html } from '@react-three/drei'

export default function Loader() {
  return (
    <Html center>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        padding: '12px 20px',
        background: 'rgba(0,0,0,0.6)',
        borderRadius: '8px',
        color: 'white',
        fontFamily: 'sans-serif',
        backdropFilter: 'blur(4px)',
      }}>
        <div 
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: '2px solid white',
            borderTopColor: 'transparent',
            animation: 'spin 1s linear infinite'
          }} 
        />
        Loading…
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}
      </style>
    </Html>
  )
}
