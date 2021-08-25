import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Link,
    Typography,
    InputBase
} from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
import './styles.scss'

const contacts = [
    {
        id: 0,
        name: 'Santiago',
        profilePic: 'https://lh3.googleusercontent.com/ogw/ADea4I53Kq8Q4dO3VHzCJen4LzwlFmzDwxI0Gdc-8UX1xA=s32-c-mo',
        msg: 'This is a small msg'
    },
    {
        id: 1,
        name: 'Sol',
        profilePic: 'data:image/jpeg;base64,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',//'https://lh3.googleusercontent.com/ogw/ADea4I53Kq8Q4dO3VHzCJen4LzwlFmzDwxI0Gdc-8UX1xA=s32-c-mo',
        msg: 'Small msg'
    },
    {
        id: 2,
        name: 'Leo',
        profilePic: 'https://homecontrol-gch.web.app/logo.png',
        msg: 'Message'
    }
]

function RenderContacts() {
    var users = contacts.map(function(user){
        var userId = '';
        userId = userId.concat('#',user.id);
        return(
            <Link style={{ textDecoration: 'none' }} href={userId} key={user.name}>
                <div className="contacts-bubble">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="sample" src={user.profilePic} />
                        </ListItemAvatar>
                        <ListItemText disableTypography primary={<Typography style={{color: 'white'}}>{user.name}</Typography>} secondary={<Typography style={{color: '#b3b3b3'}}>{user.msg}</Typography>} />
                    </ListItem>
                </div>
            </Link>
        );
    });

    return users;

}

function SearchBar() {
    return (
        <div id="contacts-search-container">
            {/* <SearchIcon id="contacts-searchicon"/> */}
            <InputBase id="contacts-searchbar" placeholder="Search" />
        </div>
    )
}

class ContactsView extends React.Component {
    render(){
        return(
            <div>
                <SearchBar />
                <List>
                    <RenderContacts />
                </List>
            </div>
        )
    }
}

export default ContactsView