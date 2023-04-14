import { useState } from "react";
import { DataObject } from "./interfaces/DataObject";

interface Props {
  renderData: DataObject[];
}

const CustomSelect: React.FC<Props> = ({ renderData }) => {
  const [showList, setShowList] = useState(false);
  const [activeItem, setActiveItem] = useState<DataObject>(renderData[2]);

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const selectedItem = renderData.find((item) => item.title === value) || renderData[0];
    setActiveItem(selectedItem);
  };

  const selectActiveItem = (selectedItem: DataObject) => {
    setActiveItem(selectedItem);
    setShowList(false);
  };

  return (
    <section className="container">
      <div className="custom-select">
        <button className="item active-item" onClick={() => setShowList(!showList)}>
          {activeItem.title}
          <svg
            className={`icon ${showList ? "open" : ""}`}
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10C7.82405 10 8.29443 10.9408 7.8 11.6L5.3 14.9333C4.9 15.4667 4.1 15.4667 3.7 14.9333L1.2 11.6C0.705573 10.9408 1.17595 10 2 10L7 10Z"
              fill="#6F767E"
            />
            <path
              d="M7 6C7.82405 6 8.29443 5.05924 7.8 4.4L5.3 1.06667C4.9 0.533334 4.1 0.533334 3.7 1.06667L1.2 4.4C0.705573 5.05924 1.17595 6 2 6L7 6Z"
              fill="#6F767E"
            />
          </svg>
        </button>
        <div className={`list ${showList ? "visible" : ""}`}>
          {renderData.map((item) => {
            return (
              <button
                key={item.id}
                className={`item ${item.id === activeItem.id ? "hide" : ""}`}
                onClick={() => selectActiveItem(item)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <select
        name="test-select"
        id="select"
        className="native-select"
        onChange={changeHandler}
        value={activeItem.title}
      >
        {renderData.map((item) => {
          return (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default CustomSelect;
