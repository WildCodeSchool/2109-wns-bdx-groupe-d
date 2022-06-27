module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				wildmine_black: '#171A21',
				secondary_color: '#5A9178',
				secondary_color_hover: '#0F766E',
				text_color_light: '#E7E7E7',
				altered_white: { color: '#E7E7E7', opacity: '30%' },
				black_badge: '#171A21',
				success: '#47805A',
				warning: '#B78A38',
				danger: '#C24C3A',
				info: '#608F9D',
			},
			fontFamily: {
				chaney_title: ['Chaney Title', 'regular'],
				proza_main_title: ['Proza Main Title', 'extrabold'],
				proza_second_title: ['Proza Second Title', 'semibold'],
				proza_body: ['Proza Regular', 'regular'],
				proza_tags: ['Proza Tags', 'bolditalic'],
				proza_desc: ['Proza Descriptions', 'italic'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
