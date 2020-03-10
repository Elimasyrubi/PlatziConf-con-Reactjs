import React from 'react';
import './styles/BadgeEdit.css'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component{
state = { form: {
  loading: true,
  error: null,
  firstName:'',
  lastName:'',
  email:'',
  jobTittle:'',
  twitter:''
} };

componentDidMount(){
  this.fetchData()
}
fetchData= async e => {
  this.setState({loading:true, error:null})
  
  try{

    const data = await api.badges.read( this.props.match.params.badgeId) /* esto busca el id y  acorta el link */
    this.setState({loading:false, form: data})
  } catch (error){
    this.setState({loading:false, error:error})
  }
}



handleSubmit = async e => {
  e.preventDefault()
  this.setState({ loading:true, error:null})
  try{
    await  api.badges.update(this.props.match.params.badgeId,this.state.form)
    this.setState({ loading:false})
    this.props.history.push('/badges') /* Redirige a la pagina de badges cuando se hace submit */

  } catch (error){
    this.setState({ loading:false, error:error})
  }


}

handleChange = e => {
  this.setState({
    form :{
      ...this.state.form,
      [e.target.name]: e.target.value,
    }
  });

}

  render(){
    if(this.state.loading){
      return <PageLoading/>
    }



    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid BadgeEdit__hero-image" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
               firstName={this.state.form.firstName || 'FirstName'}
               lastName={this.state.form.lastName || 'LastName'}
               twitter={this.state.form.twitter || 'Twiiter'}
               jopTittle={this.state.form.jobTittle || 'JobTittle'}
               email={this.state.form.email || 'email'} 
               avatarUrl="https://avatars2.githubusercontent.com/u/56408197?s=460&v=4"/>
            </div>
            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}/>
            </div>
          </div>
        </div>
      </React.Fragment>
   )
  }
}
export default BadgeEdit;


