import React from "react";
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function Food({ name, picture, rating }) {
  // {fav}는 props.fav 와 같다 = es6 문법.비구조화 할당
  return (
    <>
      <h1>{name}</h1>
      <h4>{rating}/5.0</h4>
      <img alt="name" src={picture} />
    </>
  );
}

function App() {
  return (
    <div>
      <div>
        {foodILike.map((item) => (
          <Food
            key={item.id}
            name={item.name}
            picture={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
