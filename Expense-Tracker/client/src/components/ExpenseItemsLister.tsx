
import { Table } from "react-bootstrap"
import IExpenseItem from "../models/expense"


type ExpenseItemsListerModel = {

  expenseItems : IExpenseItem[];
}

const ExpenseItemsLister = ({expenseItems} : ExpenseItemsListerModel) => {

  const testExpenseItems : IExpenseItem[] = [
    {
      "expenseDescription": "Internet Expenses",
      "payeeName": "Ramesh",
      "price": 1100,
      "date": new Date(),
      "id": 1
    },
    {
      "expenseDescription": "Bike Maintainence Expenses",
      "payeeName": "Rahul",
      "price": 3500,
      "date": new Date(),
      "id": 2
    },
  ]

  const getExpenseItems = () => {
    return expenseItems;
  }

  const formatDate = (dateObjFromServer : Date) => {
    
    const dateObj = new Date(dateObjFromServer);

    return dateObj.getDate() + "-" + (dateObj.getMonth() + 1) + "-"
      + dateObj.getFullYear();
  }

  return (
    <div>

      <h3 style={{marginTop: '20px'}}>Expenses View</h3>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Sr.No.</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Payee Name</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Expense Description</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Expense Date</th>
              <th style={{ backgroundColor: 'black', color: 'white' }}>Price</th>
            </tr>
          </thead>
          <tbody>

            {
                getExpenseItems().map( (expenseItem, index) => {

                  return (

                    <tr>
                      <td style={{ padding: '10px', backgroundColor: "orange" }}>{(index + 1)}</td>
                      <td style={{ padding: '10px', backgroundColor: "pink" }}>{expenseItem.payeeName}</td>
                      <td style={{ padding: '10px', backgroundColor: "yellow" }}>{expenseItem.expenseDescription}</td>
                      <td style={{ padding: '10px', backgroundColor: "lightgreen" }}>{formatDate(expenseItem.date)}</td>
                      <td style={{ padding: '10px', backgroundColor: "lightcoral" }}>{expenseItem.price}</td>
                    </tr>
      
                  )
                })
            }

            
          </tbody>
        </Table>      

    </div>
  )

}

export {ExpenseItemsLister}