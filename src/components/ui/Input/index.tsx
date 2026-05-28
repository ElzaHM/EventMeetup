import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  labelEnd?: ReactNode;
  variant?: "default" | "auth";
}

const labelStyles = {
  default: "text-sm font-medium text-white",
  auth: "text-sm font-semibold text-white",
} as const;

const authInputInner =
  "min-h-0 min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-normal leading-normal text-white placeholder:text-zinc-500 focus:outline-none focus:ring-0";

const authFieldShellClassName =
  "flex h-14 w-full flex-row items-center gap-3 rounded-xl border border-[#262626] bg-[#0a0a0f] px-4 transition-colors focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/25";

const authLeftIconSlotClassName =
  "flex h-[18px] w-[18px] shrink-0 items-center justify-center text-zinc-500";

const authRightIconSlotClassName =
  "flex h-[18px] w-[18px] shrink-0 items-center justify-center pl-2";

function Input({
  label,
  leftIcon,
  rightIcon,
  labelEnd,
  id,
  variant = "default",
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const isAuth = variant === "auth";

  if (isAuth) {
    return (
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between gap-3">
          <label htmlFor={inputId} className={labelStyles.auth}>
            {label}
          </label>
          {labelEnd}
        </div>
        <div className={`${authFieldShellClassName} ${rightIcon ? "pr-3" : ""}`}>
          {leftIcon && (
            <span className={authLeftIconSlotClassName} aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            className={`${authInputInner} ${className}`}
            {...props}
          />
          {rightIcon && (
            <span className={authRightIconSlotClassName}>{rightIcon}</span>
          )}
        </div>
      </div>
    );
  }

  const inputBase = `w-full rounded-lg border border-gray-700/80 bg-[#0d0e18] py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:outline-none ${
    leftIcon ? "pl-10" : "pl-3"
  } ${rightIcon ? "pr-10" : "pr-3"} ${className}`;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-2">
        <label htmlFor={inputId} className={labelStyles.default}>
          {label}
        </label>
        {labelEnd}
      </div>
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
            {leftIcon}
          </span>
        )}
        <input id={inputId} className={inputBase} {...props} />
        {rightIcon && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2">{rightIcon}</div>
        )}
      </div>
    </div>
  );
}

export default Input;
