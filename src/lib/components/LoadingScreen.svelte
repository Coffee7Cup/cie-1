<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { Lightbulb } from 'lucide-svelte';
    import gsap from 'gsap';

    let visible = $state(true);
    let bulbEl;
    let glowEl;
    let raysEls = [];

    onMount(() => {
        // Bulb flicker on
        const tl = gsap.timeline();
        
        tl.fromTo(bulbEl, 
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
        )
        .to(bulbEl, {
            opacity: 0.3,
            duration: 0.1,
            repeat: 2,
            yoyo: true
        })
        .to(bulbEl, {
            opacity: 1,
            duration: 0.2
        });

        // Glow pulse
        gsap.to(glowEl, {
            scale: 1.2,
            opacity: 0.6,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        // Animate light rays
        raysEls.forEach((el, i) => {
            gsap.fromTo(el,
                { scaleY: 0, opacity: 0 },
                {
                    scaleY: 1,
                    opacity: 0.6,
                    duration: 0.5,
                    delay: 0.5 + (i * 0.1),
                    ease: 'power2.out'
                }
            );

            gsap.to(el, {
                opacity: 0.3,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                delay: 0.5 + (i * 0.1),
                ease: 'power1.inOut'
            });
        });

        // Exit animation
        const timer = setTimeout(() => {
            const exitTl = gsap.timeline({
                onComplete: () => {
                    visible = false;
                }
            });

            exitTl.to(raysEls, {
                scaleY: 0,
                opacity: 0,
                duration: 0.3,
                stagger: 0.05
            })
            .to(bulbEl, {
                scale: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'back.in(1.7)'
            }, '<0.2');
        }, 2500);

        return () => {
            clearTimeout(timer);
            gsap.killTweensOf([bulbEl, glowEl, ...raysEls]);
        };
    });
</script>

{#if visible}
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center bg-(--bg-color)"
        transition:fade={{ duration: 400 }}
    >
        <div class="relative flex items-center justify-center">
            
            <!-- Glow effect -->
            <div 
                bind:this={glowEl}
                class="absolute w-40 h-40 bg-yellow-400 dark:bg-yellow-300/80 rounded-full blur-3xl"
            ></div>

            <!-- Light rays -->
            <!-- <div class="absolute inset-0 flex items-center justify-center">
                {#each [0, 45, 90, 135, 180, 225, 270, 315] as angle, i}
                    <div
                        bind:this={raysEls[i]}
                        class="absolute w-1 h-20 bg-gradient-to-t from-yellow-400/60 to-transparent origin-bottom"
                        style="transform: rotate({angle}deg) translateY(-60px);"
                    ></div>
                {/each}
            </div> -->

            <!-- Lightbulb icon -->
            <div bind:this={bulbEl} class="relative z-10">
                <Lightbulb 
                    class="w-20 h-20 md:w-24 md:h-24 text-yellow-500 dark:text-yellow-400 fill-yellow-200 dark:fill-yellow-500/30" 
                    strokeWidth={1.5}
                />
            </div>

        </div>
    </div>
{/if}