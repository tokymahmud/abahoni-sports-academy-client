import { useEffect, useState } from "react";
import UseAxiosecure from "../Hooks/UseAxiossecure";


const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = UseAxiosecure();

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axiosSecure.get('/payments');
        setPayments(response.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchPaymentHistory();
  }, [axiosSecure]);

  return (
    <div className="w-full">
      <h1>Payment History:</h1>
      {payments.length === 0 ? (
        <p>No payment history found.</p>
      ) : (
       
        <table>
          <thead>
            <tr>
            <th>Class Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Transaction ID</th>

            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td>{payment.itemName}</td>
                <td>{payment.email}</td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
                <td>{payment.quantity}</td>
                <td>{payment.transactionId}</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistory;
