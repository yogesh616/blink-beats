import React from 'react'
import Spotlight from './Spotlight'

function MainData() {
  return (
    <div className='mt-2 w-full'>
   
   <div className="w-full sub-header__wrapper">
    <div className="wrapper">
        <div className="sub-header__section--right " style={{width: '100vw'}}>
            <nav className="cat-0-list list-unstyled list-inline sm-gap-20 gap-5 flex items-center max-w-screen-sm"
            >
                <li className="cat-0-list__item">
                    <a className="cat-0-list__item--name">Spotlight</a>
                </li>
                <li className="cat-0-list__item">
                    <a className="cat-0-list__item--name">Email</a>
                </li>
                <li className="cat-0-list__item">
                    <a className="cat-0-list__item--name">Studio</a>
                </li>
                <li className="cat-0-list__item">
                    <a className="cat-0-list__item--name">Trending</a>
                </li>
                
            </nav>
        </div>
    </div>
</div>

      <Spotlight />
    </div>
  )
}

export default MainData
