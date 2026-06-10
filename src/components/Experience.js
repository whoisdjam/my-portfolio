import React from "react";
import "../styles/Experience.css";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Senior Full Stack Web & Mobile Developer",
    company: "Global Tech Solutions, Tokyo, Japan",
    date: "2021 – Present",
    bullets: [
      "Led the design, development, and deployment of scalable web applications, mobile apps, and e-commerce platforms.",
      "Built custom e-commerce platforms with product catalogs, shopping carts, checkout systems, payment gateway integrations (Stripe, PayPal), inventory management, and customer portals.",
      "Developed cross-platform mobile applications using React Native and Flutter with secure login, in-app purchases, and push notifications.",
      "Designed and implemented backend architectures using Node.js, NestJS, and PostgreSQL for high-volume transactions and real-time processing.",
      "Created RESTful and GraphQL APIs to connect frontend and backend systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Innovate Digital Japan, Tokyo, Japan",
    date: "2018 – 2021",
    bullets: [
      "Developed interactive web applications using React, Next.js, and TypeScript with responsive and accessible design.",
      "Integrated payment gateways, subscription systems, and CRM tools for e-commerce and SaaS platforms.",
      "Managed database systems (PostgreSQL, MySQL, MongoDB) and implemented Redis caching for high-performance retrieval.",
      "Built admin dashboards and reporting tools for real-time analytics and operational management.",
      "Collaborated in Agile teams to deliver features on schedule and migrated legacy systems to modern architectures.",
    ],
  },
  {
    title: "Software Developer",
    company: "Future Systems Co., Tokyo, Japan",
    date: "2017 – 2018",
    bullets: [
      "Supported development of internal business applications and e-commerce websites.",
      "Maintained SQL and NoSQL databases, optimizing queries and ensuring data integrity.",
      "Assisted in integrating third-party APIs for payments, shipping, and analytics.",
      "Participated in Agile sprints, delivering bug fixes, feature updates, and small-scale web apps.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="heading"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -60, opacity: 0 }}
        >
          <p className="heading-sub-text">Where I've Worked</p>
          <p className="heading-text">Experience</p>
        </motion.div>

        <div className="timeline">
          {experienceData.map((exp, idx) => {
            const side = idx % 2 === 0 ? "left" : "right";
            const card = (
              <motion.article
                className={`timeline-item ${side}`}
                key={`card-${idx}`}
                initial={{ opacity: 0, x: side === "left" ? -80 : 80, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="timeline-card">
                  <header className="exp-header">
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-date">{exp.date}</span>
                    </div>
                  </header>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );

            const dot = (
              <div className="timeline-dot-wrapper" key={`dot-${idx}`}>
                <motion.span
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            );

            if (side === "left") {
              return (
                <React.Fragment key={idx}>
                  {card}
                  {dot}
                  <div className="timeline-spacer" />
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={idx}>
                <div className="timeline-spacer" />
                {dot}
                {card}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
