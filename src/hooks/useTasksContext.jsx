import { useContext } from "react";
import { TasksContext } from "../contexts/TaskContext";

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context)
    throw Error("useTasksContext must be used inside TasksContextProvider");

  return context;
};
