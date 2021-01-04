<script>
	import { getEaters, postFoodEaten } from "./foodvariety.js"
	import { onMount } from "svelte"
	
	let eaters = []
	let selected_eater
	let food_eaten
	let notification_message = ""
	
	let styles = {
		notification_clear: "is-hidden",
		notification_success: "notification is-light is-success",
		notification_error: "notification is-light is-danger",
		select_loading: "select is-loading",
		select_ready: "select",
		button_ready: "button is-primary",
		button_waiting: "button is-primary is-loading",
	}
	
	let notification_style = styles.notification_clear
	let select_style = styles.select_loading
	let submit_style = styles.button_ready
	
	onMount(async () => {
		try {
			eaters = await getEaters()
		} catch(e) {
			notification_message = e
			notification_style = styles.notification_error
		} finally {
			select_style = styles.select_ready
		}
	});
	
	async function submit() {
		try {
			submit_style = styles.button_waiting
			notification_message = await postFoodEaten(selected_eater, food_eaten)
			notification_style = styles.notification_success
		}
		catch (e){
			notification_message = e
			notification_style = styles.notification_error
		} finally {
			submit_style = styles.button_ready
		}
	};

</script>

<div class="field has-addons">
	<p class="control">
		<span class={select_style}>
			<select data-qa="in_eater" bind:value={selected_eater}>
				<option value="">Please select...</option>
				{#each eaters as e}
					<option value={e.key}>{e.name}</option>
				{/each}
			</select>
		</span>
	</p>
	<p class="control is-expanded">
		<input
			bind:value={food_eaten}
			data-qa="in_food"
			class="input"
			type="text"
			placeholder="describe what was eaten" />
	</p>
	<p class="control">
		<button data-qa="btn_submit" class={submit_style} on:click={submit}> Submit </button>
	</p>
</div>

<div id="post_food_notification" class={notification_style}>
	<button class="delete" on:click={e => notification_style = "is-hidden"}></button>
	{notification_message}
</div>