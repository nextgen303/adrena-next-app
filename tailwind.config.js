module.exports = {
    extend: {
      keyframes: {
        jump: {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '40%': {
            transform: 'translate3d(0, 50%, 0)'
          }
        },
      },
      animation: {
        jump: 'jump 2s ease-in-out infinite', // Adjust duration and other animation properties as needed
      },
    },
    // Other configuration settings
  }
  