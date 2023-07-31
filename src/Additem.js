import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const Additem = ({ newItem, newSetItems, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addform" onSubmit={handleSubmit}>
      <label htmlFor="additem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="additem"
        type="text"
        placeholder="add item"
        required
        value={newItem}
        onChange={(e) => newSetItems(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Additem;
