import {
  useGetItemsQuery,
  useAddItemsMutation,
  useUpdateItemsMutation,
  useDeleteItemsMutation
} from "../services/apiSlices"
import Form from "./form";
import Filter from "./filter";
import Contacts from "./contacts";

export const App = () => {
  
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetItemsQuery();
  const [addItem] = useAddItemsMutation();
  const [updateItem] = useUpdateItemsMutation();
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
    const filter = e.target.value
    const filteredData = data.filter((el) => el.name.toLowerCase().includes(filter))
    console.log(filteredData)
    updateItem({filteredData})
  }


  return (
    <>
      {isLoading ? (<p>Loading...</p>) : (
      <div>
        <Form
          handleSubmit={handleSubmit}
        />
        <Filter
          handleInputFilter={handleInputFilter}
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
