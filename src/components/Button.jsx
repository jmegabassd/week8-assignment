import classButton from "./button.module.css";

export default function Button({ children }) {
  return <button className={classButton.button}>{children}</button>;
}
