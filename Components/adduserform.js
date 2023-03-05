import { useReducer } from "react"
import Success from "./success"
const formReducer=(state,event)=>{
return{
    ...state,
    [event.target.name]:event.target.value
}
}
export default function AddUserForm() {

    const[formData,setFormData]=useReducer(formReducer,{})

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0) return console.log("Don't have Form Data")
        console.log(formData)
    }

    if(Object.keys(formData).length>0) return <Success message={"Data Added"}></Success>
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text"onChange={setFormData} name="username" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Username"></input>
            </div>
            <div className="input-type">
                <input type="text"onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email"></input>
            </div>
            <div className="input-type">
                <input type="text"onChange={setFormData} name="phoneno" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact"></input>
            </div>
            <div className="input-type">
                <input type="text"onChange={setFormData} name="company" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Company"></input>
            </div>


            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Add
            </button>
        </form>
    )
}