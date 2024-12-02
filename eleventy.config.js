module.exports = async function(eleventyConfig) {
  return {
    dir: {
      input: "src",      // Input directory
      includes: "_includes", // folder for layouts	
      output: "_site",   // Output directory
    },
	markdownTemplateEngine: "njk", // Enable Nunjucks processing in Markdown
  };
};
