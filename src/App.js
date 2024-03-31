import { BrowserRouter as Switch, Route,Routes } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Switch } from 'react-router';

import Header from './components/Header';
import Landing from './components/landing/Landing';
import Auth from './components/auth/Auth';
import Basics from './components/basics/Basics';
import EditBasics from './components/basics/EditBasics';
import Meals from './components/meals/meals/Meals';
import AddMeal from './components/meals/AddMeal';
import EditMeal from './components/meals/EditMeal';
import DeleteMeal from './components/meals/DeleteMeal';

function App(props) {
  function renderUserRoutes() {
    if (props.isSignedIn) {
      return (
        <>
          <Route path='/basics' element={<Basics />} />
          <Route path='/basics/edit' element={<EditBasics />} />

          <Route path='/meals' element={<Meals />} />
          <Route path='/meals/new' element={<AddMeal />} />
          <Route path='/meals/edit/:id' element={<EditMeal />} />
          <Route path='/meals/delete/:id' element={<DeleteMeal />} />
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <section className='section'>
     

      <section className='section'>
       
          <Switch>
          <Header />
            <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path='/signup' element={<Auth page='signup' />} />
            <Route path='/login' element={<Auth page='login' />} />
            {renderUserRoutes()}
            {/* Add a default route here if needed */}
            </Routes>
          </Switch>
        
      </section>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
}

export default connect(mapStateToProps)(App);
