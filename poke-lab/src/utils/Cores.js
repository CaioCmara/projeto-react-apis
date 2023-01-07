export const cores = (type) => {
  switch (type) {
    case "bug":
      return "#316520";
    case "fire":
      return "#F44900";
    case "flying":
      return "#6892B0";
    case "normal":
      return "#8A8A8A";
    case "grass":
      return "#70B873";
    case "poison":
      return "#AD61AE";
    case "water":
      return "#33A4F5";
    default:
      return "#33A4F5";
  }
};
