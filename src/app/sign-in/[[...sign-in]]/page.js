import { SignIn } from "@clerk/nextjs";
import signInPage from "@/styles/sign-in.module.css";

export default function SignInPage() {
  return (
    <div className={signInPage.maincontainer}>
      <SignIn />
    </div>
  );
}
