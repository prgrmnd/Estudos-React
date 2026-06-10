import Botao from "../components/Botao";

export default function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo à página inicial!</h1>
            <p>Esta é a página de boas-vindas do nosso aplicativo React.</p>

            <Botao text="Clique aqui"/>
        </div>
    );
}