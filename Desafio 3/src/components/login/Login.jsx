import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"

function Login (){
    return(
        <main>
            <div className="capa">
                <img src={Capa} alt="" />
            </div>
            <section className="login__container">
                <img src={Logo} alt="" />
                <h1>Boas vindas ao Novo Portal SISPAR</h1>
                <form action="">
                    <input type="email" name="email" id="iemail" placeholder="Email" />
                    <input type="password" name="senha" id="isenha" placeholder="Senha" />
                    <p><a href="">Esqueci minha senha</a></p>
                    <div className="botoes-container">
                        <button className="botoes">
                            <a href="">
                                Entrar
                            </a>
                        </button>
                        <button>
                            <a href="">
                                Criar conta
                            </a>
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login