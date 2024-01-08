module.exports = {
    // other configurations...
  
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto',
        },
        // Add other rules for handling different file types if needed
      ],
    },
  };