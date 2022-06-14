import { PrintsResponse } from "../types/response.types";
import axios from "axios";
import { config } from "../config";
import { SearchParams } from "../types/request.types";

export async function getData(page?: number) {
  try {
    const params = {
      apikey: config.apiKey,
      page: page || 1,
      classification: "Prints",
      sort: "rank",
      sortorder: "desc",
      hasImage: 1,
      q: "accesslevel:1 AND verificationlevel:4",
    } as SearchParams;

    const { data } = await axios.get<PrintsResponse>(
      "https://api.harvardartmuseums.org/object",
      {
        params,
        responseType: "json",
      }
    );

    return data;
  } catch ({ message }) {
    throw new Error(message as string);
  }
}
