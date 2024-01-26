/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      t12: "12px",
      t14: "14px",
      t15: "15px",
      t16: "16px",
      t18: "18px",
      t22: "22px",
      t24: "24px",
      t28: "28px",
      t32: "32px",
      t37: "37px",
    },

    extend: {
      colors: {
        doctorUigradient: "#1678F2",
        blueUi: "#3A8EF6",
        whiteUi: "#FFFFFF",
        lightBlueUi: "#6C87AE",
        greenUi: "#00BFA5",
        blackUi: "#031432",
        lightUi: "#F2F7FF",
        skyBlueUi: "#65A8FB",
        secondWhiteUi: "#F9FBFC",
      },

      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
