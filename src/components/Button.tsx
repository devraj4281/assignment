import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'pill' | 'gold-glass';
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer';
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-gradient-to-br from-[#0c4a9e] to-[#1a73e8] text-white hover:from-[#082b5e] hover:to-[#1258b8] shadow-[inset_0_1px_rgba(255,255,255,0.2),_0_8px_16px_rgba(26,115,232,0.2)] text-[15px] border border-[#0a3875]';
      break;
    case 'secondary':
      variantStyles = 'bg-[#dce3ec] text-[#585f67] hover:bg-[#c2ccdb] text-[15px]';
      break;
    case 'ghost':
      variantStyles = 'bg-white/50 backdrop-blur-sm text-[#1a73e8] border border-[#d1dbec] hover:bg-white/90 shadow-sm text-[15px]';
      break;
    case 'pill':
      variantStyles = 'bg-[#dfe9fa] text-[#1a73e8] hover:bg-[#c4d6f9] border border-transparent text-[13px]';
      break;
    case 'gold-glass':
      variantStyles = 'bg-white/30 backdrop-blur-md text-[#b8860b] border border-[#d4af37]/40 hover:bg-white/60 shadow-[0_4px_16px_rgba(212,175,55,0.12)] text-[13px]';
      break;
  }

  const radiusStyle = (variant === 'pill' || variant === 'gold-glass') ? 'rounded-full' : 'rounded-[8px]';
  const paddingStyle = (variant === 'pill' || variant === 'gold-glass') ? 'px-6 py-2.5' : 'px-8 py-3.5';

  return (
    <button className={`${baseStyles} ${variantStyles} ${radiusStyle} ${paddingStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
