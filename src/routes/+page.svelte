<script lang="ts">
	import { AFTER, BEFORE, BRYAN, CONDITION, EVENTS, FACTS, HISTORY, HISTORY_PHOTO, PROGRESS, SHOW_PROGRESS, THEATER } from '#lib/content';
	import Header from '#lib/components/Header.svelte';
	import Lights from '#lib/components/Lights.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import SlotImage from '#lib/components/SlotImage.svelte';
	import Compare from '#lib/components/Compare.svelte';
	import Donate from '#lib/components/Donate.svelte';

	const BEAMS = [
		{ x: '14%', rest: '-16deg', from: '42deg', d: '0s' },
		{ x: '50%', rest: '0deg', from: '-32deg', d: '0.25s' },
		{ x: '86%', rest: '16deg', from: '-42deg', d: '0.5s' }
	];

	// Marquee light effect: 'chase' (comets sweep the perimeter) or 'blink' (static alternating).
	const MARQUEE = { effect: 'chase', heads: 6 };

	// Perimeter sides, in chase-loop order (top→right→bottom→left). `start`/`reverse`
	// place each side in the 96-lamp chase loop; `flip` gives the blink corner alternation.
	const SIDES = [
		{ key: 'top', cls: 'absolute inset-x-0 top-0', start: 0, reverse: false, flip: false, vertical: false, count: 36 },
		{ key: 'right', cls: 'absolute inset-y-7 right-0', start: 36, reverse: false, flip: false, vertical: true, count: 12 },
		{ key: 'bottom', cls: 'absolute inset-x-0 bottom-0', start: 48, reverse: true, flip: true, vertical: false, count: 36 },
		{ key: 'left', cls: 'absolute inset-y-7 left-0', start: 84, reverse: true, flip: true, vertical: true, count: 12 }
	];

	let lit = $state(false);
	let signed = $state(false);
	let visionEl: HTMLElement | undefined = $state();

	$effect(() => {
		if (!visionEl) return;
		const io = new IntersectionObserver(([e]) => (lit = e.isIntersecting), {
			rootMargin: '-20% 0px -20% 0px'
		});
		io.observe(visionEl);
		return () => io.disconnect();
	});
</script>

<Header />

