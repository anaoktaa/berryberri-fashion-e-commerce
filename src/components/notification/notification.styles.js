import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const ShowNotifStyle = css`
    animation: ${props => `shownotif`+props.id} linear .5s forwards;


    @keyframes ${props => `shownotif`+props.id} {
        0% {
            transform: ${props => `translateY(calc(100%*${props.id})) translateY(calc(10px*${props.id}))`};
        }

        100% {
            transform: translateX(-330px) ${props => `translateY(calc(100%*${props.id})) translateY(calc(10px*${props.id}))`} ;
        }
    }
`;

const DangerBackground = css`
    background-color:  #bd3632d1;

    &:hover {
        background-color: #bd3632;
    }
`;

const WarningBackground = css`
    background-color:  #f3ac1bc2;

    &:hover {
        background-color: #f3ac1b;
    }
`;

const SuccessBackground = css`
    background-color:  #49a249d6;

    &:hover {
        background-color: #49a249;
    }
`;

const InfoBackground = css`
    background-color:  #36a3c3ba;

    &:hover {
        background-color: #36a3c3;
    }
`;

export const TypeBackground = ({type}) => {
    if (type === 'danger') {
        return DangerBackground;
    }
    else if (type === 'success') {
        return SuccessBackground;
    }
    else if (type === 'info') {
        return InfoBackground;
    }
    else if (type === 'warning') {
        return WarningBackground;
    }
}

export const NotificationContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 30px;
    right: -300px;
    width: 250px;
    padding: 10px 15px;
    box-shadow: 2px 2px 8px 1px #bfbbbb;
    border-radius: 5px;
    color: #f3f3f3;
    ${TypeBackground};
    ${props => props.show? ShowNotifStyle: null};
`;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    width: 15%;
    padding: 0 5px;
    box-sizing: border-box;
`;

export const MessageContainer = styled.div`
    width: 75%;
    padding: 0 5px;
    text-align: left;
    box-sizing: border-box;
    align-self: center;

    h2 {
        margin: 0 0 7px;
        font-size: 15px;
    }

    p {
        margin: 0 0 7px;
        font-size: 13px;
        line-height: 22px;
    }
`;

export const CloseContainer = styled.div`
    width: 10%;
    padding: 0 10px;
    box-sizing: border-box;
    align-self: flex-start;
`;

// export const CloseNotifStyle = css`
//     animation: ${props => `closenotif`+props.id} linear .5s forwards;


//     @keyframes ${props => `closenotif`+props.id} {
//         0% {
//             transform: translateX(-330px) ${props => `translateY(calc(100%*${props.id})) translateY(calc(10px*${props.id}))`} ;
//         }

//         100% {
//             transform: ${props => `translateY(calc(100%*${props.id})) translateY(calc(10px*${props.id}))`};
//         }
//     }
// `;

// export const UpStyle = css`
//     animation: ${props => `upnotif`+props.id} 3s linear .5s forwards;


//     @keyframes ${props => `upnotif`+props.id} {
//         0% {
//             transform: translateX(-330px) ${props => `translateY(calc(100%*${props.id})) translateY(calc(10px*${props.id}))`} ;
//         }

//         100% {
//             transform: translateX(-330px) ${props => `translateY(calc(-100%*${props.id-1})) translateY(calc( -10px*${props.id}))`};
//         }
//     }
// `;

