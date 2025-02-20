import { useState } from "react";

const BasicForm = () => {

    const [dataForm, setdataForm] = useState({
        cep:'',
        rua:'',
        numero:'',
        complemento:'',
        bairro:'',
        cidade:'',
        estado:'',
    })
  
    
    const cepAutomatico = (e) => {
    const [dataForm, setdataForm] = useState()
        
        
    }


    return ( 
        <div id="container" className="font-bold h-screen flex items-center justify-between bg-neutral-200">
          
            <div id="esquerda" className="bg-[#121212] px-10 py-10 h-screen lg:w-[50%]  text-center text-neutral-200">
                <h2>Esquerda</h2>
            </div>

            <div id="direita" className="bg-[#666262] px-10 py-10  h-screen lg:w-[50%] w-full text-neutral-900 text-center">
        
                <form action="#" className="flex flex-col  items-center px-5  gap-1 text-white border-none ">
                    <label className="text-left w-full" htmlFor="cep">CEP</label>
                    <input 
                    onChange={cepAutomatico}
                    name="cep" 
                    placeholder="cep" 
                    type="text" 
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 "/>

                    <label className="text-left w-full" htmlFor="rua">Rua</label>
                    <input 
                    name="rua" 
                    type="text" 
                    placeholder="Rua"
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 "/>

                    <label className="text-left w-full" htmlFor="numero">Numero</label>
                    <input 
                    name="numero" placeholder="000" 
                    type="text" 
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 "/>

                    <label className="text-left w-full" htmlFor="complemento">Complemento (opcional)</label>
                    <input 
                    name="complemento" placeholder="Apto,Bloco" 
                    type="text" 
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 "/>

                    <label className="text-left w-full" htmlFor="bairro">Bairro</label>
                    <input 
                    name="bairro" 
                    type="text" 
                    placeholder="Bairro"
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 "/>

                    <label className="text-left w-full" htmlFor="cidade">Cidade</label>
                    <input 
                    name="cidade" 
                    type="text" 
                    placeholder="Cidade"
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 "/>

                    <label className="text-left w-full" htmlFor="estado">Estado</label>
                    <input 
                    name="estado" 
                    type="text" 
                    placeholder="UF"
                    className="bg-[#323232] rounded-md  border-2 border-[#323232] focus:border-neutral-400  pl-4 h-10 w-full focus:outline-none hover:border-neutral-400 mb-2"/>

                    <button 
                    type="submit" 
                    className="bg-white text-black p-1  rounded-xl  hover:cursor-pointer w-full hover:opacity-70 transition duration-200 ">
                        Confirmar
                    </button>
                </form>
            </div>


        </div>
     );
}
 
export default BasicForm;