<main id="top">
	<!-- HERO: marquee -->
	<section class="velvet relative flex min-h-[100svh] items-center justify-center px-5 pt-28 pb-16">
		<div class="w-full max-w-5xl">
			<div class="border border-gold/70 bg-ink/90 p-3 shadow-[0_0_60px_rgba(242,185,59,0.18)] md:p-5">
				<div class="relative border border-gold/30 p-4 md:p-6">
					{#each SIDES as s}
						<Lights
							{...s}
							chase={MARQUEE.effect === 'chase'}
							heads={MARQUEE.heads}
							flip={MARQUEE.effect === 'blink' && s.flip}
							className={s.cls}
						/>
					{/each}
					<div class="px-2 py-10 text-center md:py-16">
						<p class="font-ticket text-xs uppercase tracking-[0.3em] text-cream/80 sm:text-sm sm:tracking-[0.4em]">
							{THEATER.town} · Coming Soon
						</p>
						<h1 class="font-display marquee-glow my-6 text-4xl leading-[1.08] text-gold-soft sm:text-6xl md:text-8xl">
							{THEATER.name}
						</h1>
						<p class="font-display text-xl italic text-cream/90 sm:text-2xl md:text-4xl">{THEATER.tagline}</p>
					</div>
				</div>
			</div>
			<div class="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
				<a
					href="#vision"
					class="font-display border border-gold px-8 py-3 text-center text-lg text-gold-soft transition hover:bg-gold hover:text-ink"
				>
					See the Vision
				</a>
				<a
					href="#give"
					class="font-display bg-curtain px-8 py-3 text-center text-lg text-cream transition hover:bg-gold hover:text-ink"
				>
					Help Restore It
				</a>
			</div>
		</div>
	</section>

	<!-- HISTORY -->
	<section id="history" class="scroll-mt-16 px-5 py-20 md:py-28">
		<SectionHead kicker="Feature Presentation" title="A Century of Show Business">
			Over a century in the heart of {THEATER.town}, from a band hall and opera house to the town’s movie theater.
		</SectionHead>

		<div class="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_360px]">
			<ol class="relative space-y-12 border-l-2 border-gold/40 pl-8">
				{#each HISTORY as h, i}
					<Reveal delay={i * 80}>
						<li class="relative list-none">
							<span class="absolute top-2 -left-[41px] h-4 w-4 rounded-full bg-gold shadow-[0_0_14px_#f2b93b]"></span>
							<p class="font-ticket text-gold">{h.year}</p>
							<h3 class="font-display mt-1 text-3xl text-cream">{h.title}</h3>
							<p class="mt-3 max-w-xl text-lg font-light leading-relaxed text-cream/80">{h.text}</p>
						</li>
					</Reveal>
				{/each}
			</ol>
			<Reveal>
				<aside class="space-y-8 lg:sticky lg:top-28">
					<div class="relative">
						<div class="absolute -inset-3 border-2 border-gold/60"></div>
						<SlotImage
							src={HISTORY_PHOTO.src}
							alt={HISTORY_PHOTO.alt}
							label="The facade"
							className="relative aspect-[137/100] w-full grayscale"
						/>
					</div>
					<div class="grid grid-cols-2 gap-px bg-gold/40 border border-gold/40">
						{#each FACTS as f}
							<div class="bg-ink p-6 text-center">
								<p class="font-display marquee-glow text-4xl text-gold-soft">{f.value}</p>
								<p class="font-ticket mt-2 text-xs uppercase tracking-widest text-cream/70">{f.label}</p>
							</div>
						{/each}
					</div>
				</aside>
			</Reveal>
		</div>
	</section>

	<!-- BEFORE -->
	<section id="today" class="scroll-mt-16 bg-ink px-5 py-20 md:py-28">
		<SectionHead kicker="The Way It Is" title="Intermission">
			Years of quiet have taken their toll. This is the building today, in its honest, unpolished condition.
		</SectionHead>
		<div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
			{#each BEFORE as b, i}
				<Reveal delay={(i % 2) * 100}>
					<figure>
						<SlotImage
							src={b.src}
							alt={b.alt}
							label={b.label}
							className="aspect-[4/3] w-full border-4 border-cream/80 grayscale-[35%] sepia-[20%]"
						/>
						<figcaption class="font-ticket mt-2 text-sm uppercase tracking-[0.25em] text-cream/60">
							Fig. {i + 1} — {b.label}
						</figcaption>
					</figure>
				</Reveal>
			{/each}
		</div>
		<Reveal className="mx-auto mt-12 max-w-6xl">
			<div class="grid gap-8 border border-gold/30 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
				<div>
					<p class="font-ticket text-sm uppercase tracking-[0.3em] text-gold">Condition report</p>
					<ul class="mt-4 grid gap-x-8 gap-y-2 text-lg font-light text-cream/85 sm:grid-cols-2">
						{#each CONDITION as c}
							<li>— {c}</li>
						{/each}
					</ul>
				</div>
				<div class="md:border-l md:border-gold/30 md:pl-10 md:text-center">
					<p class="font-display marquee-glow text-5xl text-gold-soft">$500,000</p>
					<p class="font-ticket mt-2 text-xs uppercase tracking-widest text-cream/70">
						Estimated to make it safe and stable
					</p>
				</div>
			</div>
		</Reveal>
	</section>

	<!-- AFTER (spotlight beams inline — single use) -->
	<section
		id="vision"
		bind:this={visionEl}
		class="relative overflow-hidden velvet-flat scroll-mt-16 px-5 py-20 md:py-28 {lit ? 'lit' : ''}"
	>
		<div class="spots" aria-hidden="true">
			{#each BEAMS as b}
				<i class="beam" style="--x: {b.x}; --rest: {b.rest}; --from: {b.from}; --d: {b.d}"></i>
			{/each}
		</div>
		<div class="relative z-10">
			<SectionHead kicker="Coming Attractions" title="The Grand Reopening">
				Renderings of what the theater could become. Drag the slider to pull back the curtain.
			</SectionHead>
			<div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
				{#each AFTER as a}
					<Reveal className="mx-auto w-full max-w-2xl lg:max-w-none">
						<Compare
							before={a.before}
							after={a.after}
							label={a.label}
							beforePos={a.beforePos}
							afterPos={a.afterPos}
							beforeShift={a.beforeShift}
						/>
					</Reveal>
				{/each}
			</div>
		</div>
	</section>

	<!-- BRYAN -->
	<section id="bryan" class="scroll-mt-16 px-5 py-20 md:py-28">
		<div class="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[420px_1fr]">
			<Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
				<div class="relative">
					<div class="absolute -inset-3 border-2 border-gold/60"></div>
					<SlotImage src={BRYAN.photo} alt="Bryan standing in front of speakers" label="Bryan" className="relative aspect-[4/5] w-full" />
				</div>
			</Reveal>
			<Reveal delay={120}>
				<p class="font-ticket mb-3 text-sm uppercase tracking-[0.35em] text-gold">Starring</p>
				<h2 class="font-display marquee-glow text-5xl text-gold-soft md:text-7xl">Bryan Parnell</h2>
				<p class="font-display mt-2 text-2xl italic text-cream">Engineer. Musician. Restorer of vintage sound.</p>
				<p class="mt-6 max-w-xl text-lg font-light leading-relaxed text-cream/80">
					Bryan is a senior electrical engineer from Hanover, Pennsylvania, with passions for music, community,
					history and technology. He founded Retro Sound Works, where he restores and rebuilds vintage guitar
					amplifiers, Hammond tonewheel organs and effects units. A theater’s wiring, sound and lights are the
					kind of work he does best.
				</p>
				<ul class="font-ticket mt-6 space-y-2 text-cream/80">
					<li>★ Founder, Retro Sound Works (since 2015)</li>
					<li>★ Former broadcast engineer, iHeartMedia</li>
					<li>★ High-voltage and power distribution engineering</li>
					<li>★ B.S. Engineering, Drexel University</li>
				</ul>
				<a
					href={BRYAN.linkedin}
					target="_blank"
					rel="noreferrer"
					class="font-display mt-8 inline-block border-2 border-gold px-6 py-3 text-lg text-gold-soft transition hover:bg-gold hover:text-ink"
				>
					Connect on LinkedIn
				</a>
			</Reveal>
		</div>
	</section>

	<!-- PROGRESS + EVENTS (hidden until there's progress to show — see SHOW_PROGRESS) -->
	{#if SHOW_PROGRESS}
	<section id="progress" class="scroll-mt-16 bg-ink px-5 py-20 md:py-28">
		<SectionHead kicker="Now Showing" title="Progress Reel">
			Follow the restoration frame by frame, and come see it in person.
		</SectionHead>
		<div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each PROGRESS as p, i}
				<Reveal delay={i * 100} className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
					<article class="group border border-gold/30 bg-velvet-deep transition hover:border-gold">
						<div class="overflow-hidden">
							<SlotImage
								src={p.src}
								alt={p.title}
								label={p.title}
								className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105"
							/>
						</div>
						<div class="p-5">
							<p class="font-ticket text-xs uppercase tracking-[0.25em] text-gold">{p.date}</p>
							<h3 class="font-display mt-2 text-2xl text-cream">{p.title}</h3>
							<p class="mt-2 font-light text-cream/70">{p.text}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>

		<div class="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[1fr_420px]">
			<Reveal>
				<h3 class="font-display mb-6 text-3xl text-gold-soft">Upcoming Events</h3>
				<ul class="divide-y divide-gold/25 border-y border-gold/25">
					{#each EVENTS as e}
						<li class="flex items-center gap-6 py-5">
							<div class="w-16 border border-gold py-2 text-center">
								<p class="font-ticket text-xs tracking-widest text-gold">{e.date}</p>
								<p class="font-display text-2xl">{e.day}</p>
							</div>
							<div>
								<p class="font-display text-xl">{e.title}</p>
								<p class="font-light text-cream/70">{e.note}</p>
							</div>
						</li>
					{/each}
				</ul>
			</Reveal>
			<Reveal delay={120}>
				<form
					onsubmit={(e) => {
						e.preventDefault();
						signed = true;
					}}
					class="border-2 border-gold bg-velvet p-7"
				>
					<h3 class="font-display text-2xl text-gold-soft">Join the Mailing List</h3>
					<p class="mt-2 font-light text-cream/75">Get event invitations and restoration news.</p>
					{#if signed}
						<p class="font-ticket mt-6 text-gold">You’re on the list. See you at the movies.</p>
					{:else}
						<div class="mt-6 space-y-4">
							<input
								required
								type="email"
								placeholder="Email address"
								aria-label="Email address"
								class="w-full border-b-2 border-gold/50 bg-transparent px-1 py-2 placeholder:text-cream/50 focus:border-gold focus:outline-none"
							/>
							<label class="flex items-center gap-3 text-sm">
								<input type="checkbox" checked class="h-4 w-4 accent-[#f2b93b]" /> Notify me about events
							</label>
							<label class="flex items-center gap-3 text-sm">
								<input type="checkbox" checked class="h-4 w-4 accent-[#f2b93b]" /> Send progress updates
							</label>
							<button
								class="font-display w-full cursor-pointer bg-gold px-4 py-3 text-lg text-ink transition hover:bg-gold-soft"
							>
								Sign Me Up
							</button>
						</div>
					{/if}
				</form>
			</Reveal>
		</div>
	</section>

	{/if}

	<!-- DONATE -->
	<section id="give" class="velvet scroll-mt-16 px-5 py-20 md:py-28">
		<SectionHead kicker="Box Office" title="Take Your Seat in History">
			Every dollar, every hour, and every skill brings the marquee closer to shining again. Choose how you’d like to
			give.
		</SectionHead>
		<Reveal>
			<Donate />
		</Reveal>
	</section>
</main>

<footer class="bg-ink px-5 py-10">
	<Lights className="mb-8" />
	<p class="font-display text-center text-2xl text-gold-soft">{THEATER.name}</p>
	<p class="font-ticket mt-2 text-center text-xs uppercase tracking-[0.3em] text-cream/60">
		{THEATER.address} · {THEATER.town}
	</p>
</footer>
