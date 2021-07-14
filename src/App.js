import './App.css';
import 'antd/dist/antd.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from './component/header';
import { Footer } from './component/footer';
import { Page1 } from './component/page1';
import { About } from './component/about';
import { Corporate } from './component/corporate';
import { Map } from './component/map';
import { Contact } from './component/contact';
import { Phenyl } from './component/phenyl';
import { Toilet } from './component/toilet';
import { Glass } from './component/glass';
import { Hand } from './component/hand';
import { Floor } from './component/floor';
import { Hdpe } from './component/hdpe';
import { Dishwash } from './component/dishwash';
import { Liquid } from './component/liquid';
import { Cleaner } from './component/cleaner';
import { Tab } from './component/tab';
import { Naphthalene } from './component/naphthalene';
import { Page3 } from './component/page3';
import { Page4 } from './component/page4';

 
function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Header />
      </Layout>

      <Layout className="main">
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/corporate">
            <Corporate />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/phenyl">
            <Phenyl />
          </Route>
          <Route path="/toilet">
            <Toilet />
          </Route>
          <Route path="/glass">
            <Glass />
          </Route>
          <Route path="/hand">
            <Hand />
          </Route>
          <Route path="/floor">
            <Floor />
          </Route>
          <Route path="/hdpe">
            <Hdpe />
          </Route>
          <Route path="/dishwash">
            <Dishwash />
          </Route>
          <Route path="/liquid">
            <Liquid />
          </Route>
          <Route path="/cleaner">
            <Cleaner />
          </Route>
          <Route path="/tab">
            <Tab />
          </Route>
          <Route path="/naphthalene">
            <Naphthalene />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/page4">
            <Page4 />
          </Route>

        </Switch>
      </Layout>

      <Layout>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
