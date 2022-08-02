import React from "react"
import "./ProductsList.css"
import { DataGrid } from "@mui/x-data-grid";
import { UserData } from "../../Data";
import { UserRows } from "../../Data";


const ProductsList = () => {
  return (
    <>
      <div className='ProductsList'>
        <DataGrid rows={UserData} disableSelectionOnClick columns={UserRows} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
      </div>
    </>
  )
}

export default ProductsList
