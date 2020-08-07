import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './main-billboard.styles.css';

import ImageSlider from '../image-slider/image-slider.component';

import { selectBillboardList } from '../../redux/directory/directory.selectors';


class MainBillboard extends React.Component {
    next = () => {
        this.slider.slickNext();
    }
    
    previous = () => {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    

        const { billboardList } = this.props
        return (
            <div className='main-billboard-container'>
             
                <div className='image-slide-container'>
                    <div className='chevron-left' onClick={this.previous}>
                        &#10094;
                    </div>
                    <div className='chevron-right'onClick={this.next}>
                        &#10095;
                    </div>
                    <Slider ref={c => (this.slider = c)} {...settings} >
                        {billboardList.map(({id, imageUrl, highImageUrl, caption, textPosition, title}) => (
                            <ImageSlider key={id} highImageUrl={highImageUrl} imageUrl={imageUrl} caption={caption} textPosition={textPosition} title={title} />
                        ))}
                    </Slider>
                </div>
            </div>
      
        );
    }
}

const mapStateToProps = createStructuredSelector({
    billboardList: selectBillboardList
})

export default connect(mapStateToProps)(MainBillboard);