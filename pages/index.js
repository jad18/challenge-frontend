import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Avatars from './Avatars'
import getCurrentDay, { formatAndSetDate } from './Dates'
import React from 'react'


export default class Home extends React.Component {
  constructor()
  {
    super();
    this.state = {
      level: 0,
      name: "", 
      birthday: "", 
      pronouns: ""
    };

    this.getBody = this.getBody.bind(this);
    this.getNameFooter = this.getNameFooter.bind(this);
    this.setName = this.setName.bind(this);
  }

  getBody()
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
      {(this.state.level >= 1)
        ? <div>
            <p className={styles.user_entry}>{this.state.name}</p>
            <br/><br/><br/>
            <header className={styles.bot_entry}><u>Hudello</u></header>
            <p className={styles.bot_entry}>
              Hi, nice to meet you <b>{this.state.name}</b>!
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

      {(this.state.level >= 2)
        ? <div>
            <p className={styles.user_entry}>{this.state.birthday}</p>
            <br/><br/><br/>
            <header className={styles.bot_entry}><u>Hudello</u></header>
            <p className={styles.bot_entry}>
              Now that I know you a little better,
              <b> what are your pronouns?</b>
            </p>
          </div>
        : <div></div>
      }

      {(this.state.level >= 3)
        ? <p className={styles.user_entry}>{this.state.pronouns}</p>
        : <div></div>

      }

    </div>
    );
  }

  getNameFooter()
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
        onClick={this.setName}>
        {'⪢'}
      </button>
    </div>
    );
  }

  setName()
  {
    const text = document.getElementById("name_textbox").value;
    console.log(this.state);
    if(text != undefined && text.length > 0)
      this.setState({ name: text, level: this.state.level + 1 });
  }

  render()
  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conversation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Avatars index1={1} index2={0} />
        <hr className={styles.horz_line}/>

      {this.getBody()}
        
      </main>
      {(this.state.level == 0)
        ? this.getNameFooter()
        : <div></div>
      }
    </div>
  );
  }
}
