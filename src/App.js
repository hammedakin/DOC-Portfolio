import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AdminNav from './components/Navbar/AdminNav'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import CaseStudyPage from './pages/CaseStudyPage'
import ArticlesPage from './pages/ArticlesPage'
import AboutPage from './pages/AboutPage'
import CaseStudyPricist from './components/CaseStudyPricist/CaseStudyPricist'
import CaseStudyProductivity from './components/CaseStudyProductivity/CaseStudyProductivity'
import PageNotFound from './PageNotFound'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import Demo from './components/ddd'



function App() {

  let Nav
  if(localStorage.getItem('token')){
    Nav=<AdminNav/>
  }
  else{
    Nav=<Navbar/>
  }

  
  return (
    <BrowserRouter>
    {Nav}

      <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/case-study" component={CaseStudyPage}/>

        <Route exact path="/articles" component={ArticlesPage}/>

        <Route exact path="/about" component={AboutPage}/>

        <Route exact path="/case-study1" component={CaseStudyPricist}/>
        
        <Route exact path="/case-study2" component={CaseStudyProductivity}/>

        <Route exact path="/demo" component={Demo}/>
        
        <Route exact path="/admin" component={Login}/>

        <Route exact path="/adminpage" component={Admin}/>

        <Route exact path="*" component={PageNotFound}/>




      </Switch>

      
    <Footer/>

     
    </BrowserRouter>
  );
}

export default App;
