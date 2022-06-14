import { resolvers } from "../graphql/resolvers";

describe("Hello world", () => {
  it("should return successfully", async () => {
    expect(await resolvers.Query.getPrints()).toEqual("hello world");
  });
});
