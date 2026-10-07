<script lang="ts">
	type Mode = 'money' | 'time' | 'talent';
	const MODES: { id: Mode; label: string; admit: string }[] = [
		{ id: 'money', label: 'Donate', admit: 'ADMIT ONE · PATRON' },
		{ id: 'time', label: 'Volunteer', admit: 'ADMIT ONE · VOLUNTEER' },
		{ id: 'talent', label: 'Skills', admit: 'ADMIT ONE · CREW' }
	];
	const AMOUNTS = [25, 50, 100, 250, 500];
	const IMPACT: Record<number, string> = {
		25: 'Replaces a bulb on the marquee',
		50: 'Sponsors a square foot of new flooring',
		100: 'Restores a vintage seat',
		250: 'Funds a day of plaster repair',
		500: 'Puts your name on the donor wall'
	};
	const TIME = ['Weekend clean-up days', 'Painting & light repair', 'Event help & ushering', 'Spreading the word'];
	const TALENT = [
		'Carpentry / construction',
		'Electrical',
		'Plaster & masonry',
		'Historic preservation',
		'Design / architecture',
		'Grant writing / fundraising',
		'Photo / video / social'
	];

	const field =
		'w-full border-b-2 border-ink/40 bg-transparent px-1 py-2 text-ink placeholder:text-ink/50 focus:border-curtain focus:outline-none';

	let mode = $state<Mode>('time');
	let amount = $state<number | 'custom'>(100);
	let custom = $state('');
	let picked = $state<string[]>([]);
	let done = $state(false);

	let total = $derived(amount === 'custom' ? Number(custom) || 0 : amount);
	let impact = $derived(amount !== 'custom' ? IMPACT[amount] : '');
	let admit = $derived(MODES.find((m) => m.id === mode)!.admit);
	let list = $derived(mode === 'time' ? TIME : TALENT);
	let stubValue = $derived(mode === 'money' ? `$${total}` : mode === 'time' ? 'Time' : 'Craft');

	function toggle(v: string) {
		picked = picked.includes(v) ? picked.filter((x) => x !== v) : [...picked, v];
	}

	function selectMode(m: Mode) {
		mode = m;
		picked = [];
		done = false;
	}

	function submit(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}
</script>

<div class="mx-auto max-w-4xl">
	<div role="tablist" aria-label="Ways to give" class="mb-8 grid grid-cols-3 gap-2 md:gap-4">
		{#each MODES as m}
			<button
				role="tab"
				aria-selected={mode === m.id}
				onclick={() => selectMode(m.id)}
				class="font-display cursor-pointer border-2 px-2 py-3 text-sm transition sm:py-4 sm:text-lg md:text-2xl {mode === m.id
					? 'border-gold bg-gold text-ink shadow-[0_0_30px_rgba(242,185,59,0.5)]'
					: 'border-gold/40 text-gold-soft hover:border-gold hover:bg-gold/10'}"
			>
				{m.label}
			</button>
		{/each}
	</div>

	<form onsubmit={submit} class="ticket relative bg-cream text-ink shadow-2xl">
		<div class="grid md:grid-cols-[1fr_auto_240px]">
			<div class="p-6 md:p-10">
				<p class="font-ticket text-xs tracking-[0.3em] text-curtain">{admit}</p>

				{#if done}
					<div class="py-10">
						<h3 class="font-display text-4xl text-curtain">Thank you!</h3>
						<p class="mt-4 text-lg">Your ticket is stamped. We’ll be in touch with next steps as the restoration begins.</p>
						<button type="button" onclick={() => (done = false)} class="font-ticket mt-6 cursor-pointer underline">
							Give another way
						</button>
					</div>
				{:else}
					<div class="mt-5 space-y-6">
						{#if mode === 'money'}
							<fieldset>
								<legend class="mb-3 text-sm font-semibold uppercase tracking-widest">Choose an amount</legend>
								<div class="flex flex-wrap gap-2">
									{#each AMOUNTS as a}
										<button
											type="button"
											onclick={() => (amount = a)}
											aria-pressed={amount === a}
											class="font-ticket cursor-pointer border-2 px-4 py-2 text-lg font-bold transition {amount === a
												? 'border-curtain bg-curtain text-cream'
												: 'border-ink/40 hover:border-curtain'}"
										>
											${a}
										</button>
									{/each}
									<button
										type="button"
										onclick={() => (amount = 'custom')}
										aria-pressed={amount === 'custom'}
										class="font-ticket cursor-pointer border-2 px-4 py-2 text-lg font-bold transition {amount === 'custom'
											? 'border-curtain bg-curtain text-cream'
											: 'border-ink/40 hover:border-curtain'}"
									>
										Other
									</button>
								</div>
								{#if amount === 'custom'}
									<input
										type="number"
										min={1}
										bind:value={custom}
										placeholder="Enter amount in $"
										class="{field} mt-4"
										aria-label="Custom amount"
									/>
								{/if}
								{#if amount !== 'custom'}
									<p class="mt-3 text-sm italic">{impact}</p>
								{/if}
							</fieldset>
						{:else}
							<fieldset>
								<legend class="mb-3 text-sm font-semibold uppercase tracking-widest">
									{mode === 'time' ? 'How would you like to help?' : 'What can you bring?'}
								</legend>
								<div class="grid gap-2 sm:grid-cols-2">
									{#each list as t}
										<label
											class="flex cursor-pointer items-center gap-3 border-2 px-3 py-2 transition {picked.includes(t)
												? 'border-curtain bg-curtain/10'
												: 'border-ink/30 hover:border-curtain'}"
										>
											<input
												type="checkbox"
												checked={picked.includes(t)}
												onchange={() => toggle(t)}
												class="h-4 w-4 accent-[#7a1523]"
											/>
											<span>{t}</span>
										</label>
									{/each}
								</div>
							</fieldset>
						{/if}
						<div class="grid gap-4 sm:grid-cols-2">
							<input required placeholder="Your name" aria-label="Your name" class={field} />
							<input required type="email" placeholder="Email" aria-label="Email" class={field} />
						</div>
						{#if mode !== 'money'}
							<textarea rows={2} placeholder="Availability or a note for Bryan (optional)" aria-label="Note" class={field}></textarea>
						{/if}
					</div>
				{/if}
			</div>

			<div aria-hidden="true" class="hidden border-l-2 border-dashed border-ink/40 md:block"></div>

			<div class="flex flex-col items-center justify-center gap-4 bg-gold/70 p-6 text-center md:bg-transparent">
				<p class="font-ticket text-xs tracking-[0.3em]">NO. 0001</p>
				<p class="font-display text-5xl text-curtain">{stubValue}</p>
				<button
					disabled
					class="font-display w-full cursor-pointer bg-curtain px-4 py-3 text-xl text-cream transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
				>
					{mode === 'money' ? 'Donate' : 'Sign me up'}
				</button>
				<p class="text-xs">Form submissions coming soon...</p>
			</div>
		</div>
	</form>
</div>
