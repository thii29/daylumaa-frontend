import { Sparkles } from 'lucide-react';

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const Logo = ({ size = 20, color = '#FFFFFF', strokeWidth }: Props) => {
  return (
    <div className="w-full h-12 flex items-center gap-2 py-1">
      <div className="w-10 h-full flex justify-center items-center rounded-md bg-primary-main shadow-sm">
        <Sparkles size={size} color={color} strokeWidth={strokeWidth} />
      </div>
      <div
        className="h-fit py-1 flex flex-col flex-1"
      >
        <div className="text-header-3">Daylumaa</div>
        <div className="text-caption">Productivity Hub</div>
      </div>
    </div>
  );
};

export default Logo;
