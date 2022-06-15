import { request, gql } from "graphql-request";

describe("POST: graphql", () => {
  it("should return data from graphql endpoint", async () => {
    const url =
      "https://5m1eti5xcd.execute-api.us-east-1.amazonaws.com/dev/graphql";

    const query = gql`
      query getPrints($page: Int!) {
        getPrints(page: $page) {
          info {
            page
            totalrecords
            pages
          }
          records {
            id
            rank
            description
            title
            images {
              description
              baseimageurl
            }
          }
        }
      }
    `;

    const variables = {
      page: 1,
    };

    const response = await request(url, query, variables);

    expect(response).toEqual({
      getPrints: {
        info: {
          page: 1,
          totalrecords: 632,
          pages: 64,
        },
        records: [
          {
            id: 248659,
            rank: 251492,
            description: null,
            title: "Charles Erskine",
            images: [
              {
                description: null,
                baseimageurl:
                  "https://nrs.harvard.edu/urn-3:HUAM:INV034167_dynmc",
              },
            ],
          },
          {
            id: 213068,
            rank: 250920,
            description: null,
            title: "The Bible in Pictures",
            images: [
              {
                description: null,
                baseimageurl:
                  "https://nrs.harvard.edu/urn-3:HUAM:INV208057_dynmc",
              },
              {
                description: null,
                baseimageurl:
                  "https://nrs.harvard.edu/urn-3:HUAM:INV208056_dynmc",
              },
            ],
          },
          {
            id: 4859,
            rank: 235716,
            description: null,
            title: "A Paraleytic Woman",
            images: [
              {
                description: null,
                baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:764241",
              },
            ],
          },
          {
            id: 235740,
            rank: 235216,
            description: null,
            title: "Leaving the Bath",
            images: [
              {
                description:
                  "A network of finely drawn and scratched lines depicts a woman with her back to the viewer as she steps out of a washtub. With her right foot planted on the floor, she leans forward, holding the edge of the tub with both hands as she pulls her other leg out. We see her dark hair but her face is obscured by her shoulder. To the right, another figure stands, completely obscured by a towel she holds ready, only her dark hair and maid’s bonnet being visible. Cushioned furniture and a counter with two large empty vases crowd the small room.",
                baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:76822_dynmc",
              },
            ],
          },
          {
            id: 253688,
            rank: 230652,
            description: null,
            title: "Compromise with the South",
            images: [
              {
                description: null,
                baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:770574",
              },
              {
                description: null,
                baseimageurl:
                  "https://nrs.harvard.edu/urn-3:HUAM:INV153467_dynmc",
              },
            ],
          },
          {
            id: 260688,
            rank: 227069,
            description: null,
            title: "Miss Anne Day, afterwards Lady Fehoulet",
            images: [
              {
                description: null,
                baseimageurl:
                  "https://nrs.harvard.edu/urn-3:HUAM:INV195978_dynmc",
              },
            ],
          },
          {
            id: 265666,
            rank: 221694,
            description: null,
            title: "Arab Horse",
            images: [
              {
                description: null,
                baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:764261",
              },
            ],
          },
          {
            id: 265628,
            rank: 221693,
            description: null,
            title: "Flemish Horses",
            images: [
              {
                description: null,
                baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:764256",
              },
            ],
          },
          {
            id: 265748,
            rank: 221687,
            description: null,
            title: "Caux Horse",
            images: [
              {
                description: null,
                baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:764263",
              },
            ],
          },
          {
            id: 264875,
            rank: 220902,
            description: null,
            title: "View of the Town of Cluny near the Levée bridge",
            images: [
              {
                description: null,
                baseimageurl:
                  "https://nrs.harvard.edu/urn-3:HUAM:INV038745_dynmc",
              },
            ],
          },
        ],
      },
    });
  });
});
