import React from 'react'
import "./style.css"

import { Container, Row, Col } from 'react-bootstrap'

function RinkLogos() {
    return (
        <Container className="rink-logos-container">
          <Row noGutters>
            <Col xsm>
              <a href="http://cthockeyleague.com/CHL_2014/ads/redirect/187" target="_blank">
                <img src="http://cthockeyleague.com/CHL_2014/media/uploads/ads/imgres-1.png" alt="Champions Skating Center" class="img-thumbnail"></img>
              </a>
            </Col>
            <Col xsm>
              <a href="http://cthockeyleague.com/CHL_2014/ads/redirect/191" target="_blank">
                <img src="http://cthockeyleague.com/CHL_2014/media/uploads/ads/imgres-4.jpg" alt="Newington Ice Arena" class="img-thumbnail"></img>
              </a>
            </Col>
            <Col xsm>
              <a href="http://cthockeyleague.com/CHL_2014/ads/redirect/194" target="_blank">
                <img src="http://cthockeyleague.com/CHL_2014/media/uploads/ads/imgres-3.jpg" alt="Northford Ice Pavillion" class="img-thumbnail"></img>
              </a>
            </Col>
            <Col xsm>
              <a href="http://cthockeyleague.com/CHL_2014/ads/redirect/195" target="_blank">
                <img src="http://cthockeyleague.com/CHL_2014/media/uploads/ads/wesleyan_ad.png" alt="Weslyan University" class="img-thumbnail"></img>
              </a>
            </Col>
          </Row>
      </Container>
    )
}
export default RinkLogos;