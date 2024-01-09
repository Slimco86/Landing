import { Canvas} from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { View } from '@react-three/drei'
import { useMemo, useRef, createRef } from 'react'
import { OrthographicCamera } from '@react-three/drei'





const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color='#cc0033'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading/>
          <Decal 
            position={[0,0,1]}
            rotation={[2*Math.PI,0,6.25]}
            flatShading
            map={decal}
            />
      </mesh>
    </Float>
  )
}



const BallCanvas = ({icon}) =>{
  return (
    <Canvas
            gl={{preserveDrawingBuffer: true}}
            >
      <OrbitControls enableRotate = {false} enableZoom = {false}/>
      <Ball imgUrl={icon}/>
     <Preload all/>
    </Canvas>
  )
}

const MultiBallCanvas = ({icons}) =>{
  const views = Array.from({ length: icons.length}, useRef)
  //const views = useMemo(() => Array.from({ length: icons.length }, createRef), []);
  console.log(views)
  return (
    <>
      <div 
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      {views.map((view,index)=>(
        <div ref={view} key ={"viewcont"+index} style={{width:"100%", height: "100%"}}/>
      ))}
      </div>
      <Canvas gl={{preserveDrawingBuffer: false,  }} 
              eventSource={document.getElementById('root')}
              //className=' mix-blend-overlay'
              style={{
                pointerEvents: "none",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
              }} 
              >
        {views.map((view,index) =>(
          <View index={index} track={view} key={"view"+index}>
            <Ball imgUrl={icons[index]} index = {index} key= {"ball"+index}/>
            <OrbitControls enableRotate = {false} enableZoom = {false}/>
          </View>
        ))}
      </Canvas>
      </>

    )
  }




export default MultiBallCanvas
