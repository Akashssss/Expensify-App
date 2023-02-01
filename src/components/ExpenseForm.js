import "react-dates/initialize";
import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.expense ? this.props.expense.description : "",
      note: this.props.expense ? this.props.expense.note.toString() : "",
      amount: this.props.expense ? this.props.expense.amount.toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
    };
    console.log(this.state);
  }
  onDateChange = (createdAt) => {
    console.log(typeof createdAt, createdAt);
    this.setState(() => ({ createdAt }));
  };
  onfocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmitHandler = () => {
    this.props.onSubmit({
      ...this.state,
      createdAt: this.state.createdAt.valueOf(),
    });

    this.setState(() => {
      return {
        description: "",
        note: "",
        amount: 0,
        createdAt: moment(),
        calenderFocused: false,
      };
    });
  };

  dataSetter = (e) => {
    if (!e.target.value || e.target.value.match(/^\d+(\.\d{1,2})?$/)) {
      this.setState(() => ({ amount: e.target.value }));
    }
  };
  render() {
    return (
      <div>
        <form
          id="expenseForm"
          onSubmit={(e) => {
            console.log("hello");
            e.preventDefault();
            this.onSubmitHandler();
            document.getElementById("expenseForm").reset();
          }}
        >
          <div className="relative">
            <input
              required
              value={this.state.description}
              onChange={(e) => {
                this.setState(() => ({ description: e.target.value }));
              }}
              type="text"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Description
            </label>
          </div>

          <div className="relative">
            <input
              required
              value={this.state.amount}
              onChange={this.dataSetter}
              type="number"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Amount
            </label>
          </div>

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onfocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <div className="relative">
            <textarea
              value={this.state.note}
              onChange={(e) => {
                this.setState(() => ({
                  note: e.target.value,
                }));
              }}
              id="Note"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
              Add a Note...
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    );
  }
}
