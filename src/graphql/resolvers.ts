import axios from "axios";
import { config } from "../config";
import { PrintsResponse } from "../types/response.types";

export const resolvers = {
  Query: {
    getPrints: async () => {
      const { data } = await axios.get<PrintsResponse>(
        "https://api.harvardartmuseums.org/object",
        {
          params: {
            apikey: config.apiKey,
          },
          responseType: "json",
        }
      );

      return data;
    },
  },
};
