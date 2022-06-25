import React from "react";
import { useGlobalContext } from "../context";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination() {
  const { pageNumber, setPageNumber } = useGlobalContext();

  return (
    <ReactPaginate
      className="pagination-container"
      nextClassName="btn"
      previousClassName="btn"
      pageLinkClassName="page-item"
      activeLinkClassName="active-item"
      onPageChange={(data) => {setPageNumber(data.selected + 1)}}
      forcePage={pageNumber - 1}
      pageCount={42}
    />
  );
}

export default Pagination;
