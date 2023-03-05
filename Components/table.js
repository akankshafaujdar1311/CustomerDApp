import {BiEdit,BiTrashAlt} from 'react-icons/bi';
import data from '../database/data.json'
export default function Table() {
    return (
        <table className="min-w-full table auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Username</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">E-mail</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Phone No.</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Company</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
            {
                data.map((obj,i)=><Tr {...obj} key={i}/>)
            }
            </tbody>
        </table>
    )
}

function Tr({username,email,phoneno,company}){
    return(
        <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold">
              {username||"Unknown"}
            </span>
        </td>
        <td className="px-16 py-2">
            <span>
             {email||"Unknown"}
            </span>
        </td>
        <td className="px-16 py-2">
            <span>
                {phoneno||"Unknown"}
            </span>
        </td>
        <td className="px-16 py-2">
            <span>
               {company||"Unknown"}
            </span>
        </td>
        <td className="px-16 py-2 flex justify-around gap-5">
      <button className='cursor'><BiEdit size={20} color={"rgb(34,197,94)"} /></button>
      <button className='cursor'><BiTrashAlt size={20} color={"rgb(244,63,94)"} /></button>
        </td>
    </tr>
    )
}
