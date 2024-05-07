import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&min=190");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name} <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> 
              <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> 
              <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> 
              <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> 
              <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> </span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;