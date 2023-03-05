import AddUserForm from "./adduserform"
import UpdateUser from "./updateuser";
 

export default function Form() {

    const flag=true;

    return( 
        <div className='container mx-auto py-5'>
            {flag?<AddUserForm/>:<UpdateUser/>}
            </div>
    )
}
