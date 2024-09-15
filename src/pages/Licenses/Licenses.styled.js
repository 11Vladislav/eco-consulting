import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        display: block;
    }
`;