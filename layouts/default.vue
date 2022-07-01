<template>
    <div class="body">
        <NavBar />
        <main class="container">
            <slot />
        </main>
        <Footer />
    </div>
</template>
<style>
.body {
    @apply bg-gray-100 h-screen
}
</style>