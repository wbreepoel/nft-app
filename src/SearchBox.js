import React, {useState} from "react"

function SearchBox ({onSubmit}) {
    const [term, setTerm] = useState('')
    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(term) 

        event.target.reset()
    }

    return (
        <div className='search-box'>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <input type="text" value={term} onChange={event => setTerm(event.target.value)}></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBox