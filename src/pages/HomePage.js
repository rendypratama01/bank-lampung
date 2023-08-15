import Hero from "../components/Hero";
import Product from "../components/Product";
import Section from "../components/Section";

function HomePage() {
  return (
    <div>
      <div className="background">
        <Hero />
      </div>

      <div>
        <Section/>
      </div>

      <div>
        <Product/>
      </div>
    </div>
  );
}

export default HomePage;
