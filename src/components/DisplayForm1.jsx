import React, { useState } from "react";

function DisplayForm1() {
  const [present, setPresent] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState("");

  const calculate = (e) => {
    e.preventDefault();

    if (total === 0) {
      setResult("Total classes cannot be zero");
      return;
    }

    if (present > total) {
      setResult("No. of present days cannot exceed total no. of classes");
      return;
    }

    let daysToAttend = (100 * present) / total;
    if (daysToAttend >= 75) {
      setResult(`You already have more than 75% attendance (${daysToAttend.toFixed(2)}%)`);
    } else {
      daysToAttend = 3 * total - 4 * present;
      setResult(`You need to attend ${daysToAttend} more days to make 75% attendance`);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold text-white my-8 shadow-lg">Attendance Calculator</h1>
      <form
        onSubmit={calculate}
        className="flex flex-col bg-white shadow-lg w-full max-w-md p-6 rounded-lg space-y-4"
      >
        <input
          type="number"
          placeholder="No. of classes attended"
          onChange={(e) => setPresent(Number(e.target.value))}
          className="bg-gray-100 rounded-lg p-3 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition duration-200 hover:bg-gray-200"
        />
        <input
          type="number"
          placeholder="Total no. of classes"
          onChange={(e) => setTotal(Number(e.target.value))}
          className="bg-gray-100 rounded-lg p-3 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition duration-200 hover:bg-gray-200"
        />

        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          Calculate
        </button>

        {result && (
          <div className="bg-blue-100 border-2 border-blue-400 text-blue-700 rounded-lg p-4 mt-4 text-center shadow-lg transition duration-200">
            {result}
          </div>
        )}
      </form>
    </div>
  );
}

export default DisplayForm1;
