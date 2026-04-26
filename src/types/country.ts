export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    official: string;
    common: string;
    nativeName: Record<
      string,
      {
        common: string;
        official: string;
      }
    >;
  };
  languages: Record<string, string>;
  population: number;
  region: string;
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  tld?: string[];
  subregion: string;
  capital?: string[];
  borders?: string[];
}
