<script lang="ts">
	import { SHOW_PROGRESS, THEATER } from '#lib/content';

	const NAV = [
		{ id: 'history', label: 'History' },
		{ id: 'today', label: 'Today' },
		{ id: 'vision', label: 'The Vision' },
		{ id: 'bryan', label: 'Bryan' },
		{ id: 'progress', label: 'Progress' },
		{ id: 'give', label: 'Give' }
	].filter((n) => n.id !== 'progress' || SHOW_PROGRESS);

	let active = $state('');
	let progress = $state(0);
	let open = $state(false);

	$effect(() => {
		const io = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && (active = e.target.id)),
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		NAV.forEach((n) => {
			const el = document.getElementById(n.id);
			if (el) io.observe(el);
		});
		const onScroll = () => {
			const h = document.documentElement;
			progress = h.scrollTop / (h.scrollHeight - h.clientHeight);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			io.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-ink/85 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
		<a href="#top" class="font-display text-lg text-gold-soft sm:text-xl">{THEATER.name}</a>
		<nav class="hidden gap-8 lg:flex" aria-label="Main">
			{#each NAV.filter((n) => n.id !== 'give') as n}
				<a
					href="#{n.id}"
					class="font-ticket text-sm uppercase tracking-[0.2em] transition hover:text-gold {active === n.id ? 'text-gold' : 'text-cream/70'}"
				>
					{n.label}
				</a>
			{/each}
		</nav>
		<div class="flex items-center gap-3">
			<a
				href="#give"
				class="font-display bg-gold px-3 py-2 text-sm text-ink transition hover:bg-gold-soft hover:shadow-[0_0_24px_rgba(242,185,59,0.7)] sm:px-5 sm:text-base"
			>
				<span class="hidden sm:inline">Support the Restoration</span><span class="sm:hidden">Give</span>
			</a>
			<button
				class="cursor-pointer p-2 text-2xl text-gold lg:hidden"
				onclick={() => (open = !open)}
				aria-label="Menu"
				aria-expanded={open}
			>
				{open ? '✕' : '☰'}
			</button>
		</div>
	</div>
	{#if open}
		<nav class="flex flex-col border-t border-gold/20 bg-ink px-5 py-3 lg:hidden">
			{#each NAV as n}
				<a
					href="#{n.id}"
					onclick={() => (open = false)}
					class="font-ticket py-2 uppercase tracking-[0.2em] text-cream/80"
				>
					{n.label}
				</a>
			{/each}
		</nav>
	{/if}
	<div class="h-0.5 origin-left bg-gold shadow-[0_0_10px_#f2b93b]" style:transform="scaleX({progress})"></div>
</header>
