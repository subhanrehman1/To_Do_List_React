import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks";
import { useState } from "react";
import "./style.css";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const addData = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      data.push(e.target.value.trim());
      setData(data);
      setValue("");
      //console.log(data);
    }
  };
  const tickTask = (key) => {
    console.log(key);
  };
  const deleteData = (e) => {
    // const newData = [];
    // data.filter((value) => {
    //   if (e.target.innerText != value) newData.push(value);
    //   setData(newData);
    // });

    const newData = data.filter((value) => {
      return value.trim() != e.target.innerText;
    });
    setData(newData);
  };
  return (
    //console.log(data.length),
    <div>
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <div
        className="ui left icon input"
        style={{ left: "25%", width: "50%", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Add tasks..."
          className="inputField"
          value={value}
          onKeyDown={(e) => addData(e)}
          onChange={(e) => setValue(e.target.value)}
        />
        <i className="plus circle icon" htmlFor="inputField"></i>
      </div>
      <div style={{ marginLeft: "20rem" }}>
        <p>Total tasks: {data.length}</p>
      </div>
      <Tasks task={data} deletetask={deleteData} tick={tickTask} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
//background #3E4651
//color #F6F7F2
