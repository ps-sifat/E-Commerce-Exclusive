/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        white_2_F5F5F5: "var(--white_2_F5F5F5)",
        black: "var(--black)",
        black_2_363738: "var(--black_2_363738)",
        white_3_FEFAF1: "var(--white_3_FEFAF1)",
        bg_white_fff: "var(--bg_white_fff)",
        text_fafafa: "var(--text_fafafa)",
        text_2_7D8184: "var(--text_2_7D8184)",
        text_black_000: "var(--text_black_000)",
        button_black_000: "var(--button_black_000)",
        red_DB4444: "var(--red_DB4444)",
        button_green_00FF66: "var(--button_green_00FF66)",
        button_red_2_DB4444: "var(--button_red_2_DB4444)",
        rehover_pink_E07575d_DB4444: "var(--hover_pink_E07575)",
        hover_2_A0BCE0: "var(--hover_2_A0BCE0)",
      },
    },
    fontFamily: {
      Poppins: "var(--Poppins)",
      Inter: "var(--Inter)",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
