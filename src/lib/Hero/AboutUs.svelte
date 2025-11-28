<script>
    import Canvas from "$lib/canvas/Canvas.svelte";

    const settings = {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1.0,
        spinSpeed: 0,   // controlled by SmartSpinCanvas animation
        color: "#a78bfa",
        wireframe: false
    };
</script>

<style>
    @keyframes slow-float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
    .float-soft {
        animation: slow-float 6s ease-in-out infinite;
    }
</style>

<div class="relative w-screen min-h-screen bg-white overflow-hidden">

    <div class="relative z-10 max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center gap-16">

        <!-- TITLE -->
        <h1 class="text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
            About <span class="font-serif italic text-gray-800">Us</span>
        </h1>

        <!-- CENTER CANVAS (cam.glb) -->
        <div class="w-full flex justify-center float-soft">
            <div class="w-full h-full sm:w-[380px] sm:h-[380px] lg:w-full lg:h-full relative">
                <Canvas name="cam.glb" {settings} />
            </div>
        </div>
    </div>
</div>
