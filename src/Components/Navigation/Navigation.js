import React from "react";
import styled from 'styled-components'
import avatar from '../../img/avatar.jpg'
import { menuItems } from "../../Utils/menuItems";
import { signout } from "../../Utils/Icons";
import searchImg from '../../img/search.png'
import Weather from "../Weather/Weather";
import findMyCity from "../Weather/Weather";
import { useEffect } from "react";
import { useState } from "react";


function Navigation({active, setActive}) {

    useEffect(() => {
        findMyCity()
        console.log('working')
    }, [])

    return (
        <NavStyled>
            <div className="user-con">
                <img src = {avatar} alt = '' />
                <div className="text">
                    <h2>Yuri</h2>
                    <p>Our Money</p> 
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>

            <div className="card"> 
                <div className="search">
                    <input type="text" placeholder="enter city name" id="cityEntry"
                    spellcheck="false" />
                    <button><img src={searchImg} alt=""/></button>
                </div>
                <div className="error">
                    <p>Invalid Entry</p>
                </div>
                <div>
                    <div><img className="wImg" id="wImg" /></div>
                    <div id="cityTemp"></div>
                </div>
            </div>
            <div class="buffer"></div>

            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
.wImg{
    max-width: 30%;
    max-length: 30%;
}
// .buffer{
//     padding: 45px;
// }
.error{
    text-align: left;
    margin-left: 10px;
    font-size: 14px;
    margin-top: 10px;
    display: none;
}
.search{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search input{
    width: 250px;
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    height: 45px;
    border-radius: 25px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;
}
.search button{
    border: 0;
    outline: 0;
    background: #ebfffc;
    border-radius: 50%;
    width: 60px;
    height: 40px;
    cursor: pointer;
}
.search button img{
    width: 18px;
}
.card{
    // min-height: 150px;
    // width: 90%;
    max-width: 320px;
    background: linear-gradient(135deg, #00feba, #2b2076);
    color: #fff;
    // margin: 100px auto 0;
    border-radius: 25px;
    padding: 40px 5px;
    text-align: center;
}
    padding:2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation