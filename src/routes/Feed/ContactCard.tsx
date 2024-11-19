import styled from "@emotion/styled"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStrava,
  faYoutube,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <Emoji>💬</Emoji> Social
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" className="icon" />
            <div className="name">LinkedIn</div>
          </a>
        )}
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" className="icon" />
            <div className="name">GitHub</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" className="icon" />
            <div className="name">Instagram</div>
          </a>
        )}
        {CONFIG.profile.strava && (
          <a
            href={`https://www.strava.com/athletes/${CONFIG.profile.strava}`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faStrava} size="xl" className="icon" />
            <div className="name">Strava</div>
          </a>
        )}
        {CONFIG.profile.x && (
          <a
          href={`https://x.com/${CONFIG.profile.x}`}
          rel="noreferrer"
          target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} size="xl" className="icon" />
            <div className="name">X</div>
          </a>
        )}
        {CONFIG.profile.youtube && (
          <a
            href={`https://www.youtube.com/${CONFIG.profile.youtube}`}
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="xl" className="icon" />
            <div className="name">YouTube</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === 'light' ? 'white' : theme.colors.gray4};

  a {
    display: flex;
    padding: 0.65rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }

    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
      width: 2rem; /* Set a fixed width to align text labels */
    }

    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
