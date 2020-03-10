import React from 'react'
import Navbar from '../components/Navbar'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import {Link} from 'react-router-dom'
import api from '../api'

class Badges extends React.Component{
  state = {
    loading:true,
    error:null,
    data: undefined,
  };

componentDidMount(){
  this.fetchData ()
 
  this.intervalId = setInterval(this.fetchData,5000); /* recarga la pagina cada 5s pero debe tener el && !this.state.data en el fetch */

}

componentWillMount(){
  clearInterval(this.intervalId) /* Con esto evitamoe que el intervalo siga trabajando cuando se cambie la pagina o el omponente */
}


fetchData= async()=> {
  this.setState({loading:true && !this.state.data, error:null})
  try {
    const data= await api.badges.list()
    this.setState({loading: false, data: data})
  } catch (error){
    this.setState({loading: false, error: error})

  }
}
    render(){
      if(this.state.loading === true){
        return <PageLoading/>      }
      if(this.state.error){
        return <PageError error={this.state.error}/>
      }
      
      return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className=" btn btn-primary"> New Badge </Link>
          </div>     
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}/>
          
          </div>     
        </div>

      </React.Fragment>

     

    )
  }
}

export default Badges;
