import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './App.css';

function App() {

 const [rating, setRating] = useState(null);
//  hover useState used to track the hover state of the stars
    const[hover, setHover]=useState(null);

  return (
    <div>
      {/* to render an array of 5 stars using the map function  */}
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label htmlFor='' key={index}>
            <input
              type='radio'
              name='rating'
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className='star'
              size={50}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setRating(currentRating)}
              onMouseLeave={() => setRating(null)}
            />
          </label>
        );
      })}
      <p>
        {rating !== null && (
          <>
            {rating === 1 && "Very Poor"}
            {rating === 2 && "Poor"}
            {rating === 3 && "Average"}
            {rating === 4 && "Good"}
            {rating === 5 && " Excellent"}
          </>
        )}
      </p>
    </div>
  );}
export default App
