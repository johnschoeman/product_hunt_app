export const search = (query) => (
  $.ajax({
    method: "GET",
    url: `api/omnisearch`,
    data: { query }
  })
);