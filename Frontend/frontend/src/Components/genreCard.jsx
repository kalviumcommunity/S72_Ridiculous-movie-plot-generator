import PropTypes from 'prop-types'

function GenreCard({name}) {
  return (
    <div className='bg-white text-black p-4 rounded-lg shadow-md hover:bg-gray-400 transition flex justify-center'>
        <h2 className='text-lg font-semibold '>
            {name}
        </h2>
      
    </div>
  )
}


GenreCard.propTypes={
    name: PropTypes.string.isRequired
}

export default GenreCard
