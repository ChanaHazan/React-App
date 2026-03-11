
import { Provider } from 'react-redux'
import './App.css'
import Input from './components/Input'
import Messege from './components/Messege'
import store from './state/store'


function App() {

  return (
    <>
      <Provider store={store}>
        <Input/>
        <Messege/>
      </Provider>
    </>
  )
}

export default App
