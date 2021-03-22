import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Avatars from './Avatars'
import getCurrentDay, { formatAndSetDate, BirthdayMonth, BirthdayDay,
       BirthdayYear } from './Dates'
import React from 'react'


export default class Home extends React.Component {
  constructor()
  {
    super();
    this.state = {
      level: 0,
      birthdayLevel: 0,
      name: "", 
      birthday: "", 
      pronouns: "",
      pronoun_selected: -1,
      avatar_index: 1,
    };

    this.getBody = this.getBody.bind(this);
    this.getNameFooter = this.getNameFooter.bind(this);
    this.setName = this.setName.bind(this);
    this.birthdaySelector = this.birthdaySelector.bind(this);
    this.setPronouns = this.setPronouns.bind(this);
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
            <br/>
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
      <div>
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
    </div>
    );
  }

  setName()
  {
    const text = document.getElementById("name_textbox").value;
    if(text != undefined && text.length > 0)
      this.setState({ name: text, level: this.state.level + 1 });
  }

  birthdaySelector()
  {
    if(this.state.birthdayLevel === 0)
      return BirthdayMonth(this);
    else if(this.state.birthdayLevel === 1)
      return BirthdayDay(this);
    else
      return BirthdayYear(this);
  }

  pronounSelector()
  {
    return(
      <div className={styles.pronoun_box}>
        <p className={styles.pronoun_header}>Select one</p>
        <table>
          <tr>
            <td className={styles.pronoun_table_entry}>
              <div
              className={(this.state.pronoun_selected === 0)
                ? styles.pronoun_button_selected
                : styles.pronoun_button}
              onClick={() => this.setState({pronoun_selected: 0})}>👨</div>
            </td>
            <td className={styles.pronoun_table_entry}>
              <div
                className={(this.state.pronoun_selected === 1)
                  ? styles.pronoun_button_selected
                  : styles.pronoun_button}
                onClick={() => this.setState({pronoun_selected: 1})}>👩</div>
            </td>
            <td className={styles.pronoun_table_entry}>
              <div
                className={(this.state.pronoun_selected === 2)
                  ? styles.pronoun_button_selected
                  : styles.pronoun_button}
                onClick={() => this.setState({pronoun_selected: 2})}>😊</div>
            </td>
          </tr>
          <tr>
            <td className={styles.pronoun_table_entry}>He / Him</td>
            <td className={styles.pronoun_table_entry}>She / Her</td>
            <td className={styles.pronoun_table_entry}>They / Them</td>
          </tr>
        </table>
        <button className={styles.submit_pronouns_button}
          onClick={this.setPronouns}>
          Submit
        </button>
      </div>
    );
  }

  setPronouns()
  {
    var pronouns;
    if(this.state.pronoun_selected === 0) pronouns="He / Him";
    else if(this.state.pronoun_selected === 1) pronouns="She / Her";
    else if(this.state.pronoun_selected === 2) pronouns="They / Them";
    else return;

    this.setState({level: this.state.level + 1, pronouns: pronouns});
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
        <Avatars index1={this.state.avatar_index} index2={0} obj={this} />
        <hr className={styles.horz_line}/>

      {this.getBody()}
        
      </main>
      {(this.state.level === 0)
        ? this.getNameFooter()
        : <div></div>
      }

      {(this.state.level === 1)
       ? <div className={styles.birthday_section}>
            {this.birthdaySelector()}
         </div>
       : <div></div>
      }

      {(this.state.level === 2)
       ? this.pronounSelector()
       : <div></div>
      }

    </div>
  );
  }
}
