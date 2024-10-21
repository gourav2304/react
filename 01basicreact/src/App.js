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
class App extends Component {
  render(){
    return (
      <div className='App'>
        <FRParentInput/>
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

