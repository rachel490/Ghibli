import styled from "@emotion/styled";

export const Wrap = styled.div`
margin: 20px 0;
  input {
    background-color: transparent;
		border: 3px solid white;
		border-radius: 20px;
		width: 60%;
		height: 40px;
		padding: 0 20px;
		color: white;
		
		&:focus {

		}

		&::placeholder {
			color: white;
		}
  }
`;
