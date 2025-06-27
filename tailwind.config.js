const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Extralight: ['var(--font-extralight)'],
        Light: ['var(--font-light)'],
        Medium: ['var(--font-medium)'],
        Regular: ['var(--font-regular)'],
        Thin: ['var(--font-thin)'],
      },
    },
  },
  plugins: [],
};
export default config;