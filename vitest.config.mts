import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		// poolOptions: {
		// 	workers: {
		// 		wrangler: { configPath: './wrangler.json' },
		// 	},
		// },
		environment: 'node', // 指定测试环境为 Node.js
	},
});
