import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Models from "./Models";
import Backdrop from "./Backdrop";

function Main() {
  return (
    <div className="bg-gray-400 absolute h-screen w-screen">
      {/* <Backdrop/> */}
      <Canvas>
        <Models />
        <mesh position={[0, -1, 0]}>
          <boxGeometry attach="geometry" args={[2, 2, 2]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
        <pointLight position={[1, 1, 1]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Main;
