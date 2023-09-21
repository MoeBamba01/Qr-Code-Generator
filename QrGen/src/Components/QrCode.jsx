import { useContext } from "react";
import { InputContext } from "../App";


const QrCode = () => {

    const { response, loading, error } = useContext(InputContext);
        console.log(response);

        if(loading){
            return(
                <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
                    <div className="h-32 w-Full bg-gray-300"></div>
                    <div className="h-8 w-Full bg-gray-300"></div>
                </div>
            );
        }
        if(error) {
            return <div className=" text-gray-500 flex items-center ">Sorry Something Went Wrong</div>
        }


  return (
    <div className="bg-gray-100 rounded-md flex flex-col items-center justify-center">
        {response ? <div>
                <img src={response} alt="QRCode" />
                <button
                className="bg-blue-400 text-white mt-2 px-4 py-1 w-full "
                >Download</button>
            </div> 
            : (
            <div className="text-gray-500">You QrCode will show here...</div>
        )}
            
    </div>
  )
}

export default QrCode