import React from 'react';
import { Code, Briefcase, User,} from 'lucide-react';
import FadeInSection from './FadeInSection';

const AboutMe = () => {
  return (
    <section id='about' 
    className=' px-4 relative scroll-smooth '
    >
   <div className='container mx-auto  max-w-5xl'>
    <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'> About
        <span className='text-primary'> Me</span>
    </h2>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
         <FadeInSection delayClass={"fade-in-delay-1"}>
        <div className='space-y-6 text-left'>
            
            <h3 className='text-2xl font-semibold '>Passionate Web Developer</h3>
            <p className='text-muted-foreground'>
                I’m a MERN Stack Developer with a passion for blending creativity and logic to craft seamless digital experiences. I specialize in building full-stack applications that are not only efficient and scalable but also intuitive and visually engaging.
            </p>
            <p className='text-muted-foreground'>
                Beyond just writing code, I love solving problems, experimenting with new technologies, and turning ideas into impactful products. When I’m not coding, you’ll find me exploring design inspirations, learning the latest in tech, and constantly pushing myself to grow as a developer
            </p>
               <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center text-center'>
            <a href='#contact' className='cosmic-button'>
                Get In Touch
            </a>
            <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300'>
                Download CV
            </a>
        </div>
        </div>
        </FadeInSection>
        <div className='grid grid-cols-1 gap-6'>
            <FadeInSection delayClass={"fade-in-delay-2"}>
        <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/30'>
                <Code className='size-6 text-primary'/>
                </div>
                <div className='text-left'>
                <h4 className='text-lg font-semibold mb-1'>Full Stack Web Development</h4>
                <p className=''>Creating responsive websites and web application with modern frameworks</p>
                </div>
            </div>
        </div>
        </FadeInSection>
        <div className='gradient-border p-6 card-hover'> 
            <FadeInSection delayClass={"fade-in-delay-3"}>
             <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/30'>
                <User className='size-6 text-primary'/>
                </div>
                 <div className='text-left'>
                <h4 className='text-lg font-semibold mb-1'>UI/UX Design & User Experience</h4>
                <p className=''>Designing intuitive and visually appealing interfaces that delight users.</p>
                </div>
            </div>
              </FadeInSection>
        </div>
      
        <div className='gradient-border p-6 card-hover'>
            <FadeInSection delayClass={"fade-in-delay-4"}>
             <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/30'>
                <Briefcase className='size-6 text-primary'/>
                </div>
                 <div className='text-left'>
                <h4 className='text-lg font-semibold mb-1'>Project Management & Collaboration</h4>
                <p className=''>Building robust solutions while ensuring smooth teamwork and timely delivery.</p>
                </div>
            </div>
            </FadeInSection>
        </div>
    </div>
    </div>
    
   </div>
    </section>
  )
}

export default AboutMe