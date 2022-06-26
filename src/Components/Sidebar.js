import React, { useState } from "react";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import iconAll       from "../icons/Icon_All.svg";
import iconPublished from "../icons/Icon_published.svg";
import iconDraft     from "../icons/Icon_Draft.svg";
import iconArchive   from "../icons/Icon_Archive.svg";
import iconBin       from "../icons/Icon_Bin.svg";
import iconAdd       from "../icons/Icon_Add.svg";
import iconSettings  from "../icons/Icon_Settings.svg";
import iconProfile   from "../icons/Icon_Profile.svg";
import iconLogout    from "../icons/Icon_Logout.svg";


const Header = styled.div`
  margin-top: 2rem; 

  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  border-radius: 0 50rem 50rem 0;
  
  width: 4rem;
  height: 3.5rem;

  cursor: pointer;

  display: flex;
  justify-content: left;
  align-items: center;

  position: relative;

  &::before, &::after {
    margin-left: 1.2rem;
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1.3rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${ props => props.clicked ? "1.5" : "1.4rem" };
    transform: ${ props => props.clicked ? "rotate(135deg)" : "rotate(0)" };
  }

  &::after {
    top:${ props => props.clicked ? "1.2" : "2rem" };
    transform: ${ props => props.clicked ? "rotate(-135deg)" : "rotate(0)" };
  } 
`;

const Profile = styled.div`
  background-color: var(--black);
  color: var(--white);
  border: none;
  border-radius: 50rem;

  width: ${(props) => (props.clicked ? "16rem" : "3.5rem")};
  height: 3.5rem;
  
  padding: 0 1rem;
  margin-left: 1rem;

  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.5s ease;

  .icon-profile {
    border-radius: 50%;
    box-shadow: 0 0 0 0 var(--pulse);
  }
  .icon-profile:hover {
    animation: pulse-purple 2s infinite;
  }

  .profile-link, .icon-logout {
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
    transition-delay: ${(props) => (props.clicked ? "400ms" : "0")};
  }
`;

const Name = styled(NavLink)`
  color: var(--white);

  max-width: 9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Logout = styled.button`
  background-color: transparent;
  border: none;
  
  cursor: pointer;

  .icon-logout {
    border-radius: 50%;
    box-shadow: 0 0 0 0 var(--pulse);
  }
  .icon-logout:hover {
    animation: pulse-purple 2s infinite;
  }
`;


const SidebarContainer = styled.div`
  background-color: var(--black);
  border-radius: 0 30px 30px 0;

  height: 28rem;
  width: ${(props) => (props.clicked ? "16rem" : "4rem")};
  transition: all 0.5s ease;

  margin: 1rem 0 2rem 0;
  padding: 2rem 0 2rem 0rem;

  display:flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  .active {
    border-right: 4px solid var(--white);
  }
`;

const Section = styled.ul`
  color: var(--white);

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled(NavLink)`
  color: var(--white);
  text-decoration: none;

  width: 100%;

  padding: 0.8rem 0 0.8rem 1.2rem;
  img {
    margin-right: 1rem;
  }

  cursor: pointer;
  
  display: flex;

  &:hover {
    background-color: var(--purple);
    border-right: 4px solid var(--white);
    
    transition: all 0.3s ease;
  }
  .icon-draft {
    padding: 0 0.15rem;
  }
`;

const Text = styled.span`
  height: 0;
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition-delay: ${(props) => (props.clicked ? "250ms" : "0")};
  margin-left: ${(props) => (props.clicked ? "0.5rem" : "0")}
`;


const Sidebar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  
  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <div  className="side-bar">
      <Header >
          <Button clicked={ click } onClick={ () => handleClick() }>
            Click
          </Button>
          <Profile clicked={ profileClick }>
            <img 
              onClick={ () => handleProfileClick() }
              className="icon-profile icon" 
              src={ iconProfile } 
              alt="Профиль" />
            
              <Name 
                clicked={ profileClick }
                onClick={ () => {setProfileClick(false); setClick(false)} }
                className='profile-link' 
                to="/profile"
              >
                  Показаньев Владислав
              </Name>

              <Logout >
                <img className="icon icon-logout" src={ iconLogout } alt="Выйти"/>
              </Logout>
          </Profile>
      </Header>
      
      <SidebarContainer clicked={ click }>
        <Section className="section-main">
          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/all"
          >
            <img className="icon icon-all" src={ iconAll } alt="Все записи" />
            <Text clicked={ click } >Все записи</Text>
          </Item>

          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/published"
          >
            <img className="icon icon-published" src={ iconPublished } alt="Опубликованные" />
            <Text clicked={ click } >Опубликованные</Text>
          </Item>

          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/drafts"
          >
            <img className="icon icon-draft" src={ iconDraft } alt="Черновики" />
            <Text clicked={ click } >Черновики</Text>
          </Item>

          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/archive"
          >
            <img className="icon icon-archive" src={ iconArchive } alt="Архив" />
            <Text clicked={ click } >Архив</Text>
          </Item>

          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/bin"
          >
            <img className="icon icon-bin" src={ iconBin } alt="Корзина" />
            <Text clicked={ click } >Корзина</Text>
          </Item>
        </Section>

        <Section className="section-sub">
          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/new-card"
          >
            <img className="icon icon-add" src={ iconAdd } alt="Добавить запись" />
            <Text clicked={ click } >Добавить запись</Text>
          </Item>

          <Item 
            onClick={ () => {setProfileClick(false); setClick(false)} } 
            className={(navData) => (navData.isActive ? "active" : 'none')} to="/options"
          >
            <img className="icon icon-settings" src={ iconSettings } alt="Настройки" />
            <Text clicked={ click } >Настройки</Text>
          </Item>
        </Section>
          
      </SidebarContainer>
      {/* TODO: add home button */}
    </div>
  )
}

export default Sidebar;
