import Botao from "../components/Botao";
import CamposPesquisa from "../components/CamposPesquisa";

export default function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo à página inicial!</h1>
            <p>Esta é a página de boas-vindas do nosso aplicativo React.</p>
            <div className="flex items-center justify-between">
                <CamposPesquisa />
                <Botao text="Clique aqui" />
            </div>

        </div>


    );
}