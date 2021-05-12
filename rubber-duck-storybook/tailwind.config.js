module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'display': ['Red Hat Display', 'san-serif'],
                'body': ['Red Hat Text', 'san-serif'],
            },
            colors: {
                purple:{
                    '100': '#193B95',
                    '200': '#16265E',
                },
                blue: {
                    '100': '#A3BAF4',
                    '200': '#3968E1',
                },
                orange: {
                    '100': '#FFC692',
                    '200': '#FFA654',
                },
                red: {
                    '100': '#E56B56',
                    '200': '#A43B29',
                },
                green: {
                    '100': '#61CB9D',
                    '200': '#269464',
                },
                grey: {
                    '100': '#EEF1F6',
                    '200': '#AAAFBB',
                    '300': '#4B5265',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    }