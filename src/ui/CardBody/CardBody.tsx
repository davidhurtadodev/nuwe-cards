interface CardBodyProps {
  services: {
    name: string;
    included: boolean;
  }[];
}

export const CardBody = ({ services }: CardBodyProps) => {
  return (
    <div className="card-body">
      <ul className="card-body__list">
        {services.map((service) => {
          return <li className="card-body__li">{service.name}</li>;
        })}
      </ul>
    </div>
  );
};
