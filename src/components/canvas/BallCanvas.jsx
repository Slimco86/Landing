import { Canvas} from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { View } from '@react-three/drei'
import {useRef} from 'react'






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
      <div id='first-div'
      className='relative w-full flex justify-center align-center flex-wrap gap-4'
      >
      {views.map((view,index)=>(
        <div id='second-div' ref={view} key ={"viewcont"+index} className='flex w-[150px] h-[150px]'/>
      ))}
      </div>
      <Canvas id='Canvas' gl={{preserveDrawingBuffer: false,  }} 
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
