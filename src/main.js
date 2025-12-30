import './style.css'

import { Navbar } from './components/Navbar'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Labs } from './pages/Labs'
import { History } from './pages/History'

import { PhishingLab } from './labs/phishing'
import { PasswordsLab } from './labs/passwords'
import { MalwareLab } from './labs/malware'

const routes = {
  '/': Home,
  '/labs': Labs,
  '/about': About,
  '/history': History,
  '/labs/phishing': PhishingLab,
  '/labs/passwords': PasswordsLab,
  '/labs/malware': MalwareLab,
}

function render(component, container) {
  const result = component()

  if (typeof result === 'string') {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = result
    container.appendChild(wrapper)
  } else {
    container.appendChild(result)
  }
}

function router() {
  const path = location.hash.replace('#', '') || '/'
  const Page = routes[path] || Home

  const app = document.querySelector('#app')
  app.innerHTML = ''

  render(Navbar, app)
  render(Page, app)
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
