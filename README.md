This project is a minimal reproduction test case for [Compression-Webpack-Plugin issue #94](https://github.com/webpack-contrib/compression-webpack-plugin/issues/94).

Use `docker-compose build` to build the container and `docker-compose up` to start the container. The debugger port is exposed on the container at port 9242; you can modify the dockerfile CMD to use `npm run start:debug` to start the container with the debugger enabled.

Compression-webpack-plugin v1.1.3 currently ignores the `include` and `exclude` option parameters. In this test case Webpack is configured to emit an `index.html` file and a `main.js` file, both of which will get passed through the compression plugin. This plugin is configured to ignore the `index.html` file through the use of the `\^index.html\` regex in the exclude paramater, but as can be seen in the final webpack output an `index.html.gz` file will emit.

Modifying `web/package.json` to pull from `stavrus/compression-webpack-plugin#fix-missing-options-dist`, which contains the proposed fix, shows that it resolves the issue.
