import { Sparkles } from 'lucide-react';

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const Logo = ({ size = 18, color = "#FFFFFF", strokeWidth }: Props) => {
  return (
    <div className="h-9 flex items-center gap-2">
      <div className="w-9 h-full flex justify-center items-center rounded-md bg-primary shadow-sm">
        <Sparkles size={size} color={color} strokeWidth={strokeWidth} />
      </div>
      <div className='h-full py-0.5 flex flex-col justify-between'>
        <div className='text-lg font-bold leading-4.5 text-ink-900'>Daylumaa</div>
        <div className='text-xs leading-3 font-light text-ink-400'>Productivity Hub</div>
      </div>
    </div>
  );
};

export default Logo;
