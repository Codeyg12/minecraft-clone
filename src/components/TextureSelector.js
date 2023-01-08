import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import { dirtImg, glassImg, grassImg, logImg, woodImg } from "../images/index";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, glass, grass, log, wood } = useKeyboard();

  useEffect(() => {
    const textures = { dirt, glass, grass, log, wood };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    console.log(pressedTexture);
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [dirt, glass, grass, log, wood, setTexture]);

  useEffect(() => {
    const visibiltyTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => {
      clearTimeout(visibiltyTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute texture-selector">
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              src={src}
              key={k}
              alt={k}
              className={`${k === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    )
  );
};
