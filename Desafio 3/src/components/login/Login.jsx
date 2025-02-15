import { useNavigate } from "react-router-dom"

import Capa from "../../assets/TelaLogin/imagem_tela_de_login.png"
import Logo from "../../assets/TelaLogin/logo_ws.png"

import style from "./Login.module.scss"

function Login (){
    const navigate = useNavigate()

    const irParaReembolsos = () => {
        navigate("/reembolsos") 
    }

    return(
        <main>
            <section className={style.capa}>
                <img src={Capa} alt="" />
            </section>
            <section className={style.login__container}>
                <img src={Logo} alt="" />
                <div className={style.login__titulo}>
                    <h1>Boas vindas ao Novo Portal SISPAR</h1>
                    <h2>Sistema de Emissão de Boletos e Parcelamento</h2>
                </div>
            
                <form action="">
                    <input type="email" name="email" id="iemail" placeholder="Email" />
                    <input type="password" name="senha" id="isenha" placeholder="Senha" />
                    <p><a href="">Esqueci minha senha</a></p>
                    <div className={style.botoes__container}>
                        <button className={style.entrar} onClick={irParaReembolsos}>
                                Entrar
                        </button>
                        <button className={style.criar__conta}>
                                Criar conta
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login