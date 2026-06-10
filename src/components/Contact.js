import { motion } from "framer-motion";
import React from "react";
import "../styles/Contact.css";

const Contact = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	};

	const verticalLeft = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
		},
	};

	return (
		<div className='contact' id='contact'>
			<div className='container'>
				<motion.div
					className='heading'
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}>
					<p className='heading-sub-text'>Hire Me</p>
					<p className='heading-text'>Get in Touch</p>
				</motion.div>
				<div className='contact-box'>
					<motion.div
						className='left-box'
						initial={{ opacity: 0, y: "-50px" }}
						whileInView={verticalLeft}>
						<div className='contact-heading'>
							<p>
								Looking for a seasoned Senior Full Stack Developer to lead your next big project? I specialize in building high-performance web experiences. Reach out for collaborations, consulting, or just to say hello.
							</p>
						</div>
						<div className='contact-hello'>
							<a
								className='hello-links'
								href='//wa.me/+819094373585'
								target='_blank'
								rel='noopener noreferrer'>
								+81 70-9437-3585 (WhatsApp)
							</a>
							<a
								className='hello-links'
								href='//t.me/@swilson7565'
								target='_blank'
								rel='noopener noreferrer'>
								@swilson7565 (Telegram)
							</a>
							<a
								className='hello-links'
								href='mailto:satoharuto961@gmail.com'
								target='_blank'
								rel='noopener noreferrer'>
								satoharuto961@gmail.com
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
