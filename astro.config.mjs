// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://wiki.berserkarch.org",
	integrations: [
		starlight({
			title: 'Berserk Arch',
			logo: {
				src: './src/assets/banner-logo.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/berserkarch/' }],
			sidebar: [
				{
					label: 'Installation',
					items: [
						{ label: 'Requirements', slug: 'installation/requirements' },
						{ label: 'Install on VirtualBox (Guest)', slug: 'installation/virtualbox' },
						{ label: 'Install on VMware (Guest)', slug: 'installation/vmware' },
						{ label: 'Installing the system', slug: 'installation/installation' },
					],
				},
				{
					label: 'Guides',
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', slug: 'guides/example' },
					// ],
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'ChangeLogs',
					autogenerate: { directory: 'changelogs' },
				},
			],
		}),
	],
});
