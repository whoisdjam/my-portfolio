import React from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { WorksData } from "../data/WorksData";
import WorkShowcaseItem from "./works/WorkShowcaseItem";

const Works = () => {
	return (
		<section className="works" id="works">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="heading">
					<p className="heading-sub-text">
						Built from my skills, experience, and real business results
					</p>
					<p className="heading-text">Works</p>
				</motion.div>

				<div className="works-showcase">
					{WorksData.map((work, index) => (
						<WorkShowcaseItem
							key={work.id}
							work={work}
							index={index}
							reversed={index % 2 !== 0}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Works;
