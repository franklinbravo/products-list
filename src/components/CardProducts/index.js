import { Card } from 'antd';
import React, { useState } from 'react';
import Gallery from '../Gallery';
const { Meta } = Card;

const CardProducts = ({ title, description, thumbnail, images }) => {
	const [open, setOpen] = useState(false);
	const onOpenModal = () => {
		setOpen(true);
	};
	const onCloseModal = () => {
		setOpen(false);
	};
	return (
		<>
			<Card
				className="productCard"
				cover={
					<img
						alt="example"
						height={250}
						style={{ objectFit: 'contain' }}
						src={thumbnail}
					/>
				}
				onClick={onOpenModal}
			>
				<Meta title={title} description={description} />
			</Card>
			<Gallery title={title} open={open} images={images} onClose={onCloseModal} />
		</>
	);
};

export default CardProducts;
