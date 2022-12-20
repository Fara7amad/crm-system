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

	const numberOfItemsInEachPage = () => {
		return `Showing ${itemOffset + 1} to ${itemOffset + currentItems.length} of ${
			data.length
		} entries`;
	};

	return {
		handlePageClick,
		currentItems,
		pageCount,
		numberOfItemsInEachPage,
		offset: itemOffset,
		classes: {
			renderOnZeroPageCount: null,
			containerClassName: "pagination",
			pageClassName: "page-item",
			pageLinkClassName: "num-of-page",
			previousClassName: "page-item",
			previousLinkClassName: "num-of-page",
			nextClassName: "page-item",
			nextLinkClassName: "num-of-page",
			breakClassName: "page-item",
			breakLinkClassName: "page-link",
			containerClassName: "pagination justify-content-center mt-2",
			activeLinkClassName: "active"
		},
	};
}

export default usePagination;
