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
        <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
        <div>
          <span style={{ fontWeight: 'bold' }}>{`${subTitle1}: `}</span>
          <span>{`${subTitleValue1}`}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>{`${subTitle2}: `}</span>
          <span>{`${subTitleValue2}`}</span>
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>{`${subTitle3}: `}</span>
          <span>{`${subTitleValue3}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
