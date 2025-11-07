import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <section className="myUnOrdList">
      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`todo-item ${task.checked ? "checked" : ""}`}
          >
            <span>{task.content}</span>

            <div className="todo-actions">
              <button
                className="check-btn"
                onClick={() => onToggleTask(task.id)}
              >
                <FaCheck />
              </button>

              <button
                className="delete-btn"
                onClick={() => onDeleteTask(task.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
