import { createDiscreteApi } from 'naive-ui';

export default defineNuxtPlugin((nuxtApp) => {
    let bar = ref(null);
    const _finish = () => {
        setTimeout(() => {
            bar.value?.finish();
        }, 150);
    }
    nuxtApp.hook('app:mounted', () => {
        const { loadingBar } = createDiscreteApi(['loadingBar'])
        bar.value = loadingBar;
    }),
    nuxtApp.hook('page:start', () => {
        bar.value?.start();
    }),
    nuxtApp.hook('page:finish', () => {
        _finish()
    }),
    nuxtApp.hook('app:error', () => {
        if (process.client) {
            _finish()
        }
    })
})