import { gql } from "apollo-server-lambda";

export default gql`
  type Query {
    getPrints: Prints
  }

  type Prints {
    info: Info
    records: [Records]
  }

  type Info {
    totalrecordsperquery: Int
    totalrecords: Int
    pages: Int
    page: Int
  }

  type Records {
    accessionyear: String
    technique: String
    mediacount: Int
    edition: String
    totalpageviews: Int
    groupcount: Int
    people: [People]
    objectnumber: String
    colorcount: Int
    lastupdate: String
    rank: Int
    imagecount: Int
    description: String
    dateoflastpageview: String
    dateoffirstpageview: String
    primaryimageurl: String
  }

  type People {
    birthplace: String
    name: String
    prefix: String
    personid: Int
    role: String
    displayorder: Int
    culture: String
    displaydate: String
    deathplace: String
    displayname: String
  }
`;
