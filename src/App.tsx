import { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import { tenureItems } from "./utils/tenureItems";

import "./App.css";
import SliderInput from "./components/SliderInput";
import { numberConverter } from "./utils/numberConverter";

function App() {
  const [itemValue, setItemValue] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [interestRateAnual, setInterestRateAnual] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [buttonSelected, setButtonSelected] = useState("")

  const calculateEMI = ({
    itemValue,
    downPayment,
    interestRateAnual,
    tenure,
  }: {
    itemValue: number;
    downPayment: number;
    interestRateAnual: number;
    tenure: number;
  }) => {
    const loanAmount = itemValue - downPayment;
    const interestRate = interestRateAnual / 100;
    const totalTenure = tenure * 12;

    //P x R x (1+R)^N / [(1+R)^N-1]
    const totalEMI =
      (loanAmount * interestRate * (1 + interestRate) ** totalTenure) /
      ((1 + interestRate) ** totalTenure - 1);

    return parseInt(totalEMI.toFixed(2));
  };

  useEffect(() => {
    if (!itemValue && !tenure && !interestRateAnual) return;

    const emi = calculateEMI({
      itemValue,
      downPayment,
      interestRateAnual,
      tenure,
    });
    setTotalLoan(emi * (tenure * 12));
    setEmi(emi);
  }, [itemValue, tenure, interestRateAnual, downPayment]);

  const tenureButtonClick = (item: number) => {
    setButtonSelected("buttonSelected");
    setTenure(item)
  }

  return (
    <main className="w-[40%] lg:w-[50%] md:w-[80%] sm:w-[90%] min-[320px]:w-[90%] m-auto mt-20">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-center mb-2">EMI Calculator</h1>
        <p className="text-center">
          Run your simulations and see what will be your monthly payment and the
          final value that you will pay for your loan.
        </p>
      </header>
      <section>
        <TextInput
          title={"Input the total value of the car/house (numbers only)"}
          state={itemValue}
          setState={setItemValue}
        />
        <SliderInput
          title={"Input the value of the down payment, if any"}
          state={downPayment}
          min={0}
          max={itemValue}
          setState={setDownPayment}
        />
        <TextInput
          title={"Input the value of the anual interest rate (%)"}
          state={interestRateAnual}
          setState={setInterestRateAnual}
        />
        <div className="mt-3">
          <p>Select the amount of years in which you want to pay the loan</p>
          <div className="flex flex-wrap gap-x-6 gap-y-6 pt-3 justify-between">
            {tenureItems.map((item) => {
              return (
                <button
                  key={item}
                  className={`w-1/6 border border-1 border-black p-3 rounded-md hover:bg-slate-300 ${item === tenure ? "bg-slate-400" : "bg-slate-200"}`}
                  onClick={() => tenureButtonClick(item)}
                >
                  {item} {item > 1 ? "years" : "year"}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {emi > 0 ? (
        <>
          <section>
            <h2 className="font-bold text-xl mt-5">Results of your loan</h2>
            <p>Total per month: {numberConverter(emi)}</p>
            <p>Total to pay: {numberConverter(totalLoan)}</p>
            <p>
              Total period (years): {tenure} {tenure > 1 ? "years" : "year"}
            </p>
            <p>Total period (months): {tenure * 12} months</p>
          </section>
        </>
      ) : (
        <>
          <section>
            <h2 className="font-bold text-xl mt-5">No loan value to display</h2>
          </section>
        </>
      )}
    </main>
  );
}

export default App;
