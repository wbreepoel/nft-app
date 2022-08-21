import React, {useEffect, useState} from "react"
import OpenSeaApi from "../apis/OpenSeaApi"

const useNfts = ({defaultSearchTerm}) => {
    const [nftCollection, setNftCollection] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm]) 

    const search = async(term) => { 
        const response = await OpenSeaApi.get("https://api.opensea.io/api/v1/collection",{
        params: {
                    q: term
                }
        })

        setNftCollection(response)
        console.log("SEARCH FUNCTION CALLED")
        
        }

        return [nftCollection, search]
}

export default useNfts