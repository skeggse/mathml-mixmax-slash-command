var mathjax = require('mathjax-node/lib/mj-single');

mathjax.config({
  displayErrors: false
});

mathjax.start();

function render(text, callback) {
  mathjax.typeset({
    math: '$' + text + '$',
    format: 'inline-TeX',
    svg: true
  }, function(data) {
    if (data.errors) {
      // TODO: return more than one error?
      return callback(new Error(data.errors[0]));
    }

    callback(null, data.svg);
  });
}

exports.render = render;
