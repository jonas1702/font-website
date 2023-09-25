import React from 'react'
import './style/App.css'
import Button from './Button.jsx'

export default function Area() {
    return (
        <div className='hero'>
            <div className='hero-info'>
                <h2 className='hero-heading-medium'>gaap</h2>
                <h3 className='hero-heading-small'>this is a heading</h3>
                <p className='hero-paragraph'>lorem ipsum dolor sit amet consectetur adipisicing elit. velit, esse asperiores quasi veniam iure dicta. dignissimos consequatur inventore illo provident mollitia quod velit obcaecati consequuntur, vel voluptas ratione libero alias.</p>
            </div>
            <div className='hero-color-background'>
                <h1 className='hero-heading-large'>why gaap</h1>
                <Button />
            </div>
        </div>
    )
}
