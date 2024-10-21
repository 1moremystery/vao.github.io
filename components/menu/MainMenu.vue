<script setup>
// Libraries
import { ref } from 'vue'

const checked = ref(false);
// Menu items
const items = ref([
	{
		label: 'Home',
		icon: 'pi pi-home',
		route: '/'
	},
	{
		label: 'About',
		icon: 'pi pi-info',
		route: '/about'
	},
])


function toggleDarkMode() {
	document.documentElement.classList.toggle('p-dark');
}


</script>

<template>
	<PrimeMenubar :model="items">
		<template #start>
		</template>
		<template #item="{ item, props, hasSubmenu, root }">
			<NuxtLink :to="item.route">
				<span v-if="item.icon" :class="item.icon" />
				<span>{{ item.label }}</span>
			</NuxtLink>
		</template>
		<template #end>
			<PrimeToggleButton v-model="checked" @change="toggleDarkMode"
			onIcon="pi pi-moon" onLabel="Toggle" 
			offIcon="pi pi-sun" offLabel="Toggle" 
			class="w-36" aria-label="Toggle Dark Mode" v-tooltip.bottom="'Toggle Dark Mode'" />
		</template>
	</PrimeMenubar>
</template>

<style scoped></style>