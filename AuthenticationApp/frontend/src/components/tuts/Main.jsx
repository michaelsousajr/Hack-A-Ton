import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../../styles/tuts/main.css';

function Main(){
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    return (
        <div class="wrapper">
        <nav id="sidebar" className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
            <div class="sidebar-header">
                <h3>Learning Cybersecurity</h3>
            </div>

            <ul class="list-unstyled components">
                <p className="fs-4">Tutorials</p>
                <li class="active">
                    <a href="#homeSubmenu">Introduction</a>
                </li>
                <li>
                    <a href="#">Networking</a>
                </li>
                <li>
                    <a href="#pageSubmenu">Cyber Attacks</a>
                </li>
                <li>
                    <a href="#">Cyber Defence</a>
                </li>
                <li>
                    <a href="#">Quiz</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="#" class="donate">Donate</a>
                </li>
                <li>
                    <a href="#" class="logout">Logout</a>
                </li>
            </ul>
        </nav>
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button type="button" onClick={toggleSidebar} class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Menu</span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Videos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Articles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-3 info">
                <h1 class="display-6 text-center">Cyber Crime - A Growing Threat</h1>
                <div className="line"></div>
                <div class="my-4">
                    <h3>What is Cyber Crime?</h3>
                    <p>Just like regular crime, it also exists on the Internet. Here are some examples of Cyber Crime:</p>
                    <ul>
                        <li>Identity Theft</li>
                        <li>Online Predators</li>
                        <li>BEC ("Business Email Compromise")</li>
                        <li>Ransomware</li>
                        <li>Stealing of sensitive intellectual property</li>
                    </ul>
                </div>
                <div class="my-4">
                    <h3>Increasing Crime</h3>
                    <p>Cyber Crime has been increasing regularly every year. Why is Cyber Crime on the rise? Here are some reasons:</p>
                    <ul>
                        <li>Cyber Crime is easy to accomplish</li>
                        <li>Low risks of getting caught</li>
                        <li>For little work, there is often high returns</li>
                        <li>Attackers can target thousands of victims</li>
                        <li>Money laundering is easier with Cryptocurrencies</li>
                    </ul>
                    <p>Challenges like identity theft can have significant consequences on an individual, causing not only the potential of financial losses but also a lot of personal grief.</p>
                </div>
                <div class="my-4">
                    <h3>Cyber Criminals</h3>
                    <p>Who are Cyber Criminals? It can be anyone, but let us discuss some common ones we see in the media all the time:</p>
                    <ul>
                        <li>State-sponsored groups targeting organizations in other countries</li>
                        <li>Hacking Groups out to target companies to make them pay ransom</li>
                        <li>Kids in their rooms doing illegal hacking</li>
                    </ul>
                    <p>Note: Cryptocurrency is money represented in digital form instead of physical. There are many different Cryptocurrencies, some very widespread like Bitcoin, and others smaller and unknown to most people. These currency models rely on strong cryptography and public ledger systems to keep track of transactions and how much currency is on the market.</p>
                </div>
                <div class="my-4">
                    <h3>Catching Cyber Criminals</h3>
                    <p>Cyber Criminals can stay anonymous with trivial means, and typically easy to avoid getting caught. When attackers do get caught, it is often because of mistakes made by the attackers themselves, for example as a result of becoming complacent. There is also a great deal of potential for law-enforcement to use caught cyber criminals to rat out others in the industry.
                        Law enforcement do, however, have many challenges in tracking down cyber-crime. You might see attack traffic coming in from a system residing in UK, and when taking down this system, you realize it was being remotely controlled by e.g. another system in India. Cooperating with law-enforcements across borders, you might be able to get to the system in India, but only to realize it was again remotely controlled through e.g. Pakistan.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Main;

