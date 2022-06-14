import { gql } from "apollo-server-lambda";

export default gql`
  type Query {
    getPrints(page: Int!): Prints
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
    copyright: String
    contextualtextcount: Int
    creditline: String
    accesslevel: Int
    dateoflastpageview: String
    classificationid: Int
    division: String
    markscount: Int
    publicationcount: Int
    totaluniquepageviews: Int
    contact: String
    colorcount: Int
    rank: Int
    state: String
    id: Int
    verificationleveldescription: String
    period: String
    images: [Images]
    worktypes: [WorkTypes]
    imagecount: Int
    totalpageviews: Int
    accessionyear: String
    standardreferencenumber: String
    signed: String
    classification: String
    relatedcount: Int
    verificationlevel: Int
    primaryimageurl: String
    titlescount: Int
    peoplecount: Int
    style: String
    lastupdate: String
    commentary: String
    periodid: String
    technique: String
    edition: String
    description: String
    medium: String
    lendingpermissionlevel: Int
    title: String
    accessionmethod: String
    colors: [Colors]
    provenance: String
    groupcount: Int
    dated: Int
    department: String
    dateend: Int
    url: String
    dateoffirstpageview: String
    century: String
    objectnumber: String
    labeltext: String
    datebegin: Int
    culture: String
    exhibitioncount: Int
    imagepermissionlevel: Int
    mediacount: Int
    objectid: Int
    techniqueid: Int
    dimensions: String
    seeAlso: [SeeAlso]
  }

  type People {
    role: String
    birthplace: String
    gender: String
    displaydate: String
    prefix: String
    culture: String
    displayname: String
    alphasort: String
    name: String
    personid: Int
    deathplace: String
    displayorder: Int
  }

  type Images {
    date: String
    copyright: String
    imageid: Int
    idsid: Int
    format: String
    description: String
    technique: String
    renditionnumber: String
    displayorder: Int
    baseimageurl: String
    alttext: String
    width: Int
    publiccaption: String
    iiifbaseuri: String
    height: Int
  }

  type WorkTypes {
    worktypeid: String
    worktype: String
  }

  type Colors {
    color: String
    spectrum: String
    hue: String
    percent: Int
    css3: String
  }

  type SeeAlso {
    id: String
    type: String
    format: String
    profile: String
  }
`;
