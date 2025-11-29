<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { base } from '$app/paths';

	let parent;
	let canvas;
	let scene, camera, renderer;
	let bulbGlobe;
	let glowLight;
	let animationFrameId;

	onMount(() => {
		initScene();

		return () => {
			// Cleanup
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
			window.removeEventListener('resize', onResize);
			renderer?.dispose();
			scene?.traverse((object) => {
				if (object.geometry) object.geometry.dispose();
				if (object.material) {
					if (Array.isArray(object.material)) {
						object.material.forEach(material => material.dispose());
					} else {
						object.material.dispose();
					}
				}
			});
		};
	});

	function initScene() {
		if (!parent || !canvas) return;

		// Scene
		scene = new THREE.Scene();
		scene.background = null;
		scene.fog = new THREE.Fog(0x000000, 0, 20);

		// Camera
		camera = new THREE.PerspectiveCamera(
			75,
			parent.clientWidth / parent.clientHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 5);
		camera.lookAt(0, 0, 0);

		// Renderer with transparency
		renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true
		});
		renderer.setSize(parent.clientWidth, parent.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0); // Transparent background

		// Ambient light (soft)
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
		scene.add(ambientLight);

		// Main glow light in the center
		glowLight = new THREE.PointLight(0xffaa00, 100, 20);
		glowLight.position.set(0, 0, 0);
		scene.add(glowLight);

		// Additional rim lights for better visibility
		const rimLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
		rimLight1.position.set(5, 5, 5);
		scene.add(rimLight1);

		const rimLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
		rimLight2.position.set(-5, -3, -5);
		scene.add(rimLight2);

		// Load the bulb globe GLB
		const loader = new GLTFLoader();
		loader.load(
			`/assets/blub_globe.glb`,
			(gltf) => {
				bulbGlobe = gltf.scene;

				// Traverse and make materials suitable for glowing
				bulbGlobe.traverse((child) => {
					if (child.isMesh) {
						// Make glass/transparent parts
						if (child.material) {
							child.material.metalness = 0.3;
							child.material.roughness = 0.1;
						}
					}
				});

				// Scale and position
				bulbGlobe.scale.setScalar(1);
				bulbGlobe.position.set(0, 0, 0);

				scene.add(bulbGlobe);
			},
			undefined,
			(error) => {
				console.error('Error loading bulb globe:', error);
			}
		);

		// Handle resize
		window.addEventListener('resize', onResize);

		// Start animation
		animate();
	}

	let time = 0;
	function animate() {
		animationFrameId = requestAnimationFrame(animate);

		time += 0.016;

		// Gentle rotation
		if (bulbGlobe) {
			bulbGlobe.rotation.y += 0.005;
		}

		// Slight camera orbit
		camera.position.x = Math.sin(time * 0.2) * 0.5;
		camera.position.y = Math.cos(time * 0.3) * 0.3;
		camera.lookAt(0, 0, 0);

		renderer.render(scene, camera);
	}

	function onResize() {
		if (!parent || !camera || !renderer) return;

		const width = parent.clientWidth;
		const height = parent.clientHeight;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	}
</script>

<div bind:this={parent} class="w-full h-full">
	<canvas bind:this={canvas} class="w-full h-full block"></canvas>
</div>
