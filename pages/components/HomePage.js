import React, { useEffect, useState } from 'react'
import { Date, RichText } from 'prismic-reactjs'

const HomePage = (props) => {
    return (
        <React.Fragment>
            {
                <div>
                    <h1>{RichText.asText(props.title)}</h1>
                    <RichText render={props.description} linkResolver={props.linkResolver} />
                    <img alt='cover' src={props.img} />
                </div>
            }
        </React.Fragment>
    )
}

export default HomePage;
