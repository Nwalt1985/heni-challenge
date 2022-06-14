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
  copyright: string;
  contextualtextcount: number;
  creditline: string;
  accesslevel: number;
  dateoflastpageview: string;
  classificationid: number;
  division: string;
  markscount: number;
  publicationcount: number;
  totaluniquepageviews: number;
  contact: string;
  colorcount: number;
  rank: number;
  state: string;
  id: number;
  verificationleveldescription: string;
  period: string;
  images: Images[];
  worktypes: WorkTypes[];
  imagecount: number;
  totalpageviews: number;
  accessionyear: string;
  standardreferencenumber: string;
  signed: string;
  classification: string;
  relatedcount: number;
  verificationlevel: number;
  primaryimageurl: string;
  titlescount: number;
  peoplecount: number;
  style: string;
  lastupdate: string;
  commentary: string;
  periodid: string;
  technique: string;
  edition: string;
  description: string;
  medium: string;
  lendingpermissionlevel: number;
  title: string;
  accessionmethod: string;
  colors: Colors[];
  people: People[];
  provenance: string;
  groupcount: number;
  dated: number;
  department: string;
  dateend: number;
  url: string;
  dateoffirstpageview: string;
  century: string;
  objectnumber: string;
  labeltext: string;
  datebegin: number;
  culture: string;
  exhibitioncount: number;
  imagepermissionlevel: number;
  mediacount: number;
  objectid: number;
  techniqueid: number;
  dimensions: string;
  seeAlso: SeeAlso[];
}

interface People {
  role: string;
  birthplace: string;
  gender: string;
  displaydate: string;
  prefix: string;
  culture: string;
  displayname: string;
  alphasort: string;
  name: string;
  personid: number;
  deathplace: string;
  displayorder: number;
}

interface Images {
  date: string;
  copyright: string;
  imageid: number;
  idsid: number;
  format: string;
  description: string;
  technique: string;
  renditionnumber: string;
  displayorder: number;
  baseimageurl: string;
  alttext: string;
  width: number;
  publiccaption: string;
  iiifbaseuri: string;
  height: number;
}

interface WorkTypes {
  worktypeid: string;
  worktype: string;
}

interface Colors {
  color: string;
  spectrum: string;
  hue: string;
  percent: number;
  css3: string;
}

interface SeeAlso {
  id: string;
  type: string;
  format: string;
  profile: string;
}
