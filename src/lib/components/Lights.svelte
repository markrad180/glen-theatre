<script lang="ts">
	let { className = '', count = 36, vertical = false, flip = false, chase = false, start = 0, reverse = false, heads = 5 } = $props();
</script>

<div class="lights {vertical ? 'vertical' : ''} {flip ? 'flip' : ''} {chase ? `chase chase-h${heads}` : ''} {className}" aria-hidden="true">
	{#each Array.from({ length: count }) as _, i}
		{@const gi = reverse ? start + count - 1 - i : start + i}
		<span class="lamp {i >= 18 ? 'hidden md:block' : ''}" style={chase ? `--gi:${gi}` : ''}></span>
	{/each}
</div>
