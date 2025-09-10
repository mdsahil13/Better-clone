import { useState } from "react";

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState(200000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(30);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = Number(principal);
    const r = Number(rate) / 100 / 12;
    const n = Number(years) * 12;
    if (!P || !r || !n) return;
    const monthly = (P * r) / (1 - Math.pow(1 + r, -n));
    setResult(monthly.toFixed(2));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Mortgage Calculator</h1>
      <div className="space-y-4 max-w-md ">
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full p-2 border rounded" placeholder="Principal" />
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full p-2 border rounded" placeholder="Interest Rate (%)" />
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="w-full p-2 border rounded" placeholder="Years" />
        <button onClick={calculate} className="bg-betterBlue text-white py-2 px-4 rounded">Calculate</button>
        {result && <p className="mt-4">Monthly Payment: <strong>${result}</strong></p>}
      </div>
    </div>
  )
}
