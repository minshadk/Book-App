import TextArea from "./../components/Inputs/TextArea";

const BookDetails = () => {
  return (
    <>
      <div className="min-h-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              bookeititle
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={
                  // "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363_960_720.jpg"
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-fPxS_rcVWsAeXtpnKFnb9gjaw6lZqao55kHrV4&s"
                }
                // alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>

            <div class="flex justify-between border-b-2">
              <div>
                <span>Book Name : </span> <span>{"harry potter"}</span>
              </div>
              <div>
                <span>Rating : </span> <span>{" 5/10"}</span>
              </div>
            </div>
            <div class="flex justify-between border-b-2">
              <div>
                <span>Author : </span> <span>{"J. K. Rowling"}</span>
              </div>
              <div>
                <span>Genres : </span> <span>{" Fiction"}</span>
              </div>
            </div>
            <div class="flex justify-between border-b-2">
              <div>
                <span>Language : </span> <span>{"English"}</span>
              </div>
              <div>
                <span>ISBN : </span> <span>{" 9781408845677"}</span>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni
          distinctio laboriosam ducimus pariatur aspernatur accusantium atque,
          adipisci aperiam eveniet ab animi inventore quo quos rem beatae
          voluptas excepturi ea necessitatibus quae velit blanditiis eligendi
          ex! Expedita optio vel incidunt, corrupti dolorem temporibus
          quibusdam, nesciunt vitae minima velit natus, repellat ab. Inventore
          error officiis aut corporis doloribus quibusdam fuga, blanditiis eos
          itaque ea quaerat nam minus illum perspiciatis quis voluptate quae
          maxime reiciendis est cupiditate harum voluptates modi quasi! Itaque
          earum debitis dolorum hic, accusamus nesciunt laborum, ipsam a eveniet
          provident eum! Ipsa nisi ipsam dolorem libero reiciendis nemo fugiat
          asperiores veniam, aperiam dolorum, repellendus illo aliquid ut
          inventore nesciunt saepe assumenda consectetur alias? Modi excepturi
          adipisci, eos eaque cupiditate impedit doloremque dicta ad officia
          voluptatem laboriosam facere totam assumenda, dolores dolorum! Tempore
          repudiandae modi facilis vero! Corporis quam voluptatem provident
          velit laudantium non accusantium dicta atque exercitationem, molestias
          quasi delectus ea? Ut nostrum sunt dolorem consequatur qui? Facilis
          fuga repellendus natus porro eligendi ducimus eius quisquam tenetur
          odio voluptatum, possimus deleniti dolore neque quaerat totam fugiat.
          Velit a iure nobis eius excepturi nemo deleniti rem laboriosam
          similique quidem magni molestias molestiae impedit vitae, ad quis unde
          commodi. Unde, eaque.
        </p>
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
