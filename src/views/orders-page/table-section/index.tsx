import React, { useMemo } from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedDataSelector } from '../../../store/reducers/order-reducer';


const columns = [
  {
  title:'Order ID', field:'order_Id'
  }, 
  {
  title:'Vendor Name', field:'vendor_name'
  }, 
  {
  title:'PickUp date', field:'pickup_date'
  }, 
  {
  title:'Status', field:'status'
  }
] 

const TableSection = () => {
  const defaultMaterialTheme = createTheme();
  const dispatch = useDispatch()
  const tableData = useSelector(fetchedDataSelector)

  // const data:{[key:string]:string}[] = useMemo(() => tableData, [tableData] )  

  return (
    <section>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable title='List Of Orders'
          data={tableData}
          columns={columns}
          options={{
            search:true,
            filtering:true,
            paging:true,
            sorting:false,
            pageSize: 10,
          }
          }
        />
    </ThemeProvider>

   </section>
  )
}

export default TableSection