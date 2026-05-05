type Props = {
  label?: string;
};

const Input = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-body-sm">
        {props.label}:
      </label>
      <input
        type="text"
        className="w-xs px-2.5 py-1 border border-ink-300  rounded-xs text-body hover:border-2 hover:border-ink-400 focus:outline-1 focus:outline-primary-500"
      />
    </div>
  );
};

export default Input;
