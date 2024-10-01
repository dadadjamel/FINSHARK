import "./Card.css"

type Props = {
    companyName : string,
    ticker : string,
    price : number
}

const Card = (props: Props) => {
  return (
    <div className='card' >
        <img src='https://developer.apple.com/wwdc24/images/motion/axiju/endframe-small_2x.jpg' alt='image' />
        <div className='details' >
            <h2>{props.ticker}</h2>
            <p>${props.price}</p>
        </div>
        <p className='infon' > dsq kjgo izeu rapoie zjfkl d snvio pqudio frqp</p>
    </div>
  )
}

export default Card