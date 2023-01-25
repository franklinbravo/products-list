import { useState } from 'react';
import { Pagination, Slider } from 'antd';
import './App.css';
import CardProducts from './components/CardProducts';
import MainLayout from './components/Layout';
import useFetch from './hooks/useFetch';

function App() {
	const [columns, setColumns] = useState(4);
	const {
		data = [],
		changePageLimit,
		total,
	} = useFetch('https://dummyjson.com/products');

	const onShowSizeChange = (page, pageSize) => {
		changePageLimit(page, pageSize);
	};
	return (
		<MainLayout header="Products List">
			<div className="cardsByRowsContainer">
				<div className="cardsByRows">
					Cards by rows:
					<Slider min={1} max={5} defaultValue={4} onChange={setColumns} />
				</div>
			</div>
			<div
				className="listContent"
				style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
			>
				{data.map(({ id, title, description, images, thumbnail }) => (
					<CardProducts
						key={id}
						title={title}
						description={description}
						images={images}
						thumbnail={thumbnail}
					/>
				))}
			</div>
			<div className="paginationContainer">
				<Pagination
					showSizeChanger
					onChange={changePageLimit}
					onShowSizeChange={onShowSizeChange}
					defaultCurrent={1}
					total={total}
				/>
			</div>
		</MainLayout>
	);
}

export default App;
