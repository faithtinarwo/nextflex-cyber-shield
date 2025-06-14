
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">About NextFlex</h2>
            <p className="text-gray-600 mb-4">
              Nextflex is a specialist cyber security and technology advisory company made up of subject matter experts that assists enterprises in identifying and minimising their cyber security risk.
            </p>
            <p className="text-gray-600">
              At Nextflex, we’re using everything we’ve got – our business resources, technology and expertise – to keep organizations focused on their business goals, with a stronger and more resilient security posture.
            </p>
          </div>
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become an outstanding leader in delivering resilient cyber security solutions, resulting in positive outcomes that delight our clients. We thrive to be a great place to work where our people reach their potential and provide exceptional service to our clients and the community.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to be the most highly valued cyber security and technology advisor, by demonstrating our unique understanding of our client’s needs, and exceeding their expectations in every interaction and solution we present. To reduce risks to digital assets of our valued clients and prevent cyber-attacks and data loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
