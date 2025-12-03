<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import {base} from '$app/paths'

	let { settings, name, position = { x: 0, y: 0, z: 0 } } = $props();

	let canvas;
	let parent;
	let model;
	let spinSpeed = 0;
	let isVisible = false;
	let exitAnimation = false;
	let isMobile = false;

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
		scene.add(dirLight1);

		const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
		dirLight2.position.set(-5, 3, -5);
		scene.add(dirLight2);

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance

		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		// Disable controls on mobile for better performance
		controls.enabled = !isMobile;

		const loader = new GLTFLoader();

		// Adjust scale based on screen size
		const responsiveScale = isMobile ? settings.scale * 0.7 : settings.scale;

		loader.load(
			`${base}/assets/${name}`,
			(gltf) => {
				model = gltf.scene;
				scene.add(model);

				model.position.set(position.x, position.y, position.z);
				model.scale.set(responsiveScale, responsiveScale, responsiveScale);

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
				controls.enabled = !isMobile;
			}
		};
		new ResizeObserver(resize).observe(parent);



		// Physics tuned for smooth animation
		const initialAngVel = Math.PI * 3;
		const totalRotation = Math.PI * 2;
		const deceleration = -((initialAngVel * initialAngVel) / (4 * Math.PI));

		let rotating = false;
		let rotationLeft = totalRotation;

		// Exit animation parameters

		const clock = new THREE.Clock();

		/* Intersection */
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && model) {
						isVisible = true;
						exitAnimation = false;
						rotating = true;
						spinSpeed = initialAngVel;
						rotationLeft = totalRotation;

						const currentScale = isMobile ? responsiveScale : settings.scale;
						model.scale.set(currentScale / 3, currentScale / 3, currentScale / 3);
						model.position.set(position.x, position.y, position.z);
					}
				});
			},
			{ threshold: isMobile ? 0.1 : 0.15 }
		);

		$effect(() => parent && intersectionObserver.observe(parent));

		/* Animation */
		function animate() {
			requestAnimationFrame(animate);

			const dt = clock.getDelta();

			if (model) {
				const currentScale = isMobile ? responsiveScale : settings.scale;

				// Entrance rotation animation
				if (rotating) {
					spinSpeed += deceleration * dt;
					spinSpeed = Math.max(spinSpeed, 0);

					const deltaRot = spinSpeed * dt;
					model.rotation.y += deltaRot;
					rotationLeft -= Math.abs(deltaRot);

					const progress = 1 - rotationLeft / totalRotation;
					const eased = progress * progress * (3 - 2 * progress);
					const minScale = currentScale / 3;
					const scale = minScale + eased * (currentScale - minScale);
					model.scale.set(scale, scale, scale);

					if (rotationLeft <= 0 || spinSpeed <= 0.01) {
						rotating = false;
						spinSpeed = 0;
						const targetAngle = Math.round(model.rotation.y / totalRotation) * totalRotation;
						model.rotation.y = targetAngle;
						model.scale.set(currentScale, currentScale, currentScale);
					}
				}
			}

			controls.update();
			renderer.render(scene, camera);
		}

		animate();

		// Cleanup
		return () => {
			intersectionObserver.disconnect();
			renderer.dispose();
		};
	});
</script>

<div bind:this={parent} class="w-full h-full relative pointer-events-none z-2 ">
	<canvas bind:this={canvas} class="absolute w-full h-full "></canvas>
</div>