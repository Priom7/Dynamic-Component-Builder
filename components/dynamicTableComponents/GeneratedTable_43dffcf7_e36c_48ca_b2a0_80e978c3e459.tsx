
import React from 'react';
import DynamicTable from '../../components/form/DynamicTable';
import { Filter } from '../../types';

const GeneratedTable_43dffcf7_e36c_48ca_b2a0_80e978c3e459 = () => {
  const columns = [
  {
    "field": "UserID",
    "header": "ID"
  },
  {
    "field": "FirstName",
    "header": "Name"
  },
  {
    "field": "email",
    "header": "Email"
  },
  {
    "field": "Address",
    "header": "Address"
  }
];
  const data = [
  {
    "UserID": "jjiqku",
    "FirstName": "x34il2",
    "email": "ple9m",
    "Address": "ubvxac"
  },
  {
    "UserID": "8i7xqh",
    "FirstName": "fyr4p",
    "email": "oys21t",
    "Address": "ih454k"
  },
  {
    "UserID": "5mvie",
    "FirstName": "79zof",
    "email": "o0u83n",
    "Address": "p5gqje"
  },
  {
    "UserID": "2ryduh",
    "FirstName": "v52pn7",
    "email": "il4rus",
    "Address": "ou7m8d"
  },
  {
    "UserID": "y8mxv",
    "FirstName": "hcyxs",
    "email": "wbwlv",
    "Address": "wp62h"
  },
  {
    "UserID": "4797ll",
    "FirstName": "fp7m0a",
    "email": "cuzf3k",
    "Address": "ksyycs"
  },
  {
    "UserID": "p60req",
    "FirstName": "emc24g",
    "email": "nggjgo",
    "Address": "c6e88a"
  },
  {
    "UserID": "o88u4r",
    "FirstName": "ciy4yh",
    "email": "ekjdtj",
    "Address": "rmi0bu"
  },
  {
    "UserID": "b2fbi",
    "FirstName": "59misi",
    "email": "pcen3m",
    "Address": "nchead"
  },
  {
    "UserID": "tauazd",
    "FirstName": "68bazw",
    "email": "ewrdrp",
    "Address": "g47gk"
  },
  {
    "UserID": "s57abd",
    "FirstName": "3etmch",
    "email": "9xbopd",
    "Address": "20dnt8"
  },
  {
    "UserID": "zlpqej",
    "FirstName": "qcsmrer",
    "email": "m735e",
    "Address": "sspygl"
  },
  {
    "UserID": "q4ey59",
    "FirstName": "ky1lxs",
    "email": "xfmynl",
    "Address": "s7i7q2"
  },
  {
    "UserID": "z3jg2s",
    "FirstName": "10cwqm",
    "email": "3410t8",
    "Address": "vt5bjk"
  },
  {
    "UserID": "vxw",
    "FirstName": "h08kdl",
    "email": "xefazb",
    "Address": "tcgs1"
  },
  {
    "UserID": "7mk08a",
    "FirstName": "xhtob",
    "email": "mtzcr",
    "Address": "0prv3q"
  },
  {
    "UserID": "dey3ka",
    "FirstName": "mrbkc4",
    "email": "89dy9i",
    "Address": "23yzc"
  },
  {
    "UserID": "7mh2cq",
    "FirstName": "2qu99i",
    "email": "y7fqum",
    "Address": "gzwfl8"
  },
  {
    "UserID": "yglzfi",
    "FirstName": "hfv68e",
    "email": "eqdnti",
    "Address": "xgnn84"
  },
  {
    "UserID": "wy56n9",
    "FirstName": "j52djp",
    "email": "guwlld",
    "Address": "s823yb"
  }
]; // Dummy data for the table

  const filters: Filter[] = [
  {
    "field": "UserID",
    "value": ""
  },
  {
    "field": "FirstName",
    "value": ""
  },
  {
    "field": "email",
    "value": ""
  },
  {
    "field": "Address",
    "value": ""
  }
]; // Dynamically applied filters

  return <DynamicTable columns={columns} data={data} filters={filters} />;
};

export default GeneratedTable_43dffcf7_e36c_48ca_b2a0_80e978c3e459;
