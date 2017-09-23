export const getUser = (userId) => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  })
);