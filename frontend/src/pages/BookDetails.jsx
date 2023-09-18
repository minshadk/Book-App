import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bookServices from "../services/bookServices";
import commentServices from "../services/commentServices";

import TextArea from "./../components/Inputs/TextArea";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState();
  const [comment, setComment] = useState();
  const [comments, setComments] = useState();

  const handleFormSubmit = async () => {
    const response = await fetch("/comment", {
      method: "POST",
      body: JSON.stringify({
        comment,
        bookId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
  };

  const handleLike = async (commentId) => {
    const response = await fetch(`/comment/like/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
  };

  const handleRating = async (rating) => {
    try {
      const response = await fetch(
        `http://localhost:5000/book/rate/${bookId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({ rating }), // Corrected placement of the body key
        }
      );

      if (response.ok) {
        const json = await response.json();
        console.log(json);
      } else {
        console.error(
          "Error updating rating:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await fetch(`/book/${bookId}`);
        const book = await response.json();
        setBook(book.data.book);
      } catch (err) {
        console.log(err);
      }
      console.log(book.rating[0].rating);
    };
    // const getComments = async () => {
    //   try {
    //     const response = await commentServices.getBookById(bookId);
    //     const comments = await response.json();
    //     await console.log(comments.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getComments();
    async function getComments() {
      try {
        const response = await fetch(
          `http://localhost:5000/comment/getByBook/${bookId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.data);

        setComments(data);

        console.log(data.status);

        if (data.status === "success" && data.data && data.data.comments) {
          const comments = data.data.comments;
          setComments(comments); // Array of comments
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    getComments();
    getBook();
  }, []);

  const isCommentLiked = (commentId, likedComments) => {
    return likedComments.includes("62f51e731da9db5526b8509d");
  };

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
                src={book && book.coverUrl}
                // alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>

            <div className="flex justify-between border-b-2">
              <div>
                <span>Book Name : </span> <span>{book && book.title}</span>
              </div>
              <div>
                <button onClick={(e) => handleRating(4)}>
                  <span>
                  </span>
                  {book && book.rating.rating}
                  {/* <span>{book && book.rating}</span> */}
                </button>
              </div>
            </div>
            <div className="flex justify-between border-b-2">
              <div>
                <span>Author : </span> <span>{book && book.author}</span>
              </div>
              <div>
                <span>Genres : </span> <span>{book && book.genre}</span>
              </div>
            </div>
            <div className="flex justify-between border-b-2">
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
        <h1 className="text-2xl">Review</h1>
        <p>{book && book.description}</p>
        <h1 className="text-2xl">Comments</h1>
        <TextArea
          label="Comment"
          placeHolder={"Add Your Comment"}
          textValue={comment}
          setText={setComment}
        />
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleFormSubmit}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Add Comments
        </button>

        {comments &&
          comments.map((comment) => (
            <div>
              <h1 className="text-1xl">{comment.userId}</h1>
              <p>{comment.comment}</p>
              <div>
                <span>likes {comment.likes.length}</span>
                {/* <button onClick={(e) => handleLike(comment._id)}>
                  <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    like
                  </span>
                </button> */}
                {isCommentLiked(comment._id, comment.likes) ? (
                  <button onClick={() => handleLike(comment._id)}>
                    Dislike
                  </button>
                ) : (
                  <button onClick={() => handleLike(comment._id)}>Like</button>
                )}

                {/* <span>
                  <span onClick={handleLike}> dislike </span>
                </span> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BookDetails;
