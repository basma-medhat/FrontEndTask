import './Card.scss';

const Card = ({
  picURL,
  title,
  subTitle1,
  subTitleValue1,
  subTitle2,
  subTitleValue2,
  subTitle3,
  subTitleValue3,
  handleCardClick,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="card" onClick={handleCardClick} onKeyDown={handleCardClick}>
      <img alt="" src={picURL} className="card-img" />
      <div className="card-info-section">
        <h3>{title}</h3>
        <span>{`${subTitle1}: ${subTitleValue1}`}</span>
        <span>{`${subTitle2}: ${subTitleValue2}`}</span>
        <span>{`${subTitle3}: ${subTitleValue3}`}</span>
      </div>
    </div>
  );
};

export default Card;
