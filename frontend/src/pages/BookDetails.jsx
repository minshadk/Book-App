import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bookServices from "../services/bookServices";

import TextArea from "./../components/Inputs/TextArea";

const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(bookId);

  const [book, setBook] = useState();

  useEffect(() => {
    // const fetchBookDetails = async () => {
    //   const response = await bookServices.getBookById(bookId);
    //   console.log(response);
    //   setBook(response.data.book);
    //   console.log(book);
    // };

    // fetchBookDetails();
    const getBook = async () => {
      try {
        // const books = await bookServices.getAllBooks();
        // console.log(books);
        const response = await fetch(`/book/${bookId}`);
        const book = await response.json();
        setBook(book.data.book);

        // setBooks(books.data.books);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="min-h-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {book && book.title}
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={ book && book.coverUrl}
                // alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>

            <div class="flex justify-between border-b-2">
              <div>
                <span>Book Name : </span> <span>{book && book.title}</span>
              </div>
              <div>
                <span>Rating : </span> <span>{book && book.rating}</span>
              </div>
            </div>
            <div class="flex justify-between border-b-2">
              <div>
                <span>Author : </span> <span>{book && book.author}</span>
              </div>
              <div>
                <span>Genres : </span> <span>{book && book.genre}</span>
              </div>
            </div>
            <div class="flex justify-between border-b-2">
              <div>
                <span>Language : </span> <span>{book && book.language}</span>
              </div>
              <div>
                <span>ISBN : </span> <span>{book && book.isbn}</span>
              </div>
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Buy Book
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full space-y-8 mx-auto">
        <h1 class="text-2xl">Review</h1>
        <p>{book && book.description}</p>
        <h1 class="text-2xl">Comments</h1>

        {/* <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Add Your Comment
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea> */}
        <TextArea label="Comment" placeHolder={"Add Your Comment"} />
        <div>
          <h1 class="text-1xl">user name</h1>
          <p>
            velit laudantium non accusantium dicta atque exercitationem,
            molestias quasi delectus ea? Ut nostrum sunt dolorem consequatur
            qui? Facilis fuga repellendus natus porro eligendi ducimus eius
            quisquam tenetur odio voluptatum, possimus deleniti dolore neque
            quaerat totam fugiat. Velit a iure nobis eius excepturi nemo
            deleniti rem laboriosam similique quidem magni molestias molestiae
            impedit vitae, ad quis unde
          </p>
          <div>
            <span>like </span>
            <span>dislike</span>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Login in
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
