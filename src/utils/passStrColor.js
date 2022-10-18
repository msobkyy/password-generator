const passStrColor = (arr) => {
  let sc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sc = sc + 1;
    }
  }
  console.log(sc);
  switch (sc) {
    case 1:
      return "text-red-600";
    case 2:
      return "text-orange-600";
    case 3:
      return "text-yellow-600";
    case 4:
      return "text-green-600";
    default:
      return "text-red-600";
  }
};

export default passStrColor;
