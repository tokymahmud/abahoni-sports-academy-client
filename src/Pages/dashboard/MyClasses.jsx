import React from 'react';
import UseClasses from '../../Hooks/UseClasses';

const MyClasses = () => {
  const [classes] = UseClasses();

  const addedclass = classes.slice(-2);

  return (
    <div>
      <h2>My Classes</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Total Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {addedclass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.seats}</td>
                <td>
                  <span className="loading loading-dots loading-md"></span>
                </td>
                <td>
                  <div className='flex'>
                    <input
                      type="text"
                      placeholder="Type feedback here"
                      className="input input-bordered input-xs w-full max-w-xs"
                    />
                    <button className="btn btn-xs">Send</button>
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

export default MyClasses;
