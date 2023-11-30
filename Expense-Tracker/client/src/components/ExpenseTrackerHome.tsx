import { useEffect } from "react"
import { getAllExpenseItems } from "../services/expense-service"
import { ExpenseItemsLister } from "./ExpenseItemsLister"

import { Container } from "react-bootstrap"

import {useState} from "react"
import IExpenseItem from "../models/expense"
import { ExpensesByPayees } from "./ExpensesByPayees"
import { PendingExpensesByPayees } from "./PendingExpensesByPayees"
import { ExpenseCreator } from "./ExpenseCreator"


const ExpenseTrackerHome = () => {

  const [expenseItems, setExpenseItems] 
    = useState<IExpenseItem[]>([])

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () =>  {

      const response = await getAllExpenseItems();

      console.log("Response is");
      console.log(response);

      setExpenseItems(response);
    }

    getAllExpenseItemsInvoker();
  }, [])

  const refresh = (newExpenseItem : IExpenseItem) => {

    setExpenseItems([
      newExpenseItem, ...expenseItems
    ]
    )
  }

  return (
    <Container >
      <h2 style={{marginBottom: '20px'}}>Expense Application</h2>

      <ExpenseCreator expenseItems={expenseItems} refresh={refresh}></ExpenseCreator>

      <ExpenseItemsLister expenseItems={expenseItems}></ExpenseItemsLister>

      <ExpensesByPayees expenseItems={expenseItems}></ExpensesByPayees>

      <PendingExpensesByPayees expenseItems={expenseItems}></PendingExpensesByPayees>
   </Container>
  )
}

export {ExpenseTrackerHome}