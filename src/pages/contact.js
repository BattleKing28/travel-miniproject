import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaPhone, FaMapMarker } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Footer from "../components/Footer"
import "./contact.css"

const contact = () => (
  <>
    <Layout>
      <Seo title="Trips" />
      <ContactSection class="contact">
        <ContentDiv class="content">
          <ContentDivh2>Contact Us</ContentDivh2>
          <ContentDivp>
            Write a personal message to us about any query , complain , feedback
            or suggestion in the below form and we'll get back to you through
            email oe call in 24 hours!
          </ContentDivp>
        </ContentDiv>
        <ContainerDiv class="container">
          <ContactInfo class="contactInfo">
            <Box class="box">
              <Icon class="icon">
                <FaMapMarker />
              </Icon>
              <Text class="text">
                <Texth3>Address</Texth3>
                <p>
                  4781 Main Road, <br /> New Delhi, India, <br /> 110009
                </p>
              </Text>
            </Box>
            <Box class="box">
              <Icon class="icon">
                <FaPhone />
              </Icon>
              <Text class="text">
                <Texth3>Phone</Texth3>
                <p>+91 8475399696</p>
              </Text>
            </Box>
            <Box class="box">
              <Icon class="icon">
                <MdEmail />
              </Icon>
              <Text class="text">
                <Texth3>Email</Texth3>
                <p>help@thevoyageexpress.com</p>
              </Text>
            </Box>
          </ContactInfo>
          <ContactForm class="contactForm">
            <form>
              <ContactFormh2>Send Message</ContactFormh2>
              <InputBox class="inputBox">
                <input type="text" placeholder="Full Name"></input>
              </InputBox>
              <InputBox class="inputBox">
                <input type="text" placeholder="Email"></input>
              </InputBox>
              <InputBox class="inputBox">
                <textarea placeholder="Type your message ..."></textarea>
              </InputBox>
              <InputBox class="inputBox">
                <input type="submit" value="Send"></input>
              </InputBox>
            </form>
          </ContactForm>
        </ContainerDiv>
      </ContactSection>
    </Layout>
    <Footer />
  </>
)

export default contact

const ContactSection = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
`

const ContentDiv = styled.div`
  max-width: 800px;
  text-align: center;
`

const ContentDivh2 = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #333;
  font-family: "Ephesis", cursive;
`
const ContentDivp = styled.div`
  font-weight: 500;
  color: #333;
  font-family: "Ephesis", cursive;
`

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`
const Icon = styled.div`
  min-width: 60px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
  font-family: "Ephesis", cursive;
`
const Text = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
  font-family: "Ephesis", cursive;
`
const Texth3 = styled.div`
  font-weight: 800;
  font-family: "Ephesis", cursive;
  color: #f26a2e;
`
const ContactForm = styled.div`
  width: 40%;
  padding: 40px;
  background: #fff;
`
const ContactFormh2 = styled.div`
  font-size: 30px;
  color: #333;
  font-weight: 500;
  font-family: "Ephesis", cursive;
`
const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`
