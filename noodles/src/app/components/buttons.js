import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const FilledButton = (props) => {
    return(
        <button className={props.buttonStyle ? props.buttonStyle : 'filled-button'} onClick={props.buttonOnClick}>{props.buttonText}</button>
    );
}

const OutlinedButton = (props) => {
    return(
        <>
            <button className={props.buttonStyle ? props.buttonStyle : 'outlined-button'} onClick={props.buttonOnClick}>{props.buttonText}</button>
        </>
    );
}

// used for login and register buttons
const AuthLinkButton = (props) => {
    return(
      <Link to={props.buttonLink}>
        <button className={props.buttonStyle ? props.buttonStyle : 'auth-link-button'} onClick={props.buttonOnClick}>{props.buttonText}</button>
      </Link>
    );
}

// used for login and register text links below auth forms
const LinkButton = (props) => {
    return(
      <Link to={props.buttonLink}>
        <button className={props.buttonStyle ? props.buttonStyle : 'link-button'} onClick={props.buttonOnClick}>{props.buttonText}</button>
      </Link>
    );
}

const TabButton = (props) => {
    return (
      <>
        <Link to={props.buttonLink} className='tab-button' >
          {props.buttonText}
        </Link>
      </>
    );
  }

const ActiveTabButton = (props) => {
    return (
      <>
        <Link to={props.buttonLink} className='active-tab-button' >
          {props.buttonText}
        </Link>
      </>
    );
  }  



export { FilledButton, OutlinedButton, AuthLinkButton, LinkButton, TabButton, ActiveTabButton }