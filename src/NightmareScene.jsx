import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";

/* =========================================================
   DIGITAL CORE
========================================================= */

function DigitalCore({ sketchMode }) {
  const mesh = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.elapsedTime;

    /* -----------------------------------------------------
       CORE ROTATION
    ----------------------------------------------------- */

    mesh.current.rotation.x =
      time * 0.15 + state.pointer.y * 0.25;

    mesh.current.rotation.y =
      time * 0.25 + state.pointer.x * 0.25;

    /* -----------------------------------------------------
       CORE PULSE
    ----------------------------------------------------- */

    const pulse =
      1 + Math.sin(time * 2) * 0.05;

    mesh.current.scale.set(
      pulse,
      pulse,
      pulse
    );

    /* -----------------------------------------------------
       RING 1
    ----------------------------------------------------- */

    if (ring1.current) {
      ring1.current.rotation.z =
        time * (sketchMode ? 0.002 : 0.008);

      ring1.current.rotation.x =
        Math.sin(time * 0.5) * 0.3;
    }

    /* -----------------------------------------------------
       RING 2
    ----------------------------------------------------- */

    if (ring2.current) {
      ring2.current.rotation.z =
        -time * (sketchMode ? 0.001 : 0.005);

      ring2.current.rotation.y =
        Math.cos(time * 0.4) * 0.4;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.35}
      floatIntensity={1}
    >
      {/* =================================================
          MAIN CORE
      ================================================= */}

      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.6, 4]} />

        <meshStandardMaterial
          color={
            sketchMode
              ? "#d8d2c4"
              : "#071c2c"
          }

          emissive={
            sketchMode
              ? "#222222"
              : "#00c8ff"
          }

          emissiveIntensity={
            sketchMode
              ? 0.15
              : 2
          }

          metalness={
            sketchMode
              ? 0
              : 0.9
          }

          roughness={
            sketchMode
              ? 0.8
              : 0.15
          }

          wireframe
        />
      </mesh>


      {/* =================================================
          OUTER WIREFRAME
      ================================================= */}

      <mesh scale={1.15}>
        <icosahedronGeometry args={[1.6, 2]} />

        <meshBasicMaterial
          color={
            sketchMode
              ? "#555555"
              : "#00ffc8"
          }

          transparent

          opacity={
            sketchMode
              ? 0.08
              : 0.14
          }

          wireframe
        />
      </mesh>


      {/* =================================================
          ENERGY RING 1
      ================================================= */}

      <mesh
        ref={ring1}
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            2.1,
            0.025,
            16,
            100
          ]}
        />

        <meshBasicMaterial
          color={
            sketchMode
              ? "#333333"
              : "#00c8ff"
          }

          transparent

          opacity={
            sketchMode
              ? 0.2
              : 0.7
          }
        />
      </mesh>


      {/* =================================================
          ENERGY RING 2
      ================================================= */}

      <mesh
        ref={ring2}
        rotation={[
          Math.PI / 3,
          0,
          0
        ]}
      >
        <torusGeometry
          args={[
            2.35,
            0.018,
            12,
            100
          ]}
        />

        <meshBasicMaterial
          color={
            sketchMode
              ? "#666666"
              : "#00ffc8"
          }

          transparent

          opacity={
            sketchMode
              ? 0.15
              : 0.45
          }
        />
      </mesh>


      {/* =================================================
          INNER CORE
      ================================================= */}

      <mesh scale={0.35}>
        <sphereGeometry
          args={[
            1,
            32,
            32
          ]}
        />

        <meshBasicMaterial
          color={
            sketchMode
              ? "#444444"
              : "#00ffc8"
          }

          transparent

          opacity={
            sketchMode
              ? 0.15
              : 0.5
          }
        />
      </mesh>

    </Float>
  );
}


/* =========================================================
   PARTICLES
========================================================= */

