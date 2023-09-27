import React from "react";
import {NewsletterHeading,NewsletterInput,NewsletterInputWrapper,NewsletterSubTitle,NewsletterBtn,NewsletterWrapper,
} from "./News-letter.Styled";

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterHeading>
        <h1>Join Our Newsletter</h1>
        <NewsletterSubTitle>Big discounts right to your inbox.</NewsletterSubTitle>
      </NewsletterHeading>
      <NewsletterInputWrapper>
      <NewsletterInput placeholder="Email address" type="email" />  
      <NewsletterBtn type="submit">Signup</NewsletterBtn>
      </NewsletterInputWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;