import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("Resonse: ", response);
    console.log("Data: ", response.data);
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

const todoAPI = {};

todoAPI.getCategories = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}categories/`));
};

todoAPI.getSingleCategory = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/${categoryId}/`)
  );
};

todoAPI.addCategory = async (categoryData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}categories/`, categoryData)
  );
};

todoAPI.updateCategory = async (categoryId, updateData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}categories/${categoryId}/`, updateData)
  );
};

todoAPI.deleteCategory = async (categoryId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}categories/${categoryId}/`)
  );
};

export default todoAPI;
