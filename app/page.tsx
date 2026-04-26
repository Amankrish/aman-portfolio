import ContactUs from "./components/shared/contactUs"
import Home from "./components/shared/home"
import Portfolio from "./components/shared/portfolio"
import Resume from "./components/shared/resume"
import Services from "./components/shared/services"


const HomeRouter = ()=>{
    return (
        <div>
            <section id="home"><Home /></section>
            <section id="services"><Services /></section>
            <section id="resume"><Resume /></section>
            <section id="portfolio"><Portfolio /></section>
            <section id="contactUs"><ContactUs /></section>
        </div>
    )
}

export default HomeRouter