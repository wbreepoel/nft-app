import React, { useEffect } from 'react'

function NftData() {

    const [nftArray, setNftArray] = React.useState([])

    useEffect(() => {
        console.log('running fetch')
        fetch('https://api.opensea.io/api/v1/assets?format=json')
         .then((res) => res.json())
         .then((data) => {
             console.log(data.assets)
               
              let nftDataArray = []
              for (let i =0; i < data.assets.length; i++) {
                  let image_preview_url = data.assets[i].image_preview_url
                  let image_thumbnail_url = data.assets[i].image_thumbnail_url
                  let name = data.assets[i].name
                  let last_price = data.assets[i].last_sale
                  let link = data.assets[i].permalink
                  if (image_preview_url) {
                    nftDataArray.push({
                        name: name,
                        preview_url: image_preview_url,
                        thumbnail: image_thumbnail_url,
                        last_price : last_price,
                        link : link
                    })
                  }
              }
              setNftArray(nftDataArray) 
         })
    },[])

    return (
        <div className='nft-collection'>
            <h1>NftData sheet</h1>
            <div className="outer-container">
            {
                nftArray.map((item) => {
                    return(
                        <div className='nft-asset-box'>
                            <a  href={item.link} target='_blank'>
                            <div className='featured-img-container'>
                                <img src={item.preview_url} key={item}/>
                            </div>
                            <div className='image-preview-description'>
                                {item.name}
                                {item.last_price && <p>Last Price item.last_price</p>}
                            </div>
                            </a>
                        </div>
                                      
                    )
                })
            }
            </div>
        </div>        
    )
}

export default NftData