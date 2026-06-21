type Props = {
  label: string;
};

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className="w-full bg-primary-main text-md font-semibold text-ink-900 py-2.5 rounded-xs hover:bg-primary-700 hover:text-white"
    >
      {props.label}
    </button>
  );
};

export default Button;
