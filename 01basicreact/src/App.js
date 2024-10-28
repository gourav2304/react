import React, {Component, Fragment, PureComponent} from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import Lifecycle from './components/Lifecycle';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components2/ClickCounter';
import HoverCounter from './components2/HoverCounter';
import ClickCounter2 from './components2/ClickCounter2';
import HoverCounter2 from './components2/HoverCounter2';
import Counter2 from './components2/Counter2';
import ComponentC from './components2/ComponentC';
import { UserProvider} from './components2/userContext'
import PostList from './components2/PostList';
import PostForm from './components2/PostForm';
import HookCounter from './reactHooks/HookCounter';
import HookCountertwo from './reactHooks/HookCountertwo';
import HookCounterthree from './reactHooks/HookCounterthree';
import HookCounterFour from './reactHooks/HookCounterFour';
import HookCounterOneUE from './reactHooks/HookCounterOneUE';
import HookMouse from './reactHooks/HookMouse';
import MouseContainer from './reactHooks/MouseContainer';
import IntervalHookCounter from './reactHooks/IntervalHookCounter';
import DataFetching from './reactHooks/DataFetching';

class App extends Component {
  render(){
    return (
      <div className='App'>
       
        {/* <DataFetching/> */}
        {/* <IntervalHookCounter/> */}
        {/* <MouseContainer/> */}
        {/* <HookMouse/> */}
        {/* <HookCounterOneUE/> */}
        {/* <HookCounterFour/> */}
        {/* <HookCounterthree/> */}
        {/* <HookCountertwo/> */}
        {/* <PostForm/> */}
        {/* <PostList /> */}
        {/* <UserProvider value='Gourav'>
          <ComponentC/>
        </UserProvider> */}
        {/* <Counter2 >
        {(count, incrementCount)=> (
        <ClickCounter2 count={count} incrementCount={incrementCount}/>
        )}
        </Counter2> */}
        {/* <Counter2> 
        {(count, incrementCount)=> (
        <HoverCounter2 count={count} incrementCount={incrementCount}/>
        )}
        </Counter2> */}
        {/* <HoverCounter2/>
        <ClickCounter2/>
        <User render={(isLoggedIn )=>isLoggedIn ? 'Gourav': 'Guest'}/> */}
        {/* <HoverCounter name='Gourav'/> */}
         {/* <ClickCounter name='Gourav'/> */}
        {/* <ErrorBoundary>
        <Hero heroname='Batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname='Superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname='joker'/>
        </ErrorBoundary> */}
       
        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp/> */}
        {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
      </div>


      // <div>
      //   {/* <Lifecycle/> */}
      //   {/* <Form/> */}
      //   {/* <NameList/> */}
      //   {/* <UserGreeting/> */}
      //   {/* <ParentComponent/> */}
      //   {/* <EventBind /> */}
      //   {/* <ClassClick /> */}
      //   {/* <FunctionClick /> */}
      //   {/* <Counter /> */}
      //   {/* <Message/> */}
      //   {/* <Hello /> */}
      //   {/* <Greet name='Bruce' heroName="Batman" > */}
      //   {/*  this <p> tag children tag so use {props.children} in app.js
      //     <p>This is children props</p> 
      //     </Greet> */}
          
      //   {/*  <Greet name="Clark" heroName="Superman"> */}
      //      {/*  this <p> tag children tag so use {props.children} in app.js */}
      //   {/*    <button>Action</button> */}
      //   {/*  </Greet> */}
      //    {/* <Greet name="Diana" heroName="Wonder woman"></Greet> */}
        
      //    {/* <Welcome name='Bruce' heroName="Batman"/> */}
      //   {/*  <Welcome name="Clark" heroName="Superman"/> */}
      //   {/*  <Welcome name="Diana" heroName="Wonder womanin"/> */}
      // </div>
        
    
    );
  }
}

export default App;

