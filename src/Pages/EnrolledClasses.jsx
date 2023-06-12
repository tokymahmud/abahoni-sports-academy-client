import React, { useEffect, useState } from "react";
import UseAxiosecure from "../Hooks/UseAxiossecure";

const EnrolledClasses = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [axiosSecure] = UseAxiosecure();

  useEffect(() => {
    const fetchEnrolledClasses = async () => {
      try {
        const response = await axiosSecure.get("/payments");
        setEnrolledClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEnrolledClasses();
  }, [axiosSecure]);

  const totalEnrolled = enrolledClasses.reduce(
    (total, cls) => total + cls.itemNames.length,
    0
  );

  return (
    <div>
      <h1>Enrolled Classes</h1>
      <p>Total Enrolled: {totalEnrolled}</p>
      {enrolledClasses.length === 0 ? (
        <p>No classes enrolled.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Names</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  {cls.itemNames.map((itemName) => (
                    <div key={itemName}>{itemName}</div>
                  ))}
                </td>
                <td>{cls.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnrolledClasses;
