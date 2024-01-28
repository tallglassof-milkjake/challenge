/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    content: [
        "./index.html", 
        "./src/**/*.{html,js,ts,jsx,tsx}", 
        "./src/*.{ts,js,tsx,jsx}"
    ],
    theme: {
        extend: {
            spacing: {
                'xs': '0.563',
                'sm': '1rem',
            },
            linearGradientColors: {
                'primary-gradient': ['#917AFD 2.61%', '#6246EA 96.58%'],
            },
            colors: {
                'primary': '#684DEC',
                'secondary': '#FFBF75',
                'light': '#EEEEEE',
                'white': '#FCFCFC',
                'dark': '#222831',
                'slate': '#393E48',
            }
        },
        
    },
    plugins: [],
}

