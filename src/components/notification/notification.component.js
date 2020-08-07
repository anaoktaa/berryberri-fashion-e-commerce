import React from 'react';

import { Container,
         NotificationContainer,
         FlexContainer,
         IconContainer,
         CloseContainer,
         MessageContainer
} from './notification.styles';
import NotificationIcon from './notification-icons.component';

const Notification = (props) => {
    const {type, title, message, show} = props.payload;
    return (
        <Container>
            {show?
                <NotificationContainer id={0} show={show} type={type}>
                    <FlexContainer>
                        <IconContainer>
                            <NotificationIcon
                                type={type}
                                style={{fontSize: '24px'}}
                            />
                        </IconContainer>
                        <MessageContainer>
                            <h2>{title}</h2>
                            <p>{message}</p>
                        </MessageContainer>  
                        <CloseContainer>
                            <i class="fas fa-times" onClick={props.handleCloseNotif} style={{fontSize: '16px', cursor: 'pointer'}}/>
                        </CloseContainer>
                    </FlexContainer>
                </NotificationContainer>
            : null
            }
        </Container>
    );
}

export default Notification;