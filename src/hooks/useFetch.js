import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [pagination, setPagination] = useState({ limit: 10, skip: 0 });
	const [totalDocs, setTotalDocs] = useState(0);
	const changePageLimit = (page, limit) => {
		setPagination((prev) => ({ ...prev, skip: (page - 1) * limit, limit }));
	};

	useEffect(() => {
		axios
			.get(`${url}?skip=${pagination.skip}&limit=${pagination.limit}`)
			.then((response) => {
				const { products, total } = response.data;

				setData(products);
				setTotalDocs(total);
			});
	}, [url, pagination]);

	return { data, changePageLimit, pagination, total: totalDocs };
};

export default useFetch;
