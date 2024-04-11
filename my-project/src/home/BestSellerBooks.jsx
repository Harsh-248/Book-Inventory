import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";
//import axios from "axios";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    return async()=>await fetch("http://localhost:5000/all-books")
  .then(res => res.json())
  .then(data => setBooks(data.slice(0,10)))
  // .catch(error => console.error("Error fetching books:", error));

  }, [])
    

  return (
    <div >
      
      <BookCards books={books} headline="Best seller Books " />
    </div>
  );
};

export default BestSellerBooks
