import { useState } from "react";
import TextInput from "../components/Inputs/TextInput";
import DropDown from "../components/Inputs/DropDown";
import { Link } from "react-router-dom";

const genreOptions = [
  "Fiction",
  "Novel",
  "Narrative",
  "Science fiction",
  "Mystery",
  "Genre fiction",
  "Historical Fiction",
  "Non-fiction",
  "Fantasy Fiction",
  "Fairy Tale",
];

const languageOptions = [
  "English",
  "Hindi",
  "Malayalam",
  "Arabic",
  "Spanish",
  "Tamil",
  "French",
];
const rateingOptions = ["1", "2", "3", "4", "5"];

const BrowseBooks = () => {
  const [title, setTitle] = useState(null);
  const [language, setLanguage] = useState(null);
  const [genre, setGenre] = useState(null);
  const [rating, setRating] = useState(null);
  const [books, setBooks] = useState();

  const getBooks = async () => {
    // const apiUrl = "/book";
    // let fullUrl = `${apiUrl}?`;

    // if (genre) {
    //   fullUrl = `${fullUrl}&genre${genre}`;
    // }
    // if (language) {
    //   fullUrl = `${fullUrl}&language${language}`;
    // }
    // if (rating) {
    //   fullUrl = `${fullUrl}&rating${rating}`;
    // }

    const queryParams = new URLSearchParams({
      page: 1,
      limit: 20,
    });

    if (genre) {
      queryParams.append("genre", genre);
    }
    if (language) {
      queryParams.append("language", language);
    }
    if (rating) {
      queryParams.append("rating", rating);
    }
    if (title) {
      queryParams.append("title", title);
    }

    const apiUrl = `/book?${queryParams.toString()}`;

    try {
      const response = await fetch(`${apiUrl}`);
      const book = await response.json();
      setBooks(book.data.books);
      console.log(book);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    console.log("language = " + language);
    console.log("genre = " + genre);
    console.log("rating = " + rating);
    console.log("title = " + title);
    console.log(title);
    getBooks();
  };
  return (
    <div className="bg-slate-800">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <div className="flex   justify-between items-center">
            {/* <div className="flex  justify-items-stretch justify-between"> */}
            {/* <div className="grid grid-flow-col justify-stretch items-center"> */}
            <div className="flex-1 w-64">
              <TextInput
                placeHolder={"Title"}
                type={"text"}
                textValue={title}
                setText={setTitle}
              />
            </div>

            <button
              type="submit"
              className="flex-1 w-3  group relative  max-w-[30%] ml-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSubmit}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Search Book
            </button>
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <DropDown
              label={"Genre"}
              setOption={setGenre}
              options={genreOptions}
            />
            <DropDown
              label={"language"}
              setOption={setLanguage}
              options={languageOptions}
            />
            <DropDown
              label={"rating"}
              setOption={setRating}
              options={rateingOptions}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {books &&
            books.map((book) => (
              <Link
                key={book._id}
                to={`/bookDetails/${book._id}`}
                className="group"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{book.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {book.rating}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks;
