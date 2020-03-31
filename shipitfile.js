module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)
  
    shipit.initConfig({
      default: {
        deployTo: '/root/node/blog-node',
        repositoryUrl: 'https://github.com/vinyasbj/blog-node.git',
        ignores: ['.git', 'node_modules'],
        keepReleases: 2,
        keepWorkspace: false, // should we remove workspace dir after deploy?
        deleteOnRollback: false
      },
      production: {
        servers: 'root@165.22.212.45',
      },
    })
  }