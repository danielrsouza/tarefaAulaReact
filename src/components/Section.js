import React from 'react';
import { Route, Switch, useRouteMatch, Link, useParams} from 'react-router-dom';


function Section() {
    return(
        <section id="section" className="container">
              <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/sobre">
                    <Sobre />
                </Route>
                <Route  path="/produtos">
                    <Produtos />
                </Route>
                <Route exact path="/contatos">
                    <Contato />
                </Route>
                <Route exact path="/formulario">
                    <Formulario />
                </Route>
              </Switch>
        </section>
    );
}

export default Section


function Formulario(){
    return(
        <>
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" placeholder="nome" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="email" />
            </div>
            <div class="form-group">
                <label for="telefone">Telefone</label>
                <input type="number" class="form-control" id="telefone" placeholder="telefone" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Enviar</button>
        </form>
        </>
    );
}

function Categoria(){
    let {id} = useParams();
    return(
        <>
        <h3>Categoria {id}</h3>
        </>
    );
}


function Home(){
    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div class="col-sm-10">
                <h1>Bem Vindo!</h1>
            </div>
            <div className="col-sm-1"></div> 
        </div>
        
    );
}

function Sobre(){
    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div class="col-sm-10">
                <h1>Sobre</h1>
            </div>
            <div className="col-sm-1"></div> 
        </div>
        
    );
}

function Produtos(){
    let {path, url} = useRouteMatch();
    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div class="col-sm-10">
                <h1>Produtos</h1>
           
           <ul className="navbar-nav">
               <li className="nav-item">
                   <Link className="nav-link" to={`${url}/1`}>Cat 1</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to={`${url}/2`}>Cat 2</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to={`${url}/3`}>Cat 3</Link>
               </li>
           </ul>

           <Switch>
                <Route exact path={path}>
                        <h1>Selecione uma Categoria</h1>
                </Route>

                <Route path={`${path}/:id`}>
                    <Categoria />
                </Route>
            </Switch>




            </div>
            <div className="col-sm-1"></div> 
        </div>
        
    );
}

function Contato(){
    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div class="col-sm-10">
                <h1>Contato</h1>
            </div>
            <div className="col-sm-1"></div> 
        </div>
        
    );
}

// export default Home