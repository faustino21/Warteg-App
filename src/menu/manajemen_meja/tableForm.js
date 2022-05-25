import { useState } from "react";
import { connect } from "react-redux";
import TableAction from "../../redux/table/tableAction";

const TableForm = (props) => {
    const [table, setTable] = useState({
        id : '',
        table : '',
        status : ''
    })

    const handleChange = (e) => {
        setTable({
            ...table,
            [e.target.name] : e.target.value 
        }, console.log(e.target.name, e.target.value))
    }

    const handleSubmit = () => {
        props.submit(table)
        props.toForm(false)
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
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
               </select>
            </div>
            <div className='row'>
            <button type='button' className='btn btn-primary mx-2 my-1' style={{width: "20%"}} onClick={()=>props.toForm(false)}>CANCEL</button>
            <button type='submit' className='btn btn-primary mx-2 my-1' style={{width: "20%"}}>Submit</button>    
            </div>             
        </form>
        </>
    )
}

 const mapDispatchToProps = (dispatch) => {
    return {
        toForm : (data) => dispatch({
            type : TableAction.NAV_TO_FORM,
            payload : data
        }),

        submit : (data) => dispatch({
            type : TableAction.ADD_TABLE,
            addTable : data
        })

    }
 }

export default connect(null, mapDispatchToProps)(TableForm);