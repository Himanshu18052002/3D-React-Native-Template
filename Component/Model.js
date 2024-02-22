import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei/native";

export default function Model(props) {
  const { nodes, materials } = useGLTF(require("../Models/Model.glb"));

  return (
    <group {...props} scale={5} position={[0, -1, 0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flora.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flora1.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flora2.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flora3.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flora4.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload(require("../Models/Model.glb"));
