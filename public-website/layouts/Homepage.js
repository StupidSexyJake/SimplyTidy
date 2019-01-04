import Header from '../components/Header'
import Footer from '../components/Footer'

export default (props) => (
  <>
    <Header title="House Cleaning Services" />
    {props.children}
    <Footer />
  </>
)