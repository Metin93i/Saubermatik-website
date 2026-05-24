/** PM2-Konfiguration für Saubermatik Next.js auf dem Hostinger VPS. */
module.exports = {
  apps: [
    {
      name: "saubermatik-web",
      script: "npm",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
