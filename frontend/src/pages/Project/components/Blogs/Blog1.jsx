import React from "react";
import styled from "styled-components";

const Blog1 = () => {
  return (
    <Container>
      <Header>
        <CompanyName>Your Company</CompanyName>
        <CompanyDetails>
          123 Your Street
          <br />
          Your City, ST 12345
          <br />
          (123) 456 - 7890
        </CompanyDetails>
      </Header>

      <BrochureTitle>Product Brochure</BrochureTitle>
      <Date>September 04, 20XX</Date>

      <ProductOverview>
        <ProductTitle>Product Overview</ProductTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </ProductDescription>

        <GridContainer>
          <Image src="phone-image-placeholder.png" alt="Product Image" />
          <TextContainer>
            <SubTitle>Lorem ipsum</SubTitle>
            <SubText>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Typi
              non habent claritatem insitam; est usus legentis in iis qui facit
              eorum claritatem.
            </SubText>
            <SubText>
              <Highlight>Lorem ipsum</Highlight> Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan.
            </SubText>
          </TextContainer>
        </GridContainer>
      </ProductOverview>
    </Container>
  );
};

export default Blog1;

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyName = styled.h1`
  color: #4a4a8b;
  margin-bottom: 5px;
`;

const CompanyDetails = styled.p`
  color: #666;
`;

const BrochureTitle = styled.h2`
  color: #4a4a8b;
  margin-bottom: 5px;
`;

const Date = styled.p`
  color: #ff6347;
  margin-bottom: 20px;
`;

const ProductOverview = styled.section`
  margin-bottom: 20px;
`;

const ProductTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  justify-self: center;
`;

const TextContainer = styled.div`
  padding: 10px;
`;

const SubTitle = styled.h4`
  margin-bottom: 10px;
`;

const SubText = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const Highlight = styled.span`
  color: #ff6347;
`;
