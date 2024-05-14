import React, { useState } from 'react';
import './App.css';




function App() {
  //using useState to be able to hold values entered by the user
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Array to hold transactions
  const [transactions, setTransactions] = useState([]);

  // these event handlers updates the values inserted by the user
  const handleDateChange = (e) => setDate(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  // this function is for adding the transactions to the table
  const addTransaction = () => {
    const newTransaction = { date, description, category, amount };
    setTransactions([...transactions, newTransaction]) //use of the spread operator
    // Clear input fields after adding transaction
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div className="App">
      <div className="header">
        <h1>The Royal Bank of Flatiron</h1>
      </div>

      <div className="search">
        <input type="text" placeholder="Search Your Transaction"></input>
        <button type="submit">&#128269;</button>
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={handleDateChange}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></input>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategoryChange}
        ></input>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
        ></input>
      </div>

      <button onClick={addTransaction}>Add Transaction</button>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;