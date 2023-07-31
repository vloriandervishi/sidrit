import Header from "./Header";
import Content from "./content";
import Footer from "./footer";
import { useState } from "react";
import AddItem from "./Additem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingCart"))
  );

  const [newItems, newSetItems] = useState("");
  const [search, setSearch] = useState("");
  const setandSaveItems = (n) => {
    setItems(n);
    localStorage.setItem("shoppingCart", JSON.stringify(n));
  };
  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const xnewItems = { id, checked: false, item };
    const listItems = [...items, xnewItems];
    setandSaveItems(listItems);
  };
  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setandSaveItems(listItem);
  };
  const handleDelete = (id) => {
    const listitem = items.filter((item) => item.id !== id);
    setandSaveItems(listitem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    newSetItems("");
    console.log("submited");
  };
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItems={newItems}
        newSetItems={newSetItems}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
