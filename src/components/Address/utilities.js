import axios from "axios";
const URL = "https://62d78b1251e6e8f06f1de851.mockapi.io/address/address";

const addFormHandler = async (formValues, setAddresses) => {
  const response = await axios.post(URL, formValues);

  if (response.status === 201) {
    setAddresses((prev) => {
      return prev.concat(response.data);
    });
  }
};

const editFormHandler = async (formValues, addresses, setAddresses) => {
  const response = await axios.put(`${URL}/${formValues.id}`, formValues);

  const updatedAddresses = addresses.map((address) => {
    if (address.id === formValues.id) return response.data;
    else return address;
  });
  if (response.status === 200) {
    setAddresses(updatedAddresses);
  }
};
const deleteHandler = async (id, addresses, setAddresses) => {
  const response = await axios.delete(`${URL}/${id}`);

  const updatedAddresses = addresses.filter(
    (curr) => curr.id !== response.data.id
  );
  if (response.status === 200) {
    setAddresses(updatedAddresses);
  }
};
export { addFormHandler, editFormHandler, deleteHandler };
