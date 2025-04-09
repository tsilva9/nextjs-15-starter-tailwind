import { CameraProps, Canvas } from "@react-three/fiber"
import Box from "./box"

// declare module '@react-three/fiber' {
//     interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
//   }

const FiberScene = () => {
    const camera: CameraProps = { position: [0, 0, 15], fov: 40, near: 1, far: 20 }

    return (
        <Canvas className="h-full" camera={camera}>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, 10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[-3, 0, 0]}/>
            <Box position={[3, 0, 0]}/>
        </Canvas>
    )
}

export default FiberScene;