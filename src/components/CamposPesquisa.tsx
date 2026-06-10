import { Search } from 'lucide-react'

export default function CamposPesquisa() {
    return (
        <div>
            <input className="bg-gray-200 px-4 py-2 rounded" type="text" placeholder="Digite sua pesquisa..." />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-5 py-2 px-4 rounded cursor-pointer">
                <Search size={20} color="white" />
            </button>
        </div>
    );
}