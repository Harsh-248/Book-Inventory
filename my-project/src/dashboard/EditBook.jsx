import React ,{useState} from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useParams,useLoaderData, } from 'react-router-dom'
const EditBook = () => {
  const{id} = useParams();
  const {bookTitle,authorName,imageURL, category,bookDescription, bookPDFURL} = useLoaderData();
  const bookCategories =[ "Fiction", "Non-Fiction","Mistery", "Programming","Science Fiction","Fantasy","History","Bibliography","Horror","Autobiography","Self-help","Memoir","Buisness","Children Books",
  "Travel","Religion","Art and Design"]
  
  const[selectedBookCategory,setSelecctedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectValue = (event) =>{
    console.log(event.target.value);
    setSelecctedBookCategory(event.target.value);
  }
  
  //handle book submission
  const handleUpdate = (event) =>{
    event.preventDefault();
    const form = event.target;
  
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const updatebookObj ={
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    }
  
     //console.log(bookObj);
     //update book data
     fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatebookObj)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      alert("Book is Updated Successfully!!!");
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert("Failed to update the book. Please try again later.");
    });
    
  
  
  }
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>
        <form  onSubmit= {handleUpdate} className="flex lg:w-[1180px] flex-col flex-warp gap -4">
          {/* Firstrow */}
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" type="text" 
          name = 'bookTitle'
          placeholder="Book name" required 
          defaultValue={bookTitle}/>
        </div>
  
        {/* author name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" type="text" 
          name = 'authorName'
          placeholder="Author Name" required 
           defaultValue={authorName}/>
        </div>
       </div>
       {/* 2nd row */}
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" type="text" 
          name = 'imageURL'
          placeholder="Book image URL" required 
          defaultValue={imageURL}/>
        </div>
  
        {/* category*/}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
  
          <Select id='inputState' name='categoryName' className='w-full rounded' value ={selectedBookCategory} onChange={handleChangeSelectValue}>
            {
              bookCategories.map((option) => <option key ={option}>{option}</option>)
            }
  
          </Select>
        
        </div>
       </div>
  
       {/* bookDescription*/}
       <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Write your Book Description..." required 
          defaultValue={bookDescription}
          className='w-full' rows={6} />
  
          {/* book pdf link*/}
          
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" type="text" 
          name = 'bookPDFURL'
          placeholder="Book PDF URL" required 
          defaultValue={bookPDFURL}/>
  
          <Button type='submit' className='mt-5'>
            Update Book
            
          </Button>
        
  
       </form>
      </div>
    );
}

export default EditBook