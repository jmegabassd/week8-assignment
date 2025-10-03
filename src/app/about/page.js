import aboutContainer from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={aboutContainer.aboutcontainer}>
      <h1>About this website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>
  );
}
