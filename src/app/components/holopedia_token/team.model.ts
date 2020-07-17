export class Team {
  members: Member[];  
}

export class Member {
  title: string;
  name: string;
  imageFile: Image;
  linkedInUrl: string;
}

export class Image {
  url: string;
  caption: string;
}