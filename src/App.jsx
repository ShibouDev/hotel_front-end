import {Router, Route, Switch} from './components/Router';
import {Index, Room, RoomsPages, About, FeedbackContainer, TermsContainers, RegisterContainer, ProfileContainers,
IndexContainer, SettingsContainer, LoginContainer, RoomsContainer  } from './pages/Pages'
import styled from './App.css'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/room/:id" component={Room}/>
        <Route exact path="/rooms" component={RoomsPages}/>
        <Route exact path="/aboutus" component={About}/>
        <Route exact path="/profile" component={ProfileContainers}/>
        <Route exact path="/feedback" component={FeedbackContainer}/>
        <Route exact path="/terms" component={TermsContainers}/>
        <Route exact path="/register" component={RegisterContainer}/>
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/admin" component={IndexContainer}/>
        <Route exact path="/admin/settings" component={SettingsContainer}/>
        <Route exact path="/admin/rooms" component={RoomsContainer}/>
      </Switch>
    </Router>
  )
}
export default App;
