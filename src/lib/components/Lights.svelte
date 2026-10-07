<script lang="ts">
	let {
		className = '',
		count,
		vertical = false,
		flip = false,
		chase = false,
		start = 0,
		reverse = false,
		heads = 5,
		chaseCount = 96,
		pitch = 22
	}: {
		className?: string;
		count?: number;
		vertical?: boolean;
		flip?: boolean;
		chase?: boolean;
		start?: number;
		reverse?: boolean;
		heads?: number;
		chaseCount?: number;
		pitch?: number;
	} = $props();

	let el: HTMLDivElement | undefined = $state();
	let autoCount = $state(0);
	let n = $derived(count ?? autoCount);

	// When no explicit count is passed (e.g. the full-width footer strip), fit the lamp count to
	// the strip's own length so it scales to the container without overflowing the viewport.
	$effect(() => {
		if (count !== undefined || !el) return;
		const strip = el;
		const compute = () => {
			const len = vertical ? strip.clientHeight : strip.clientWidth;
			autoCount = Math.max(1, Math.round(len / pitch));
		};
		compute();
		if (typeof ResizeObserver !== 'undefined') {
			const ro = new ResizeObserver(compute);
			ro.observe(strip);
			return () => ro.disconnect();
		}
	});
</script>

<div
	bind:this={el}
	class="lights {vertical ? 'vertical' : ''} {flip ? 'flip' : ''} {chase ? `chase chase-h${heads}` : ''} {className}"
	aria-hidden="true"
	style:--chase-count={chaseCount}
>
	{#each Array.from({ length: n }) as _, i}
		{@const gi = reverse ? start + n - 1 - i : start + i}
		<span class="lamp" style={chase ? `--gi:${gi}` : ''}></span>
	{/each}
</div>
