 import data from '../data.json'
import Bar from './Bar'

function BarChart() {
  return (
    <div className='border-b border-cream mb-10 pb-7 '>
        <div className='grid grid-cols-7 grid-rows-[auto] mb-2    '>
          {data.map(bar => <Bar key={bar.day} amount={bar.amount} day={bar.day}/>) }
        </div>
        <div className='grid grid-cols-7 grid-rows-1 place-items-center'> 
             {data.map(item => <p  key={item.day} className='text-xs text-mediumBrown  '>{item.day}</p>)}
        </div>
    </div>
  )
}

export default BarChart