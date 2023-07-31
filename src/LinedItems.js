import { FaTrashAlt } from "react-icons/fa";

const LinedItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <FaTrashAlt
        role="button"
        onClick={() => {
          handleDelete(item.id);
        }}
        tabIndex={"0"}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LinedItems;
