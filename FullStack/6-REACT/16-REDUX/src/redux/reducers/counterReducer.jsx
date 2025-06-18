//!MUTFAK

const counterReducer = (
  state = { sayac: 0, yazi: "basliyor" },
  { type, payload }
) => {
  switch (type) {
    case "INCREASE":
      return { sayac: state.sayac + 1, yazi: payload };
    case "DECREASE":
      return { sayac: state.sayac - 1, yazi: payload };
    case "RESET":
      return { sayac:0,};

    default:
      return state;
  }
};

export default counterReducer;
