const buttons: Array<{
  content: string;
  color: "grey" | "orange" | "blueGrey";
  role: string;
  value: string | number;
}> = [
  { content: "7", color: "blueGrey", role: "insert", value: 7 },
  { content: "8", color: "blueGrey", role: "insert", value: 8 },
  { content: "9", color: "blueGrey", role: "insert", value: 9 },
  { content: "+", color: "orange", role: "operator", value: "+" },

  { content: "4", color: "blueGrey", role: "insert", value: 4 },
  { content: "5", color: "blueGrey", role: "insert", value: 5 },
  { content: "6", color: "blueGrey", role: "insert", value: 6 },
  { content: "-", color: "orange", role: "operator", value: "-" },

  { content: "1", color: "blueGrey", role: "insert", value: 1 },
  { content: "2", color: "blueGrey", role: "insert", value: 2 },
  { content: "3", color: "blueGrey", role: "insert", value: 3 },
  { content: "×", color: "orange", role: "operator", value: "*" },

  { content: ".", color: "blueGrey", role: "insert", value: "." },
  { content: "0", color: "blueGrey", role: "insert", value: 0 },
  { content: "+/-", color: "blueGrey", role: "insert", value: "inversion" },
  { content: "÷", color: "orange", role: "operator", value: "/" },

  { content: "RESET", color: "grey", role: "insert", value: "reset" },
  { content: "=", color: "orange", role: "execute", value: "=" },
];

export default buttons;
