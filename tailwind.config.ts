import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "box":"#CED9E3",
        "rotate-box":"#3EBCF7"
      },
      fontFamily:{
        "Inter":['Inter',"sans-serif"],
        "Vazirmatn":['Vazirmatn', "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
