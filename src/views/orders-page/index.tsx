import React, {useEffect} from 'react'
import classes from './index.module.css'
import TableSection from './table-section'
import { fetchTableData } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchingErrorSelector } from '../../store/reducers/order-reducer'
import DisplayError from '../../utils/DisplayError'

const Orderpage = () => {
  const dispatch = useDispatch()
  const fetchTableDataFunc = bindActionCreators(fetchTableData, dispatch)
  const fetchedError = useSelector(fetchingErrorSelector)
  useEffect(()=> {
    fetchTableDataFunc()

  }, [])

  if(fetchedError){
    return  <DisplayError errorMessage={fetchedError}/>
  }

  return (
    <section className={classes['genre-panel']}>
      <TableSection/>
    </section>
  )
}

export default Orderpage