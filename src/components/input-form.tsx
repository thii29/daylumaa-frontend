import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type Props = {
  label?: string;
  type: 'text' | 'password' | 'email' | 'number';
};

const InputForm = ({ ...props }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isPassword = props.type === 'password';
  const inputType = isPassword
    ? showPassword
      ? 'text'
      : 'password'
    : props.type;

  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor="" className="text-body-sm">
        {props.label}:
      </label>
      <div className="relative">
        <input
          type={inputType}
          className={`w-full px-2.5 py-1 outline outline-ink-300 rounded-xs text-body-sm
            hover:outline-2 hover:outline-ink-400 focus:outline-1 focus:outline-primary-500
            ${isPassword ? 'pr-8' : ''}`}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-300 hover:text-ink-400"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForm;
