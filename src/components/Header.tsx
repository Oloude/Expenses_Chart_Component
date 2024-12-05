 import logoImg from '../assets/logo.svg'

function Header() {
  return (
    <header className='bg-softRed rounded-xl p-5 flex justify-between gap-4 items-center  '>
      <div className='flex gap-1 flex-col'>
      <p className='text-cream text-sm'>My balance </p>
        <h2 className='text-2xl font-semibold text-orange'>$921.48</h2>
         
      </div>
      <div>
        <img src={logoImg} alt="" />
      </div>
    </header>
  )
}

export default Header