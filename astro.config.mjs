// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "your-username";

// https://astro.build/config
export default defineConfig({
  site: `https://${owner}.github.io`,
  base: repository ? `/${repository}` : "/",
});
