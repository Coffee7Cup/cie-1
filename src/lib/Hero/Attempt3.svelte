<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { base } from '$app/paths';

	let parent;
	let canvas;
	let scene, camera, renderer;
	let bulb;
	let glowLight;
	let animationFrameId;
	let isVisible = false; // Track visibility

	onMount(() => {
		initScene();

		// Set up intersection observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isVisible = entry.isIntersecting;

					if (isVisible) {
						// Resume animation when visible
						if (!animationFrameId) {
							animate();
						}
					} else {
						// Stop animation when not visible
						if (animationFrameId) {
							cancelAnimationFrame(animationFrameId);
							animationFrameId = null;
						}
					}
				});
			},
			{
				threshold: 0, // Trigger as soon as any part is visible
				rootMargin: '50px' // Start slightly before entering viewport
			}
		);

		if (parent) {
			observer.observe(parent);
		}

		return () => {
			// Cleanup
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
			observer.disconnect();
			window.removeEventListener('resize', onResize);
			renderer?.dispose();
			scene?.traverse((object) => {
				if (object.geometry) object.geometry.dispose();
				if (object.material) {
					if (Array.isArray(object.material)) {
						object.material.forEach((material) => material.dispose());
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
		camera = new THREE.PerspectiveCamera(75, parent.clientWidth / parent.clientHeight, 0.1, 1000);
		camera.position.set(0, 0, 5);
		camera.lookAt(0, 0, 0);

		// Renderer with transparency
		renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance' // Optimize for performance
		});
		renderer.setSize(parent.clientWidth, parent.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0); // Transparent background

		// Ambient light (soft)
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
		scene.add(ambientLight);

		// Main glow light in the center
		glowLight = new THREE.PointLight(0xffff00, 150, 20);
		glowLight.position.set(0, 0, 0);
		scene.add(glowLight);

		// Additional rim lights for better visibility
		const rimLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
		rimLight1.position.set(5, 5, 5);
		scene.add(rimLight1);

		// Load the bulb globe GLB
		const loader = new GLTFLoader();
		loader.load(
			`${base}/assets/bulb.glb`,
			(gltf) => {
				bulb = gltf.scene;

				// Traverse and make materials suitable for glowing
				bulb.traverse((child) => {
					if (child.isMesh) {
						// Make glass/transparent parts
						if (child.material) {
							child.material.metalness = 0.5;
							child.material.roughness = 0.1;
						}
					}
				});

				// Scale and position
				bulb.scale.setScalar(0.8);
				bulb.position.set(0, 0, 0);

				scene.add(bulb);
			},
			undefined,
			(error) => {
				console.error('Error loading bulb globe:', error);
			}
		);

		// Handle resize
		window.addEventListener('resize', onResize);

		// Start animation only if visible
		if (isVisible) {
			animate();
		}
	}

	let time = 0;
	function animate() {
		// Only continue if visible
		if (!isVisible) {
			animationFrameId = null;
			return;
		}

		animationFrameId = requestAnimationFrame(animate);

		time += 0.016;

		// Gentle rotation
		if (bulb) {
			bulb.rotation.y += 0.005;
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
