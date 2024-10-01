import Card from '../Card/Card'
import './Cardlist.css'



const CardList = () => {
  return (
    <div>
        <Card companyName='apple' ticker='APPL' price={50}/>
        <Card companyName='microsoft' ticker='MCSFT' price={500}/>
        <Card companyName='google' ticker='GOGL' price={15365}/>
    </div>
  )
}

export default CardList