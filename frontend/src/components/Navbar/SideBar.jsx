import { FaXmark } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion, transform } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen, object }) => {
  const { NavItems } = object;
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "80%",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <>
      <GlobalStyles>
        <MainContainer $isOpen={isOpen}>
          <motion.div
            animate={
              isSmallScreen && {
                width: isOpen ? object.sizing.minWidth : "0px",
              }
            }
            transition={
              isSmallScreen
                ? { duration: 0.5, type: "spring", damping: 10 }
                : undefined
            }
            className="sidebar"
          >
            <div className="top_section">
              <div className="bars">
                <FaXmark onClick={toggle} />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    {object.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                  />
                )}
              </AnimatePresence>
            </div>

            <section className="routes">
              {NavItems.map((item, index) => {
                if (item.type === "LastDropdown") {
                  return (
                    item.items &&
                    item.items.map((it, idx) => (
                      <NavLink key={`${it}-${idx}`} to={it.href}>
                        <div
                          className={
                            window.location.pathname === it.href
                              ? "link active"
                              : "link"
                          }
                        >
                          <div className="icon">{it.icon}</div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                              >
                                {it.title}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </NavLink>
                    ))
                  );
                }

                if (item.type === "button") {
                  return (
                    <NavLink
                      className="button-parent"
                      key={`${item}-${index}`}
                      to={isLoggedIn ? "/profile" : item.href}
                    >
                      {isOpen && (
                        <div
                          className="link hp-button"
                          $minWidth={object.sizing.minWidth}
                        >
                          {isLoggedIn ? (
                            <>
                              <AuthContent>
                                <ProfileImage
                                  src="https://res.cloudinary.com/duozomapm/image/upload/v1736068016/myEditedInage_1.12.1_cnktnz.jpg"
                                  alt="User Profile"
                                />
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      variants={showAnimation}
                                      initial="hidden"
                                      animate="show"
                                      exit="hidden"
                                      className="link_text"
                                    >
                                      U25UV24000942
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </AuthContent>
                            </>
                          ) : (
                            <>
                              <div className="icon">{item.icon}</div>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="link_text"
                                  >
                                    {item.name}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          )}
                        </div>
                      )}
                    </NavLink>
                  );
                }

                if (item.items && item.type === "dropdown") {
                  return (
                    <SidebarMenu
                      key={`${item}-${index}`}
                      setIsOpen={setIsOpen}
                      item={item}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      object={object}
                    />
                  );
                }

                return (
                  <NavLink key={`${item}-${index}`} to={item.href}>
                    <div
                      className={
                        window.location.pathname === item.href
                          ? "link active"
                          : "link"
                      }
                    >
                      <div className="icon">{item.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {item.title}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
        </MainContainer>
      </GlobalStyles>
    </>
  );
};

export default SideBar;

const Animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  position: absolute;
`;

const MainContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease-in-out;
  display: flex;
  position: fixed;
  z-index: 999;
  background: black;
  color: black;
  top: 0%;

  .sidebar {
    height: 100vh;
    overflow: hidden;
    padding: 7px 0; 

    @media (min-width: 1280px){
      display: none;
    }
  }

  .top_section {
    color: white;
    height: 10%;
    display: flex;
    gap: 0.7rem;
    align-items: center;
    padding: 3.3rem 1rem 2rem 1rem;

    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
  }

  .logo {
    max-height: max-content;
    font-size: 18px;
    line-height: 0;
  }

  .bars {
    margin: 4px 0 0 0;
    width: 30px;
    max-height: max-content;

    svg {
      font-size: 2.5rem;
    }
  }

  .search {
    border-block: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    max-height: max-content;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    height: 50px;
    padding: 1rem 0.5rem;
    input {
      border: 1px solid black;
      margin-left: 10px;
      border-radius: 5px;
      background: rgb(238, 238, 238);
    }  
  }

  .routes {
    position: relative;
    max-height: max-content;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  
    .button-parent {
      position: fixed;
      bottom: 0%;
    }
  }

  .hp-button {
     width: 280px;
     border-top: 2px solid gray;
     animation: ${Animation} 0.3s linear;
     background-color: black;
    }

  .link {
    max-height: max-content;
    display: flex;
    color: white;
    gap: 10px;
    padding: 0.5rem 1rem;
    border-right: 4px solid transparent;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
 }

  a {
    text-decoration: none;
  }

  @media (max-width: 450px) {
  .active {
    background: rgba(255, 255, 255, 0.1);
   }
  }

  .link_text {
    max-height: max-content;
    white-space: nowrap;
    font-size: 15px;
  }
`;

const AuthContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
