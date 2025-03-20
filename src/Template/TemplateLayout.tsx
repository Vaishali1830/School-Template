import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer2 from './Sections/Footer2'

const TemplateLayout = () => {
  return (
    <div>
      <div className="fixed top-0 z-50">
        <Header />
      </div> 
      <div className='pt-20'>
        <Outlet/>
      </div>
      <Footer2/>
    </div>
  )
}

export default TemplateLayout
