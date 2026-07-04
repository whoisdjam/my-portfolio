import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const WorkShowcaseItem = ({ work, index, reversed }) => {
	return (
		<motion.article
			className={`work-row${reversed ? " reversed" : ""}`}
			initial={{ opacity: 0, y: 48 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.05 }}>
			<a
				className="work-visual"
				href={work.url}
				target="_blank"
				rel="noreferrer"
				aria-label={`View ${work.title}`}>
				<span className="work-index">{String(index + 1).padStart(2, "0")}</span>
				<img src={work.image} alt={work.title} className="work-image" />
				<span className="work-visual-overlay" aria-hidden="true" />
			</a>

			<div className="work-content">
				<div className="work-content-top">
					<span className="work-category">{work.category}</span>
					<h3 className="work-title">{work.title}</h3>
					<p className="work-description">{work.description}</p>
				</div>

				<div className="work-content-bottom">
					<ul className="work-tags">
						{work.tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>

					<a
						className="work-cta"
						href={work.url}
						target="_blank"
						rel="noreferrer">
						<span>{work.status}</span>
						<HiOutlineArrowUpRight aria-hidden="true" />
					</a>
				</div>
			</div>
		</motion.article>
	);
};

export default WorkShowcaseItem;
