export default function() {
  var functions = Array.prototype.slice.call(arguments);
  return functions.reduce((f, g) => {
    return function() {
      return f(g.apply(null, arguments));
    };
  });
};
