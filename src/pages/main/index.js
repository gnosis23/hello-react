import React from 'react';
import logo from '../../assets/img/logo.svg';
import women from '../../assets/img/beach-work.jpeg';
import './index.css';

import popularDestinations  from '../../data/popularDestinations';
import DestinationCard from "../../components/DestinationCard";
import DropdownMenu from "../../components/DropdownMenu";
import Paragraph from "../../components/Paragraph";

export default function MainPage(props) {
  return (
    <div>
      <p>Only this paragraph will get the style :)</p>

      <Paragraph />

      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </div>
  )
}
