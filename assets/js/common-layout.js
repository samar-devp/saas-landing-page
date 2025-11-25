(function () {
	"use strict";

	function normalizeRoot(path) {
		if (!path || path === '.') {
			return './';
		}
		return path.endsWith('/') ? path : `${path}/`;
	}

	const rootPath = normalizeRoot(document.body?.dataset?.root || '.');

	async function loadPartial(placeholder) {
		const filePath = placeholder.getAttribute('data-include');
		if (!filePath) {
			return;
		}

		try {
			const response = await fetch(filePath);
			if (!response.ok) {
				throw new Error(`Failed to load partial: ${filePath}`);
			}
			const html = await response.text();
			const processedHtml = html.replace(/{{ROOT}}/g, rootPath);
			placeholder.outerHTML = processedHtml;
		} catch (error) {
			console.error(error);
		}
	}

	function highlightActiveNav() {
		const pageKey = document.body?.dataset?.page;
		if (!pageKey) {
			return;
		}

		const navTargets = document.querySelectorAll(`[data-nav="${pageKey}"]`);
		navTargets.forEach((target) => {
			target.classList.add('active');
			target.closest('.trail-wrap')?.classList.add('active');
			target.closest('li')?.classList.add('active');

			const parentNav = target.getAttribute('data-parent-nav');
			if (parentNav) {
				document.querySelector(`[data-nav-group="${parentNav}"]`)?.classList.add('active');
			}
		});
	}

	async function loadSharedLayout() {
		const placeholders = document.querySelectorAll('[data-include]');
		const loaders = Array.from(placeholders).map(loadPartial);
		await Promise.all(loaders);
		highlightActiveNav();
		document.dispatchEvent(new Event('partials:loaded'));
	}

	function init() {
		if (!('fetch' in window)) {
			console.warn('Fetch API is required to load shared layout fragments.');
			return;
		}
		loadSharedLayout();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init, { once: true });
	} else {
		init();
	}
})();

