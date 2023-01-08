import { useBox } from "@react-three/cannon";
import { useStore } from '../hooks/useStore'
import * as textures from "../images/textures";

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const [addCube, removeCube] = useStore((state) => [state.addCube])


  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh onClick={(e) => {
      e.stopPropagation()
      const clickedFace = Math.floor(e.faceIndex / 2)
      console.log(clickedFace)
      const { x, y, z } = ref.current.position
      if (e.altKey) {
        removeCube(x, y, z) 
      } else if (clickedFace === 0) {
        addCube(x + 1, y, z)
      } else if (clickedFace === 1) {
        addCube(x - 1, y, z)
     } else if (clickedFace === 2) {
        addCube(x, y + 1, z)
     } else if (clickedFace === 3) {
        addCube(x, y - 1, z)
     } else if (clickedFace === 4) {
      addCube(x, y, z + 1)
     } else if (clickedFace === 5) {
      addCube(x, y, z - 1)
     }
    }} ref={ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={activeTexture} attach="material" />
    </mesh>
  );
};
