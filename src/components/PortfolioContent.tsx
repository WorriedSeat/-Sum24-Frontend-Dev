import React, { useState } from "react";

class PortfolioContent extends React.Component{
    render(){
        return (
          <div>
            <h1 id="intro">Projects made in IU</h1>
            <ul id="reposList">
                <li className="repos">
                    <a href="https://github.com/WorriedSeat/FSA-to-RegExp-Translator" className="reposTitle">FSA to RegExp Translator</a>
                    <p className="reposText">
                        The programm that translates the Finite State Automata to the Regular expression. It was made on Theoretical Computer Science course in the Innopolis University.
                    </p>
                </li>
                <li className="repos">
                    <a href="https://github.com/WorriedSeat/University-Courses-Management-System" className="reposTitle">University Course Management System</a>
                    <p className="reposText">
                        Program simulates the university course managing system which should add courses to the university, enroll or drop students on the course, assign professors to teach some course and manage the amount of people on the course. It was made on Introduction To Programing course in the Innopolis University. 
                    </p>
                </li>
                <li className="repos"><a href="https://github.com/WorriedSeat/The-insects-moving-game" className="reposTitle">Insects moving game</a>
                    <p className="reposText">
                        This program simulates the board game where the goal is to "eat" the highest amount of food. 4 types of insects are present on the board (Ants, Spiders, Grasshoppers, Butterflies) all of them move to the side with highest amount of food and try to leave the board one by one. Like chess with insect for one player). It was made on Introduction To Programming course in the Innopolis University.    
                    </p>
                </li>
                <li className="repos"><a href="https://github.com/WorriedSeat/Online-bookStore" className="reposTitle">Management of an online bookstore</a>
                    <p className="reposText">
                        This program is a system for the management of an online bookstore. Implemented system supports book insertion, controlling access to books, users subscriptions, and notifying users about books updates. There is several design patterns used in this program. It was made on Software Systems Analysis and Design course in the Innopolis University.
                    </p>
                </li>
                <li className="repos"><a href="https://github.com/WorriedSeat/Simplified-banking-system" className="reposTitle">Banking system simulation</a>
                    <p className="reposText">
                        Programm simulates the banking system. This system supports: creation of different types of accounts, transaction of money(with corresponding transaction fee to each account type), and other account activity such as deactivating, creation, printing the data with all previous transactions. There is several design patterns used in this program. It was made on Software Systems Analysis and Design course in the Innopolis University.
                    </p>
                </li>
                <li><a href="https://github.com/WorriedSeat/medieval-fantasy-story" className="reposTitle">Medieval fantasy story</a>
                    <p className="reposText" id="lastRepoText">
                        This program simulates a medieval fantasy story. It creates characters, weapons, and spells that interact within a dynamic story. The story progresses through a series of events such as attacks, spawns, and deaths, with each event written to an output file to narrate the unfolding adventure. It was made on Software Systems Analysis and Design course in the Innopolis University.
                    </p>
                </li>
            </ul>
          </div>
        );
    }
}

export  default PortfolioContent;
