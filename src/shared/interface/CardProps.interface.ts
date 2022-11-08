export interface CardProps {
  children?: React.ReactNode;
  imgObj: { src: string; alt: string };
  services: {
    name: string;
    included: boolean;
  }[];
  price: string;
  planName: string;
}
