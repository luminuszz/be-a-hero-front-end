import styled from 'styled-components';


export const Container = styled.div`
         width: 100%;
         max-width: 1128px;
         height: 100vh;
         margin: 0 auto;
         /* Flex-box */
         display: flex;
         align-items: center;

         justify-content: center;

        section {
          width: 100%;
          max-width:350px;
          margin-right: 30px;
        }

       section form{
          margin-top: 100px;
        }

        section h1 {
          font-size: 32px;
          margin-bottom: 32px;
        }

      section    a{
          display:flex;
          align-items: center;
          margin-top: 40px;
          color:#41414d;
          font-size: 18px;
          text-decoration:none;
          font-weight: 500;
          transition: opacity 0.2s;
        }

          a svg {
            margin-right: 8px;
          }

      section a:hover{
        opacity: 0.8;

          }

        
       `;
