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
	let targetSpeed = 0;
	let baseAngle = 0;
	let isVisible = false;
	let exitAnimation = false;

	// Lerp helper function
	function lerp(start, end, t) {
		return start + (end - start) * t;
	}

	onMount(() => {
		const scene = new THREE.Scene();
		scene.background = null;

		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		camera.position.set(4, 2, 3);
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

		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		const loader = new GLTFLoader();

		loader.load(
			`${base}/assets/${name}`,
			(gltf) => {
				model = gltf.scene;
				scene.add(model);

				model.position.set(position.x, position.y, position.z);
				model.scale.set(settings.scale, settings.scale, settings.scale);

				model.traverse((child) => {
					if (child.isMesh) {
						const m = child.material;
						m.metalness = 0;
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
		};
		new ResizeObserver(resize).observe(parent);

		// Physics tuned for smooth ~1.5 second animation
		const fastSpeed = Math.PI * 3; // initial speed
		const totalRotation = Math.PI * 2; // One full rotation
		const deceleration = -Math.PI * 1.5; // gradual deceleration

		let rotating = false;
		let rotationLeft = totalRotation;

		// Exit animation parameters
		const exitDuration = 1.0; // seconds
		let exitProgress = 0;

		const clock = new THREE.Clock();

		/* Intersection */
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible && model) {
						// Entering screen - start entrance animation
						isVisible = true;
						exitAnimation = false;
						rotating = true;
						spinSpeed = fastSpeed;
						rotationLeft = totalRotation;
						exitProgress = 0;

						// reset scale and position
						model.scale.set(settings.scale / 3, settings.scale / 3, settings.scale / 3);
						model.position.set(position.x, position.y, position.z);
					} else if (!entry.isIntersecting && isVisible && model) {
						// Exiting screen - start exit animation
						isVisible = false;
						rotating = false;
						exitAnimation = true;
						exitProgress = 0;
					}
				});
			},
			{ threshold: 0.15 }
		);

		$effect(() => parent && intersectionObserver.observe(parent));

		/* Animation */

		function animate() {
			requestAnimationFrame(animate);

			const dt = clock.getDelta();

			if (model) {
				// Entrance rotation animation
				if (rotating) {
					// Rotation physics
					spinSpeed += deceleration * dt;
					spinSpeed = Math.max(spinSpeed, 0);

					const deltaRot = spinSpeed * dt;
					model.rotation.y += deltaRot;
					rotationLeft -= Math.abs(deltaRot);

					// Scale easing based on progress
					const progress = 1 - rotationLeft / totalRotation;
					const eased = progress * progress * (3 - 2 * progress);
					const minScale = settings.scale / 3;
					const scale = minScale + eased * (settings.scale - minScale);
					model.scale.set(scale, scale, scale);

					// Smooth stop condition
					if (rotationLeft <= 0 || spinSpeed <= 0.01) {
						rotating = false;
						spinSpeed = 0;
						// Smoothly snap to nearest complete rotation
						const targetAngle = Math.round(model.rotation.y / totalRotation) * totalRotation;
						model.rotation.y = targetAngle;
						model.scale.set(settings.scale, settings.scale, settings.scale);
					}
				}

				// Exit animation
				if (exitAnimation) {
					exitProgress += dt / exitDuration;
					exitProgress = Math.min(exitProgress, 1);

					// Easing function for smooth animation
					const eased = exitProgress * exitProgress * (3 - 2 * exitProgress);

					// Scale down from current scale to 0
					const currentScale = settings.scale * (1 - eased);
					model.scale.set(currentScale, currentScale, currentScale);

					// Rotate while exiting (same direction as entrance)
					model.rotation.y += (Math.PI * 2 * dt) / exitDuration;

					// Move up
					const moveDistance = 2; // units to move up
					model.position.y = position.y + eased * moveDistance;

					// Reset when animation complete
					if (exitProgress >= 1) {
						exitAnimation = false;
						exitProgress = 0;
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

<div bind:this={parent} class="w-full h-full relative">
	<canvas bind:this={canvas} class="absolute top-0 left-0 w-full h-full"></canvas>
</div>