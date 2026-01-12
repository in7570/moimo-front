import type {
  FinishedFilterType,
  InterestFilterType,
  SortType,
} from "@/api/meeting.api";
import { useState } from "react";

export const useMeetingFilter = () => {
  const [sort, setSort] = useState<SortType>("NEW");
  const [interestFilter, setInterestFilter] =
    useState<InterestFilterType>("ALL");
  const [finishedFilter, setFinishedFilter] =
    useState<FinishedFilterType>(false);

  const handleSortChange = (newSort: SortType) => {
    setSort(newSort);
  };

  const handleInterestFilterChange = (
    newInterestFilter: InterestFilterType
  ) => {
    setInterestFilter(newInterestFilter);
  };

  const handleFinishedFilterChange = (
    newFinishedFilter: FinishedFilterType
  ) => {
    setFinishedFilter(newFinishedFilter);
  };

  return {
    filters: { sort, interestFilter, finishedFilter },
    handleSortChange,
    handleInterestFilterChange,
    handleFinishedFilterChange,
  };
};
