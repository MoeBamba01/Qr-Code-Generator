import { createContext, useState } from "react"
import InputForm from "./Components/InputForm"
import QrCode from "./Components/QrCode"

export const InputContext = createContext();

function App() {

const [inputValue, SetInputValue] = useState({
  url: '',
  color: '',

});
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    //  API d4691f80-5893-11ee-ab13-63fc7137c4ca
    const config = {
      Headers: { Authorization : 'Bearer d4691f80-5893-11ee-ab13-63fc7137c4ca'}
    }

    const bodyParameters = {
        "colorDark": inputValue.color,
        "qrCategory": "url",
        "text": inputValue.url
      }
      const getQrCode = async () => {
        try {
          setLoading(true);
          const res = await axios.post(
            'hhttps://qrtiger.com/api/qr/static',
            bodyParameters,
            config
          );
          console.log('Response from API:', res.data); // Log the response
          setResponse(res.data.url);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      const value = {
        inputValue,
        SetInputValue,
        getQrCode,
        response,
        loading,
        error
      }


      return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow"> 
      <div className="md:grid md:grid-cols-3">
        <InputContext.Provider value={value}>
        <InputForm/>
        <QrCode/> 
        </InputContext.Provider>

      </div>
      </div>
    </div>
  )
}

export default App
