const AmpOptimizer = require('@ampproject/toolbox-optimizer');

const ampOptimizer = AmpOptimizer.create();

const originalHtml = `
<!doctype html>
<html ⚡>
<head>
<meta charset="utf-8">
    <title>amp-script</title>
    <link rel="canonical" href="self.html">
    <meta name="viewport" content="width=device-width">
    <style amp-boilerplate>
      body {
        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      }
      @-webkit-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-moz-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-ms-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-o-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
    </style>
    <noscript><style amp-boilerplate>
        body {
          -webkit-animation: none;
          -moz-animation: none;
          -ms-animation: none;
          animation: none;
        }
      </style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script>

<title>amp-script / 8</title>
<style amp-custom>
      .sample {
        font-family: 'Noto Sans', sans-serif;
        font-size: 16px;
        padding: 8px;
      }

      .sample button {
        background-color: #005af0;
        font-weight: 700;
        color: white;
        border: none;
        outline: none;
        border-radius: 12px;
        padding: 8px 16px;
        margin: 8px 0;
      }

      .sample button[disabled] {
        background-color: #ccc;
        color: #666;
      }

      #validated-input {
        height: 26px;
        width: 225px;
        padding: 6px;
        box-sizing: border-box;
      }

      .answer-text {
        color: #555;
        font-weight: bold;
      }

      #translated-greeting {
        margin: 0;
        padding-left: 4px;
        color: #555;
      }

      .fruit-button {
        position: relative;
        top: -60px;
      }

      #carousel-sample p {
        margin-left: 16px;
      }

      #carousel-button {
        top: -100px;
      }

      #live-blog-start {
        margin-top: 0;
      }

      #live-blog-area {
        border: 2px solid #ccc;
        height: 150px;
        overflow-y: scroll;
      }

      #live-blog-area .time {
        color: #666;
        font-weight: bold;
      }

</style>
<meta name="robots" content="noindex, nofollow">
</head>
<body>

    <div>
      <amp-script layout="container" script="hello-world" class="sample">
        <button id="hello-inline">Say hello!</button>
      </amp-script>

      <script id="hello-world" type="text/plain" target="amp-script">
      
      </script>
    </div>
</body>
</html>`;

ampOptimizer.transformHtml(originalHtml).then((optimizedHtml) => {
  console.log(optimizedHtml);
});