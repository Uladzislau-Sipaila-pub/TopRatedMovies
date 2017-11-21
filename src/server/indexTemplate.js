export default (title, body, styleTags) =>
    `<!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="/css/index.css"/>
        ${styleTags}
    </head>
    <body>
        <div id="root">${body}</div>
        <script src="/js/index.bundle.js"></script>
    </body>
    </html>`;