/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-grey':'#323854',
        'dark-grey-text':'#434B74',
        'grey':'#79747F',
        'primary':'#008AFF',
        'light-violet':'#8D7FC7',
        'violet':'#8D7FC7',
        'extra-light-violet':'#EEEEFF',
        'light-blue':'#D8ECFF'
      },
      fontFamily:{
        circerounded:['Circe-Rounded','sans-serif']
      },
      fontSize:{
        'h0':'40px',
        'h1': '36px',
        'h2':'32px',
        'h3':'24px',
        'h4':'20px',
        'h5':'16px',
        'h6':'14px',
        'body_xsm':'10px',
        'body_sm':'12px',
        'body_md':'16px',
        'body_lg':'18px'
      },
      backgroundImage:{
        'gift_img':'url(../src/assets/gift illustration.png)',
        'message':'url(../src/assets/Messages.png)',
        'discount':'url(../src/assets/Discount.png)'
      },
      content:{
        'arrow_down':'url(../src/assets/icons/Path.png)',
        'arrow_down_sm':'url(../src/assets/icons/Arrow_sm.png)'

      }
    },
  },
  plugins: [],
}

