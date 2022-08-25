function NftSearchItem ({nft}) {
    return (
            <div className='search-item-container'>
                <img src={nft.banner_image_url}></img>
                <div className='outer-featured-image-box'>
                    <div className='featured-image-box'>
                        <img src={nft.featured_image_url}></img>
                    </div>
                </div>
                <div className='search-item-description'>
                    <h1>{nft.name}</h1>
                    <p>{nft.description}</p>
                </div>
            </div>
    )
}

export default NftSearchItem