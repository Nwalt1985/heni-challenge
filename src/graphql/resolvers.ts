import { getData } from "../helpers";

export const resolvers = {
  Query: {
    getPrints: async (
      parent: any,
      args: { page: number },
      context: any,
      info: any
    ) => {
      let { page } = args;
      if (page === 0) page = 1;
      const responseData = await getData(page);

      return responseData;
    },
  },
};
