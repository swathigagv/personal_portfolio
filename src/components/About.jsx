import Aboutpic from '../assets/about-Pic.jpeg';

export default function About(){
    return ( 
        <>
        <section className="about">
            <div className="about-left">
                <p>
         I’m a Frontend Developer skilled in React.js, JavaScript, and modern web technologies, with hands-on experience building real-world projects like finance dashboards and responsive web applications.
        </p>
         <p>I hold a degree in Electronics and Communication Engineering and am currently pursuing an MBA in AI & Data Science (correspondence), while actively seeking a full-time Frontend Developer role. My academic pursuit is structured to ensure it does not affect my professional commitments.</p>
        <p>
         I’m passionate about creating clean, user-friendly interfaces and continuously improving my skills to deliver impactful digital experiences.
        </p>

        <button className='btn-outline'>Open to work</button>
        <button className='btn-ghost'>Location: Salem</button>
            </div>
        <div className='about-right'>
            <img src={Aboutpic} alt="about" className="About-pic" />
        </div>
        </section>
        </>
    );
}