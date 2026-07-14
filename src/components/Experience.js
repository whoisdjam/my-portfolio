import React from "react";
import "../styles/Experience.css";
import { motion } from "framer-motion";
import { ExperienceData } from "../data/ExperienceData";

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="container">
				<motion.div
					className="heading"
					whileInView={{ y: 0, opacity: 1 }}
					initial={{ y: -60, opacity: 0 }}>
					<p className="heading-sub-text">Where I've Worked</p>
					<p className="heading-text">Experience</p>
				</motion.div>

				<div className="timeline">
					{ExperienceData.map((exp, idx) => {
						const side = idx % 2 === 0 ? "left" : "right";
						const card = (
							<motion.article
								className={`timeline-item ${side}`}
								key={`card-${idx}`}
								initial={{ opacity: 0, x: side === "left" ? -80 : 80, scale: 0.96 }}
								whileInView={{ opacity: 1, x: 0, scale: 1 }}
								whileHover={{ y: -6, scale: 1.02 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								viewport={{ once: true, amount: 0.3 }}>
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
