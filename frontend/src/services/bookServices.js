import BackendServices from "./BackendServices";

const getAllBooks = async () => {
  return BackendServices.get("book");
};

const bookServices = {
  getAllBooks,
};
export default bookServices;
                                                          
 




























            
