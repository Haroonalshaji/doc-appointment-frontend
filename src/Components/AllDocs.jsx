import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Cards from './Cards';




function AllDocs({query}) {

  // api fetching
  const base_url = 'https://doc-appointment-vfj1.onrender.com/doctors';
  const [allDocsdata, setAllDocsdata] = useState([])

  const fetchData = async () => {
    const result = await axios.get(base_url);
    console.log(result.data);
    setAllDocsdata(result.data)
  }

  console.log(allDocsdata);



  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div style={{backgroundImage:"url('https://c1.wallpaperflare.com/preview/476/30/346/operating-theater-surgery-surgeon-hospital.jpg'),", backgroundAttachment:"fixed"}}>
      <Row>
        {allDocsdata.filter((item=>item.name.toLowerCase().includes(query.toLowerCase()))).map(item => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Cards doc={item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default AllDocs
