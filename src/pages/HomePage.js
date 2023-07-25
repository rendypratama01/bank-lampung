import Hero from "../components/Hero";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <div className="background">
        <Hero />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
