//git add -A // to stage
//git commit // to commit changes
//git status // git push

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0ab513aac7fa37328f52eed2a601f912'),
    },
  },
});
