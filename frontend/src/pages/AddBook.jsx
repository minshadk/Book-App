import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/Inputs/DropDown";
import TextArea from "../components/Inputs/TextArea";
import TextInput from "../components/Inputs/TextInput";
import YearPicker from "../components/Inputs/YearPicker";

const AddBook = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isbn, setIsbn] = useState(null);
  const [purchaseLink, setPurchaseLink] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [genre, setGenre] = useState(null);
  const [language, setLanguage] = useState(null);
  const [year, setYear] = useState(null);
  const [rating, setRating] = useState(null);

  const options = ["test", "twst2", "sdfsdf"];

  const handleFormSubmit = async () => {
    console.log("it called a monster");
    const bookDetails = {
      title,
      author,
      isbn,
      purchaseLink,
      imageUrl,
      description,
      genre,
      language,
      year,
      // rating,
    };
    console.log(bookDetails);
    const response = await fetch("/book", {
      method: "POST",
      body: JSON.stringify(bookDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) navigate(-1)
  };
  return (
    <div className="min-h-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add new Book
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {/*  placeHolder, type */}
            {/* {/* <TextInput placeHolder={"User Name"} type={"string"} /> */}
            <TextInput
              placeHolder={"Title"}
              type={"text"}
              textValue={title}
              setText={setTitle}
            />
            <TextInput
              placeHolder={"Author"}
              type={"text"}
              textValue={author}
              setText={setAuthor}
            />
            <TextInput
              placeHolder={"Isbn"}
              type={"number"}
              textValue={isbn}
              setText={setIsbn}
            />
            <TextInput
              placeHolder={"Image Url"}
              type={"text"}
              textValue={imageUrl}
              setText={setImageUrl}
            />
            <TextInput
              placeHolder={"Purchase Link"}
              type={"text"}
              textValue={purchaseLink}
              setText={setPurchaseLink}
            />
            <TextInput
              placeHolder={"Year"}
              type={"number"}
              textValue={year}
              setText={setYear}
            />
            <DropDown label={"Genre"} setOption={setGenre} options={options} />
            <DropDown
              label={"language"}
              setOption={setLanguage}
              options={options}
            />
            <YearPicker />
            <TextArea
              label="Review"
              placeHolder={"Add Review"}
              textValue={description}
              setText={setDescription}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleFormSubmit}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Login in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
