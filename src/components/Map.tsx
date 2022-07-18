import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import barnesSvg from '.././svg/Barnes.svg';
import brookeSvg from '.././svg/Brooke.svg';
import csbSvg from '.././svg/CSB.svg';
import hopeSvg from '.././svg/Hope.svg';
import humphreyBoothSvg from '.././svg/HumphreyBooth.svg';
import irvingSvg from '.././svg/Irving.svg';
import ladywellSvg from '.././svg/Ladywell.svg';
import mayoSvg from '.././svg/Mayo.svg';
import turnbergSvg from '.././svg/Turnberg.svg';

class Map extends React.Component {
  render() {
    return (
      <div className='Map'>
        <h1 className='my-4 display-6 col-lg-6 offset-lg-3'>Salford Royal Site Map</h1>
        <div className='col-lg-6 offset-lg-3 my-4 card py-4 p-2 p-lg-4 shadow-sm'>
          <div className='row'>
            <div className='col-4'>

            </div>
            <div className='col-5'>
              <div className='hopeSvg'>
                <Link to='/hope'>
                  <img src={hopeSvg} className='buildingSvg' alt='Hope' />
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <div className='csbSvg'>
                <Link to='/csb'>
                  <img src={csbSvg} className='buildingSvg' alt='CSB' />
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='ladywellSvg'>
                <Link to='/ladywell'>
                  <img src={ladywellSvg} className='buildingSvg' alt='Ladywell' />
                </Link>
              </div>
            </div>
            <div className='col-2'>

            </div>
            <div className='col-6'>
              <div className='turnbergSvg'>
                <Link to='/turnberg'>
                  <img src={turnbergSvg} className='buildingSvg' alt='Turnberg' />
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='brookeSvg'>
                <Link to='/brooke'>
                  <img src={brookeSvg} className='buildingSvg' alt='Brooke' />
                </Link>
              </div>
            </div>
            <div className='col-1'>

            </div>
            <div className='col-3'>
              <div className='humphreyBoothSvg'>
                <Link to='/humphreybooth'>
                  <img src={humphreyBoothSvg} className='buildingSvg' alt='HumphreyBooth' />
                </Link>
              </div>
            </div>
            <div className='col-4'>
              <div className='irvingSvg'>
                <Link to='/irving'>
                  <img src={irvingSvg} className='buildingSvg' alt='Irving' />
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
            </div>
            <div className='col-3'>
              <div className='mayoSvg'>
                <Link to='/mayo'>
                  <img src={mayoSvg} className='buildingSvg' alt='Mayo' />
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <div className='barnesSvg'>
                <Link to='/barnes'>
                  <img src={barnesSvg} className='buildingSvg' alt='Barnes' />
                </Link>
              </div>
            </div>
            <div className='col-2'>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
