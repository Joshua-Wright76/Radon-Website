import React from 'react';  
import { Switch, Route, Redirect } from 'react-router-dom';
import IntroductionComponent from './motivation/IntroductionComponent';
import DeepDiveComponent from './motivation/DeepDiveComponent';
import StateNode from './APIRefrence/StateNode.jsx';
import QuickStartComponent from './gettingStarted/quickStartComponent';
import NestedObjectsComponent from './gettingStarted/nestedObjectsComponent';
import AsyncModifiersComponent from './gettingStarted/asyncModifiersComponent';
import ReactGuideComponent from './gettingStarted/reactGuideComponent';

const DocsTextComponent = (props) => { 
  return (
    <div id='docs-text-component'>
      <Switch>
        <Route exact path='/docs/introduction' component={IntroductionComponent}></Route>
        <Route exact path='/docs/deep-dive' component={DeepDiveComponent}></Route>
        <Route exact path='/docs/quick-start' component={QuickStartComponent}></Route>
        <Route exact path='/docs/react-guide' component={ReactGuideComponent}></Route>
        <Route exact path='/docs/nested-objects' component={NestedObjectsComponent}></Route>
        <Route exact path='/docs/async-modifiers' component={AsyncModifiersComponent}></Route>
        <Route exact path='/docs/stateNode' component={StateNode}></Route>
        <Redirect from='/docs' to='/docs/introduction'></Redirect>
      </Switch>
    </div>
  )
}

export default DocsTextComponent;