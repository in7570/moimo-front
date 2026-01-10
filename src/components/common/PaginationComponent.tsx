import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

const PaginationComponent = ({
  totalPages,
  page,
  setPage,
  goToNextPage,
  goToPreviousPage,
}: PaginationComponentProps) => {
  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderPageLinks = () => {
    const pageNumbers = [];

    // 5페이지 이하인 경우: 링크 전부 보여줌
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === page}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      return pageNumbers;
    }

    // 5페이지 초과인 경우: 1, 2, 3, ... n-1, n
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === page}
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    pageNumbers.push(
      <PaginationItem key="ellipsis">
        <PaginationEllipsis />
      </PaginationItem>
    );

    for (let i = totalPages - 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === page}
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToPreviousPage();
            }}
            aria-disabled={page === 1}
            className={
              page === 1 ? "pointer-events-none text-muted-foreground" : ""
            }
          />
        </PaginationItem>

        {renderPageLinks()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToNextPage();
            }}
            aria-disabled={page === totalPages}
            className={
              page === totalPages
                ? "pointer-events-none text-muted-foreground"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
