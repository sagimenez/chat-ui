import React from 'react';
import {Grid, Divider} from '@material-ui/core';
import ConversationView from '../Conversation';
import ContactsView from '../Contacts';
import './styles.scss';

class MainView extends React.Component {
    render(){
        return(
            <div className="main-container">
                <Divider className="grid-divider" orientation="vertical" />
                <Grid className="main-grid" container>
                    <Grid className="contacts-scroll" item xs={12} sm={12} md={2} lg={2}>
                        <ContactsView />
                    </Grid>
                    <Grid className="conversation-window" item xs={12} sm={12} md={10} lg={10}>
                        <ConversationView />
                    </Grid>
                </Grid>
                <Divider className="grid-divider" orientation="vertical" />
            </div>
        )
    }
}

export default MainView