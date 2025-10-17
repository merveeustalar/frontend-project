import { useState } from "react";
const backendURL = "https://backend-project-qqlk.onrender.com";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // 🟢 Toplama işlemi
  const handleSum = async () => {
    const res = await fetch(`${backendURL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number1: Number(num1), number2: Number(num2) })
    });
    const data = await res.json();
    setResult(data.result);
  };

  // 🔵 Çarpma işlemi
  const handleMultiply = async () => {
    const res = await fetch(`${backendURL}/multiply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number1: Number(num1), number2: Number(num2) })
    });
    const data = await res.json();
    setResult(data.result);
  };

  // 🔴 Bölme işlemi
  const handleDivide = async () => {
    const res = await fetch(`${backendURL}/divide`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number1: Number(num1), number2: Number(num2) })
    });
    const data = await res.json();

    if (data.error) {
      alert(data.error); // Sıfıra bölme hatası
    } else {
      setResult(data.result);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Toplama, Çarpma ve Bölme İşlemi</h1>

      <input
        value={num1}
        onChange={e => setNum1(e.target.value)}
        type="number"
        placeholder="Sayı 1"
      />
      <input
        value={num2}
        onChange={e => setNum2(e.target.value)}
        type="number"
        placeholder="Sayı 2"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSum}>Topla</button>
        <button onClick={handleMultiply} style={{ marginLeft: "10px" }}>
          Çarp
        </button>
        <button onClick={handleDivide} style={{ marginLeft: "10px" }}>
          Böl
        </button>
      </div>

      {result !== null && <p>Sonuç: {result}</p>}
    </div>
  );
}

export default App;
