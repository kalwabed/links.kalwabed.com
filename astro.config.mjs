import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://links.kalwabed.xyz',
  image: {
    service: squooshImageService()
  }
});
