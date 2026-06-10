import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";
import { DiJavascript1, DiCss3 } from "react-icons/di";
import { FaReact, FaPython, FaShoppingCart, FaListAlt, FaDatabase, FaMobileAlt, FaTools, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMui, SiRedux, SiExpress, SiNestjs, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiFlutter, SiAndroid, SiApple, SiShopify, SiWoocommerce } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiServer } from "react-icons/fi";

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-sub-text'>What I work with</p>
						<p className='heading-text'>My Skills</p>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className='skills-box'
						initial={{ y: "-80px", opacity: 0 }}>
						{SkillsData.map((group, idx) => {
							const slug = group.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
							return (
								<div className={`skill-category ${slug}`} key={idx}>
									<h3 className='category-title'>{group.category}</h3>
								<div className='category-list'>
									{group.skills.map((s, i) => {
										const iconMap = {
											"react.js": <FaReact />,
											"react native": <TbBrandReactNative />,
											"next.js": <SiNextdotjs />,
											"typescript": <SiTypescript />,
											"javascript (es6+)": <DiJavascript1 />,
											"html5": <DiCss3 />,
											"css3": <DiCss3 />,
											"tailwind css": <SiTailwindcss />,
											"material ui": <SiMui />,
											"redux": <SiRedux />,
											"zustand": <FaTools />,
											"node.js": <FaNodeJs />,
											"express.js": <SiExpress />,
											"nestjs": <SiNestjs />,
											"python": <FaPython />,
											"django": <SiDjango />,
											"rest apis": <FiServer />,
											"flutter": <SiFlutter />,
											"android development": <SiAndroid />,
											"ios development": <SiApple />,
											"mobile ui/ux": <FaMobileAlt />,
											"custom e-commerce platforms": <FaShoppingCart />,
											"shopify integration": <SiShopify />,
											"woocommerce integration": <SiWoocommerce />,
											"shopping cart development": <FaShoppingCart />,
											"product catalog management": <FaListAlt />,
											"postgresql": <SiPostgresql />,
											"mysql": <SiMysql />,
											"mongodb": <SiMongodb />,
											"redis": <SiRedis />,
											"database design & optimization": <FaDatabase />,
										};

										const Icon = iconMap[s.toLowerCase()] || <FaTools />;

										return (
											<div className='skill-chip' key={`${idx}-${s}`}>
												<span className='chip-icon'>{Icon}</span>
												<span className='chip-text'>{s}</span>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;
