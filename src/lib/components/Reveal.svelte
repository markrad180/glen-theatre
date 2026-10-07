<script lang="ts">
	let { className = '', delay = 0, children } = $props();

	let el: HTMLDivElement | undefined = $state();

	$effect(() => {
		const node = el;
		if (!node) return;
		const io = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					node.classList.add('in');
					io.disconnect();
				}
			},
			{ threshold: 0.12 }
		);
		io.observe(node);
		return () => io.disconnect();
	});
</script>

<div bind:this={el} class="reveal {className}" style:transition-delay="{delay}ms">
	{@render children()}
</div>
