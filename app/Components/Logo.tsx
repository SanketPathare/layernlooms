'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = ({ className = "w-auto h-12" }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to handle 'system' preference correctly
  // Default to light logo while mounting
  const logoSrc = mounted && resolvedTheme === 'dark' ? '/logodark.png' : '/logo.jpg';

  return (
    <div className="flex items-center">
      <Image
        src={logoSrc}
        alt="LayerNLooms Logo"
        width={300}
        height={300}
        className={`${className} object-contain transition-all duration-300 ${
          mounted && resolvedTheme === 'dark' 
            ? 'mix-blend-screen brightness-110 contrast-125' 
            : 'mix-blend-multiply'
        }`}
        priority
        key={logoSrc}
      />
    </div>
  );
};

export default Logo;
