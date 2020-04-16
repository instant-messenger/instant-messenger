import React, { useState } from 'react';
import FuzzySearch from 'fuzzy-search';
import Friend from './Friend';

// STYLES
import './styles/Search.scss';

const fakeFriends = [
    {
        id: 0,
        username: "robert",
        profileImgUrl: "https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 1,
        username: "steven",
        profileImgUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        username: "maria",
        profileImgUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        username: "fernando",
        profileImgUrl: "https://images.unsplash.com/photo-1535419218759-c71f0a6015b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        username: "martha",
        profileImgUrl: "https://images.unsplash.com/photo-1543949806-2c9935e6aa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
]

function searchFriends(friendsList, username) {

};

export default function Search() {
    const [ isSearching, setIsSearching ] = useState(false)
    const [ resultFriends, setResultFriends ] = useState(fakeFriends)

    const searcher = new FuzzySearch(fakeFriends, ["username"])

    const handleChanges = (e) => {
        const result = searcher.search(e.target.value)
        console.log(result)
    }

    return (
        <div className="search-container">
            <form>
                <input onChange={handleChanges} type="text" placeholder="&#128269; Search"/>
            </form>
            <div className="result-friends-container">
                { resultFriends.map((friend) => {
                        return <Friend friend={friend}/>
                    }) } 
            </div>
        </div>
    )
}