import styled from "styled-components";

const BaseLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  flex-direction: column;
`;

function Layout({ children }) {
  return <BaseLayout>{children}</BaseLayout>;
}

export { Layout };
