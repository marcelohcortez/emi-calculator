import { useState } from "react";
import "./App.css";

function App() {
  const [originalLoan, setOriginalLoan] = useState(0)
  const [totalLoan, setTotalLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [interestRateAnual, setInterestRateAnual] = useState(0);
  const [interestRateMonthly, setInterestRateMonthly] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [emi, setEmi] = useState(0);

  //P x R x (1+R)^N / [(1+R)^N-1]

  const calculateEMI = () => {
  }

  return (
    <main className="w-4/5 m-auto mt-20">
      <header>
        <h1 className="text-3xl font-bold">EMI Calculator</h1>
        <p>
          Run your simulations and see what will be your monthly payment and the
          final value that you will pay for your loan
        </p>
      </header>
      <section>
        <div>
          <p>Input the total value of the car/house</p>
          <input type="text" className="border-black border" />
        </div>
        <div>
          <p>Input the value of the down payment, if any</p>
          <input type="range" />
        </div>
        <div>
          <p>Input the value of the interest rate (%)</p>
          <input type="text" className="border-black border" />
        </div>
        <div>
          <p>Input the value of the processing fee (%)</p>
          <input type="text" className="border-black border" />
        </div>
        <div>
          <p>Select the amount of years in which you want to pay the loan</p>
          <div className="flex">
            <button className="border-black border p-3">1 year</button>
            <button className="border-black border p-3">2 years</button>
            <button className="border-black border p-3">3 years</button>
            <button className="border-black border p-3">4 years</button>
            <button className="border-black border p-3">5 years</button>
            <button className="border-black border p-3">6 years</button>
            <button className="border-black border p-3">7 years</button>
            <button className="border-black border p-3">8 years</button>
            <button className="border-black border p-3">9 years</button>
            <button className="border-black border p-3">10 years</button>
          </div>
        </div>
      </section>
      <section>
        <p>Total per month: {emi}</p>
        <p>Total period: {tenure / 12} months</p>
        <p>Total to pay: {emi} in {tenure} years</p>
      </section>
    </main>
  );
}

export default App;
