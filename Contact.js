import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading"> Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618
    .335010400778!2d67.13275931447883!3d24.920654848980874!2m3!1f0!2f0!3f0!
    3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3391bd0dd319d%3A0x73979da7610e0c
    bd!2sBin%20Hashim%20Pharmacy%20%26%20Super%20Market!5e0!3m2!1sen!2s!4v1
    665006514328!5m2!1sen!2s"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div className="container">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/xoqbwrgg"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            name="username"
            placeholder="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message">
          </textarea>

          <input
            type="submit"
            value="send" />
        </form>
      </div>
    </div>
  </Wrapper >
};

export default Contact;
