interface CardHeaderProps {
  img?: any;
  altImg?: any;
  planName: string;
  price: string;
}

export const CardHeader = ({
  img,
  altImg,
  planName,
  price,
}: CardHeaderProps): JSX.Element => {
  return (
    <div className="card-header">
      <div className="card-header__img-container">
        <img src={img} alt={altImg} />
      </div>
      <div className="plan-wrapper">
        <span className="plan-wrapper__name">{planName}</span>
        <h2 className="plan-wrapper__price">{price}</h2>
        <span className="plan-wrapper__time">per month</span>
      </div>
    </div>
  );
};
