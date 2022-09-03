import {useState} from 'react';

const Feedback = () =>{

    const [data, setData] = useState([{
        usrname: '',
        dept: '',
        rate: '',
    }])
    const [details, setDetails] = useState([]);
    const [display, setDisplay] = useState(true);
    const [head, setHead] = useState("EMPLOYEE FEEDBACK FORM")

    const nameEvent = (e) => {
        
        setData({ ...data, [e.target.name]: e.target.value })
        
    }
    const Submited = (e) => {
        e.preventDefault()
        const newData = { ...data, id: new Date().getTime().toString() }
        
        setDetails([...details, newData])
        console.log(details);
        setHead("EMPLOYEE FEEDBACK LIST")
        setDisplay(false)
        setData("")
    }

    const Goback = () => {
        setDisplay(true)
        setHead("EMPLOYEE FEEDBACK FORM")
    }





    return(
        <>
        <div className="Container"><h1>{head}</h1><hr /></div>
            {display ?
                <form onSubmit={Submited}>
                    <div className="Input_tag">
                        <label>Name: </label>
                        <input
                            type="text"
                            onChange={nameEvent}
                            value={data.usrname}
                            name='name'
                            required
                        />
                        <br /><br />
                        <label className="dept">Department: </label>
                        <input
                            type="text"
                            onChange={nameEvent}
                            value={data.dept}
                            name='dept'
                            required
                        /><br /><br />
                        <label>Rating: </label>
                        <input
                            type="number"
                            onChange={nameEvent}
                            value={data.rate}
                            name='rate'
                            required
                            min={0}
                            max={50}
                            /><br />
                    </div>
                    <button onClick={Submited} className='Submit'> Submit</button>
                </form> : 
                
                <div>
                <div className="Showcontainer">
                    {
                        details.map((e) => {
                            return (
                                <>
                                    <div className="ShowData">
                                        <p>Name: {e.name}</p>
                                        <p>Department: {e.dept}</p>
                                        <p>Rating: {e.rate}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            <span>
                <button onClick={Goback} className="Goback">Go Back</button>
            </span>
                </div>
            }
      













        </>












    )










}
export default Feedback;