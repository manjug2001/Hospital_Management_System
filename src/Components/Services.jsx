import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "General Consultation",
      description:
        "Comprehensive health check-ups and diagnosis by our experienced general physicians.",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
    },
    {
      id: 2,
      title: "Cardiology",
      description:
        "Advanced heart care, diagnosis, and treatment by top cardiologists.",
      icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    },
    {
      id: 3,
      title: "Orthopedics",
      description:
        "Specialized bone and joint care, fracture management, and physiotherapy.",
      icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
    {
      id: 4,
      title: "Neurology",
      description:
        "Expert treatment for neurological disorders, brain, and spine-related conditions.",
      icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
      id: 5,
      title: "Dermatology",
      description:
        "Comprehensive care for skin, hair, and nail issues with modern treatments.",
      icon: "https://cdn-icons-png.flaticon.com/512/599/599502.png",
    },
    {
      id: 6,
      title: "Gynecology",
      description:
        "Dedicated women’s healthcare, maternity care, and reproductive treatments.",
      icon: "https://cdn-icons-png.flaticon.com/512/2995/2995625.png",
    },
  ];

  return (
    <div className="services-page">
      <Header />
      

      <main className="services-main">
        <h2 className="services-heading">Our Medical Services</h2>
        <p className="services-subheading">
          Delivering world-class healthcare with compassion and expertise.
        </p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
