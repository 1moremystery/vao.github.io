export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

    primevue: {
        /* Configuration */
        components: {
            prefix: "Prime",
        },
        options: {
            ripple: true,
            inputVariant: "filled",
        },
        usePrimeVue: true,        
        importTheme: { from: "@/themes/site-theme.js" },
    },
    css: ["primeicons/primeicons.css"],
    compatibilityDate: "2024-10-21",
});
