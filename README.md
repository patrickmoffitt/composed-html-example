

How to Compose Modular HTML Assets in an Electron Application Using Cheerio and jQuery
------------------------------------------------------------------------

Why divide HTML project assets into separate files by layout region or user interface behavior (concerns) ?

> In computer science, [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. -Wikipedia

I built this demonstration application for those of you who've noticed that your project's HTML assets have become large and varied in concern. Dividing up these assets into separate HTML files and composing them again is easy to do with [Cheerio](https://www.npmjs.com/package/cheerio) and jQuery. Once done, your project will be easier to build and maintain since each HTML snippet will have just one concern. In my own projects I tend to divide HTML into UI behaviors or features like forms, reports, tables, and menus. It sometimes also helps to divide HTML by layout region. There's no need to get hung up on exactly how to divide so long as you're being rational and consistent you'll reap the rewards.

Quick Code Tour
---------------

 - The code entry point is in **package.json** under the key "main". The value is "main.js"
 - **main.js** creates a BrowserWindow and loads **index.html**. It also has event handlers that enable keyboard shortcuts for Developer Tools on various platforms. Note that loadURL uses a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to give the source file's location.`` `file://${__dirname}/app/index.html` ``
 - **index.html** loads Bootstrap's CSS in the &lt;head&gt; tag and **renderer.js** after the closing &lt;body&gt; tag. On the web Bootstrap's JavaScript would also load in this location but the Electron way is to load it in **renderer.js** with a require().
 - **renderer.js** loads Cheerio, jQuery, Bootstrap and it's dependency; Tether. Each of the last three are assigned to the window object because this is the web application custom. It's not the Node.js or Electron custom because window is a global. For now we must do it this way or it won't work.
 - The HTML is composed in **renderer.js** by reading each snippet into a variable using fs.readFileSync() and then piecing the DOM together using Cheerio's jQuery-like features.
