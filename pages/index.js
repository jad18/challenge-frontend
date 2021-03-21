import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Avatars from './Avatars'
import getCurrentDay, { formatAndSetDate } from './Dates'
import { useState } from 'react';

export default function Home() {
  const [state, setState] = useState(
    { level: 0, name: "", birthday: "", pronouns: "" }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Avatars index1={1} index2={0} />
        <hr className={styles.horz_line}/>

      {getBody(state)}
        
      </main>
      {(state.level == 0)
        ? getNameFooter(state, setState)
        : <div></div>
      }
    </div>
  )
}

function getBody(state)
{
  return(
    <div className={styles.main_body}>
      <header className={styles.bot_entry}><u>Hudello</u></header>
      <p className={styles.bot_entry}>
        Welcome to our frontend coding challenge.
        Let's start off by introducing ourselves.
        I'm Hudello bot.
      </p>
      <br/>
      <b className={styles.bot_entry}>What's your name?</b>
      {(state.level >= 1)
        ? <div>
            <p className={styles.user_entry}>{state.name}</p>
            <br/><br/><br/>
            <header className={styles.bot_entry}><u>Hudello</u></header>
            <p className={styles.bot_entry}>
              Hi, nice to meet you <b>{state.name}</b>!
            </p>
            <p className={styles.bot_entry}>
              Since this is your first time meeting me, let's say my birthday
              is today, {getCurrentDay()}.
            </p>
            <p className={styles.bot_entry}>
              <b>When's your birthday?</b>
            </p>
          </div>
        : <div></div>
      }

      {(state.level >= 2)
        ? <div>
            <p className={styles.user_entry}>{state.birthday}</p>
            <br/><br/><br/>
            <header className={styles.bot_entry}><u>Hudello</u></header>
            <p className={styles.bot_entry}>
              Now that I know you a little better,
              <b> what are your pronouns?</b>
            </p>
          </div>
        : <div></div>
      }

      {(state.level >= 3)
        ? <p className={styles.user_entry}>{state.pronouns}</p>
        : <div></div>

      }

    </div>
  );
}

function getNameFooter(state, setState)
{
  return(
    <div className={styles.main_footer}>
      <input
        id="name_textbox"
        className={styles.name_input}
        placeholder="Start typing here">
        </input>
      <button
        className={styles.submit_name_button}
        onClick={() => setName(state, setState)}>
        {'⪢'}
      </button>
    </div>
  );
}

function setName(state, setState)
{
  const text = document.getElementById("name_textbox").value;
  console.log(state);
  if(text != undefined && text.length > 0)
  {
    state.name = text;
    state.level = state.level + 1;
    setState(state);
  }
}
