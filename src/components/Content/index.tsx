import React from 'react';
import './Content.scss';
import Hidden from '../Hidden';

const Content = () => {
  return (
    <div>
      <Hidden />
      <main>
        <div className="message">Please view this demo on a desktop.</div>
        <div className="content content--fixed">
          <header className="codrops-header">
            <div className="codrops-links">
              <a
                className="codrops-icon codrops-icon--prev"
                href="https://tympanus.net/Development/MorphingPageTransition/"
                title="Previous Demo"
              >
                <svg className="icon icon--arrow">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </a>
              <a
                className="codrops-icon codrops-icon--drop"
                href="https://tympanus.net/codrops/?p=32314"
                title="Back to the article"
              >
                <svg className="icon icon--drop">
                  <use xlinkHref="#icon-drop"></use>
                </svg>
              </a>
            </div>
            <h1 className="codrops-header__title">Organic Shape Morph Ideas</h1>
            <span className="info">
              Recreated from{' '}
              <a href="https://twitter.com/LagierKevin/status/867016744405258240">
                {"Kévin Lagier's design"}
              </a>
            </span>
          </header>
          <a
            className="github"
            href="https://github.com/codrops/ShapeMorphIdeas/"
            title="Find this project on GitHub"
          >
            <svg className="icon icon--github">
              <use xlinkHref="#icon-github"></use>
            </svg>
          </a>
          <nav className="demos">
            <svg className="icon icon--keyboard">
              <use xlinkHref="#icon-keyboard"></use>
            </svg>
            <a className="demo" href="index.html">
              <span>Demo 1</span>
            </a>
            <a className="demo" href="index2.html">
              <span>Demo 2</span>
            </a>
            <a className="demo demo--current" href="index3.html">
              <span>Demo 3</span>
            </a>
            <a className="demo" href="index4.html">
              <span>Demo 4</span>
            </a>
            <a className="demo" href="index5.html">
              <span>Demo 5</span>
            </a>
          </nav>
          <a
            className="pater"
            href="http://go.hackingui.com/JetpackCodrops19092017"
            rel="nofollow"
          >
            <img height="0" width="0" src="http://pixel.watch/q2z3" />
            <div className="pater__img">
              <div className="pater__img-inner"></div>
            </div>
            <h3 className="pater__title">
              Jetpack Professional - the only WordPress plugin you really need
            </h3>
            <p className="pater__description">
              Includes premium themes, business class security, and priority,
              expert support
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Content;
