import React, { useEffect } from 'react'
import * as THREE from 'three';

import "./GlobeComponent.css";

export const GlobeComponent = () => {
  useEffect(() => {
    // * From here you can customize all the settings. Change the numbers for your ideal customization
    // * If you want to show the little screen of the stats, you can find them by searching "Stats" and uncomment them
    // * After revision: "Globe Group Position" + "Canvas transparency" added!
    // * Please search "setClearColor" for canvas transparency setting.
    //  Camera settings
    const cameraX = 0;
    const cameraY = 0;
    const cameraZ = 1250;

    // Globe group position
    const globeGroupPositionX = "-100";
    const globeGroupPositionY = "0";
    const globeGroupPositionZ = "0";

    const canvasHeight = 700;
    const canvasWidth = 900;

    // Globe rotate power
    const rotateYAxis = 0.2;

    // Dots and lines color
    const pointsColor = "#FFFFFF";
    const linesColor = "#368cff";

    // Some tweaks for globe
    const effectController = {
      showDots: true,
      showLines: true,
      minDistance: 85, // Minimum distance for arcs
      limitConnections: false, // Limit the maximum lines
      maxConnections: 20, // When limitConnections boolean is true, you can tweak this setting.
      particleCount: 500,
    };

    // Here are the codes related to the model(three.js)
    const canvas = document.querySelector("canvas.webgl");
    let group: any;
    const particlesData: any = [];
    let camera: any, scene: any, renderer: any;
    let positions, colors;
    let particles;
    let pointCloud: any;
    let particlePositions: any, sphericalParticlePositions: any;
    let linesMesh: any;

    const maxParticleCount = 1000;
    let particleCount = 500;
    const r = 800;
    const rHalf = r / 2;

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(
        45,
        canvasWidth / canvasHeight,
        1,
        4000
      );
      camera.position.x = cameraX;
      camera.position.y = cameraY;
      camera.position.z = cameraZ;

      scene = new THREE.Scene();

      group = new THREE.Group();
      scene.add(group);

      group.position.x = globeGroupPositionX;
      group.position.y = globeGroupPositionY;
      group.position.z = globeGroupPositionZ;

      const segments = maxParticleCount * maxParticleCount;

      positions = new Float32Array(segments * 3);
      colors = new Float32Array(segments * 3);

      const pMaterial = new THREE.PointsMaterial({
        color: pointsColor,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      particles = new THREE.BufferGeometry();
      particlePositions = new Float32Array(maxParticleCount * 3);

      for (let i = 0; i < maxParticleCount; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // add it to the geometry
        particlesData.push({
          velocity: new THREE.Vector3(
            -1 + Math.random() * 2,
            -1 + Math.random() * 2,
            -1 + Math.random() * 2
          ),
          numConnections: 0,
        });
      }

      particles.setDrawRange(0, particleCount);
      particles.setAttribute(
        "positionCube",
        new THREE.BufferAttribute(particlePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );
      sphericalParticlePositions = Float32Array.from(particlePositions);
      particles.setAttribute(
        //sphere
        "position",
        new THREE.BufferAttribute(sphericalParticlePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );

      // create the particle system
      pointCloud = new THREE.Points(particles, pMaterial);
      group.add(pointCloud);

      const geometry = new THREE.BufferGeometry();

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
      );

      geometry.computeBoundingSphere();

      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        color: linesColor,
      });

      linesMesh = new THREE.LineSegments(geometry, material);
      group.add(linesMesh);

      //

      renderer = new THREE.WebGLRenderer({ canvas: canvas as HTMLCanvasElement });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvasWidth, canvasHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setClearColor(0xffffff, 0); // Canvas background transparency

      // stats = new Stats();
      // document.body.appendChild(stats.dom); // Uncomment for see stats

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = canvasWidth / canvasHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(canvasWidth, canvasHeight);
    }

    function animate() {
      //fitToContainer(canvas);
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++)
        particlesData[i].numConnections = 0;

      for (let i = 0; i < particleCount; i++) {
        // get the particle
        const particleData = particlesData[i];

        const x = particlePositions[i * 3] + particleData.velocity.x / 2;
        const y = particlePositions[i * 3 + 1] + particleData.velocity.y / 2;
        const z = particlePositions[i * 3 + 2] + particleData.velocity.z / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        const l = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
        sphericalParticlePositions[i * 3] = (r * 0.5 * x) / l;
        sphericalParticlePositions[i * 3 + 1] = (r * 0.5 * y) / l;
        sphericalParticlePositions[i * 3 + 2] = (r * 0.5 * z) / l;

        if (
          particlePositions[i * 3 + 1] < -rHalf ||
          particlePositions[i * 3 + 1] > rHalf
        )
          particleData.velocity.y = -particleData.velocity.y;

        if (
          particlePositions[i * 3] < -rHalf ||
          particlePositions[i * 3] > rHalf
        )
          particleData.velocity.x = -particleData.velocity.x;

        if (
          particlePositions[i * 3 + 2] < -rHalf ||
          particlePositions[i * 3 + 2] > rHalf
        )
          particleData.velocity.z = -particleData.velocity.z;

        if (
          effectController.limitConnections &&
          particleData.numConnections >= effectController.maxConnections
        )
          continue;

        // Check collision
        for (let j = i + 1; j < particleCount; j++) {
          const particleDataB = particlesData[j];
          if (
            effectController.limitConnections &&
            particleDataB.numConnections >= effectController.maxConnections
          )
            continue;

          const dx =
            sphericalParticlePositions[i * 3] -
            sphericalParticlePositions[j * 3];
          const dy =
            sphericalParticlePositions[i * 3 + 1] -
            sphericalParticlePositions[j * 3 + 1];
          const dz =
            sphericalParticlePositions[i * 3 + 2] -
            sphericalParticlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < effectController.minDistance) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / effectController.minDistance;

            positions[vertexpos++] = sphericalParticlePositions[i * 3];
            positions[vertexpos++] = sphericalParticlePositions[i * 3 + 1];
            positions[vertexpos++] = sphericalParticlePositions[i * 3 + 2];

            positions[vertexpos++] = sphericalParticlePositions[j * 3];
            positions[vertexpos++] = sphericalParticlePositions[j * 3 + 1];
            positions[vertexpos++] = sphericalParticlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }

      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;

      pointCloud.geometry.attributes.position.needsUpdate = true;
      pointCloud.geometry.attributes.positionCube.needsUpdate = true;

      requestAnimationFrame(animate);

      // stats.update(); // Must be uncommented for the stats
      render();
    }

    function render() {
      const time = Date.now() * 0.001;

      group.rotation.y = time * rotateYAxis;
      renderer.render(scene, camera);
    }
  }, []);

  return <canvas className="webgl"></canvas>;
};