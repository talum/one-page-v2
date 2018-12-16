import React, { Component } from 'react'
import Menu from './Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {menuOpen: false}
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <div>
        <Menu menuOpen={this.state.menuOpen} toggleMenu={this.toggleMenu}/>
        <div id='home' className='site-layout'>
          <div className='site-layout__main'>
            <div id='about' className='level'>
              <div className='level__inner'>
              </div>
            </div>

            <div className='level'>
              <div className='level__inner'>
                <div className='flex-row'>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <div className='image-frame image-frame--layered'>
                      <img src='images/about.jpg' className='image-frame__image' alt=''/>
                    </div>
                  </div>
                  <div className='flex-row__item flex-row__item--two-thirds'>
                    <div className='module module--callout'>
                      <div className='module__body'>
                        <p>Hello! I'm Tracy Lum, a full-stack software engineer. I enjoy writing Ruby, JavaScript, Elixir, and CSS. I also write blog posts about all the code I write. You can find my work on <a href='http://talum.github.io/' target='_blank' rel='noopener noreferrer'>my personal blog</a>, the <a href='https://medium.com/flatiron-labs' target='_blank' rel='noopener noreferrer'>Flatiron Labs blog</a>, <a href='https://hackernoon.com/' target='_blank' rel='noopener noreferrer'>Hacker Noon</a>, and others. I have also been known to speak publicly about code, for example, at <a href='https://2018.empirejs.org/#speakers' target='_blank' rel='noopener noreferrer'>EmpireJS 2018</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='apps' className='level level--color-grey-light'>
              <div className='level__inner'>
                <div className='heading heading--level-2'>
                  Apps & Projects
                </div>
                <h2 className='heading heading--level-3'>
                  Some things I've built and worked on
                </h2>
              </div>
            </div>
            <div className='level level--color-grey-light'>
              <div className='level__inner level__inner--padding--small'>
                <div className='flex-row'>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <div className='module module--card'>
                      <div className='module__body'>
                        <div className='image-frame'>
                          <a href='https://learn.co' target='_blank' rel='noopener noreferrer'>
                            <img className='image-frame__image' src='images/learn.jpg' alt='' />
                          </a>
                        </div>
                      </div>
                      <div className='module__footer'>
                        <div className='heading'>Learn.co</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <div className='module module--card'>
                      <div className='module__body'>
                        <div className='image-frame'>
                          <a href='https://ice-creamery.herokuapp.com'
                             target='_blank' rel='noopener noreferrer'>
                            <img className='image-frame__image'
                            src='images/creamery.jpg' alt=''/>
                          </a>
                        </div>
                      </div>
                      <div className='module__footer'>
                        <div className='heading'>Creamery</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <div className='module module--card'>
                      <div className='module__body'>
                        <div className='image-frame'>
                          <a href='https://the-sourcery.herokuapp.com'
                             target='_blank' rel='noopener noreferrer'>
                            <img className='image-frame__image'
                            src='images/sourcery.jpg' alt='' />
                          </a>
                        </div>
                      </div>
                      <div className='module__footer'>
                        <div className='heading'>Sourcery</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <div className='module module--card'>
                      <div className='module__body'>
                        <div className='image-frame'>
                          <a href='http://downton-abbey-quips.herokuapp.com/'
                             target='_blank' rel='noopener noreferrer'>
                            <img className='image-frame__image'
                            src='images/downton-abbey.jpg' alt='' />
                          </a>
                        </div>
                      </div>
                      <div className='module__footer'>
                        <div className='heading'>Downton Abbey Quips</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <div className='module module--card'>
                      <div className='module__body'>
                        <div className='image-frame'>
                          <a href='https://flatiron-follower.herokuapp.com/'
                             target='_blank' rel='noopener noreferrer'>
                            <img className='image-frame__image'
                            src='images/flatiron-follower.jpg' alt=''/>
                          </a>
                        </div>
                      </div>
                      <div className='module__footer'>
                        <div className='heading'>Flatiron Follower</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='writing' className='level'>
              <div className='level__inner'>
                <div className='heading heading--level-2'>
                  Writing
                </div>
                <h2 className='heading heading--level-3'>
                  Some things I've written
                </h2>
              </div>
            </div>
            <div className='level'>
              <div className='level__inner'>
                <div className='flex-row'>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <a href='http://talum.github.io/' target='_blank' rel='noopener noreferrer'>
                      <div className='module module--circle'>
                        <div className='module__body'>
                          <h2 className='heading heading--level-3
                            heading--color-white'>Technical Blog</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <a href='https://www.bustle.com/authors/1151-tracy-lum'
                       target='_blank' rel='noopener noreferrer'>
                      <div className='module module--circle'>
                        <div className='module__body'>
                          <h2 className='heading heading--level-3
                            heading--color-white'>Bustle</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='flex-row__item flex-row__item--thirds'>
                    <a href='http://thoughtcatalog.com/tracy-lum/'
                       target='_blank' rel='noopener noreferrer'>
                      <div className='module module--circle'>
                        <div className='module__body'>
                          <h2 className='heading heading--level-3 heading--color-white'>Thought Catalog</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='level level--color-grey'>
              <div className='level__inner'>
                <div className='flex-row flex-row--top'>
                  <div className='flex-row__item flex-row__item--halves'>
                    <div className='module'>
                      <div className='module__head'>
                        <div className='heading heading--level-3'>
                          Contact
                        </div>
                      </div>
                      <p>
                        E-mail me at tracy[dot]a[dot]lum[at]gmail[dot]com if you
                        want to get in touch.
                      </p>
                    </div>
                  </div>
                  <div className='flex-row__item flex-row__item--halves'>
                    <div className='module'>
                      <div className='module__head'>
                        <div className='heading heading--level-3'>
                          Follow
                        </div>
                      </div>
                      <p>
                        I live on the web. You can find me on these
                        platforms: <a href='https://instagram.com/tracidini' target='_blank' rel='noopener noreferrer'>Instagram</a>, <a href='https://twitter.com/tracidini' target='_blank' rel='noopener noreferrer'>Twitter</a>, <a href='https://pinterest.com/tracidini' target='_blank' rel='noopener noreferrer'>Pinterest</a>, <a href='https://www.linkedin.com/in/tracylum' target='_blank' rel='noopener noreferrer'>LinkedIn</a>,<a href='https://www.medium.com/@tracidini' target='_blank' rel='noopener noreferrer'> Medium</a>,<a href='https://github.com/talum' target='_blank' rel='noopener noreferrer'> GitHub</a>.
                      </p>
                    </div>
                  </div>
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
