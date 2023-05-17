import { numberConverter } from "../utils/numberConverter";

export default function SliderInput({
    title,
    state,
    min,
    max,
    setState
}: {
    title: string;
    state: number | undefined;
    min: number,
    max: number,
    setState:
      React.Dispatch<React.SetStateAction<number>>
}) {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue: number | undefined = parseInt(e.target.value);

        setState(eventValue);
    }
    return (
      <div className="bg-slate-200 border border-1 border-black p-2 mb-2 rounded-md">
        <p>{title}</p>
        <div>
          <input
            type="range"
            min={min}
            max={max}
            className="rounded-lg text-sm appearance-none h-4 w-full mt-2"
            value={state}
            onChange={(e) => changeHandler(e)}
          />
          <div className="flex w-[100%] justify-between">
            <span>0</span>
            <span>{numberConverter(state)}</span>
            <span>{max ? numberConverter(max) : 0}</span>
          </div>
        </div>
      </div>
    );
}