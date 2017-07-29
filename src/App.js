import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="home" className="site-layout">
          <div className="menu">
            <div className="menu__inner">
              <div className="menu__logo">
                <div id="menu-toggle" className="menu__logo__text util--hide-medium-down">TL</div>
                <div id="home_link" className="menu__logo__text util--show-medium">TL</div>
              </div>
              <div className="menu__items">
                <div id="about_link" className="menu__item menu__item--link">
                  About
                </div>
                <div id="apps_link" className="menu__item menu__item--link">
                  Apps
                </div>
                <div id="writing_link" className="menu__item menu__item--link">
                  Writing
                </div>
                <div className="menu__item menu__item--link">
                  <a href="https://talum.github.io" target="_blank" rel="noopener noreferrer">Tech Blog</a>
                </div>
                <div className="menu__item menu__item--icons">
                  <div className="svg-container">
                    <a href="https://www.twitter.com/tracidini"
                       target="_blank" rel="noopener noreferrer">
                      <svg className="svg__icon svg__icon--fill-white">
                        {/*<use xlink:href="#svg__twitter"/>*/}
                      </svg>
                    </a>
                  </div>
                  <div className="svg-container">
                    <a href="https://www.linkedin.com/in/tracylum"
                       target="_blank" rel="noopener noreferrer">
                      <svg className="svg__icon svg__icon--fill-white">
                        {/* use xlink:href="#svg__linkedin"> */}
                      </svg>
                    </a>
                  </div>
                  <div className="svg-container">
                    <a href="https://www.github.com/talum" target="_blank" rel="noopener noreferrer">
                      <svg className="svg__icon svg__icon--fill-white">
                      {/* <use xlink:href="#svg__github"/> */}
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        <div className="level level--has-background"
          style={{backgroundImage: "url('images/hero-image-tinted.jpg')"}}>
          <div className="level__inner">
            <div className="module module--billboard">
              <div className="heading heading--hero heading--color-white util--text-align-c">
                tracy lum
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="level">
          <div className="level__inner">
            <div className="heading heading--level-2">
              About
            </div>
            <h2 className="heading heading--level-3">
              Just a lil' backstory
            </h2>
          </div>
        </div>

        <div className="level">
          <div className="level__inner">
            <div className="flex-row">
              <div className="flex-row__item flex-row__item--thirds">
                <div className="image-frame image-frame--layered">
                  <img src="images/about.jpg" className="image-frame__image" alt=""/>
                </div>
              </div>
              <div className="flex-row__item flex-row__item--two-thirds">
                <div className="module module--callout">
                  <div className="module__body">
                    <p>Hello! I'm Tracy, a full-stack web developer and
                    occasional writer. I enjoy writing Ruby, JavaScript, and
                    object-oriented CSS,
                    but learning new languages is always fun! Before learning
                    how to code at the Flatiron School, I worked at a
                    publishing house and managed the various operations of a
                    website and podcast network.</p>
                    <p>As far as fun facts go, I like ice cream, coffee, running, Harry Potter, and Downton Abbey. I highly recommend you follow me on Instagram(<a href="https://www.instagram.com/tracidini/" target="_blank" rel="noopener noreferrer">@tracidini</a>) because I mostly post really great pictures of ice cream.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="apps" className="level level--color-grey-light">
          <div className="level__inner">
            <div className="heading heading--level-2">
              Apps
            </div>
            <h2 className="heading heading--level-3">
              Some things I've built
            </h2>
          </div>
        </div>
        <div className="level level--color-grey-light">
          <div className="level__inner level__inner--padding--small">
            <div className="flex-row">
              <div className="flex-row__item flex-row__item--thirds">
                <div className="module module--card">
                  <div className="module__body">
                    <div className="image-frame">
                      <a href="https://learn.co" target="_blank" rel="noopener noreferrer">
                        <img className="image-frame__image" src="images/learn.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="module__footer">
                    <div className="heading">Learn.co</div>
                  </div>
                </div>
              </div>
              <div className="flex-row__item flex-row__item--thirds">
                <div className="module module--card">
                  <div className="module__body">
                    <div className="image-frame">
                      <a href="https://ice-creamery.herokuapp.com"
                         target="_blank" rel="noopener noreferrer">
                        <img className="image-frame__image"
                        src="images/creamery.jpg" alt=""/>
                      </a>
                    </div>
                  </div>
                  <div className="module__footer">
                    <div className="heading">Creamery</div>
                  </div>
                </div>
              </div>
              <div className="flex-row__item flex-row__item--thirds">
                <div className="module module--card">
                  <div className="module__body">
                    <div className="image-frame">
                      <a href="https://the-sourcery.herokuapp.com"
                         target="_blank" rel="noopener noreferrer">
                        <img className="image-frame__image"
                        src="images/sourcery.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="module__footer">
                    <div className="heading">Sourcery</div>
                  </div>
                </div>
              </div>
              <div className="flex-row__item flex-row__item--thirds">
                <div className="module module--card">
                  <div className="module__body">
                    <div className="image-frame">
                      <a href="http://downton-abbey-quips.herokuapp.com/"
                         target="_blank" rel="noopener noreferrer">
                        <img className="image-frame__image"
                        src="images/downton-abbey.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="module__footer">
                    <div className="heading">Downton Abbey Quips</div>
                  </div>
                </div>
              </div>
              <div className="flex-row__item flex-row__item--thirds">
                <div className="module module--card">
                  <div className="module__body">
                    <div className="image-frame">
                      <a href="https://flatiron-follower.herokuapp.com/"
                         target="_blank" rel="noopener noreferrer">
                        <img className="image-frame__image"
                        src="images/flatiron-follower.jpg" alt=""/>
                      </a>
                    </div>
                  </div>
                  <div className="module__footer">
                    <div className="heading">Flatiron Follower</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="writing" className="level">
          <div className="level__inner">
            <div className="heading heading--level-2">
              Writing
            </div>
            <h2 className="heading heading--level-3">
              Some things I've written
            </h2>
          </div>
        </div>
        <div className="level">
          <div className="level__inner">
            <div className="flex-row">
              <div className="flex-row__item flex-row__item--quarters">
                <a href="http://talum.github.io/" target="_blank" rel="noopener noreferrer">
                  <div className="module module--circle">
                    <div className="module__body">
                      <h2 className="heading heading--level-3
                        heading--color-white">Technical Blog</h2>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex-row__item flex-row__item--quarters">
                <a href="https://www.bustle.com/authors/1151-tracy-lum"
                   target="_blank" rel="noopener noreferrer">
                  <div className="module module--circle">
                    <div className="module__body">
                      <h2 className="heading heading--level-3
                        heading--color-white">Bustle</h2>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex-row__item flex-row__item--quarters">
                <a href="http://thoughtcatalog.com/tracy-lum/"
                   target="_blank" rel="noopener noreferrer">
                  <div className="module module--circle">
                    <div className="module__body">
                      <h2 className="heading heading--level-3 heading--color-white">Thought Catalog</h2>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex-row__item flex-row__item--quarters">
                <a href="http://www.tracylum.com/blog/"
                   target="_blank" rel="noopener noreferrer">
                  <div className="module module--circle">
                    <div className="module__body">
                      <h2 className="heading heading--level-3
                        heading--color-white">Regular Blog</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="level level--color-grey">
          <div className="level__inner">
            <div className="flex-row flex-row--top">
              <div className="flex-row__item flex-row__item--halves">
                <div className="module">
                  <div className="module__head">
                    <div className="heading heading--level-3">
                      Contact
                    </div>
                  </div>
                  <p>
                    E-mail me at tracy[dot]a[dot]lum[at]gmail[dot]com if you
                    want to get in touch.
                  </p>
                </div>
              </div>
              <div className="flex-row__item flex-row__item--halves">
                <div className="module">
                  <div className="module__head">
                    <div className="heading heading--level-3">
                      Follow
                    </div>
                  </div>
                  <p>
                    I live on the web. You can find me on these
                    platforms: <a href="https://instagram.com/tracidini" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://twitter.com/tracidini" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://pinterest.com/tracidini" target="_blank" rel="noopener noreferrer">Pinterest</a>, <a href="https://www.linkedin.com/in/tracylum" target="_blank" rel="noopener noreferrer">LinkedIn</a>,<a href="https://www.medium.com/@tracidini" target="_blank" rel="noopener noreferrer"> Medium</a>,<a href="https://github.com/talum" target="_blank" rel="noopener noreferrer"> GitHub</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
