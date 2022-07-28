 import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'


 function Models() {
  const gltf = useLoader(GLTFLoader, '../models/head.glb')

      
   

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
 }
 
 export default Models 

 
 
 
  