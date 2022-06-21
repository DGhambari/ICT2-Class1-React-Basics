import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const Demo = () => {
  const modules = [
    { name: 'DevOps', noLectures: '2', noPracticals: '2' },
    { name: 'Enterprise Web Dev', noLectures: '2', noPracticals: '2' },
  ];
  const header = 'HDip Computer Science';
  return (
    <>
      <h1>{`${header}  - Modules table`}</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Demo;
