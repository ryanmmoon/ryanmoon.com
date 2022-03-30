// Modules
import Link from 'next/link'

function Apps({ apps }) {
  // console.log(apps[0])
  
  return (
    <div className='apps' id="work">
      <h2>Applications</h2>
      
      {apps.map((app) => {
        return (
          <div className='app' key={app.id}>
            <Link href={"/app/" + app.slug}><a><h3>{app.title}</h3></a></Link>
            <p>{app.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Apps