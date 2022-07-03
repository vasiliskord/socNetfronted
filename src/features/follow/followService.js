import axios from "axios";
const API_URL = "/api/users/";

//follow user
const follow = async (userData, token) => {
  const response = await axios.post(
    API_URL + userData.userId + "/follow",
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const followService = { follow };
export default followService;
