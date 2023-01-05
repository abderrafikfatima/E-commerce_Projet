import { Component } from "react";


class  Default extends Component{
   
    render() {
        console.log(this.props)   
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h2>error</h2>
                        <h2>Cette page est inaccessible. Désolé.</h2>
                        <h3>oops no requested URL  <span className="text-danger">{window.location.pathname} </span>{" "} Essayez d'effectuer une autre recherche.</h3>

                    </div>
                </div>
            </div>
        )
    }
    
}

export default Default;