function Particles({ sketchMode }) {
  const points = useRef();

  const positions = useMemo(() => {

    const count = 1200;

    const array =
      new Float32Array(
        count * 3
      );

    for (let i = 0; i < count; i++) {

      const radius =
        4 + Math.random() * 5;

      const theta =
        Math.random() *
        Math.PI *
        2;

      const phi =
        Math.acos(
          2 * Math.random() - 1
        );

      array[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      array[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      array[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return array;

  }, []);


  useFrame((state) => {

    if (!points.current) return;

    const time =
      state.clock.elapsedTime;

    points.current.rotation.y =
      time *
      (sketchMode
        ? 0.006
        : 0.015);

    points.current.rotation.x =
      state.pointer.y * 0.05;

    points.current.rotation.z =
      state.pointer.x * 0.02;

  });


  return (
    <points ref={points}>

      <bufferGeometry>

        {/* IMPORTANT:
            Modern React Three Fiber syntax
        */}

        <bufferAttribute
          attach="attributes-position"
          args={[
            positions,
            3
          ]}
        />

      </bufferGeometry>


      <pointsMaterial
        size={
          sketchMode
            ? 0.018
            : 0.025
        }

        color={
          sketchMode
            ? "#333333"
            : "#00ffc8"
        }

        transparent

        opacity={
          sketchMode
            ? 0.35
            : 0.7
        }

        sizeAttenuation
      />

    </points>
  );
}


/* =========================================================
   FLOATING SHARDS
========================================================= */

function FloatingShards({
  sketchMode
}) {

  const group = useRef();

  const shards =
    Array.from(
      { length: 14 },
      (_, i) => i
    );


  useFrame((state) => {

    if (!group.current) return;

    const time =
      state.clock.elapsedTime;

    group.current.rotation.y =
      time *
      (sketchMode
        ? 0.02
        : 0.05);

    group.current.rotation.x =
      Math.sin(time * 0.2) *
      0.1;

  });


  return (
    <group ref={group}>

      {shards.map((i) => {

        const angle =
          (i / shards.length) *
          Math.PI *
          2;

        const radius =
          3 + (i % 3) * 0.7;


        return (
          <Float
            key={i}

            speed={
              sketchMode
                ? 0.5
                : 1 + i * 0.05
            }

            floatIntensity={
              sketchMode
                ? 0.2
                : 0.5
            }
          >

            <mesh
              position={[
                Math.cos(angle) *
                  radius,

                ((i % 3) - 1) *
                  1.2,

                Math.sin(angle) *
                  radius
              ]}

              rotation={[
                i,
                i * 0.7,
                i * 0.4
              ]}
            >

              <octahedronGeometry
                args={[
                  sketchMode
                    ? 0.08
                    : 0.12,
                  0
                ]}
              />


              <meshStandardMaterial

                color={
                  sketchMode
                    ? "#444444"
                    : i % 2 === 0
                    ? "#00ffc8"
                    : "#008cff"
                }

                emissive={
                  sketchMode
                    ? "#111111"
                    : i % 2 === 0
                    ? "#00ffc8"
                    : "#008cff"
                }

                emissiveIntensity={
                  sketchMode
                    ? 0.1
                    : 2
                }

                metalness={
                  sketchMode
                    ? 0
                    : 0.8
                }

                roughness={
                  sketchMode
                    ? 0.9
                    : 0.2
                }

              />

            </mesh>

          </Float>
        );

      })}

    </group>
  );
}


/* =========================================================
   NIGHTMARE SCENE
========================================================= */

export default function NightmareScene({
  sketchMode
}) {

  return (

    <div className="nightmare-scene">

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 50
        }}

        dpr={[1, 2]}
      >

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <color
          attach="background"
          args={[
            sketchMode
              ? "#f2eee4"
              : "#02070b"
          ]}
        />


        {/* =================================================
            FOG
        ================================================= */}

        <fog
          attach="fog"

          args={[
            sketchMode
              ? "#f2eee4"
              : "#02070b",

            5,
            14
          ]}
        />


        {/* =================================================
            LIGHTING
        ================================================= */}

        <ambientLight
          intensity={
            sketchMode
              ? 0.6
              : 0.2
          }
        />


        <pointLight
          position={[
            3,
            3,
            4
          ]}

          intensity={
            sketchMode
              ? 3
              : 12
          }

          color={
            sketchMode
              ? "#ffffff"
              : "#00c8ff"
          }
        />


        <pointLight
          position={[
            -4,
            -2,
            2
          ]}

          intensity={
            sketchMode
              ? 1
              : 8
          }

          color={
            sketchMode
              ? "#d8d2c4"
              : "#00ffc8"
          }
        />


        {/* =================================================
            3D WORLD
        ================================================= */}

        <DigitalCore
          sketchMode={sketchMode}
        />

        <Particles
          sketchMode={sketchMode}
        />

        <FloatingShards
          sketchMode={sketchMode}
        />

      </Canvas>

    </div>
  );
}