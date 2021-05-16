import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const ImageBackground = styled(BackgroundImage)`
    height: 300px;

`

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query{
            imagen: file(relativePath: { eq: "encuentra.jpg"}){
                sharp: childImageSharp {
                    fluid( maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }   
    `) 

    console.log(imagen);

    return ( 
        <ImageBackground tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
            <div
                    css={css`
                    color: #FFF;
                    height: 100%;
                    max-width: 1200px;
                    display: flex;
                    margin: 0 auto;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    `}>
                <h3    css={css`
                        font-size: 2rem;
                        margin: 0;
                        max-width: 800px;
                    
                    @media (min-width: 992px) {
                            font-size: 4rem;
                    }
                    `}>Encuentra la casa de tus suenos</h3>
                <p>15 de anos de experiencia</p>    
            </div> 

        </ImageBackground>
        );
}
 
export default Encuentra;