
import React from 'react';
import DynamicTable from '../../components/form/DynamicTable';
import { Filter } from '../../types';

const GeneratedTable_e94af600_caa0_47b6_ab56_303b25a4f3c8 = () => {
  const columns = [
  {
    "field": "employee_name",
    "header": "Employee Name"
  },
  {
    "field": "department",
    "header": "Department"
  },
  {
    "field": "salary",
    "header": "Salary"
  }
];
  const data = [
  {
    "employee_name": "y2b8rk",
    "department": "ynpr7",
    "salary": "7p6gq"
  },
  {
    "employee_name": "juwy18",
    "department": "2fb13d",
    "salary": "2spgrg"
  },
  {
    "employee_name": "twmq7",
    "department": "ysw945",
    "salary": "ekpli9"
  },
  {
    "employee_name": "t58fk",
    "department": "kyudli",
    "salary": "4rwmlp"
  },
  {
    "employee_name": "e85tae",
    "department": "5j8n7k",
    "salary": "0bbn5h"
  },
  {
    "employee_name": "wjovj",
    "department": "3por6",
    "salary": "b6pwmn"
  },
  {
    "employee_name": "fdwgr",
    "department": "y704ie",
    "salary": "hii75h"
  },
  {
    "employee_name": "di4ru",
    "department": "a3pmtar",
    "salary": "pmm10c"
  },
  {
    "employee_name": "7tj9n",
    "department": "8rixel",
    "salary": "gpl1e"
  },
  {
    "employee_name": "7vlb0d",
    "department": "609dtx",
    "salary": "qq5ks8"
  },
  {
    "employee_name": "j1gmhq",
    "department": "5rds4",
    "salary": "ptu74s"
  },
  {
    "employee_name": "jpgbcj",
    "department": "ycefi",
    "salary": "ttowoa"
  },
  {
    "employee_name": "ykaiki",
    "department": "hyz86o",
    "salary": "b4fzfs"
  },
  {
    "employee_name": "cb9tm",
    "department": "a16ac6",
    "salary": "qzupx"
  },
  {
    "employee_name": "h9yjnu",
    "department": "lzo16",
    "salary": "y1lvw6"
  },
  {
    "employee_name": "fhu6v",
    "department": "anj4f8",
    "salary": "2tq6k8"
  },
  {
    "employee_name": "6s0mva",
    "department": "9udt2f",
    "salary": "g1cblk"
  },
  {
    "employee_name": "q2gybo",
    "department": "vo80t",
    "salary": "fs6gl"
  },
  {
    "employee_name": "7lci4k",
    "department": "i3b5ug",
    "salary": "0fm9c"
  },
  {
    "employee_name": "0cx5f",
    "department": "xk2on",
    "salary": "9w0m5h"
  }
]; // Dummy data for the table

  const filters: Filter[] = [
  {
    "field": "employee_name",
    "value": ""
  },
  {
    "field": "department",
    "value": ""
  },
  {
    "field": "salary",
    "value": ""
  }
]; // Dynamically applied filters

  return <DynamicTable columns={columns} data={data} filters={filters} />;
};

export default GeneratedTable_e94af600_caa0_47b6_ab56_303b25a4f3c8;
