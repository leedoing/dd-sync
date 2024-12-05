import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'loading-bar': {
  				'0%': { width: '0%' },
  				'50%': { width: '70%' },
  				'100%': { width: '100%' }
  			}
  		},
  		animation: {
  			'loading-bar': 'loading-bar 2s ease-in-out infinite'
  		}
  	}
  },
  plugins: [],
};
export default config;
