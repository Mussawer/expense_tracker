import React, { useReducer, createContext } from "react";

import contextReducer from "./reducer";

const initialState: any = [];
export const ExpenseTrackerContext: any = createContext(initialState);

export const Provider = ({ children }: any) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return <ExpenseTrackerContext.Provider value={{ addTransaction, deleteTransaction }}>{children}</ExpenseTrackerContext.Provider>;
};
