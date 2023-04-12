import CustomSelect from "./CustomSelect";
import { DataObject } from "./interfaces/DataObject";
import "./styles.css";

const DATA: DataObject[] = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
  { id: 4, title: "test4" },
  { id: 5, title: "test5" },
];

const App: React.FC = () => {
  return <CustomSelect renderData={DATA} />;
};

export default App;
