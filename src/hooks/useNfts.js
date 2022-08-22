import React, {useEffect, useState} from "react"
import OpenSeaApi from "../apis/OpenSeaApi"


const useNfts = ({defaultSearchTerm}) => {
    const [nftCollection, setNftCollection] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm]) 

    const search = async(term) => { 
        console.log("SEARCH FUNCTION CALLED FOR" + term)
        const response = await OpenSeaApi.get(`https://api.opensea.io/api/v1/collection/${term}`)

        setNftCollection(response.data.collection)
        console.log(response.data.collection)
        
        
        }

        return [nftCollection, search]
           
}

export default useNfts