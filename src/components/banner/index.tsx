import './index.css'
import { useEffect } from 'react'

export default function Main() {
    const PROJECT_ID = 'lwzct5bl'
    const DATASET = 'production'
    const QUERY = encodeURIComponent('*[_type == "banner"]')

    const url = `https://${PROJECT_ID}.api.sanity.io/v2023-05-01/data/query/${DATASET}?query=${QUERY}`

    useEffect(() => {
        fetch(url).then((res) => res.json())
        .then((result) => console.log(result))
    }, [])
    return(
        <div className='banner-main'>
            <span className="banner-test-content">Banner Content Here</span>
        </div>
    )
}