import { Adapter } from '@sveltejs/kit';

interface AdapterOptions {
	pages?: string;
	assets?: string;
	fallback?: string;
	precompress?: boolean;
	manifest?: string;
}

declare function plugin(options?: AdapterOptions): Adapter;
export = plugin;