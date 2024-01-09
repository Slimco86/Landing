import {Suspense,useContext,useRef,useEffect,useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls,Preload, Sky, useGLTF } from '@react-three/drei'
import { Angles, Positions } from '../../constants'
import { useLocation } from 'react-router-dom'
import * as THREE from "three"
//import CanvasLoader from '../Loader'

const ang2Rad = (angle) => {
  const rad =  angle * Math.PI / 180
  return (rad)
}


const Computers = ({isMobile}) => {
  const computer = useGLTF('./wrld-bg/scene.gltf')
  const sceneRef = useRef()
  const posVec  = new THREE.Vector3()
  const rotVec  = new THREE.Vector3()
  const location = useLocation();
  const angle = Angles[location.hash]
  const pos = Positions[location.hash]

  useFrame(state => {
    state.camera.lookAt(sceneRef.current.position)
    state.camera.position.lerp(posVec.set(pos.x,pos.y,pos.z),.01)
    state.camera.rotateY(ang2Rad(angle))
    state.camera.updateProjectionMatrix()
    return null;
  })

  return (
    <mesh ref = {sceneRef}>
      <Sky rayleigh={true} inclination={0.5} azimuth={3}/>
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.01 : 0.1}
        position={isMobile ? [0,0,0] : [0,-12,0]}
        rotation = {[0,0,0]}/>
    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  

  return (
    <Canvas frameloop='demand'
            shadows={true} 
            camera={{position: [20,-1,0], fov: 45}}
            gl={{preserveDrawingBuffer: true }}
            size={[`2000px`,`3000px`]}
            style={{width: `100%`, height: `100%`, position: `fixed`, backgroundAttachment: "fixed" }}
            
            >
      
      <OrbitControls enableZoom = {false}
                     maxPolarAngle={Math.PI/2}
                     minPolarAngle={Math.PI/2}/>
      <Computers isMobile={isMobile}/>

     <Preload all/>
    </Canvas>
)}


export default ComputersCanvas;
