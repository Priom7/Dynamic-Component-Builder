import React from "react";
import DynamicTable from "../../components/form/DynamicTable";
import { Filter } from "../../types"; // Import the 'Filter' type from the correct module

const GeneratedTable_31500690_7dfd_49c5_9f7f_bd0f398456e5 = () => {
  const columns = [
    {
      field: "1",
      header: "Test",
    },
    {
      field: "2",
      header: "Hey",
    },
  ];
  const data = [
    { 1: "23", 2: "5" },
    { 1: "4", 2: "g" },
    { 1: "5", 2: "h" },
  ]; // You can pass your actual data or replace this with an API call

  const filters: Filter[] = [
    {
      field: "1",
      value: "",
    },
    {
      field: "2",
      value: "",
    },
  ]; // Dynamically applied filters

  return <DynamicTable columns={columns} data={data} filters={filters} />;
};

export default GeneratedTable_31500690_7dfd_49c5_9f7f_bd0f398456e5;
