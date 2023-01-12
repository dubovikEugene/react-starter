import React, { FC } from "react";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";

interface IPagination {
  totalPages: number;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin: 2rem 0;
`;

const PaginationComponent: FC<IPagination> = ({
  totalPages,
  currentPage,
  changeCurrentPage,
}) => {
  const pageItems = [];
  const currentPageIsFirst = currentPage === 1;
  const isLastCurrentPage = currentPage === totalPages;

  pageItems.push(
    <Pagination.Prev
      key={"prev"}
      onClick={() => changeCurrentPage(currentPage - 1)}
      disabled={currentPageIsFirst}
    />
  );
  let isOutOfRange;

  for (let page = 1; page <= totalPages; page++) {
    const isFirstPage = page === 1;
    const isLastPage = page === totalPages;
    const isPageBeetwenTwoPages = Math.abs(page - currentPage) <= 2;

    if (isFirstPage || isLastPage || isPageBeetwenTwoPages) {
      isOutOfRange = true;
      pageItems.push(
        <Pagination.Item
          key={page}
          active={page == currentPage}
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    if (isOutOfRange && !isLastPage && !isFirstPage && !isPageBeetwenTwoPages) {
      isOutOfRange = false;
      pageItems.push(<Pagination.Ellipsis key={page} disabled />);
    }
  }

  pageItems.push(
    <Pagination.Next
      key={"next"}
      onClick={() => changeCurrentPage(currentPage + 1)}
      disabled={isLastCurrentPage}
    />
  );

  return (
    <StyledContainer>
      <Pagination>{pageItems}</Pagination>
    </StyledContainer>
  );
};

export default PaginationComponent;
