import  profile  from '../assets/3d-cartoon.webp'
//import Resume from '/Swathiga_GV_Frontend_Web_Developer'

export default function Hero(){

    return(
        <>
        <section className="hero-section">
            <div className='hero'>
            <img src={profile} alt='profile' className='profile-img' />
            <h1 className="hero-heading">Hi I'm Swathiga</h1>
            <h3>Frontend Developer | React.js Developer</h3>
            <p > I build responsive, scalable web applications with clean UI and real-world functionality.
            </p>
            <a href='/Swathiga_GV_Frontend_Web_Developer' download className='btn'>Download Resume</a>
            </div>
        </section>
        </>
    )
}