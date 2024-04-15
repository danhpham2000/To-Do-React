import { useContext } from "react";
import { TodosContext } from "../contexts/TodoContext";

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context)
    throw Error("useTodosContext must be used inside TodosContextProvider");

  return context;
};
