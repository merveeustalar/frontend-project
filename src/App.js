import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleSum = async () => {
    const res = await fetch("http://localhost:3000/sum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ num1: Number(num1), num2: Number(num2) })
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sayı Toplama</h1>
      <input value={num1} onChange={e => setNum1(e.target.value)} type="number" placeholder="Sayı 1"/>
      <input value={num2} onChange={e => setNum2(e.target.value)} type="number" placeholder="Sayı 2"/>
      <button onClick={handleSum}>Topla</button>
      {result !== null && <p>Sonuç: {result}</p>}
    </div>
  );
}

export default App;
