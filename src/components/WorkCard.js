import React from "react";
import { FiDownload, FiFolder, FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ w, tabId }) => {
	const openExternal = (url) => {
		if (!url) return;
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const handleKey = (e, url) => {
		if (e.key === "Enter" || e.key === " ") openExternal(url);
	};

	return (
		<div>
			{tabId === "react-native" ? (
				<div
					className='work-link-group'
					role='button'
					tabIndex={0}
					onClick={() => openExternal(w.app)}
					onKeyDown={(e) => handleKey(e, w.app)}>
					<div className='works-card'>
						<div className='works-container'>
							<div className='top-work'>
								<FiFolder className='work-folder' />
								<div className='right'>
									{w.gitlink && (
										<a
											className='work-git'
											href={w.gitlink}
											target='_blank'
											rel='noopener noreferrer'>
											<FiGithub />
										</a>
									)}

									<a
										href={w.app}
										download={w.title}
										target='_blank'
										rel='noopener noreferrer'
										className='work-link'>
										<FiDownload />
									</a>
								</div>
							</div>
							<div className='mid-work'>
								<p className='work-title'>{w.title}</p>
								<p className='work-desc'>{w.desc}</p>
							</div>
							<div className='bottom-work'>
								{w.tech.map((e, index) => {
									return <small key={index}>{e}</small>;
								})}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					className='work-link-group'
					role='button'
					tabIndex={0}
					onClick={() => openExternal(w.site)}
					onKeyDown={(e) => handleKey(e, w.site)}>
					<div className='works-card'>
						<div className='works-container'>
							<div className='top-work'>
								<FiFolder className='work-folder' />
								<div className='right'>
									{w.gitlink && (
										<a
											className='work-git'
											href={w.gitlink}
											target='_blank'
											rel='noopener noreferrer'>
											<FiGithub />
										</a>
									)}
									<a
										className='work-link'
										href={w.site}
										target='_blank'
										rel='noopener noreferrer'
										onClick={(e) => e.stopPropagation()}>
										<IoOpenOutline />
									</a>
								</div>
							</div>
							<div className='mid-work'>
								<p className='work-title'>{w.title}</p>
								<p className='work-desc'>{w.desc}</p>
							</div>
							<div className='bottom-work'>
								{w.tech.map((e, index) => {
									return <small key={index}>{e}</small>;
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default WorkCard;
