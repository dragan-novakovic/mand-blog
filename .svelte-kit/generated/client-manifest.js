export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/blog/[slug].svelte"),
	() => import("../../src/routes/blog/chapter2.svelte"),
	() => import("../../src/routes/blog/chapter3.svelte"),
	() => import("../../src/routes/blog/chapter4.svelte"),
	() => import("../../src/routes/blog/index.svelte"),
	() => import("../../src/routes/blog/intro.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/memory-game/index.svelte")
];

export const dictionary = {
	"": [[0, 8], [1]],
	"blog": [[0, 6], [1]],
	"memory-game": [[0, 9], [1]],
	"blog/chapter2": [[0, 3], [1]],
	"blog/chapter3": [[0, 4], [1]],
	"blog/chapter4": [[0, 5], [1]],
	"blog/intro": [[0, 7], [1]],
	"blog/[slug]": [[0, 2], [1]]
};