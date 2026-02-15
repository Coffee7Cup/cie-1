<script>
    import { navigating } from '$app/stores';
    import { onMount } from 'svelte';

    let p = $state(0);
    let visible = $state(false);
    let interval;

    $effect(() => {
        if ($navigating) {
            visible = true;
            p = 0;
            if (interval) clearInterval(interval);
            interval = setInterval(() => {
                if (p < 0.9) {
                    p += (1 - p) * 0.1;
                }
            }, 100);
        } else {
            p = 1;
            setTimeout(() => {
                visible = false;
                p = 0;
                if (interval) clearInterval(interval);
            }, 300);
        }
    });

    onMount(() => {
        return () => {
            if (interval) clearInterval(interval);
        };
    });
</script>

{#if visible}
    <div
        class="fixed top-0 left-0 h-1 bg-yellow-500 z-101 transition-all duration-300 ease-out"
        style="width: {p * 100}%"
    >
        <div class="absolute right-0 h-full w-24 bg-white/20 blur-md"></div>
    </div>
{/if}
