import styled from "styled-components";

const BaseLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;

  & h1 {
    color: #fff;
    margin-bottom: 20px;
  }
`;

function Layout({ children }) {
  return (
    <BaseLayout>
      <h1>SORTING MACHINE</h1>
      {children}
    </BaseLayout>
  );
}

export { Layout };
