import { resolvers } from "../graphql/resolvers";
import mockData from "./data";
import axios from "axios";
import { config } from "../config";

jest.mock("axios");

describe("Hello world", () => {
  it("should return mocked data", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await resolvers.Query.getPrints();

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.harvardartmuseums.org/object",
      {
        params: {
          apikey: config.apiKey,
        },
        responseType: "json",
      }
    );
    expect(result).toEqual(mockData);
  });
});
