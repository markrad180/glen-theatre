<script lang="ts">
	let { src, alt, label, className = '', style = '' } = $props();

	let failed = $state(false);
</script>

{#if failed}
	<div
		role="img"
		aria-label={alt}
		class="filmstrip flex flex-col items-center justify-center gap-2 px-6 text-center text-cream/60 {className}"
	>
		<span class="font-display text-xl text-gold/80">{label}</span>
		<span class="font-ticket text-xs">Add photo at static{src}</span>
	</div>
{:else}
	<img src={src} alt={alt} class="object-cover {className}" style={style} onerror={() => (failed = true)} />
{/if}
