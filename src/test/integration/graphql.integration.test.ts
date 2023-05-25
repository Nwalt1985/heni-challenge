import { request, gql } from "graphql-request";

describe("POST: graphql", () => {
  it("should return data from graphql endpoint", async () => {
    const url =
      "https://424gzb5ria.execute-api.us-east-1.amazonaws.com/dev/graphql";

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
        "getPrints": {
          "info": {
            "page": 1,
            "totalrecords": 638,
            "pages": 64
          },
          "records": [
            {
              "id": 248659,
              "rank": 254791,
              "description": null,
              "title": "Charles Erskine",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV034167_dynmc"
                }
              ]
            },
            {
              "id": 213068,
              "rank": 254219,
              "description": null,
              "title": "The Bible in Pictures",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV208057_dynmc"
                },
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV208056_dynmc"
                }
              ]
            },
            {
              "id": 4859,
              "rank": 238998,
              "description": null,
              "title": "A Paraleytic Woman",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:764241"
                }
              ]
            },
            {
              "id": 235740,
              "rank": 238495,
              "description": null,
              "title": "Leaving the Bath",
              "images": [
                {
                  "description": "A network of finely drawn and scratched lines depicts a woman with her back to the viewer as she steps out of a washtub. With her right foot planted on the floor, she leans forward, holding the edge of the tub with both hands as she pulls her other leg out. We see her dark hair but her face is obscured by her shoulder. To the right, another figure stands, completely obscured by a towel she holds ready, only her dark hair and maid’s bonnet being visible. Cushioned furniture and a counter with two large empty vases crowd the small room.",
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:76822_dynmc"
                }
              ]
            },
            {
              "id": 253688,
              "rank": 233906,
              "description": null,
              "title": "Compromise with the South",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:770574"
                },
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV153467_dynmc"
                }
              ]
            },
            {
              "id": 260688,
              "rank": 230306,
              "description": null,
              "title": "Miss Anne Day, afterwards Lady Fehoulet",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV195978_dynmc"
                }
              ]
            },
            {
              "id": 190323,
              "rank": 230151,
              "description": null,
              "title": "Taking Advantage of the Right Moment, convincing the Chinese to accept being Paid Two Hundred Millions in Opium",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:783073"
                },
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV175425_dynmc"
                }
              ]
            },
            {
              "id": 190637,
              "rank": 230144,
              "description": null,
              "title": "Review of the Opium Smokers (A History of Trade Promotion)",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:783076"
                },
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:783077"
                },
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV175434_dynmc"
                }
              ]
            },
            {
              "id": 265666,
              "rank": 224929,
              "description": null,
              "title": "Arab Horse",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:764261"
                }
              ]
            },
            {
              "id": 265628,
              "rank": 224928,
              "description": null,
              "title": "Flemish Horses",
              "images": [
                {
                  "description": null,
                  "baseimageurl": "https://nrs.harvard.edu/urn-3:HUAM:764256"
                }
              ]
            }
          ]
        }
      });
  });
});
