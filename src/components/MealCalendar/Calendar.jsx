import React from 'react';
import { Nav, NavList, NLink, NavItem, NavThumb, NavLabel, Section } from "./Calendar.style";
import Days from "./Days";

function Calendar() {
  
  return (
    <div>
      <Nav>
        <NavList>
          <NavItem>
            <NLink to="">
              <NavThumb data-letter="M"></NavThumb>
              <NavLabel>Monday</NavLabel>
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="">
              <NavThumb data-letter="T"></NavThumb>
              <NavLabel>Tuesday</NavLabel>
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to=''>
              <NavThumb data-letter="W"></NavThumb>
              <NavLabel>Wednesday</NavLabel>
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="">
              <NavThumb data-letter="Th"></NavThumb>
              <NavLabel>Thursday</NavLabel>
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="">
              <NavThumb data-letter="F"></NavThumb>
              <NavLabel>Friday</NavLabel>
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="">
              <NavThumb data-letter="Sa"></NavThumb>
              <NavLabel>Saturday</NavLabel>
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="">
              <NavThumb data-letter="Su"></NavThumb>
              <NavLabel>Sunday</NavLabel>
            </NLink>
          </NavItem>
        </NavList>
      </Nav>
      <Days/>
  </div>
  )
}

export default Calendar;