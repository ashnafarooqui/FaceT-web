import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my first img */}
          <div className="slide">
            <img
              src="https://p.kindpng.com/picc/s/177-1777348_sephora-hd-png-download.png"
              alt="trusted-brands" />
          </div>

          <div className="slide">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/12/Maybelline-Logo-2019-present.jpg"
              alt="trusted-brands" />
          </div>

          <div className="slide">
            <img
              src="https://i.pinimg.com/originals/76/ba/bb/76babbd6e680484ce1348cfde5dd61fa.jpg"
              alt="trusted-brands" />
          </div>

          <div className="slide">
            <img
              src="https://www.logolynx.com/images/logolynx/3e/3e9ed528c13e6df2f868aa5d66a69592.jpeg"
              alt="trusted-brands" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section{
    padding: 12rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
`;
export default Trusted