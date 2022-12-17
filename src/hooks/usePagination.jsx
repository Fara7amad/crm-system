import { useEffect, useState } from "react";

function usePagination(data, itemsPerPage) {
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(data.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(data.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, data]);

	const handlePageClick = (e) => {
		const newOffset = (e.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
	};

	return {
		handlePageClick,
		currentItems,
		pageCount,
		offset: itemOffset,
		classes: {
			renderOnZeroPageCount: null,
			pageClassName: "page-item",
			pageLinkClassName: "page-link",
			previousClassName: "page-item",
			previousLinkClassName: "page-link",
			nextClassName: "page-item",
			nextLinkClassName: "page-link",
			breakClassName: "page-item",
			breakLinkClassName: "page-link",
			containerClassName: "pagination justify-content-center mt-2",
			activeClassName: "active",
		},
	};
}

export default usePagination;
