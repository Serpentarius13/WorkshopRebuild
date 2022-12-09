export const calcDate = (date) => {
  const cur = Date.now();

  const diff = cur - +date;

  console.log(date, cur, "COMPARE");

  console.log(diff);

  let delta = Math.abs(diff) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const seconds = delta % 60;
  return { hours, days, minutes };
};
