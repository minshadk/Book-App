import BackendServices from "./BackendServices";

const getAllComments = async () => {
  return BackendServices.get("comment");
};
const createComment = async () => {
  return BackendServices.post("comment");
};

const getBookById = async (id) => { 
  return BackendServices.get(`comment/getByBook/${id}`);
};

const commentServices = {
  getAllComments,
  getBookById,
  createComment,
};
export default commentServices;
