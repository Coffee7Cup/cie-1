<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { base } from '$app/paths';

	let parent;
	let canvas;
	let camera, scene, renderer;
	let bulbs = [];
	let bulbModel;
	let time = 0;

	onMount(() => {
		initScene();

		return () => {
			renderer?.dispose();
			bulbs.forEach(bulb => {
				bulb.geometry?.dispose();
				bulb.material?.dispose();
			});
		};
	});

	function initScene() {
		scene = new THREE.Scene();
		scene.background = null;
		scene.fog = new THREE.Fog(0x000000, 10, 50);

		camera = new THREE.PerspectiveCamera(
			75,
			parent.clientWidth / parent.clientHeight,
			0.1,
			100
		);
		camera.position.z = 15;

		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: false,
			alpha: true,
			powerPreference: "low-power"
		});
		renderer.setSize(parent.clientWidth, parent.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		renderer.setClearColor(0x000000, 0);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
		scene.add(ambientLight);

		const loader = new GLTFLoader();
		loader.load(
			`${base}/assets/bulb.glb`,
			(gltf) => {
				bulbModel = gltf.scene;
				createBulbs();
			},
			undefined,
			(error) => {
				console.error('Error loading bulb model:', error);
				createFallbackBulbs();
			}
		);

		window.addEventListener('resize', onResize);

		animate();
	}

	function createBulbs() {
		const bulbCount = 30;

		const colors = [0xffff00, 0xffa500, 0xff6b6b, 0xffffff, 0xff4500];
		const colorCount = colors.length;

		for (let i = 0; i < bulbCount; i++) {
			const bulb = bulbModel.clone();

			const randX = (Math.random() - 0.5) * 80;
			const randY = (Math.random() - 0.5) * 60;
			const randZ = (Math.random() - 0.5) * 40 - 10;

			bulb.position.set(randX, randY, randZ);

			const scale = Math.random() * 0.3 + 0.2;
			bulb.scale.setScalar(scale);

			bulb.rotation.set(
				Math.random() * Math.PI,
				Math.random() * Math.PI,
				Math.random() * Math.PI
			);

			const lightColor = colors[Math.floor(Math.random() * colorCount)];

			const pointLight = new THREE.PointLight(lightColor, 2, 8);
			pointLight.position.copy(bulb.position);
			scene.add(pointLight);

			bulb.userData = {
				light: pointLight,
				originalY: randY,
				floatSpeed: Math.random() * 0.5 + 0.5,
				floatOffset: Math.random() * Math.PI * 2,
				rotationSpeed: (Math.random() - 0.5) * 0.02,
				pulseSpeed: Math.random() * 2 + 1,
				pulseOffset: Math.random() * Math.PI * 2
			};

			scene.add(bulb);
			bulbs.push(bulb);
		}
	}

	function createFallbackBulbs() {
		const bulbCount = 20;
		const colors = [0xffff00, 0xffa500, 0xff6b6b, 0xffffff, 0xff4500];
		const colorCount = colors.length;

		for (let i = 0; i < bulbCount; i++) {
			const geometry = new THREE.SphereGeometry(0.3, 12, 12);
			const material = new THREE.MeshStandardMaterial({
				color: 0xffff00,
				emissive: 0xffff00,
				emissiveIntensity: 1,
				roughness: 0.3,
				metalness: 0.5
			});

			const bulb = new THREE.Mesh(geometry, material);

			const randX = (Math.random() - 0.5) * 80;
			const randY = (Math.random() - 0.5) * 60;
			const randZ = (Math.random() - 0.5) * 40 - 10;

			bulb.position.set(randX, randY, randZ);

			const lightColor = colors[Math.floor(Math.random() * colorCount)];

			const pointLight = new THREE.PointLight(lightColor, 2, 8);
			pointLight.position.copy(bulb.position);
			scene.add(pointLight);

			bulb.userData = {
				light: pointLight,
				originalY: randY,
				floatSpeed: Math.random() * 0.5 + 0.5,
				floatOffset: Math.random() * Math.PI * 2,
				rotationSpeed: (Math.random() - 0.5) * 0.02,
				pulseSpeed: Math.random() * 2 + 1,
				pulseOffset: Math.random() * Math.PI * 2
			};

			scene.add(bulb);
			bulbs.push(bulb);
		}
	}

	function animate() {
		requestAnimationFrame(animate);

		time += 0.016;

		const camX = Math.sin(time * 0.1) * 2;
		const camY = Math.cos(time * 0.15);
		camera.position.x = camX;
		camera.position.y = camY;
		camera.lookAt(0, 0, 0);

		const bulbCount = bulbs.length;
		for (let i = 0; i < bulbCount; i++) {
			const bulb = bulbs[i];
			const { light, originalY, floatSpeed, floatOffset, rotationSpeed, pulseSpeed, pulseOffset } = bulb.userData;

			bulb.position.y = originalY + Math.sin(time * floatSpeed + floatOffset) * 2;

			bulb.rotation.y += rotationSpeed;

			const pulse = Math.sin(time * pulseSpeed + pulseOffset) * 0.5 + 0.5;
			light.intensity = 1 + pulse * 2;

			light.position.y = bulb.position.y;
		}

		renderer.render(scene, camera);
	}

	function onResize() {
		if (!parent || !camera || !renderer) return;

		camera.aspect = parent.clientWidth / parent.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(parent.clientWidth, parent.clientHeight);
	}
</script>

<div bind:this={parent} class="absolute w-full h-full">
	<canvas bind:this={canvas} class="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
</div>