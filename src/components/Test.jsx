import React from "react";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

export default function App() {
    const modelPath = "../model/sneaker_1/scene.gltf";
    
    return (
      <div>
        <GLTFModel src={modelPath}>
          <AmbientLight color={0x00ff00} />
          <DirectionLight
            color={0xffffff}
            position={{ x: 100, y: 200, z: 100 }}
          />
          <DirectionLight
            color={0xff00ff}
            position={{ x: -100, y: 200, z: -100 }}
          />
        </GLTFModel>
      </div>
    );
  }
