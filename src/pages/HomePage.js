import Hero from "../components/Hero";
import Product from "../components/Product";
import Section from "../components/Section";
import BeritaHome from "../components/BeritaHome"
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

      <div>
        <BeritaHome/>
      </div>
    </div>
  );
}

export default HomePage;
