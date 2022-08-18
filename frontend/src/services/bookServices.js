import BackendServices from "./BackendServices";

const getAllBooks = async () => {
  return BackendServices.get("book");
};

const getBookById = async (id) => {
  return BackendServices.get(`book/${id}`);
}

const bookServices = {
  getAllBooks,
  getBookById
};
export default bookServices;
                                                          
 




























            
