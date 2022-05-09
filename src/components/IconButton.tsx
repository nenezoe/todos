import styled from "styled-components";

type Props = {
    showOnHover?: boolean;
}

const IconButton = styled.button<Props>`
    background: none;
    border: none;
`

export default IconButton;

