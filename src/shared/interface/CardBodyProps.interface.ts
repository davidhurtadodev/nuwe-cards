export interface CardBodyProps {
  planName: string;

  services: {
    name: string;
    included: boolean;
  }[];
}
