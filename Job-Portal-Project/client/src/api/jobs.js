import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

const getAllJobs = async () => {
  const response = await axios.get(`${BASE_URL}/jobs`);
  return response.data; //this is array of jobs
};

export default getAllJobs
