
import { FiMail, FiPhone } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 md:px-16 flex items-center">
      <div className="max-w-6xl w-full mx-auto flex">
        
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6 text-white tracking-wide">
            ABOUT ME
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#a3a3a3] max-w-xl mb-12 leading-relaxed font-sans">
            Hi, I'm <span className="text-[#d0ff71] font-medium">Om Mishra</span> — a Filmmaker, Video Editor & Digital Creator with a deep passion for capturing motion, machines, and emotions. From roaring bikes and cinematic cars to high-impact brand visuals, I create content that tells powerful stories and delivers real results.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-md">
            <Stat num="2" label="Years of Experience" />
            <Stat num="50" label="Completed Projects" />
            <Stat num="10+" label="Clients Worldwide" />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#d0ff71]/10 flex items-center justify-center border border-[#d0ff71]/20">
                <FiPhone className="text-[#d0ff71] text-lg" />
              </div>
              <div>
                <p className="text-sm text-[#a3a3a3] font-sans">Call Today :</p>
                <p className="text-white text-lg font-medium font-sans group-hover:text-[#d0ff71] transition-colors duration-300">
                  +91 9518506865
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#d0ff71]/10 flex items-center justify-center border border-[#d0ff71]/20">
                <FiMail className="text-[#d0ff71] text-lg" />
              </div>
              <div>
                <p className="text-sm text-[#a3a3a3] font-sans">Email :</p>
                <p className="text-white text-lg font-medium font-sans group-hover:text-[#d0ff71] transition-colors duration-300">
                  omm6560@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

const Stat = ({ num, label }: { num: string; label: string }) => (
  <div className="group">
    <div className="flex flex-col items-center md:items-start">
      <p className="text-4xl md:text-5xl font-heading font-medium text-[#d0ff71] mb-2">
        {num}
      </p>
      <p className="text-sm text-[#a3a3a3] font-sans text-center md:text-left uppercase tracking-wider">
        {label}
      </p>
    </div>
  </div>
);

export default About;