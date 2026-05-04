
type Props = {
  label?: string;
}

const Input = (props: Props) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  )
}

export default Input