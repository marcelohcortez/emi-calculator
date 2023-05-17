export default function TextInput({
  title,
  state,
  setState,
}: {
  title: string;
  state: number | undefined;
  setState:
    React.Dispatch<React.SetStateAction<number>>
}) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue: number | undefined = parseInt(e.target.value);

    setState(eventValue);
  };

  return (
    <div className="bg-slate-200 border border-1 border-black p-3 mb-2 rounded-md">
      <p>{title}</p>
      <input
        type="number"
        className="border-black border p-2 w-[180px] rounded-md"
        value={state ? state : ""} //condition to avoid 'uncontrolled input' issue
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
}
