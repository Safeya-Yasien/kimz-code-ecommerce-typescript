import { Heading } from "@/components/common";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading> About Us</Heading>

      {/* Introduction Section */}
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-gray-800">[Your Brand Name]</span>
          , where passion meets purpose. We are dedicated to delivering
          high-quality
          <span className="text-blue-600 font-medium">
            {" "}
            [products/services]{" "}
          </span>{" "}
          that enhance your life and bring you unparalleled satisfaction.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our mission is simple: to create innovative, reliable, and
          customer-centric solutions that make a difference. We believe in
          empowering our customers by providing top-tier{" "}
          <span className="text-blue-600 font-medium">
            [products/services]{" "}
          </span>{" "}
          while upholding integrity, quality, and excellence.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              🌟 Customer First
            </h3>
            <p className="text-gray-600 text-sm">
              We prioritize your needs and satisfaction above all.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              💡 Innovation
            </h3>
            <p className="text-gray-600 text-sm">
              We embrace creativity to drive meaningful solutions.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              🤝 Integrity
            </h3>
            <p className="text-gray-600 text-sm">
              We conduct our business with honesty and transparency.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              🚀 Excellence
            </h3>
            <p className="text-gray-600 text-sm">
              We strive for the highest quality in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Have questions, feedback, or just want to say hello? We’d love to hear
          from you! Reach out to us at{" "}
          <a
            href="mailto:contact@yourcompany.com"
            className="text-blue-500 underline"
          >
            contact@yourcompany.com
          </a>{" "}
          or follow us on social media for the latest updates.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
