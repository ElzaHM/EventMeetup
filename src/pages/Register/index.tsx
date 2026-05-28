import {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Lock, Mail, User} from "lucide-react";

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
  MeetFlowLogo,
  PasswordToggle,
  PrimaryAuthButton,
  SocialButton,
  authIconClassName,
  authLinkBoldClassName,
  authLinkClassName,
} from "@/components/auth/AuthPrimitives";
import Input from "@/components/ui/Input";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <AuthPageShell wide>
      <AuthCard>
        <MeetFlowLogo />

        <AuthHeader
          title="Create your account ✨"
          subtitle="Join the community and discover amazing events"
        />

        <AuthForm>
          <AuthFormFields>
            <Input
              variant="auth"
              label="Full Name"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              autoComplete="name"
              leftIcon={<User className={authIconClassName} />}
            />

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
              placeholder="Create a password"
              autoComplete="new-password"
              leftIcon={<Lock className={authIconClassName} />}
              rightIcon={
                <PasswordToggle
                  visible={showPassword}
                  onToggle={() => setShowPassword((prev) => !prev)}
                />
              }
            />

            <Input
              variant="auth"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              autoComplete="new-password"
              leftIcon={<Lock className={authIconClassName} />}
              rightIcon={
                <PasswordToggle
                  visible={showConfirmPassword}
                  onToggle={() => setShowConfirmPassword((prev) => !prev)}
                />
              }
            />
          </AuthFormFields>

          <AuthFormActions>
            <AuthCheckbox checked={agreedToTerms} onChange={setAgreedToTerms} align="start">
              I agree to the{" "}
              <a href="#" className={authLinkClassName}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className={authLinkClassName}>
                Privacy Policy
              </a>
            </AuthCheckbox>

            <PrimaryAuthButton>
              Create Account
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </PrimaryAuthButton>
          </AuthFormActions>
        </AuthForm>

        <AuthSocialSection dividerLabel="or sign up with">
          <SocialButton name="Google" />
          <SocialButton name="Apple" />
          <SocialButton name="Facebook" />
        </AuthSocialSection>

        <AuthFooterLink>
          Already have an account?{" "}
          <Link to="/login" className={authLinkBoldClassName}>
            Login
          </Link>
        </AuthFooterLink>
      </AuthCard>
    </AuthPageShell>
  );
}

export default Register;
