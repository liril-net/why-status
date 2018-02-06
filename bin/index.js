#!/usr/bin/env node
const osLocale = require('os-locale')
const chalk = require('chalk')

const pkg = require('../package.json')
const { query } = require('..')

let [, , code, lang] = process.argv
if (!code) {
  console.log(`Examples: ${chalk.yellow('ws 404 zh')}`)
  process.exit(-1)
}

if (!lang) {
  lang = osLocale.sync().split('_')[0]
}
const message = query(code, lang)

if (message === -1) {
  console.log(
    lang === 'zh'
      ? `😅 我还不知道这个状态码，来 ${chalk.blue(pkg.homepage)} 帮我完善吧`
      : `😅 Sorry I do not know code ${chalk.yellow(
          code
        )}, tell me at ${chalk.blue(pkg.homepage)}`
  )

  process.exit(message)
}

if (message === -2) {
  console.log(
    lang === 'zh'
      ? `😅 我还不知道这个状态码的中文解释，来 ${chalk.blue(
          pkg.homepage
        )} 帮我完善吧`
      : `😅 Sorry I do not know explanation of code ${chalk.yellow(
          code
        )} in language ${chalk.yellow(lang)}, tell me at ${chalk.blue(pkg.homepage)}`
  )

  process.exit(message)
}

const format = message => {
  return message
    .replace(/`([^`]+)`/g, chalk.blue('$1'))
    .replace(/\*([^*]+)\*/g, chalk.yellow('$1'))
}

console.log(chalk.yellow(message.brief) + '\n')
console.log(format(message.description))
