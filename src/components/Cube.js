import { useBox } from "@react-three/cannon";
import { useState } from "react";
import { useStore } from "../hooks/useStore";
import * as textures from "../images/textures";

export const Cube = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          return removeCube(x, y, z);
        } else if (clickedFace === 0) {
          return addCube(x + 1, y, z);
        } else if (clickedFace === 1) {
          return addCube(x - 1, y, z);
        } else if (clickedFace === 2) {
          return addCube(x, y + 1, z);
        } else if (clickedFace === 3) {
          return addCube(x, y - 1, z);
        } else if (clickedFace === 4) {
          return addCube(x, y, z + 1);
        } else if (clickedFace === 5) {
          return addCube(x, y, z - 1);
        }
      }}
      ref={ref}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        transparent={true}
        opacity={texture === "glass" ? 0.7 : 1}
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};
