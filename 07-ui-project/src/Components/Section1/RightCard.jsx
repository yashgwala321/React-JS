import RightCardContent from './RightCardContent'

function RightCard(props) {
  return (
    <div className='h-full w-80 bg-red-800 rounded-4xl overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag} id={props.id}/>

    </div>
  ) 
}

export default RightCard
