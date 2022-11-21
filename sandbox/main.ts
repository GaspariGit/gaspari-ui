import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '../src/assets/sass/_app.scss';

const app = createApp(App)

app.use(router).mount('#app')