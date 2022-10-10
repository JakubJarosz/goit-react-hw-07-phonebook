import {
  useGetItemsQuery,
  useAddItemsMutation,
  useDeleteItemsMutation,

} from "../services/apiSlices"
import Form from "./form";
import Filter from "./filter";
import Contacts from "./contacts";
import { useState } from "react";
export const App = () => {

  const [filter, setFilter] = useState('');

  const {
    data,
    isLoading,
    isSuccess,
  } = useGetItemsQuery(filter);
  const [addItem] = useAddItemsMutation();
  const [deleteItem] = useDeleteItemsMutation();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputName = form.elements.name.value;
    const inputNumber = form.elements.number.value;
    const filteredData = data.filter((el) => el.name === inputName);
    console.log(filteredData)
    if (filteredData.length > 0) {
      alert("Name alredy exist in a phonebook")
    } else {
      addItem({ createdAt: Date.now(), name: inputName, phone: inputNumber });
    }
  }

  const handleInputFilter = (e) => {
    const filerInput = e.target.value;
    setFilter(filerInput)
  }


  return (
    <>
      {isLoading ? (<p>Loading...</p>) : (
        <div>
          <Form
            handleSubmit={handleSubmit}
          />
          <Filter
            handleInputFilter={(handleInputFilter)}
          />
          <Contacts
            isSuccess={isSuccess}
            data={data}
            deleteItem={deleteItem}
          />
        </div>
      )}
    </>
  );
};
