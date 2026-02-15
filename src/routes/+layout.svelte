<script>
	import './layout.css';
	import favicon from '$lib/assets/cie-logo.png';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();
	let isBackNavigation = $state(false);

	// Track navigation direction
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		// Detect if going back (to home/previous page)
		const fromPath = navigation.from?.url.pathname || '';
		const toPath = navigation.to?.url.pathname || '';

		// If navigating to root/home or shorter path, it's likely back navigation
		isBackNavigation = toPath.length < fromPath.length || toPath === '/' || toPath === '';

		// Apply direction class to document
		if (isBackNavigation) {
			document.documentElement.classList.add('back-navigation');
		} else {
			document.documentElement.classList.remove('back-navigation');
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	//TODO : change the team bg, cie logo is not the home, when overflow: hidden cannot scrolll in other pages too(important)
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="fixed top-5 right-3 lg:top-8 lg:right-6
  z-20
  w-12 lg:w-18
  lg:hover:scale-110 lg:hover:-rotate-45 transition-all duration-100"
>
	<img src={favicon} alt="cie-logo" />
</div>

<div class="page-transition">
	{@render children()}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');

	/* Forward navigation animations (right to left) */
	@keyframes slideInFromRight {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes slideOutToLeft {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	/* Back navigation animations (left to right) */
	@keyframes slideInFromLeft {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes slideOutToRight {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(100%);
			opacity: 0;
		}
	}

	/* Default: Forward navigation (right to left) */
	:global(::view-transition-old(root)) {
		animation: slideOutToLeft 0.4s ease-in-out;
	}

	:global(::view-transition-new(root)) {
		animation: slideInFromRight 0.4s ease-in-out;
	}

	/* When going back: Reverse direction (left to right) */
	:global(.back-navigation::view-transition-old(root)) {
		animation: slideOutToRight 0.4s ease-in-out;
	}

	:global(.back-navigation::view-transition-new(root)) {
		animation: slideInFromLeft 0.4s ease-in-out;
	}

	.page-transition {
		width: 100%;
		height: 100%;
	}

	/* Fallback for browsers that don't support View Transition API */
	@supports not (view-transition-name: root) {
		.page-transition {
			animation: slideInFromRight 0.4s ease-in-out;
		}
	}

	:global(.font-notable) {
		font-family: 'Racing Sans one', sans-serif;
	}

	:global(.font-moda) {
		font-family: 'Sour Gummy', sans-serif;
		font-weight: 800;
		font-style: normal;
	}

	:global(.scale-y-10) {
		transform: scaleY(1.9);
		transform-origin: center;
	}
</style>
