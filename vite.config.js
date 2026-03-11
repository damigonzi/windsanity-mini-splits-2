import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home:       resolve(__dirname, 'index.html'),
        about:      resolve(__dirname, 'about.html'),
        services:   resolve(__dirname, 'services.html'),
        projects:   resolve(__dirname, 'projects.html'),
        calculator: resolve(__dirname, 'calculator.html'),
        blog:       resolve(__dirname, 'blog.html'),
        contact:    resolve(__dirname, 'contact.html'),
      }
    }
  }
});
