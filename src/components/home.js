import React,{Component} from 'react'

// EXTERNAL LIBRARIES
import Slider from 'infinite-react-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// COMPONENTS
import Category from './Category'


function Home() {

  const settings =  {
    autoplay:true
      
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

      <div className='catalogues'>
          <Category
          title='Shop by Category'
          img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
          link='/shopByCategory'
          linkTxt='Shop'
          />

          <Category
          title='Shop for Fit'
          img='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
          link='/shopByCategory'
          linkTxt='Explore Now'
          />
          
          <Category
          title='Beauty Picks'
          img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
          link='/shopByCategory'
          linkTxt='See More'
          />

          <Category
          title='Amazon Basics'
          img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
          link='/shopByCategory'
          linkTxt='Explore More'
          />

          <Category
          title='Shop by Category'
          img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
          link='/shopByCategory'
          linkTxt='Shop'
          />

          <Category
          title='Shop for Fit'
          img='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
          link='/shopByCategory'
          linkTxt='See More'
          />
          
          <Category
          title='Beauty Picks'
          img='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
          link='/shopByCategory'
          linkTxt='Explore More'
          />
      </div>

    </div>
  )
}

export default Home
