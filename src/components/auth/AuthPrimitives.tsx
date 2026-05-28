import type {ReactNode} from "react";
import {Eye, EyeOff} from "lucide-react";

export const authLinkClassName =
  "cursor-pointer text-[#a855f7] transition-colors hover:text-[#c084fc]";

export const authLinkBoldClassName = `${authLinkClassName} font-medium`;

export const authIconClassName = "h-[18px] w-[18px] shrink-0 stroke-[1.5] text-zinc-500";

const authCardClassName =
  "relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#121218]/80 text-white shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl";

const authCardContentClassName = "relative z-10 px-10 py-10 sm:px-12 sm:py-12";

/** Full width within card padding — reference uses inset via padding, not a narrow column */
const authInnerContentClassName = "flex w-full flex-col gap-8";

const authCardGlowClassName =
  "pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.45)_0%,transparent_68%)] opacity-40 blur-2xl";

const authCardPatternClassName =
  "pointer-events-none absolute -right-2 -bottom-2 h-36 w-36 bg-[radial-gradient(circle,#7c3aed_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-[0.14]";

const primaryButtonClassName =
  "flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-500 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(147,51,234,0.4)] transition-all hover:brightness-110 hover:shadow-[0_6px_24px_rgba(147,51,234,0.5)] active:scale-[0.98]";

const socialButtonClassName =
  "flex h-11 min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#0a0a0f]/90 px-3 text-sm font-medium text-white transition-all hover:border-[#3f3f46] hover:bg-[#14141a]/90 active:scale-[0.98]";

const pageGlowTopClassName =
  "pointer-events-none absolute top-0 right-0 h-[min(520px,70vh)] w-[min(520px,80vw)] bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.28)_0%,transparent_62%)]";

const pageGlowBottomClassName =
  "pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 translate-x-1/4 bg-[radial-gradient(circle,rgba(168,85,247,0.14)_0%,transparent_70%)]";

export function MeetFlowLogo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/meetflow-logo.png"
        alt="MeetFlow"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-xl object-cover"
      />
      <span className="text-xl font-bold tracking-tight text-white">MeetFlow</span>
    </div>
  );
}

export function SocialButton({name}: {name: string}) {
  const icons: Record<string, ReactNode> = {
    Google: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.9 3.8 14.6 3 12 3 7 3 3 7 3 12s4 9 9 9c5.2 0 8.6-3.7 8.6-8.9 0-.6-.1-1.1-.2-1.6H12z"
        />
        <path
          fill="#34A853"
          d="M3.3 7.7 6.6 10c.6-1.9 2.3-3.2 4.4-3.2 1.1 0 2.1.4 2.9 1l2.5-2.4C14.2 4.3 13.2 4 12 4 8.5 4 5.5 6.1 4.2 9.1l-2.5-1.4z"
        />
        <path
          fill="#4A90E2"
          d="M12 21c2.4 0 4.4-.8 5.9-2.1l-2.8-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8l-2.8 2.2C5.5 19.1 8.5 21 12 21z"
        />
        <path
          fill="#FBBC05"
          d="M20.6 12.3c0-.5 0-1-.1-1.4H12v2.7h4.9c-.2 1.1-.9 2.7-2.5 3.7l2.8 2.2c1.6-1.5 2.5-3.7 2.5-6.2z"
        />
      </svg>
    ),
    Apple: (
      <svg className="h-4 w-4 shrink-0 fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    ),
    Facebook: (
      <svg className="h-4 w-4 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  };

  return (
    <button type="button" className={socialButtonClassName}>
      {icons[name]}
      <span className="truncate">{name}</span>
    </button>
  );
}

export function AuthPageShell({
  children,
  footer,
  wide = false,
}: {
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
}) {
  const maxWidthClass = wide ? "max-w-[460px]" : "max-w-[432px]";

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0B0E14] text-white">
      <div className={pageGlowTopClassName} aria-hidden="true" />
      <div className={pageGlowBottomClassName} aria-hidden="true" />
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 sm:px-10 sm:py-24">
        <div className={`flex w-full flex-col items-center gap-8 ${maxWidthClass}`}>
          {children}
          {footer}
        </div>
      </main>
    </div>
  );
}

export function AuthCard({children}: {children: ReactNode}) {
  return (
    <div className={authCardClassName}>
      <div className={authCardGlowClassName} aria-hidden="true" />
      <div className={authCardPatternClassName} aria-hidden="true" />
      <div className={authCardContentClassName}>
        <div className={authInnerContentClassName}>{children}</div>
      </div>
    </div>
  );
}

export function AuthHeader({title, subtitle}: {title: string; subtitle: string}) {
  return (
    <header>
      <h1 className="text-[28px] font-bold leading-tight tracking-tight text-white">
        {title}
      </h1>
      <p className="mt-2 text-sm font-normal leading-normal text-zinc-400">{subtitle}</p>
    </header>
  );
}

export function AuthForm({children}: {children: ReactNode}) {
  return (
    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}

/** Groups labelled inputs with uniform spacing between field groups */
export function AuthFormFields({children}: {children: ReactNode}) {
  return <div className="flex flex-col gap-5">{children}</div>;
}

export function AuthFormActions({children}: {children: ReactNode}) {
  return <div className="mt-5 flex flex-col gap-5">{children}</div>;
}

export function AuthSocialSection({
  dividerLabel,
  children,
}: {
  dividerLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <AuthDivider label={dividerLabel} />
      <div className="flex w-full gap-3">{children}</div>
    </div>
  );
}

export function AuthFooterLink({children}: {children: ReactNode}) {
  return (
    <p className="text-center text-sm font-normal text-zinc-400">{children}</p>
  );
}

export function AuthDivider({label}: {label: string}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-white/10" />
      <span className="shrink-0 text-xs font-normal text-zinc-500">{label}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function PrimaryAuthButton({children}: {children: ReactNode}) {
  return (
    <button type="submit" className={primaryButtonClassName}>
      {children}
    </button>
  );
}

export function AuthCheckbox({
  checked,
  onChange,
  children,
  align = "center",
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  align?: "center" | "start";
}) {
  return (
    <label
      className={`flex cursor-pointer gap-2.5 transition-opacity hover:opacity-90 ${align === "start" ? "items-start" : "items-center"}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={`h-4 w-4 shrink-0 cursor-pointer rounded border-[#262626] bg-[#0a0a0f] text-[#a855f7] accent-[#a855f7] focus:ring-1 focus:ring-[#a855f7]/40 focus:ring-offset-0 ${align === "start" ? "mt-0.5" : ""}`}
      />
      <span
        className={`text-sm font-normal leading-snug ${align === "start" ? "text-zinc-400" : "text-white"}`}>
        {children}
      </span>
    </label>
  );
}

export function PasswordToggle({visible, onToggle}: {visible: boolean; onToggle: () => void}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex cursor-pointer items-center justify-center pl-1 text-zinc-500 transition-colors hover:text-zinc-300"
      aria-label={visible ? "Hide password" : "Show password"}>
      {visible ? <EyeOff className={authIconClassName} /> : <Eye className={authIconClassName} />}
    </button>
  );
}

export function LegalFooter() {
  return (
    <footer className="w-full px-4 pb-6 sm:pb-8">
      <p className="mx-auto max-w-md text-center text-[11px] leading-relaxed text-zinc-500">
        By continuing, you agree to our{" "}
        <a href="#" className={authLinkClassName}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className={authLinkClassName}>
          Privacy Policy
        </a>
        .
      </p>
    </footer>
  );
}
