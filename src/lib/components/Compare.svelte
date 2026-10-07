<script lang="ts">
	import SlotImage from './SlotImage.svelte';

	let { before, after, label, beforePos = 'center', afterPos = 'center', beforeShift = 0 } = $props();

	let pos = $state(50);
</script>

<figure class="group">
	<div
		class="relative aspect-[4/3] w-full overflow-hidden rounded-sm border-4 border-gold/80 bg-ink shadow-[0_0_50px_rgba(242,185,59,0.2)]"
	>
		<SlotImage
			src={after}
			alt="{label}: rendering of the restored theater"
			label="{label}: after"
			className="absolute inset-0 h-full w-full"
			style="object-position: {afterPos}"
		/>
		<div class="absolute inset-0" style:clip-path="inset(0 {100 - pos}% 0 0)">
			<!-- beforeShift nudges the before photo in px; the 1.25 zoom creates the
					headroom so no gap opens (photos near 4:3 have no crop to slide via
					object-position, so a plain translate would leave a strip) -->
			<SlotImage
				src={before}
				alt="{label}: current condition"
				label="{label}: before"
				className="h-full w-full"
				style={beforeShift
					? `transform: translateY(${beforeShift}px) scale(1.25)`
					: `object-position: ${beforePos}`}
			/>
		</div>
		<span class="font-ticket absolute left-3 top-3 bg-ink/80 px-2 py-1 text-xs tracking-widest text-cream">TODAY</span>
		<span class="font-ticket absolute right-3 top-3 bg-gold px-2 py-1 text-xs tracking-widest text-ink">RESTORED</span>
		<div class="pointer-events-none absolute inset-y-0 w-0.5 bg-gold-soft shadow-[0_0_12px_#ffd980]" style:left="{pos}%">
			<div
				class="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-gold text-ink"
			>
				<span aria-hidden="true">↔</span>
			</div>
		</div>
		<input
			type="range"
			min={0}
			max={100}
			bind:value={pos}
			aria-label="Compare before and after for {label}"
			class="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
		/>
	</div>
	<figcaption class="font-ticket mt-3 text-center text-sm uppercase tracking-[0.25em] text-cream/70">
		{label} · drag to reveal
	</figcaption>
</figure>
