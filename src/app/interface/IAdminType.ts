
export interface IAddNews {
  addContent: {
    mainInfo: string, 
    text: string, 
    photo: File,
    videoUrl: string
  }
};

export interface IAddProjects {
  data: {
    mainInfo: string, 
    text: string, 
    photo: File | null,
    videoUrl: string,
    education: string
  }
};

export interface IAddPhoto {
  data: {
    mainInfo: string, 
    photo: File | string,
  } | undefined
};

export interface IAddInfo {
  message: string , 
  phoneNumber: string, 
  username: string, 
  email: string
};