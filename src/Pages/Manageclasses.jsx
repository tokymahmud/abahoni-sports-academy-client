import React from 'react';
import UseClasses from '../Hooks/UseClasses';

const AllClasses = () => {
  const [classes, setClasses] = UseClasses();

  const handleApprove = (classId) => {
    const updatedClasses = classes.map((item) => {
      if (item._id === classId) {
        return {
          ...item,
          status: 'approved',
        };
      }
      return item;
    });

    setClasses(updatedClasses);
  };

  const handleDeny = (classId) => {
    const updatedClasses = classes.map((item) => {
      if (item._id === classId) {
        return {
          ...item,
          status: 'denied',
        };
      }
      return item;
    });

    setClasses(updatedClasses);
  };

  const handleSendFeedback = (classId) => {
    <input type="text" placeholder="Type feedback here" className="input w-full max-w-xs" />
    console.log('feedback id:', classId);
  };

  return (
    <div>
      <h2>All Classes</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.seats}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                {/* {item.status === 'pending' ? (
                    <div>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleApprove(item._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleDeny(item._id)}
                      >
                        Deny
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleSendFeedback(item._id)}
                      >
                        Send Feedback
                      </button>
                    </div>
                  ) : null} */}
                 
                    <div>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleApprove(item._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleDeny(item._id)}
                      >
                        Deny
                      </button>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleSendFeedback(item._id)}
                      >
                        Send Feedback
                      </button>
                    </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
