<script lang="ts">
	let { kicker, title, children } = $props();
</script>

<div class="mx-auto mb-14 max-w-3xl text-center">
	<p class="font-ticket mb-3 text-sm uppercase tracking-[0.35em] text-gold">{kicker}</p>
	<h2 class="font-display marquee-glow text-4xl leading-tight text-gold-soft md:text-6xl">{title}</h2>
	{#if children}
		<p class="mt-6 text-lg font-light leading-relaxed text-cream/80">{@render children()}</p>
	{/if}
</div>
