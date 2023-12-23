export const useApiConfig = () => {
  let token = localStorage.getItem("token");
  return {
    headers: {
      authorization: "Bearer " + token,
    },
  };
};
