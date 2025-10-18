import { SignUp } from "@clerk/nextjs";
import signUpPage from "@/styles/sign-up.module.css";

export default function SignUpPage() {
  return (
    <div className={signUpPage.maincontainer}>
      <SignUp />
    </div>
  );
}
