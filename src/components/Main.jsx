// PAT = 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
import React from "react";
import styled from "styled-components";


export const Main = () => {
    const changeImage = (e) => {
        console.log(e.target.files[0]);
        var image = document.getElementById('output')
        image.src = URL.createObjectURL(e.target.files[0])
        image.onload = () => {
            URL.revokeObjectURL(image.src)
        }
    }
    
    return(
        <MainContainer>
            <h1>Image Uploader</h1>
            <pre>upload images</pre>
            <p>Upload your image below</p>
            <input type="file" name = "filetag" onChange={changeImage}></input>
            <img id='output' width={'500'} />

        </MainContainer>
    )
}

const MainContainer = styled.div`
    padding:1rem;
`