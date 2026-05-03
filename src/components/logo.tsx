import { Sparkles } from 'lucide-react';

type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  width?: number;
  height?: number;
};

const Logo = ({ size = 18, color, strokeWidth, width, height }: Props) => {
  return (
    <div className="flex gap-1">
      <div className="rounded-md bg-primary">
        <Sparkles size={size} color={color} strokeWidth={strokeWidth} />
      </div>
    </div>
  );
};

export default Logo;
