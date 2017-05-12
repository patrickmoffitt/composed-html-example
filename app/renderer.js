'use strict'

const fs = require('fs')
const path = require('path')
const app = require('electron').remote.app
const cheerio = require('cheerio')

window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
window.Bootstrap = require('bootstrap')

// Compose the DOM from separate HTML concerns; each from its own file.
let htmlPath = path.join(app.getAppPath(), 'app', 'html')
let body = fs.readFileSync(path.join(htmlPath, 'body.html'), 'utf8')
let navBar = fs.readFileSync(path.join(htmlPath, 'nav-bar.html'), 'utf8')
let menu = fs.readFileSync(path.join(htmlPath, 'menu.html'), 'utf8')
let dash = fs.readFileSync(path.join(htmlPath, 'dashboard.html'), 'utf8')
let table = fs.readFileSync(path.join(htmlPath, 'lorem-table.html'), 'utf8')

let O = cheerio.load(body)
O('#nav-bar').append(navBar)
O('#menu').append(menu)
O('#dashboard').append(dash)
O('#lorem-table').append(table)

// Pass the DOM from Cheerio to jQuery.
let dom = O.html()
$('body').html(dom)
