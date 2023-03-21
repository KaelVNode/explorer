import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://i.ibb.co/Mcz1ptm/2bddaa466c0ff6d3e9702da90266ae05-360-360.jpg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.kaelvnode.xyz',
      icon: 'https://i.ibb.co/Mcz1ptm/2bddaa466c0ff6d3e9702da90266ae05-360-360.jpg',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'https://explorer.kaelvnode.xyz/',
      icon: 'https://i.ibb.co/Mcz1ptm/2bddaa466c0ff6d3e9702da90266ae05-360-360.jpg',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/Kaelvin21',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'FAQ',
    href: 'https://github.com/ping-pub/explorer/discussions',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/KaelVNode/explorer',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
