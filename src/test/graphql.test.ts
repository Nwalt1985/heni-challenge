import { getData } from "../helpers";
import mockData from "./data";
import axios from "axios";
import { config } from "../config";

jest.mock("axios");

describe("getData", () => {
  it("should throw error if GET call fails", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(
      new Error("something went wrong")
    );

    try {
      await getData(1);
    } catch ({ message }) {
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.harvardartmuseums.org/object",
        {
          params: {
            apikey: config.apiKey,
            page: 1,
            classification: "Prints",
            sort: "rank",
            sortorder: "desc",
            hasImage: 1,
            q: "accesslevel:1 AND verificationlevel:4",
          },
          responseType: "json",
        }
      );
      expect(message).toEqual("something went wrong");
    }
  });

  it("should return mocked data", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await getData(1);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.harvardartmuseums.org/object",
      {
        params: {
          apikey: config.apiKey,
          page: 1,
          classification: "Prints",
          sort: "rank",
          sortorder: "desc",
          hasImage: 1,
          q: "accesslevel:1 AND verificationlevel:4",
        },
        responseType: "json",
      }
    );
    expect(result).toEqual(mockData);
  });
});
