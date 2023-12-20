import CryptoJS from "crypto-js";

const useCurrentRole = () => {
  const hashedUserRole = localStorage.getItem("userRole");
  const userRole = CryptoJS.AES.decrypt(hashedUserRole, "secretKey").toString(CryptoJS.enc.Utf8);
  let currentRole;
  switch (userRole) {
    case "1":
      currentRole = "user";
      break;
    case "2":
      currentRole = "operationTeam";
      break;
    case "3":
      currentRole = "technicalSupport";
      break;
    case "4":
      currentRole = "admin";
      break;

    default:
      break;
  }
  return currentRole;
};

export default useCurrentRole;
