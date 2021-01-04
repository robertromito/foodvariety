<script>
	import FoodConsumed from "./FoodConsumed.svelte"
</script>

<style lang="scss" global>
	@import "bulma/bulma";
</style>

<nav class="navbar">
	<div class="navbar-brand">
		<div class="navbar-item">
			<span class="title">Food Variety Tracker</span>
		</div>
	</div>
</nav>

<section class="section">
	<div class="container">
		<FoodConsumed />
	</div>
</section>
