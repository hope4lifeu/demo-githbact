module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/hope4lifeu/demo-githbact",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
 }