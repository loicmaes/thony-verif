# Thony Verif

This Discord Bot is used to verify a member and secure your Discord server.  
While a member interact with a button attached to the settlement, a role will be added to his roles list.

## Content

- [Stack used](#stack)
- [How to setup](#setup)
- [How to start](#start)

## <a name="stack"></a>Stack used

I made this Bot using:
- [Node.js](https://nodejs.org/);
- [discord.js](https://discord.js.org/).

## <a name="setup"></a>How to setup

To setup the Bot, you need to update the file called `model.env`...
Follow this steps:
1. Rename the file to `.env`;
2. Fill the pattern:
   1. `TOKEN`: Your application's token (available on the [Discord Developer Portal](https://www.discord.com/developers/applications/));
   2. `ROLE`: The ID of the role which you want to give to the user (more info on the [documentation](https://discord.js.org/#/docs/discord.js/main/class/Role));
   3. `CHANNEL`: The ID of the channel in which you want to send the verification message (more info on the [documentation](https://discord.js.org/#/docs/discord.js/main/class/TextChannel));
   4. `GUILD`: The ID of the guild on which the Bot will be posted (unique for now, but can be updated! More info on the [documentation](https://discord.js.org/#/docs/discord.js/main/class/Guild));
3. Save the file and see you to the next step.

## <a name="start"></a>How to start

```
npm run start
```

---

*Loïc MAES © All rights reserved - **2022***
