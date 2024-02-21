
export interface IAddNews {
  mainInfo: string, 
  text: string, 
  photo: File,
  videoUrl: string
};

export interface IAddProjects {
  mainInfo: string, 
  text: string, 
  photo: File | null,
  videoUrl: string,
  education: string
}