import NavigationBar from "../components/NavigationBar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

function HomePage () {
    return (
        <div>
            <div class="background">      
                <NavigationBar />
                <Hero />
            </div>
            <div class="footer">
                <Footer /> 
            </div>
        </div>
    )
}

export default HomePage