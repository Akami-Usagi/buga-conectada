import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Shader () {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        pointerEvents: "none",
        zIndex: -1
      }}
    >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23892eff&color2=%237071db&color3=%233e3e9c&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false'
      />
    </ShaderGradientCanvas>
  )
}