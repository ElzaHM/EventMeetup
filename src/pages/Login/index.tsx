import {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Lock, Mail} from "lucide-react";

import {
  AuthCard,
  AuthCheckbox,
  AuthFooterLink,
  AuthForm,
  AuthFormActions,
  AuthFormFields,
  AuthHeader,
  AuthPageShell,
  AuthSocialSection,
  LegalFooter,
  MeetFlowLogo,
  PasswordToggle,
  PrimaryAuthButton,
  SocialButton,
  authIconClassName,
  authLinkBoldClassName,
  authLinkClassName,
} from "@/components/auth/AuthPrimitives";
import Input from "@/components/ui/Input";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <AuthPageShell footer={<LegalFooter />}>
      <AuthCard>
        <MeetFlowLogo />

        <AuthHeader title="Welcome back 👋" subtitle="Login to your account to continue" />

        <AuthForm>
          <AuthFormFields>
            <Input
              variant="auth"
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              leftIcon={<Mail className={authIconClassName} />}
            />

            <Input
              variant="auth"
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              leftIcon={<Lock className={authIconClassName} />}
              labelEnd={
                <a href="#" className={`text-sm font-normal ${authLinkClassName}`}>
                  Forgot password?
                </a>
              }
              rightIcon={
                <PasswordToggle
                  visible={showPassword}
                  onToggle={() => setShowPassword((prev) => !prev)}
                />
              }
            />
          </AuthFormFields>

          <AuthFormActions>
            <AuthCheckbox checked={rememberMe} onChange={setRememberMe}>
              Remember me
            </AuthCheckbox>

            <PrimaryAuthButton>
              Login
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </PrimaryAuthButton>
          </AuthFormActions>
        </AuthForm>

        <AuthSocialSection dividerLabel="or continue with">
          <SocialButton name="Google" />
          <SocialButton name="Apple" />
          <SocialButton name="Facebook" />
        </AuthSocialSection>

        <AuthFooterLink>
          Don&apos;t have an account?{" "}
          <Link to="/register" className={authLinkBoldClassName}>
            Register
          </Link>
        </AuthFooterLink>
      </AuthCard>
    </AuthPageShell>
  );
}

export default Login;
