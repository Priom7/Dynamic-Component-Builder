import React from 'react';
import DynamicTable from '../../components/form/DynamicTable';

const GeneratedTable_31f3fbcf_d1e5_4f81_8af9_c561137cea08 = () => {
  const columns = [
    {
      "field": "ID",
      "header": "Student ID"
    },
    {
      "field": "Name",
      "header": "Student Name"
    }
  ];

  const data = [
    { ID: 1, Name: "John Doe" },
    { ID: 2, Name: "Jane Smith" },
    { ID: 3, Name: "Bob Johnson" }
  ];

  const filters: any[] = []; // Dynamically applied filters

  return <DynamicTable columns={columns} data={data} filters={filters} />;
};

export default GeneratedTable_31f3fbcf_d1e5_4f81_8af9_c561137cea08;
