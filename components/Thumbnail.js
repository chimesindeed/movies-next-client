import Image from 'next/image'

function Thumbnail({result}){
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div>
      <Image
        layout='responsive'
        height={1080}
        width={1920}
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
        `${BASE_URL}${result.poster_path}`}
        />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2>
          {result.title || result.original_name}
        <p>
        </p>
        </h2>
      </div>
    </div>
  )

}

export default Thumbnail
