import React from "react";

const Tasks = (props) => {
  //console.log(props);
  return props.task.length !== 0 ? (
    props.task.map((value, i) => {
      return (
        <div>
          <div
            style={{
              color: "#3E4651",
              margin: "1rem 3rem",
              paddingLeft: "3rem",
            }}
            key={i}
            id={`task ${i}`}
            className="ui segment"
            onClick={props.deletetask}
          >
            {value}
            <input
              style={{ float: "right" }}
              type="checkbox"
              id={`checkbox ${i}`}
              onChange={(e) => {
                if (e.target.checked)
                  document.getElementById(`task ${i}`).style.textDecoration =
                    "line-through";
                else
                  document.getElementById(`task ${i}`).style.textDecoration =
                    "none";
              }}
            ></input>
          </div>
        </div>
      );
    })
  ) : (
    <div>
      <div style={{ color: "#F6F7F2", textAlign: "center" }}>
        You don't have any tasks!
      </div>
    </div>
  );
};
export default Tasks;
