import React, { useState, useEffect } from "react";

const classData = [
  { name: "kavin", rollno: "1", subject: "Tamil", total: "400" },
  { name: "kumar", rollno: "2", subject: "english", total: "401" },
  { name: "ravi", rollno: "3", subject: "maths", total: "402" },
  { name: "krish", rollno: "4", subject: "science", total: "403" },
  { name: "prabhu", rollno: "5", subject: "socialscience", total: "404" },
];

export default function Exe() {
  const [details, setDetails] = useState();
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDetails(classData);
      setTime(true);
      console.log(classData)
    }, 5000);
  }, []);
  return (
    <>
      <div>
        <table>
          <tr>
            <th>name</th>
            <th>rollno</th>
            <th>subject</th>
            <th>total</th>
          </tr>
             
          
          {time && classData.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.rollno}</td>
              <td>{data.subject}</td>
              <td>{data.total}</td>
            </tr>
          ))}
         
        </table>
      </div>
    </>
  );
}
