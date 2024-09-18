import React from 'react';
import styled from 'styled-components';
import successfully from '../assets/images/successfully.svg';

const CardContainer = styled.div`
  width: 380px;
  height: 526px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  opacity: 1;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 30px;
  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
`;

const SuccessIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Card = ({ type }) => {
  if (type === "form") {
    return (
      <CardContainer>
        <Title>Add your information, and we will contact you.</Title>
        <FormGroup>
          <Input type="text" placeholder="Name*" />
          <Input type="email" placeholder="Email*" />
          <Input type="tel" placeholder="Contact Number*" />
          <Select>
            <option>Your Budget</option>
          </Select>
          <Select>
            <option>Interested in</option>
          </Select>
          <Input type="text" placeholder="How did you learn about us" />
        </FormGroup>
        <Button>Submit</Button>
      </CardContainer>
    );
  }

  if (type === "profile") {
    return (
      <CardContainer>
        <Title>Explore corporate profile</Title>
        <FormGroup>
          <Input type="text" placeholder="Name*" />
          <Input type="email" placeholder="Email*" />
          <Input type="tel" placeholder="Contact Number*" />
          <Select>
            <option>Your Budget</option>
          </Select>
          <Select>
            <option>Interested in</option>
          </Select>
          <Input type="text" placeholder="How did you learn about us" />
        </FormGroup>
        <Button>Explore Profile</Button>
      </CardContainer>
    );
  }

  if (type === "success") {
    return (
      <CardContainer>
        <SuccessMessage>
          <SuccessIcon src={successfully} alt="Success" />
          <Title>Details Submitted successfully</Title>
        </SuccessMessage>
        <Button>Done</Button>
      </CardContainer>
    );
  }

  return null;
};

export default Card;
