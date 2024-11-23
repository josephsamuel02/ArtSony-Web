import numeral from "numeral";

const FormatNumber = (value: number) => {
  return numeral(value).format("0a"); // "0.0a" gives you short formats like "1k", "1M", etc.
};

export default FormatNumber;
