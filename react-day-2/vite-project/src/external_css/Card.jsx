import './Card.css';

function Card({ title, description, category }) {
  return (
    <div className="card">
      <span className="card-category">{category}</span>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">Learn More</button>
    </div>
  );
}

export default Card;