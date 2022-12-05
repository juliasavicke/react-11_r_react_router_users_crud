import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Section = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 0.4em;
`;

export const Icon = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
  ariaHidden: true,
}))`
  font-size: 24px;
  margin: 10px;
`;
