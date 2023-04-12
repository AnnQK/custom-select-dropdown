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
  };

  return (
    <section className="container">
      <div className="custom-select">
        <button className="item active-item" onClick={() => setShowList(!showList)}>
          {activeItem.title}
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
      <select name="test-select" id="select" className="native-select" onChange={changeHandler}>
        {renderData.map((item) => {
          return (
            <option key={item.id} value={item.title} selected={item.title === activeItem.title}>
              {item.title}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default CustomSelect;
