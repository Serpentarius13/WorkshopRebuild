export const countPages = (dreams) => {
  const pages = Math.ceil(dreams.length / pageSize);

  console.log(pages, "PAGES");

  return pages;
};

export const makeParams = (pages) => {
  const arr = [];

  for (let i = 1; i <= pages; i++) {
    arr.push({ page: String(i) });
  }

  return arr;
};

export const pageSize = 10;
