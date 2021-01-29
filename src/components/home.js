import React,{Component} from 'react'

import Slider from 'infinite-react-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function home() {

  const settings =  {
      
  };
  return (
    <div>
      <Slider className='slider' { ...settings }>

          <div>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg'/>
          </div>

          <div>
          <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'/>
          </div>

          <div>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'/>
          </div>

          <div>
          <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg'/>
          </div>

      </Slider>

    </div>
  )
}

export default home
