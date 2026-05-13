/// <reference types="node" />
// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "your-username";
const site = `https://${owner}.github.io`;
const base = repository ? `/${repository}/` : "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
});
