import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Blogs = () => {
    return (
        <div>
             <SectionTitle
            heading="Blogs & article"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 '>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1241.jpg?w=1060&t=st=1686131168~exp=1686131768~hmac=8a7b0104f0eb461a8d7dbca8589d34bef6df15ca75724f03f59d4221c9fab525" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Football </h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ea!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">READ</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_23-2149213601.jpg?w=996&t=st=1686131235~exp=1686131835~hmac=54f77767ee1afbb6f26712ba891e389ab155f4611184b1590e6959d8280f9a98" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Cricket</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, pariatur.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">READ</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.freepik.com/free-vector/basketball-team-background_1188-54.jpg?w=740&t=st=1686131290~exp=1686131890~hmac=9d2a543c21acb293f02bbd11ea29e59007eba930653a5fb63a526819a4418038" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Basket Ball</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iusto ut numquam?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">READ</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Blogs;