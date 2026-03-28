"use client";


import { useTheme } from "../../theme/Themecontext";


interface FloatInputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    focused: string | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
}

export default function FloatInput({
    label,
    name,
    type,
    value,
    focused,
    onChange,
    onFocus,
    onBlur,
}: FloatInputProps) {
    const { isDark } = useTheme();
    const active = focused === name || value.length > 0;

    return (
        <div className="relative">
            <label
                htmlFor={name}
                className={`absolute left-4 transition-all duration-150 pointer-events-none ${active
                    ? `top-2.5 text-[10px] tracking-widest uppercase font-semibold ${isDark ? "text-white" : "text-black"
                    }`
                    : `top-1/2 -translate-y-1/2 text-sm ${isDark ? "text-zinc-500" : "text-zinc-400"
                    }`
                    }`}
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                autoComplete="off"
                className={`w-full border rounded-xl px-4 pt-6 pb-3 text-sm outline-none transition-all duration-150 ${isDark
                    ? `bg-zinc-800 text-white ${focused === name
                        ? "border-white"
                        : "border-zinc-700 hover:border-zinc-500"
                    }`
                    : `bg-zinc-100 text-black ${focused === name
                        ? "border-black"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`
                    }`}
            />
        </div>
    );
}