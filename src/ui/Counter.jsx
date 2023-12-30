import Button from "./Button";

function Counter({ children, name }) {
  return (
    <div className="flex items-center gap-2  rounded-md justify-center">
      <p className="uppercase text-md font-semibold">{name}</p>
      <Button type='counter'>-</Button>
      <span>0</span>
      <Button type='counter'>+</Button>
    </div>
  );
}

export default Counter;
