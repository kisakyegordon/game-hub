import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6a78aee0c38f4ebbbe7d4358a5487fec",
  },
});
