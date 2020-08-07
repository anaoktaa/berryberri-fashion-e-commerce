import styled, { css } from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const LargeButton = css`
    padding: 17px 50px;
    font-size: 18px;

    &:hover {
        background-color: #fff;
        color: ${CustomStyles.primaryColor}
    }

    @media screen and (max-width: ${CustomStyles.mdBreakPoint}) {
        padding: 17px 40px;
    }
`;

export const DefaultButton = css`
    padding: 10px 30px;
    font-size: 15px;

    @media screen and (max-width: ${CustomStyles.mdBreakPoint}) {
        padding: 10px 10px;
    }
`;


export const NoOutlineButton = css`
    background-color: ${CustomStyles.primaryColor};
    border: 2px solid transparent;
`;

export const OutlineButton = css`
    background-color: transparent;
    border: 2px solid white;
  

    &:hover {
        color: ${CustomStyles.primaryColor};
        background-color: white;
        border: 2px solid #92929230;
    }
`;

const StyleButtonOutline = props => {
    if (props.outlined) {
        return OutlineButton;
    }
    return NoOutlineButton;
}

const StyleForButton = (props) => {
    if (props.large) {
        return LargeButton;
    }
    return DefaultButton;
};

const InverseStyle = css`
    background-color: white;
    color: ${CustomStyles.primaryColor};

    &:hover {
        background-color: ${CustomStyles.primaryColor};
        color:  #e4e4e4;

    }
`;

const SocialMediaStyle = css`
    background-color: white;
    color: ${CustomStyles.primaryColor};
    border: 1px solid #bdbdbd;
    display: flex;
    justify-content: center;
    flex-items: center;
`;

const SecondaryButtonStyle = css`
    background-color: ${CustomStyles.secondaryColor};
    color: white;
    padding: 10px 15px;
`;

const InverseButton = (props) => {
    if (props.inverse) {
        return InverseStyle;
    }
    else if (props.mediaSocial) {
        return SocialMediaStyle;
    }
    else if (props.secondary) {
        return SecondaryButtonStyle;
    }
}

export const CustomButtonContent = styled.button`
    ${StyleButtonOutline};
    box-sizing: border-box;
    color:  #e4e4e4;
    border-radius: 2px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-display: swap;
    transition: all .5s;
    ${StyleForButton};
    ${InverseButton};
    cursor:  ${(({disabled}) => disabled? 'auto': 'pointer')};
    background-color: ${(({disabled}) => disabled? '#bbbbbb': null)};
`;
