import { useState, useCallback, useMemo } from 'react';

const useCarousel = (initialPage: number, maxPage: number, itemWidth: number) => {
  const [page, setPage] = useState(initialPage);

  const onNextClick = useCallback(() => {
    const value = page === maxPage ? 1 : page + 1;
    setPage(value);
  }, [maxPage, page]);

  const onPrevClick = useCallback(() => {
    const value = page === 1 ? maxPage : page - 1;
    setPage(value);
  }, [maxPage, page]);

  const transform = useMemo(() => {
    return `translate3d(-${itemWidth * (page - 1)}px, 0px, 0px)`;
  }, [page]);

  const sliderWidth = useMemo(() => {
    return itemWidth * maxPage;
  }, [maxPage]);

  const onClickIndicator = useCallback(
    (nextPage: number) => {
      setPage(nextPage);
    },
    [setPage]
  );

  return {
    prevButtonProps: {
      onClick: onPrevClick,
      disabled: page === 1,
    },
    nextButtonProps: {
      onClick: onNextClick,
      disabled: page === maxPage,
    },
    sliderStyle: { transform, width: sliderWidth },
    onClickIndicator,
    page,
  };
};

export default useCarousel;
