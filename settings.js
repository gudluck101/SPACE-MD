require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAI5sG1uXqsiKUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVUXa+iSBD9L*2qGUFAweQmCyiIAooKopt5aKHBVr6kGwQn*vcN3rlz52F3cpenprpSderUOf0DZDkmaIlaMPkBihLXkKLuSNsCgQlQqihCJeiDEFIIJkBWhOk+urkWZbmRWQg44214MC*xpdfY7a15ENTe3eS6d*k38OyDojolOPhDwd5mqcpnoUDc0LFbojXoYVcX1xtwrrUYmH4+nD2yJOYUz3oDz64ixCXO4llxRikqYbJE7Rri8mvwLfPEXcMr8sMmFxznNtJnq9itQtIbbeoLN1LvdVvgGeLd*GvwG9dRD8HFGlHDX61Y054PWFsTT7V6yEnOZWKTNlrCIHF+f4dPcJyh0AhRRjFtv8w7s16tZ5cpTvjzhlPwumKPLjswCmk*9TUDs7hRhkVdi3BufQ34NZxW0aW51sulvRO9ExexCZ7dFhBiTmpINOZplhMZD7Pr78DX5YdWrv+Hd6RHS8+5tk2tJ05GGSeahpqptN5oyshl0Oy1Falkcylr5GvwYaAxGreul+3I49Yaf6p3biiEF*nRjJWzzMRVZtc2ytKz*Akf0qr8E0qF2w0GC8PPsH5f8P61CoY0PDAp9M2FEN1vkbeXlGIvnm5uyhK8Q*aq5nv3VBDHu7pVtrOjV0zXweMWaHsiLEK8FKgiv70muqLWCMGEffZBiWJMaAkpzrMuJgz7AIb1FgUloi92Qc*sBUK+xVtPz+TqLBDbk2wsedViJfYkykz1yJ6bxyBey2+gD4oyDxAhKJxjQvOytRAhMEYETP7+3gcZauj73rpuHNsHES4JdbOqSHIYfiz14xIGQV5ldNtmgdodUAkmzGcYUYqzmHQ0VhksgzOukXqGlIBJBBOCfg2IShSCCS0r9Mu0ah52vC*EkcQ6uynog*S1DxyCCRhyvMjyw9F4yI35iSD9Rb7du7qwKL5liII+SF55I4mXRJ7nGJGRRl1eF37+AtjVCxGFOCFgAlTrdI5vojKz8a62XF2XD7GsxjL4HOhDGO*Mi6fBxTkuzB5zlGJb8HkzFU0lvMHLTr5kTknzYXNxameXiG**UgRMgBBZR4qNh1upi42183W5ghvr5MdwPU+E8HbcpqOhv6jZnZmeoGX68xs+8*I9rNLmcJkdCmYp1SvHS47hwd9rxmaFl8r9resWohoH6PdmenofBomyEmN2tmBMOFW12ypzbIL1+eExlTZG7misyJi8ezV8sXUMXhRaz9LLpRDUHrws3bX92M9XUuDkC2u8rhNjGr9L9mWZ5OdThV9q6lbV*UYYvZyfwW6BX1jdO*JOYsyz*1uRn4*Jfxky0gc8o2+3A6pHhynyeqpQq3cfpjlzNwRmOYY2OTAmMxMi8Hx+74MigTTKy7R7IrKwzHEI+qDMq06zRhblf2imKoah*nRrAgmVP32wwykiFKYFmLBjYcQx7FgU37PWZV7MITl3LOi8nFadqFu5KLYU0g9bAbn7FIuC5z9QSwECFAMUAAAICACObBtbl6rIilEEAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2348142672374',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 123456789,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 123456789,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
