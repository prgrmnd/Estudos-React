type BotaoProps = {
    text: string;

}

export default function Botao({ text }: BotaoProps) {
    return (

       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-5 py-2 px-4 rounded cursor-pointer"> {text}</button>
            );
}