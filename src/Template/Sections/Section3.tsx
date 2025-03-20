import pic1 from '../../assets/student.jpg'

const Section3 = () => {
  return (
    <div className='md:flex md:flex-row overflow-y-hidden overflow-x-hidden p-10 flex flex-col'>
      {/* image  */}
      <div className='md:w-[50vw] flex items-center justify-center'>
        <img className='md:h-[70vh] md:w-[30vw] h-[60vh] w-[40vw]' src={pic1} alt="image" />
      </div>

      {/* content*/}
      <div className='ml-10 md:w-[60vw] w-[85vw] flex flex-col gap-8 md:mt-12 mt-5'>
        <h1 className='text-4xl font-bold text-lime-600 font-serif'>Our Vision</h1>
        <p className='text-primary text-lg font-serif'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo amet provident illo eveniet itaque cum maxime incidunt voluptates debitis mollitia, natus odit qui recusandae consequuntur. Quis quod quibusdam soluta. nemo amet provident illo eveniet itaque cum maxime incidunt voluptates debitis mollitia, natus odit qui.</p>
        <p className="text-xl font-bold font-serif">Our Values: Integrity. Compassion. Dignity.</p>
        <button className='border-2 border-lime-600 py-2 w-40 rounded-lg text-lime-700 font-serif text-sm  hover:bg-lime-600 hover:text-white transition-all duration-500'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Section3
