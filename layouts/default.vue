<script setup>
// Custom Components
import MainMenu from '@/components/menu/MainMenu.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
	<div>
		<AppHeader />
		<nav>
			<!-- Navigation Menu-->
			<MainMenu />
		</nav>
		<!-- Main Content -->
		<div class="py-1 lg:px-20 md:px-12 sm:px-12">
			<slot />
		</div>
		<AppFooter />
	</div>
</template>