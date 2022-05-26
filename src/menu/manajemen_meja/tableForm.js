import { useState } from "react";
import { useDispatch } from "react-redux";
import TableAction from "../../redux/table/tableAction";

const TableForm = () => {
    
    const dispatch = useDispatch()
    const [table, setTable] = useState({
        id : '',
        table : '',
        status : true
    })

   const toTableList = () => {
       dispatch({type : TableAction.NAV_TO_FORM, payload : false})
   }

    const handleChange = (e) => {
        setTable(previousState =>{
            return {...previousState, [e.target.name] : e.target.value}
        })
    }

    const handleSubmit = (e) => {
        dispatch({type : TableAction.ADD_TABLE, addTable : table})
        dispatch({type : TableAction.NAV_TO_FORM, payload : false})
        e.preventDefault()
    }


    return(
        <>        
        <form className='d-flex flex-column justify-content-center text-center' onSubmit={handleSubmit}>
            <h1 className='fs-3 fw-6'>ADD TABLE</h1>
            <div className='m-2'>
                <input name='id' type='text' className="form-control" placeholder="Id" onChange={handleChange}  required/>   
            </div>
            <div className='m-2 justify-self-start'>
                <input name='table' className="form-control" type='text' placeholder="Name"  onChange={handleChange} required/>
            </div>
            <div className='m-2 justify-self-start'>
               <select name="status" onChange={handleChange}>
                    <option value={true}>Available</option>
                    <option value={false}>Unavailable</option>
               </select>
            </div>
            <div className='row'>
            <button type='button' className='btn btn-primary mx-2 my-1' style={{width: "20%"}} onClick={toTableList}>CANCEL</button>
            <button type='submit' className='btn btn-primary mx-2 my-1' style={{width: "20%"}}>Submit</button>    
            </div>             
        </form>
        </>
    )
}


export default TableForm;