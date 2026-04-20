import Hero from './Hero'
import About from './About'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectSection'
import ContactSection from './ContactSection'


export default function Home(){
    return(
        <>
        <Hero />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        </>
    )
}