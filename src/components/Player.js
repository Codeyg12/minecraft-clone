import { useSphere } from "@react-three/cannon"
import { useThree } from "@react-three/fiber"

export const Player = () => {
    const { camera } = useThree()
    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }));

    return (
        <mesh ref={ref}></mesh>
    )
}