import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { LoreConsumer } from './components/LoreContext'

import Home from './components/Home'
import Characters from './components/Characters'
import Monsters from './components/Monsters'
import Quests from './components/Quests'

function App(props) {
    return (
        <LoreConsumer>
            {context => (  
                <div>
                    <Link className='home-btn' to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/characters'>
                        <button className='char-btn' onClick={() => context.getLore(`characters`)}>Characters</button>
                    </Link>
                    <Link to='/monsters'>
                        <button className='monst-btn' onClick={() => context.getLore(`creatures`)}>Monsters</button>
                    </Link>
                    <Link to='/quests'>
                        <button className='quest-btn' onClick={() => context.getLore(`quests`)}>Quests</button>
                    </Link>

                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route path='/characters'>
                            <div className='char-cont'>
                                <Characters />
                            </div>
                        </Route>

                        <Route path='/monsters'>
                            <div className='monst-cont'>
                                <Monsters />
                            </div>
                        </Route>

                        <Route path='/quests'>
                            <div className='quest-cont'>
                                <Quests />
                            </div>
                        </Route>
                    </Switch>
                </div>
            )}
        </LoreConsumer>
    )
}

export default App