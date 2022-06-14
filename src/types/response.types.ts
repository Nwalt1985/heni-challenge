export type PrintsResponse = {
  info: Info;
  records: Records[];
};

interface Info {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
}

interface Records {
  accessionyear: string;
  technique: string;
  mediacount: number;
  edition: string;
  totalpageviews: number;
  groupcount: number;
  people: People[];
  objectnumber: string;
  colorcount: number;
  lastupdate: string;
  rank: number;
  imagecount: number;
  description: string;
  dateoflastpageview: string;
  dateoffirstpageview: string;
  primaryimageurl: string;
}

interface People {
  birthplace: string;
  name: string;
  prefix: string;
  personid: number;
  role: string;
  displayorder: number;
  culture: string;
  displaydate: string;
  deathplace: string;
  displayname: string;
}
