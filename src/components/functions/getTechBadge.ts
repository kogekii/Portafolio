export function getTechBadge(tecnologia: string) {
	const techBadgeMap: { [key: string]: string } = {
		"react": "React-61DAFB?style=for-the-badge&logo=react&logoColor=white",
		"next": "Next-black?style=for-the-badge&logo=next.js&logoColor=white",
		"ruby": "Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",
		"rails": "Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
		"postgres": "PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
		"node": "Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
		"vue": "Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
		"astro": "Astro-000000?style=for-the-badge&logo=astro&logoColor=white",
		"docker": "Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
		"tailwind": "Tailwind CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
		"express": "Express-000000?style=for-the-badge&logo=express&logoColor=white",
		"mercadopago": "Mercado Pago-32C03C?style=for-the-badge&logo=mercadopago&logoColor=white",
	};

	return techBadgeMap[tecnologia] || "";
}