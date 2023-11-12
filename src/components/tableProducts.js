import { Paper } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { svgPlus } from './svgs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { buttonTopTable } from './data/dataButtonTopTable';


export default function TableProducts() {
  const [columns, setColumns] = useState([
    { id: 'column1', name: 'Id', visible: true },
    { id: 'column2', name: 'Images', visible: true },
    { id: 'column3', name: 'Name', visible: true },
    { id: 'column4', name: 'Status', visible: true },
    { id: 'column5', name: 'Tags', visible: true },
    { id: 'column6', name: 'Sku', visible: true },
    { id: 'column7', name: 'Users', visible: true },
    { id: 'column8', name: 'Price', visible: true },
    { id: 'column9', name: 'Sale Price', visible: true },
  ]);

  const [additionalColumns, setAdditionalColumns] = useState([
    { id: 'column10', name: 'Description', visible: false },
    { id: 'column11', name: 'linked products', visible: false },
    { id: 'column12', name: 'Product gallery', visible: false },
    { id: 'column13', name: 'inventory', visible: false },
    { id: 'column14', name: 'Shipping', visible: false },

  ]);

  const handleAddColumns = () => {
    if (columns.length < 10) {
      setColumns([...columns, ...additionalColumns]);
    }
  };

  const handleCheckboxChange = (columnId) => {
    const updatedColumns = columns.map((column) =>
      column.id === columnId ? { ...column, visible: !column.visible } : column
    );
    const updatedMorColumns = additionalColumns.map((column) =>
    column.id === columnId ? { ...column, visible: !column.visible } : column
  );
    setColumns(updatedColumns);
    setAdditionalColumns(updatedMorColumns)
   
  };
  const [rows, setRows] = useState([
    { id: 1, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 2, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 3, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 4, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 5, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 6, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 7, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },
    { id: 8, img: "https://nammal-sleep.co.il/wp-content/uploads/2022/07/Nammal_Bed_Tzvita_004-1407.webp", name: 'Louis Vuitton', status: "active", tag: "Bravo", Sku: "9177", user: "Evan Flores", price: "$452.85", SalePrice: "$407.20", description: "perfume", checked: false },

  ]);
  const [selectAll, setSelectAll] = useState(false);
  const toggleCheckbox = (row) => {
    const updatedRows = rows.map((r) => {
      if (r.id === row.id) {
        return { ...r, checked: !r.checked };
      }
      return r;
    });

    setRows(updatedRows);
  };

  useEffect(() => {

  }, [])

  const toggleSelectAll = () => {
    const updatedRows = rows.map((row) => ({ ...row, checked: !selectAll }));
    setRows(updatedRows);
    setSelectAll(!selectAll);
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };
  return (

    <div>
          <div className="products-inner">
                    <div className="filter-parent">
                        <div style={{ margin: 0 }} className="filter ">
                            <select style={{ border: "none" }} className="div">
                                <option value="">All</option>
                            </select>
                            <div className="counter15" />
                            <img className="icon1" alt="" src="/union.svg" />
                        </div>
                        <div className="search6">
                            <div className="counter15" />
                            <div className="search7">
                                <div>
                                    <input className="in-search" style={{ border: "none" }} placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-coupons-parent">
                    {buttonTopTable.map((item) => (
                        <div key={item.name} className="button-coupons">
                            <div className="buttonmediumprimary-icon-lef">
                                <div className="table-title">{item.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
      <Paper sx={{ m: 1, mt: 2 }}>
        <div className="table-container">
          <table className="fixed-width-table">
            <thead>
              <tr>
                <th style={{ width: "10px" }}> <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                /></th>
                {columns.map((column) => (
                  column.visible && <th key={column.id}>{column.name}</th>
                ))}
                <th>
                  <button
                  className='button-notBorder '
                  onClick={() => {
                    handleButtonClick();
                    handleAddColumns()
                  }}
                  >{svgPlus}</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {

                return (
                  <tr >
                    <td> <input
                      type="checkbox"
                      checked={row.checked}
                      onChange={() => toggleCheckbox(row)}
                    /></td>
                    <td>{row.id}</td>
                    <td><img src={row.img} alt="te" width={50} /></td>
                    <td> {row.name}</td>
                    <td className='status-td'><div className="badge
                     status-wrapper ">{row.status}</div></td>
                    <td> {row.tag}</td>
                    <td> {row.user}</td>
                    <td>{row.Sku}</td>
                    <td> {row.price}</td>
                    <td> {row.SalePrice}</td>
                    {columns[9] && columns[9].visible && <td>{row.description}</td>}

                  </tr>
                );
              })}
            </tbody>
          </table>
          {showPopup && (
            <div className="popup shadow">
              <div className='mor-columns'>
                {additionalColumns.map((column) => (
             
                      <div className='mor-colum'>
                        <input
                      type="checkbox"
                      checked={column.visible}
                      onChange={() => handleCheckboxChange(column.id)}
                    />
                     <strong>{column.name}</strong> 
                      </div>
                 
                ))}
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </Paper>
    </div>
  )
}
