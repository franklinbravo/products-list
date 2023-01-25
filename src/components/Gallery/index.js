import { Carousel, Modal } from 'antd';
import React from 'react';

const Gallery = ({ title, open, onClose, images = [] }) => {
	return (
		<Modal title={title} open={open} onCancel={onClose} footer={[]} centered>
			<Carousel autoplay arrows swipeToSlide slidesToShow={1} slidesToScroll={1}>
				{images.map((src, i) => (
					<img src={src} alt={src} key={i} />
				))}
			</Carousel>
		</Modal>
	);
};

export default Gallery;
