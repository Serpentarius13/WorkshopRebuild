const counterFunction = (ref, rating) => {
  if (!ref.current) return;
  rating = +rating;
  if (rating === 0) {
    ref.current.textContent = 0;
    return;
  }
  const duration = rating > 10 ? 2500 : 1000;
  let start = 0;

  const intervalDuration = duration / rating;

  const counter = setInterval(() => {

    rating < 0 ? start-- : start++;
    ref.current.textContent = start;
    if (start === rating) clearInterval(counter);
  }, intervalDuration);
};

export default counterFunction;
