<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import {base} from '$app/paths'

	let { settings, name, position = { x: 0, y: 0, z: 0 } } = $props();

	let canvas;
	let parent;
	let model;
	let spinSpeed = 0;
	let isVisible = false;
	let isMobile = false;
	let animationFrameId = null
	let animationState = 'idle'; // Using a state variable is cleaner for entrance logic

	onMount(() => {
		// Detect mobile
		isMobile = window.innerWidth < 768;

		const scene = new THREE.Scene();
		scene.background = null;

		const camera = new THREE.PerspectiveCamera(
			isMobile ? 85 : 75, // Wider FOV on mobile
			1,
			0.1,
			1000
		);
		// ... (Camera and Light setup - unchanged) ...
		// Adjust camera position for mobile
		if (isMobile) {
			camera.position.set(5, 2.5, 4);
		} else {
			camera.position.set(4, 2, 3);
		}
		camera.lookAt(0, 0, 0);
		scene.add(camera);

		scene.add(new THREE.AmbientLight(0xffffff, 1));

		const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
		dirLight1.position.set(5, 5, 5);
		dirLight1.castShadow = false;
		scene.add(dirLight1);

		const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
		dirLight2.position.set(-5, 3, -5);
		scene.add(dirLight2);

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		const loader = new GLTFLoader();

		// Adjust scale based on screen size
		const responsiveScale = isMobile ? settings.scale * 0.7 : settings.scale;

		loader.load(
			`${base}/assets/${name}`,
			(gltf) => {
				model = gltf.scene;
				scene.add(model);

				// Initial scale needs to be set BEFORE the observer triggers animation
				const initialScale = isMobile ? responsiveScale : settings.scale;
				model.scale.set(initialScale, initialScale, initialScale);

				model.position.set(position.x, position.y, position.z);

				model.traverse((child) => {
					if (child.isMesh) {
						const m = child.material;
						m.metalness = 0.6;
						m.roughness = 0.7;
						if (settings.color) m.color = new THREE.Color(settings.color);
						m.needsUpdate = true;
					}
				});
			},
			undefined,
			(error) => {
				console.error('Error loading model:', error);
			}
		);
		// ... (Resize Listener - unchanged) ...
		/* --- RESIZE LISTENER --- */
		const resize = () => {
			if (!parent) return;
			const width = parent.clientWidth;
			const height = parent.clientHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();

			// Update mobile detection on resize
			const wasMobile = isMobile;
			isMobile = window.innerWidth < 768;

			// Adjust camera and controls if device type changed
			if (wasMobile !== isMobile) {
				camera.fov = isMobile ? 85 : 75;
				if (isMobile) {
					camera.position.set(5, 2.5, 4);
				} else {
					camera.position.set(4, 2, 3);
				}
				camera.updateProjectionMatrix();
			}
		};
		new ResizeObserver(resize).observe(parent);


		// Physics tuned for smooth animation
		const initialAngVel = Math.PI * 3;
		const totalRotation = Math.PI * 2; // Increased rotation for better effect
		const deceleration = -(initialAngVel * initialAngVel) / (2 * totalRotation);

		let rotating = false;
		let rotationLeft = totalRotation;

		const clock = new THREE.Clock();

		/* Function to stop the animation loop */
		function stopAnimation() {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
				animationFrameId = null;
			}
		}

		/* Animation Loop */
		function animate() {
			animationFrameId = requestAnimationFrame(animate); // Keep this at the top

			const dt = clock.getDelta();

			if (model) {
				const currentScale = isMobile ? responsiveScale : settings.scale;

				// Entrance rotation animation
				if (rotating) {
					// Angular Kinematics (using average velocity for accuracy)
					const nextSpinSpeed = spinSpeed + deceleration * dt;
					const deltaRot = ((spinSpeed + nextSpinSpeed) / 2) * dt;

					model.rotation.y += deltaRot;
					rotationLeft -= Math.abs(deltaRot);
					spinSpeed = nextSpinSpeed;
					spinSpeed = Math.max(spinSpeed, 0); // clamp at 0

					// Scaling (Cubic Ease)
					const progress = 1 - Math.max(0, rotationLeft / totalRotation);
					const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

					const minScale = currentScale / 3;
					const scale = minScale + eased * (currentScale - minScale);
					model.scale.set(scale, scale, scale);

					// Stop Condition
					if (rotationLeft <= 0 || spinSpeed <= 0.01) {
						rotating = false;
						spinSpeed = 0;
						animationState = 'idle'; // Reset state

						const targetRotations = Math.round(model.rotation.y / (Math.PI * 2));
						model.rotation.y = targetRotations * Math.PI * 2;
						model.scale.set(currentScale, currentScale, currentScale);
					}
				}
			}

			renderer.render(scene, camera);
		}

		/* Intersection */
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && model) {
						// START ANIMATION LOOP IF IT IS NOT RUNNING
						if (animationFrameId === null) {
							// This must be called only when visible
							animate();
						}

						// START ENTRANCE ANIMATION LOGIC
						if(animationState === 'idle') {
							isVisible = true;
							animationState = 'entering';
							rotating = true;

							spinSpeed = initialAngVel;
							rotationLeft = totalRotation;

							const currentScale = isMobile ? responsiveScale : settings.scale;
							const initialScale = currentScale / 3;
							model.scale.set(initialScale, initialScale, initialScale); // Ensure small scale start
							model.position.set(position.x, position.y, position.z);
							console.log("helllo there")
						}
					}
					else{
						// STOP ANIMATION LOOP WHEN OFF-SCREEN
						console.log("helllo there else")
						stopAnimation()
					}
				});
			},
			{ threshold: isMobile ? 0.1 : 0.15 }
		);

		$effect(() => parent && intersectionObserver.observe(parent));

		// REMOVED THE UNCONDITIONAL animate(); CALL HERE

		// Cleanup
		return () => {
			intersectionObserver.disconnect();
			stopAnimation() // Stop the loop when component is destroyed
			renderer.dispose();
		};
	});
</script>

<div bind:this={parent} class="w-full h-full relative pointer-events-none z-2 ">
	<canvas bind:this={canvas} class="absolute w-full h-full "></canvas>
</div>