import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify({
        // Skip Netlify Edge/Blobs emulation in local astro dev.
        // Production on Netlify still uses the adapter.
        devFeatures: false
    })
});
