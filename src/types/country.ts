export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    official: string;
    common: string;
  };
  population: number;
  region: string;
  capital?: string[];
}
