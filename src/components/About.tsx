const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 md:px-16 flex items-center">
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl mx-auto">

        <div>
          <h2 className="text-4xl font-bold mb-6">ABOUT ME</h2>
          <p className="text-neutral-400 max-w-md">
            Filmmaker & video editor focused on motion, machines and emotions.
            I create cinematic stories that deliver real impact.
          </p>

          <div className="flex gap-12 mt-10">
            <Stat num="2" label="Years Experience" />
            <Stat num="50+" label="Projects" />
            <Stat num="10+" label="Clients" />
          </div>
        </div>

      </div>
    </section>
  );
};

const Stat = ({ num, label }: any) => (
  <div>
    <p className="text-4xl font-bold text-lime-400">{num}</p>
    <p className="text-sm text-neutral-400">{label}</p>
  </div>
);

export default About;
