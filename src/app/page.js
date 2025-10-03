import hompageContainer from "./homepage.module.css";

export default function HomePage() {
  return (
    <div className={hompageContainer.hompagecontainer}>
      <h1>My Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>
  );
}
