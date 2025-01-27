 import React from 'react';
 import './Footer.scss';

 import Section from '@/components/atoms/Section/Section';

 import discordIcon from '@/assets/icons/icon-discord.svg';
 import youtubeIcon from '@/assets/icons/icon-youtube.svg';
 import twitterIcon from '@/assets/icons/icon-twitter.svg';
 import instagramIcon from '@/assets/icons/icon-instagram.svg';
 
 const Footer: React.FC = () => {
   return (
     <Section as="footer" className="footer">
        <p>Ⓒ META.IoB</p>

        <div className="social-media-list">
          <a href="https://www.discord.com/" target="_blank" rel="noreferrer">
            <img src={discordIcon} alt="" />
          </a>

          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtubeIcon} alt="" />
          </a>

          <a href="https://www.x.com/" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="" />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="" />
          </a>
        </div>
     </Section>
   );
 };
 
 export default Footer;
